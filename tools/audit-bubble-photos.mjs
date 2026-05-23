// Walk globe.html, extract every Wikipedia article slug used by the
// bubble-photo system, hit the en + fr Wikipedia REST API for each,
// and print a sorted list of slugs that return no lead image (the
// bubble photo silently disappears for those hotspots).
//
//   node tools/audit-bubble-photos.mjs
//
// Output groups misses by where they appear in the file (province
// hotspot vs badge vs landmark vs layer vs country) so we know which
// item.id to repoint for each one.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const HERE = dirname(fileURLToPath(import.meta.url));
const HTML = readFileSync(resolve(HERE, "../pages/globe.html"), "utf8");

// ── 1. Extract every wiki: 'X' or 'id': 'X' inside a *_WIKI* map ───
// We get a list of (sourceLabel, key, slug) tuples per match so we
// can report context.
const results = []; // { source, key, slug }

// PROVINCE_HOTSPOT_WIKI block — every 'id': 'Article' pair inside it
{
  const re = /const PROVINCE_HOTSPOT_WIKI = \{([\s\S]*?)\};/;
  const m = HTML.match(re);
  if (m) {
    const block = m[1];
    const pairRe = /'([^']+)':\s+'([^']+)',/g;
    let pm; while ((pm = pairRe.exec(block))) {
      results.push({ source: "province hotspot", key: pm[1], slug: pm[2] });
    }
  }
}

// BADGE_WIKI_BY_FILE block
{
  const re = /const BADGE_WIKI_BY_FILE = \{([\s\S]*?)\};/;
  const m = HTML.match(re);
  if (m) {
    const block = m[1];
    const pairRe = /'([^']+)':\s+'([^']+)',/g;
    let pm; while ((pm = pairRe.exec(block))) {
      results.push({ source: "badge", key: pm[1], slug: pm[2] });
    }
  }
}

// wikiByLandmarkId + wikiByProvinceId blocks
for (const name of ["wikiByLandmarkId", "wikiByProvinceId"]) {
  const re = new RegExp(`const ${name} = \\{([\\s\\S]*?)\\};`);
  const m = HTML.match(re);
  if (m) {
    const block = m[1];
    const pairRe = /'([^']+)':\s+'([^']+)',/g;
    let pm; while ((pm = pairRe.exec(block))) {
      const source = name === "wikiByLandmarkId" ? "landmark" : "province (top-level)";
      results.push({ source, key: pm[1], slug: pm[2] });
    }
  }
}

// Layer entries: set(LAYER_ARRAY, { 'id': { wiki: 'Article' }, ... })
{
  const setRe = /set\((\w+),\s*\{([\s\S]*?)\}\);/g;
  let sm;
  while ((sm = setRe.exec(HTML))) {
    const layerName = sm[1];
    const block = sm[2];
    const pairRe = /'([^']+)':\s+\{\s*wiki:\s+'([^']+)'/g;
    let pm; while ((pm = pairRe.exec(block))) {
      results.push({ source: `layer:${layerName}`, key: pm[1], slug: pm[2] });
    }
  }
}

// COUNTRIES map — wiki: 'Article'
{
  const re = /const COUNTRIES = \{([\s\S]*?)\n    \};/;
  const m = HTML.match(re);
  if (m) {
    const block = m[1];
    // capture the key + wiki together — keys live a few lines above their wiki
    const entryRe = /\n      ([\w-]+):\s*\{[\s\S]*?wiki:\s+'([^']+)'/g;
    let pm; while ((pm = entryRe.exec(block))) {
      results.push({ source: "country", key: pm[1], slug: pm[2] });
    }
  }
}

// Inline `wiki: 'X'` on DRC_LANDMARKS / etc — fallback for any we missed
{
  const inlineRe = /\bwiki:\s+'([^']+)'/g;
  let pm;
  const known = new Set(results.map((r) => `${r.source}::${r.key}::${r.slug}`));
  while ((pm = inlineRe.exec(HTML))) {
    const slug = pm[1];
    // only push if this slug isn't already in our list at all
    if (!results.some((r) => r.slug === slug)) {
      results.push({ source: "inline", key: "?", slug });
    }
  }
}

console.log(`Parsed ${results.length} (source, key, slug) entries from globe.html.\n`);

// ── 2. Hit Wikipedia REST API in parallel batches ─────────────────
const unique = [...new Set(results.map((r) => r.slug))];
console.log(`Checking ${unique.length} unique Wikipedia slugs…\n`);

async function check(slug) {
  for (const lang of ["en"]) {
    const url = `https://${lang}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(slug)}`;
    try {
      const res = await fetch(url, {
        headers: {
          // Wikipedia REST API rate-limits unidentified bots / clients;
          // a real UA + contact email gets us the full thumbnail data.
          "User-Agent": "palm-leaf-partners-bubble-audit/1.0 (https://palmleafpartners.com; james@palmleafpartners.com)",
          "Accept": "application/json",
        },
      });
      if (!res.ok) {
        if (res.status === 429) await new Promise((r) => setTimeout(r, 1000));
        continue;
      }
      const data = await res.json();
      const src = data?.thumbnail?.source || data?.originalimage?.source;
      if (src) return { slug, ok: true, lang, src };
    } catch (e) {
      // bubble error out so we know if it's network vs content
      // console.error(`  ${slug}: ${e.message}`);
    }
  }
  return { slug, ok: false };
}

const BATCH = 4;
const status = new Map();
for (let i = 0; i < unique.length; i += BATCH) {
  const batch = unique.slice(i, i + BATCH);
  const out = await Promise.all(batch.map(check));
  for (const r of out) status.set(r.slug, r);
  process.stdout.write(`  ${Math.min(i + BATCH, unique.length)} / ${unique.length}\r`);
}
console.log("\n");

// ── 3. Report misses ───────────────────────────────────────────────
const misses = results.filter((r) => !status.get(r.slug)?.ok);
const bySource = new Map();
for (const m of misses) {
  if (!bySource.has(m.source)) bySource.set(m.source, []);
  bySource.get(m.source).push(m);
}

if (misses.length === 0) {
  console.log("✓ Every Wikipedia article in the file returned a lead image.");
} else {
  console.log(`✗ ${misses.length} entries return NO lead image on English Wikipedia:`);
  for (const [source, list] of bySource) {
    console.log(`\n  ${source} (${list.length}):`);
    for (const e of list) console.log(`    ${e.key.padEnd(28)} → ${e.slug}`);
  }
}

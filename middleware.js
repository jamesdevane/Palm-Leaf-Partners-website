// ════════════════════════════════════════════════════════════════════
// Vercel Edge Middleware — HTTP Basic Auth gate for the PRIVATE Mboka
// in-engine showcase at /pages/mboka/showcase  (file: pages/mboka/showcase.html).
// ────────────────────────────────────────────────────────────────────
// Scope: ONLY the private showcase directory. The PUBLIC marketing page
// at /pages/mboka  (file: pages/mboka.html) is NOT gated and stays fully
// public. The rest of palmleafpartners.com is public too. The shared
// media under /assets is NOT gated (not sensitive, and gating it would
// break the long-lived immutable caching the rest of the site relies on).
//
// IMPORTANT — public vs private path (no routing conflict):
//   • /pages/mboka            → PUBLIC  (pages/mboka.html, cleanUrls)        → NOT gated
//   • /pages/mboka/showcase   → PRIVATE (pages/mboka/showcase.html)          → gated
//   • /pages/mboka/...        → PRIVATE (anything nested beneath the dir)    → gated
// The private page is a DISTINCT sub-path so it never collides with the
// public /pages/mboka clean URL (a directory index.html would have — both
// resolve to /pages/mboka under cleanUrls, which Vercel can't disambiguate).
//
// Password source (this repo is PUBLIC — never commit the plaintext):
//   • Primary:  the MBOKA_PAGE_PASSWORD environment variable (Vercel →
//     Project → Settings → Environment Variables). If set, it wins.
//   • Fallback: a baked-in SHA-256 HASH of the agreed preview password,
//     so the gate works on deploy without any dashboard step. Only the
//     hash is in the repo — the plaintext is not recoverable from it
//     (beyond a brute force, which is acceptable for a beta preview gate).
// If you want a different password with no plaintext-in-repo: set the env
// var (it overrides the hash). Username: any (suggested "mboka"); only the
// password is checked.
// ════════════════════════════════════════════════════════════════════

// SHA-256 hex of the agreed preview password. (Plaintext intentionally NOT here.)
const EXPECTED_HASH = '31cbfdd56ca883a2e8afb5aef335135591d18c3a69ce0a9bd61eacb8422f431c';

export const config = {
  // Gate ONLY the private showcase directory:
  //   '/pages/mboka/'        → the dir (and /pages/mboka/showcase beneath it)
  //   '/pages/mboka/:path*'  → anything nested beneath it (e.g. /showcase)
  // NOTE the trailing slash — '/pages/mboka' (no slash, the PUBLIC page)
  // and '/pages/mboka.html' are intentionally NOT listed and never matched.
  matcher: ['/pages/mboka/', '/pages/mboka/:path*'],
};

// Runtime guard (defence-in-depth): the request must target the private
// directory. The public page ('/pages/mboka' or '/pages/mboka.html', no
// trailing slash) is explicitly excluded so it can never be gated.
function isPrivatePath(pathname) {
  if (pathname === '/pages/mboka' || pathname === '/pages/mboka.html') {
    return false; // PUBLIC page — never gate.
  }
  return pathname === '/pages/mboka/' || pathname.startsWith('/pages/mboka/');
}

function unauthorized() {
  return new Response('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Mboka - Private Preview", charset="UTF-8"',
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

// Timing-safe-ish string comparison (constant time over the longer input).
function safeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;
  const len = Math.max(a.length, b.length);
  let diff = a.length ^ b.length;
  for (let i = 0; i < len; i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}

// SHA-256 → lowercase hex (Web Crypto is available in the Vercel Edge runtime).
async function sha256hex(input) {
  const data = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export default async function middleware(request) {
  // Defence-in-depth: only the private showcase directory is ever gated.
  const pathname = new URL(request.url).pathname;
  if (!isPrivatePath(pathname)) {
    return undefined;
  }

  // The env var (if set) overrides the baked-in hash; hash it for comparison.
  const envPw = process.env.MBOKA_PAGE_PASSWORD;
  const expectedHash = envPw ? await sha256hex(envPw) : EXPECTED_HASH;

  const header = request.headers.get('authorization') || '';
  if (!header.toLowerCase().startsWith('basic ')) {
    return unauthorized();
  }

  let decoded = '';
  try {
    decoded = atob(header.slice(6).trim());
  } catch (_e) {
    return unauthorized();
  }

  // Format is "username:password" — username ignored, only the password
  // (everything after the first colon) is validated.
  const sep = decoded.indexOf(':');
  if (sep < 0) {
    return unauthorized();
  }
  const password = decoded.slice(sep + 1);

  const providedHash = await sha256hex(password);
  if (!safeEqual(providedHash, expectedHash)) {
    return unauthorized();
  }

  // Authenticated — let the request continue to the static page.
  return undefined;
}

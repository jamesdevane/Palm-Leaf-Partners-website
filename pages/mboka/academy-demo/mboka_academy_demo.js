/* ============================================================
 * Mboka Academy — FUNDING DEMO (standalone)
 *   Menu (Subject x Tier) -> Lesson player -> Interactive quiz -> Certificate.
 *   Self-contained. Loads authored decks + quizzes from:
 *     ../_sculpt/eddie_check/edu_proto/demo/<topic>/<tier>/{deck.json, quiz.json}
 *   Quiz/cert pattern adapted from script_studio/edu_demo.js (pick-the-answer,
 *   wrong -> feedback + retry + NO cert, all-correct -> unique-id certificate).
 * ============================================================ */
"use strict";

const DECK_BASE = "./demo";
// Per-slide animation clips (Manim / vetted CC0) live here. A deck slide's
// `anim` field is a path under this base, e.g. "solar/pv_effect.mp4".
const ANIM_BASE = "./anim";

const SUBJECTS = [
  { key: "solar",     label: "Solar Power",      glyph: "sun",
    blurb: "Sunlight into clean electricity — panels, inverters, batteries, and the honest catch: the dead-panel e-waste story." },
  { key: "generator", label: "Diesel Generator", glyph: "gear",
    blurb: "Burning fuel to make power on demand — engine, alternator, trade-offs." },
];

const TIERS = [
  { key: "core",     label: "Core",     band: "K–5",                 theme: "t-core",
    desc: "The big picture in simple words. No math." },
  { key: "standard", label: "Standard", band: "6–8",                 theme: "t-standard",
    desc: "How it works + basic numbers (watts), DC vs AC." },
  { key: "deep",     label: "Deep",     band: "9–12",                theme: "t-deep",
    desc: "Real math (V×A, sizing), the physics, economics." },
  { key: "advanced", label: "Advanced", band: "College / Vocational",theme: "t-advanced",
    desc: "System design, deeper physics, full engineering economics." },
];

/* ---- state ---- */
let cur = { topic: null, tier: null, deck: null, quiz: null, dir: "" };
let slides = [];
let i = 0;
let playing = false;
let autoTimer = null;
let loadToken = 0;
const AUTO_MS = 6500;          // calm auto-advance per slide (slides-only mode)
let curLang = "en";            // selected speech/slide language (en/fr/zh/sw; ln = coming soon)
const SESSION_CB = Date.now(); // per-page-load cache-bust for audio (so a reload always pulls fresh clips)

/* ---- language selector (EN/FR/ZH/SW real, LN coming soon) ---- */
const LANGS = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "zh", label: "中文" },
  { code: "sw", label: "Kiswahili" },
  { code: "ln", label: "Lingala", soon: true },
];
function langLabel(code) { const l = LANGS.find((x) => x.code === code); return l ? l.label : code; }
function langNote(msg) {
  const n = document.getElementById("lang-note");
  if (n) { n.textContent = msg || ""; n.style.display = msg ? "block" : "none"; }
}
function renderLangBar() {
  const bar = document.getElementById("lang-bar");
  if (!bar) return;
  bar.innerHTML = '<span class="lang-bar-cap">Language</span>' + LANGS.map((l) =>
    '<button class="lang-btn' + (l.code === curLang ? " on" : "") + (l.soon ? " soon" : "") +
    '" data-lang="' + l.code + '"' + (l.soon ? ' title="voice coming soon"' : "") + ">" +
    esc(l.label) + (l.soon ? ' <span class="soon-tag">soon</span>' : "") + "</button>"
  ).join("");
  bar.querySelectorAll(".lang-btn").forEach((b) => {
    b.onclick = () => {
      const code = b.dataset.lang;
      const l = LANGS.find((x) => x.code === code);
      if (l && l.soon) { langNote(l.label + " — voice coming soon."); return; }
      curLang = code; renderLangBar();
      if (cur.topic && cur.tier) launchLesson(cur.topic, cur.tier, code);
    };
  });
}

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

/* ============================================================
 *  MENU
 * ============================================================ */
function buildMenu() {
  const host = $("menu-grid");
  let html = "";
  SUBJECTS.forEach((s) => {
    html += '<section class="subject-col">';
    html += '<div class="subject-head">' + svgGlyph(s.glyph) +
            '<div><h2>' + esc(s.label) + '</h2><p>' + esc(s.blurb) + '</p></div></div>';
    html += '<div class="tier-row">';
    TIERS.forEach((t) => {
      html += '<button class="tier-card ' + t.theme + '" ' +
              'data-topic="' + s.key + '" data-tier="' + t.key + '">' +
              '<span class="tier-badge">' + esc(t.label) + '</span>' +
              '<span class="tier-band">' + esc(t.band) + '</span>' +
              '<span class="tier-desc">' + esc(t.desc) + '</span>' +
              '<span class="tier-go">Launch lesson ▸</span>' +
              '</button>';
    });
    html += '</div></section>';
  });
  host.innerHTML = html;
  host.querySelectorAll(".tier-card").forEach((b) => {
    b.onclick = () => launchLesson(b.dataset.topic, b.dataset.tier);
  });
}

function svgGlyph(kind) {
  if (kind === "sun") {
    return '<svg class="sglyph" viewBox="0 0 64 64" aria-hidden="true">' +
      '<circle cx="32" cy="32" r="13" fill="currentColor"/>' +
      Array.from({ length: 12 }, (_, k) => {
        const a = (k * Math.PI) / 6;
        const x1 = 32 + Math.cos(a) * 19, y1 = 32 + Math.sin(a) * 19;
        const x2 = 32 + Math.cos(a) * 28, y2 = 32 + Math.sin(a) * 28;
        return '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) +
               '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) +
               '" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>';
      }).join("") + "</svg>";
  }
  // gear
  let pts = "";
  const teeth = 10;
  for (let k = 0; k < teeth * 2; k++) {
    const a = (k * Math.PI) / teeth;
    const r = k % 2 === 0 ? 28 : 20;
    pts += (32 + Math.cos(a) * r).toFixed(1) + "," + (32 + Math.sin(a) * r).toFixed(1) + " ";
  }
  return '<svg class="sglyph" viewBox="0 0 64 64" aria-hidden="true">' +
    '<polygon points="' + pts + '" fill="currentColor"/>' +
    '<circle cx="32" cy="32" r="8" fill="var(--parch)"/></svg>';
}

/* ============================================================
 *  LAUNCH + LOAD LESSON
 * ============================================================ */
async function launchLesson(topic, tier, lang) {
  const myToken = ++loadToken;
  if (lang) curLang = lang;
  const baseDir = DECK_BASE + "/" + topic + "/" + tier + "/";
  const langDir = (curLang && curLang !== "en") ? baseDir + curLang + "/" : baseDir;
  cur = { topic, tier, deck: null, quiz: null, dir: langDir, baseDir: baseDir, lang: curLang };
  // theme class on the player
  const tdef = TIERS.find((t) => t.key === tier);
  $("player").className = "screen " + tdef.theme;
  showScreen("player");
  $("p-title").textContent = "Loading…";
  $("stage-img").style.display = "none";
  $("quiz-panel").style.display = "none";
  $("stage-msg").style.display = "flex";
  $("stage-msg").textContent = "Loading lesson…";

  try {
    let dr = await fetch(cur.dir + "deck.json", { cache: "no-store" });
    if (!dr.ok && curLang !== "en") {
      // this language isn't built yet → graceful fall back to English
      langNote(langLabel(curLang) + " — voice coming soon. Showing English.");
      cur.dir = baseDir; cur.lang = "en";
      dr = await fetch(cur.dir + "deck.json", { cache: "no-store" });
    } else { langNote(""); }
    if (!dr.ok) throw new Error("deck " + dr.status);
    cur.deck = await dr.json();
    const qr = await fetch(cur.dir + "quiz.json", { cache: "no-store" });
    cur.quiz = qr.ok ? await qr.json() : null;
  } catch (e) {
    if (myToken !== loadToken) return;
    $("stage-msg").textContent = "Could not load this lesson (" + e.message + ").";
    return;
  }
  renderLangBar();
  if (myToken !== loadToken) return;

  slides = (cur.deck.slides || []).map((s) => ({
    img: cur.dir + s.img,
    audio: s.audio ? cur.dir + s.audio + "?cb=" + SESSION_CB : "",
    // per-slide animation clip path (relative to the demo's anim folder).
    // deck `anim` is like "solar/pv_effect.mp4" -> resolves under edu_anim/.
    anim: s.anim ? ANIM_BASE + "/" + s.anim : "",
    narr: s.narr || "",
    quiz: !!s.quiz,
  }));
  i = 0; playing = false;
  $("stage-msg").style.display = "none";
  $("stage-img").style.display = "";
  const subj = SUBJECTS.find((s) => s.key === topic);
  $("p-title").innerHTML = svgGlyph(subj.glyph) + " " + esc(subj.label);
  $("p-tier").textContent = tdef.label + " · " + tdef.band;
  show(0, false);
}

/* ============================================================
 *  SLIDE PLAYER
 * ============================================================ */
function show(n, autoplay) {
  if (!slides.length) return;
  stopAuto();
  i = Math.max(0, Math.min(slides.length - 1, n));
  const img = $("stage-img");
  img.style.opacity = "0";
  img.onload = () => { img.style.opacity = "1"; };
  img.src = slides[i].img;
  $("p-count").textContent = "Slide " + (i + 1) + " / " + slides.length;
  // progress dots
  renderDots();
  // per-slide animation clip (only lights up if the file actually exists)
  setupAnim(slides[i].anim);
  // audio (optional — plays slide_N.ogg only if it exists)
  const aud = $("aud");
  // NOTE: setting aud.src = "" resolves to the PAGE URL (truthy) and would make
  // the player try to play the HTML as audio + hang. Clear it properly instead.
  if (slides[i].audio) { aud.src = slides[i].audio; }
  else { aud.removeAttribute("src"); aud.load(); }
  const onQuiz = slides[i].quiz && cur.quiz;

  // nav button states
  $("prev").disabled = i === 0;
  $("next").disabled = i === slides.length - 1;

  if (onQuiz) {
    showQuiz();
    setPlay(false);
  } else {
    $("quiz-panel").style.display = "none";
    if (autoplay) startSlideFlow();
    else setPlay(false);
  }
}

function renderDots() {
  let html = "";
  for (let k = 0; k < slides.length; k++) {
    html += '<span class="pdot' + (k === i ? " on" : "") +
            (slides[k].quiz ? " quiz" : "") + '"></span>';
  }
  $("p-dots").innerHTML = html;
}

/* ---- per-slide ANIMATION slot ----------------------------------------
 * The slide always shows the still PNG. If the slide's deck entry names an
 * `anim` clip AND that file exists, a "▶ Animation" toggle appears; clicking
 * it overlays the looping clip on top of the still. Slides with no clip (or a
 * not-yet-rendered one) just stay as the still — the demo never breaks. */
let animShown = false;
let animToken = 0;          // guards the async existence-probe against slide changes
function setupAnim(src) {
  const vid = $("stage-vid");
  const btn = $("vid-toggle");
  const myToken = ++animToken;
  animShown = false;
  vid.pause();
  vid.style.display = "none";
  vid.removeAttribute("src");
  btn.hidden = true;
  btn.dataset.src = "";
  btn.textContent = "▶ Animation";
  if (!src) return;
  // Probe existence without throwing a visible error: load metadata only.
  const probe = document.createElement("video");
  probe.preload = "metadata";
  probe.muted = true;
  let settled = false;
  const ok = () => {
    if (settled) return; settled = true;
    if (myToken !== animToken) return;     // user moved on — don't un-hide a stale slide's button
    btn.hidden = false;
    btn.dataset.src = src;
  };
  const fail = () => { if (settled) return; settled = true; /* clip not landed yet */ };
  probe.onloadedmetadata = ok;
  probe.onerror = fail;
  // some browsers fire neither for a 404 quickly; give it a short window
  setTimeout(() => { if (!settled) fail(); }, 1500);
  probe.src = src;
}

function toggleAnim() {
  const vid = $("stage-vid");
  const btn = $("vid-toggle");
  const src = btn.dataset.src;
  if (!src) return;
  animShown = !animShown;
  if (animShown) {
    if (vid.getAttribute("src") !== src) vid.src = src;
    vid.style.display = "block";
    vid.currentTime = 0;
    vid.play().catch(() => {});
    btn.textContent = "▦ Slide";
  } else {
    vid.pause();
    vid.style.display = "none";
    btn.textContent = "▶ Animation";
  }
}

/* Auto-advance flow: try to play narration; whether or not audio exists,
 * advance after AUTO_MS (or when audio ends). Calm, hands-off. */
function startSlideFlow() {
  setPlay(true);
  const aud = $("aud");
  let advanced = false;
  const goNext = () => {
    if (advanced) return; advanced = true;
    if (i < slides.length - 1) show(i + 1, true);
    else setPlay(false);
  };
  if (slides[i] && slides[i].audio) {
    // VOICED slide: advance when the NARRATION FINISHES, not on a fixed timer.
    // The excited clips run ~15-34s; a short timer chopped them and the next
    // slide's voice overstepped this one. A long safety timeout only catches a
    // clip whose 'ended' event never fires.
    aud.onended = goNext;
    try { aud.currentTime = 0; } catch (e) {}
    aud.play().catch(() => {});
    const safetyMs = (isFinite(aud.duration) && aud.duration > 0)
      ? (aud.duration * 1000 + 1500) : 60000;
    autoTimer = setTimeout(goNext, safetyMs);
  } else {
    // SILENT slide: calm fixed auto-advance.
    autoTimer = setTimeout(goNext, AUTO_MS);
  }
}

function setPlay(on) {
  playing = on;
  $("play").textContent = on ? "⏸ Pause" : "▶ Play";
  if (!on) stopAuto();
}

function stopAuto() {
  if (autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  const aud = $("aud");
  if (aud) { aud.onended = null; aud.pause(); }
}

function togglePlay() {
  if (slides[i] && slides[i].quiz) return;     // no autoplay on the quiz slide
  if (playing) setPlay(false);
  else startSlideFlow();
}

/* ============================================================
 *  INTERACTIVE QUIZ  (student must answer; cert is gated)
 * ============================================================ */
let quizSel = [];

function showQuiz() {
  stopAuto();
  const quiz = cur.quiz;
  if (!quiz) { $("quiz-panel").style.display = "none"; return; }
  quizSel = quiz.questions.map(() => -1);
  renderQuiz();
}

function renderQuiz() {
  const quiz = cur.quiz;
  const el = $("quiz-panel");
  const total = quiz.questions.length;
  const score = quizSel.filter((sel, qi) => sel === quiz.questions[qi].correct).length;
  const allAnswered = quizSel.every((sel) => sel !== -1);
  const passed = allAnswered && score === total;

  let html = '<div class="quizcard" role="form" aria-label="End of lesson quiz">';
  html += '<div class="quiztop"><span class="qbadge">QUICK QUIZ</span>' +
          '<span class="qscore">Score: ' + score + ' / ' + total + '</span></div>';

  quiz.questions.forEach((q, qi) => {
    const sel = quizSel[qi];
    const answered = sel !== -1;
    html += '<div class="qblock">';
    html += '<div class="qtext">Q' + (qi + 1) + '. ' + esc(q.q) + '</div>';
    html += '<div class="qchoices">';
    q.choices.forEach((c, ci) => {
      let cls = "qchoice";
      if (answered) {
        if (ci === q.correct) cls += " correct";
        else if (ci === sel) cls += " wrong";
        else cls += " dim";
      }
      const letter = String.fromCharCode(97 + ci);
      const mark = answered ? (ci === q.correct ? " ✓" : (ci === sel ? " ✗" : "")) : "";
      html += '<button class="' + cls + '" type="button" ' +
              (answered ? "disabled " : "") +
              'data-q="' + qi + '" data-c="' + ci + '">' +
              '<b>' + letter + ")</b> " + esc(c) +
              '<span class="qmark">' + mark + "</span></button>";
    });
    html += "</div>";
    if (answered) {
      const ok = sel === q.correct;
      html += '<div class="qwhy ' + (ok ? "ok" : "no") + '">' + esc(q.why[sel]) + "</div>";
    }
    html += "</div>";
  });

  html += '<div class="qfoot">';
  if (allAnswered && !passed) {
    html += '<div class="qresult fail">Not quite — review the answers above, then try again.</div>';
    html += '<button class="qretry" type="button" id="quiz-retry">↺ Try again</button>';
  } else if (passed) {
    html += '<div class="qresult win">Passed! You earned your certificate.</div>';
    html += '<button class="qcert" type="button" id="quiz-cert">View Certificate ▸</button>';
  } else {
    html += '<div class="qhint">Answer every question to finish. No certificate until you pass.</div>';
  }
  html += "</div></div>";

  el.innerHTML = html;
  el.style.display = "block";

  el.querySelectorAll(".qchoice").forEach((b) => {
    b.onclick = () => {
      const qi = parseInt(b.dataset.q, 10);
      if (quizSel[qi] !== -1) return;
      quizSel[qi] = parseInt(b.dataset.c, 10);
      renderQuiz();
    };
  });
  const retry = $("quiz-retry");
  if (retry) retry.onclick = () => { quizSel = quiz.questions.map(() => -1); renderQuiz(); };
  const cert = $("quiz-cert");
  if (cert) cert.onclick = () => renderCertificate(quiz);
}

/* Unique cert id: MBOKA-<TOPICTIER>-XXXX-XXXX-X (collision-resistant, demo). */
function makeCertId(code) {
  const A = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const rnd = (n) => {
    let out = "";
    const buf = new Uint32Array(n);
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(buf);
    else for (let k = 0; k < n; k++) buf[k] = Math.floor(Math.random() * 0xffffffff);
    for (let k = 0; k < n; k++) out += A[buf[k] % A.length];
    return out;
  };
  return "MBOKA-" + code + "-" + rnd(4) + "-" + rnd(4) + "-" + rnd(1);
}

function renderCertificate(quiz) {
  const el = $("quiz-panel");
  const id = makeCertId(quiz.certCode);
  const today = new Date().toISOString().slice(0, 10);
  el.innerHTML =
    '<div class="certcard" role="img" aria-label="Certificate of Completion">' +
      '<div class="certbrand">MBOKA ACADEMY</div>' +
      '<div class="certstars">★ ★ ★</div>' +
      '<div class="certtitle">Certificate of Completion<br><span>' + esc(quiz.certTitle) + "</span></div>" +
      '<div class="certunit">' + esc(quiz.certUnit) + "</div>" +
      '<div class="certidbox"><div class="certidlbl">VERIFICATION ID</div>' +
        '<div class="certid" id="cert-id">' + esc(id) + "</div></div>" +
      '<div class="certnote">unique &amp; verifiable — one per learner · issued ' + today + "</div>" +
      '<div class="certfoot">Demo id generated client-side. Production signs &amp; registers ids server-side.</div>' +
      '<div class="certbtns">' +
        '<button class="qretry" type="button" id="cert-back">↺ Back to quiz</button>' +
        '<button class="qcert" type="button" id="cert-menu">⌂ Back to menu</button>' +
      "</div>" +
    "</div>";
  $("cert-back").onclick = () => renderQuiz();
  $("cert-menu").onclick = () => toMenu();
}

/* ============================================================
 *  SCREENS
 * ============================================================ */
function showScreen(which) {
  ["menu", "player"].forEach((s) => {
    $(s).style.display = s === which ? (s === "player" ? "flex" : "block") : "none";
  });
}
function toMenu() {
  stopAuto();
  loadToken++;            // cancel any in-flight load
  slides = []; i = 0;
  showScreen("menu");
}

/* ============================================================
 *  BOOT
 * ============================================================ */
/* Optional deep-link for verification/screenshots:
 *   ?auto=<topic>/<tier>          -> launch lesson at slide 1
 *   ?auto=<topic>/<tier>/<n>      -> launch and jump to slide n (1-based)
 *   ?auto=<topic>/<tier>/quiz     -> launch and jump to the quiz slide
 *   ?auto=<topic>/<tier>/pass     -> launch quiz, answer all correctly, show cert
 * Does NOT change normal UX; only fires when the param is present. */
async function handleAuto() {
  const p = new URLSearchParams(location.search).get("auto");
  if (!p) return;
  const [topic, tier, what] = p.split("/");
  await launchLesson(topic, tier);
  // wait for slides to be ready
  let tries = 0;
  while (!slides.length && tries++ < 60) await new Promise((r) => setTimeout(r, 50));
  if (!slides.length) return;
  if (what === "quiz" || what === "pass") {
    show(slides.length - 1, false);
    if (what === "pass" && cur.quiz) {
      cur.quiz.questions.forEach((q, qi) => { quizSel[qi] = q.correct; });
      renderQuiz();
      const cert = $("quiz-cert");
      if (cert) cert.click();
    }
  } else if (what) {
    const n = parseInt(what, 10);
    if (!isNaN(n)) show(n - 1, false);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  buildMenu();
  renderLangBar();
  showScreen("menu");
  $("prev").onclick = () => show(i - 1, false);
  $("next").onclick = () => show(i + 1, false);
  $("play").onclick = togglePlay;
  $("to-menu").onclick = toMenu;
  $("vid-toggle").onclick = toggleAnim;
  document.addEventListener("keydown", (e) => {
    if ($("player").style.display === "none") return;
    if (e.key === "ArrowRight") show(i + 1, false);
    else if (e.key === "ArrowLeft") show(i - 1, false);
    else if (e.key === "Escape") toMenu();
    else if (e.key === " ") { e.preventDefault(); togglePlay(); }
  });
  handleAuto();
});

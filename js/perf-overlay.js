/* ============================================================
   PALM LEAF PARTNERS — PERFORMANCE DIAGNOSTIC OVERLAY

   Floating real-time dashboard for catching iPad / mobile perf
   issues. Off by default. Enable on any page by adding ?debug=1
   to the URL (or by tapping the brand logo 5 times in a row).
   The setting persists in localStorage so you don't have to
   re-toggle on every page nav during a debugging session.

   Shows live:
   - FPS (current + 1-second average + worst frame this second)
   - DOM node count
   - <img> count + sum of natural width x height (decoded
     bitmap proxy)
   - Number of elements with GPU-promoting CSS (will-change,
     filter, animation, backdrop-filter, transform: 3d)
   - JS heap usage (Chrome / Edge only; iOS Safari hides this)
   - Connection type + downlink (Mbps)
   - Battery level (where available)
   - Viewport size + device pixel ratio
   - Last 3 slow frames (>50ms) with their duration

   Zero impact on regular visitors — the script bails out at the
   top unless the toggle is on.
   ============================================================ */
(function () {
  'use strict';

  const PERF_KEY = 'plp_perf_overlay';
  // ── Enable / disable gates ─────────────────────────────────
  const urlParam = new URLSearchParams(location.search).get('debug');
  if (urlParam === '0') {
    try { localStorage.removeItem(PERF_KEY); } catch {}
  } else if (urlParam === '1') {
    try { localStorage.setItem(PERF_KEY, '1'); } catch {}
  }
  let enabled = false;
  try { enabled = localStorage.getItem(PERF_KEY) === '1'; } catch {}

  // Always wire the 5-tap-logo gesture, even when disabled, so the
  // user can opt in from any page without typing a URL.
  function wireFiveTapToggle() {
    let taps = 0;
    let lastTap = 0;
    document.addEventListener('click', (e) => {
      const logo = e.target.closest('.nav-logo, .navbar-brand, .brand-logo');
      if (!logo) return;
      const now = Date.now();
      if (now - lastTap > 600) taps = 0;
      lastTap = now;
      taps += 1;
      if (taps >= 5) {
        taps = 0;
        const next = localStorage.getItem(PERF_KEY) === '1' ? null : '1';
        if (next) localStorage.setItem(PERF_KEY, '1');
        else localStorage.removeItem(PERF_KEY);
        location.reload();
      }
    }, true);
  }
  wireFiveTapToggle();

  if (!enabled) return;

  // ── Overlay DOM ───────────────────────────────────────────
  const root = document.createElement('div');
  root.id = 'plp-perf-overlay';
  root.innerHTML = `
    <div class="perf-row perf-hdr">
      <span class="perf-title">⚡ perf</span>
      <button class="perf-close" type="button" aria-label="Hide overlay">×</button>
    </div>
    <div class="perf-row" data-metric="fps"></div>
    <div class="perf-row" data-metric="frame"></div>
    <div class="perf-row" data-metric="dom"></div>
    <div class="perf-row" data-metric="imgs"></div>
    <div class="perf-row" data-metric="layers"></div>
    <div class="perf-row" data-metric="mem"></div>
    <div class="perf-row" data-metric="net"></div>
    <div class="perf-row" data-metric="batt"></div>
    <div class="perf-row" data-metric="vp"></div>
    <div class="perf-row" data-metric="touch"></div>
    <div class="perf-row" data-metric="ptr"></div>
    <div class="perf-row" data-metric="click"></div>
    <div class="perf-row perf-slow" data-metric="slow"></div>
  `;
  const css = document.createElement('style');
  css.textContent = `
    #plp-perf-overlay {
      position: fixed;
      bottom: 12px; left: 12px;
      z-index: 99999;
      background: rgba(20, 30, 25, 0.92);
      color: #d4ffec;
      font: 11px/1.35 ui-monospace, SFMono-Regular, Menlo, monospace;
      border: 1px solid rgba(184, 134, 11, 0.55);
      border-radius: 8px;
      padding: 8px 10px 9px;
      min-width: 200px;
      max-width: 260px;
      pointer-events: auto;
      box-shadow: 0 6px 20px rgba(0,0,0,0.45);
      user-select: text;
      -webkit-user-select: text;
    }
    #plp-perf-overlay.compact { min-width: 140px; }
    #plp-perf-overlay .perf-row {
      display: flex;
      justify-content: space-between;
      gap: 0.6rem;
      padding: 1px 0;
    }
    #plp-perf-overlay .perf-row:empty { display: none; }
    #plp-perf-overlay .perf-hdr {
      border-bottom: 1px solid rgba(184,134,11,0.35);
      padding-bottom: 4px;
      margin-bottom: 4px;
      align-items: center;
    }
    #plp-perf-overlay .perf-title {
      font-weight: 700;
      color: #B8860B;
      letter-spacing: 0.06em;
    }
    #plp-perf-overlay .perf-close {
      background: transparent;
      border: none;
      color: rgba(212,255,236,0.7);
      font-size: 16px;
      line-height: 1;
      cursor: pointer;
      padding: 0 4px;
    }
    #plp-perf-overlay .perf-close:hover { color: #B8860B; }
    #plp-perf-overlay .perf-row b {
      color: #fff;
      font-weight: 600;
    }
    #plp-perf-overlay .perf-row.fps-bad b { color: #ff8a73; }
    #plp-perf-overlay .perf-row.fps-warn b { color: #ffd068; }
    #plp-perf-overlay .perf-slow {
      flex-direction: column;
      gap: 0;
      align-items: stretch;
      border-top: 1px dashed rgba(184,134,11,0.35);
      padding-top: 4px;
      margin-top: 3px;
      color: rgba(212,255,236,0.85);
      font-size: 10px;
    }
    @media (max-width: 480px) {
      #plp-perf-overlay { min-width: 160px; max-width: 200px; font-size: 10px; padding: 6px 8px; }
    }
  `;
  document.head.appendChild(css);
  // Defer mounting until <body> exists.
  function mount() {
    if (!document.body) return setTimeout(mount, 16);
    document.body.appendChild(root);
    root.querySelector('.perf-close').addEventListener('click', () => {
      try { localStorage.removeItem(PERF_KEY); } catch {}
      location.reload();
    });
  }
  mount();

  // ── Cell update helpers ────────────────────────────────────
  const cell = (name) => root.querySelector(`[data-metric="${name}"]`);
  function set(name, label, value, cls = '') {
    const el = cell(name);
    if (!el) return;
    el.innerHTML = `<span>${label}</span><b>${value}</b>`;
    el.parentElement && (el.className = `perf-row ${cls}`);
    if (cls) el.className = `perf-row ${cls}`;
    else el.className = 'perf-row';
  }

  // ── FPS counter (sliding 1-second window) ──────────────────
  let frames = 0;
  let lastSec = performance.now();
  let lastFrame = lastSec;
  let worstFrameThisSec = 0;
  const slowFrames = []; // {dur, t} for frames over 50ms

  function tick(now) {
    const delta = now - lastFrame;
    lastFrame = now;
    frames += 1;
    if (delta > worstFrameThisSec) worstFrameThisSec = delta;
    if (delta > 50) {
      slowFrames.unshift({ dur: delta, t: now });
      if (slowFrames.length > 3) slowFrames.length = 3;
    }
    if (now - lastSec >= 1000) {
      const fps = Math.round((frames * 1000) / (now - lastSec));
      const cls = fps < 30 ? 'fps-bad' : fps < 50 ? 'fps-warn' : '';
      set('fps', 'fps', fps, cls);
      set('frame', 'worst frame', `${Math.round(worstFrameThisSec)} ms`);
      frames = 0;
      lastSec = now;
      worstFrameThisSec = 0;
      updateSlowFrames();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function updateSlowFrames() {
    const el = cell('slow');
    if (!el) return;
    if (!slowFrames.length) {
      el.innerHTML = '<span style="color:rgba(212,255,236,0.5)">no slow frames yet</span>';
      return;
    }
    el.innerHTML = '<span style="color:rgba(212,255,236,0.5)">recent &gt;50ms frames:</span>' +
      slowFrames.map((f) => `<span style="color:#ffd068">  ${Math.round(f.dur)} ms</span>`).join('');
  }

  // ── Slower-cadence sample (DOM, images, layers, memory) ────
  function sample() {
    const allNodes = document.getElementsByTagName('*').length;
    set('dom', 'DOM nodes', allNodes);

    const imgs = document.querySelectorAll('img');
    let pixelArea = 0;
    imgs.forEach((img) => {
      // naturalWidth/Height is the source's pixel dimensions
      pixelArea += (img.naturalWidth || 0) * (img.naturalHeight || 0);
    });
    // Rough decoded-RGBA estimate: 4 bytes per source pixel ×
    // (devicePixelRatio² for retina). This is a rough proxy, not
    // an exact figure.
    const dpr = window.devicePixelRatio || 1;
    const decodedMB = (pixelArea * 4 * Math.min(dpr * dpr, 4)) / (1024 * 1024);
    set('imgs', '<img> count', `${imgs.length} (~${decodedMB.toFixed(1)} MB)`);

    // Best-effort GPU-promoting-element count. CSS animations,
    // 3d transforms, filters, will-change, backdrop-filter all
    // typically promote to a separate compositor layer.
    let promoting = 0;
    document.querySelectorAll('*').forEach((el) => {
      const cs = getComputedStyle(el);
      if (cs.willChange && cs.willChange !== 'auto') promoting++;
      else if (cs.animationName && cs.animationName !== 'none') promoting++;
      else if (cs.backdropFilter && cs.backdropFilter !== 'none') promoting++;
      else if (cs.filter && cs.filter !== 'none') promoting++;
      else if (cs.transform && /matrix3d|translate3d|translateZ/.test(cs.transform)) promoting++;
    });
    set('layers', 'GPU layers ~', promoting);

    // Heap memory (Chrome / Edge only)
    if (performance.memory) {
      const used = performance.memory.usedJSHeapSize / (1024 * 1024);
      const limit = performance.memory.jsHeapSizeLimit / (1024 * 1024);
      set('mem', 'JS heap', `${used.toFixed(1)} / ${limit.toFixed(0)} MB`);
    } else {
      set('mem', 'JS heap', '— (Safari hides)');
    }

    // Connection
    const conn = navigator.connection || navigator.webkitConnection || navigator.mozConnection;
    if (conn) {
      const dl = conn.downlink ? `${conn.downlink}Mb/s` : '';
      set('net', 'conn', `${conn.effectiveType || conn.type || '—'} ${dl}`.trim());
    } else {
      set('net', 'conn', '— (Safari hides)');
    }

    set('vp', 'viewport', `${window.innerWidth}×${window.innerHeight} @${dpr}x`);
  }
  sample();
  setInterval(sample, 1000);

  // ── Input event counters (the "is touch even reaching JS" check) ─
  // Every touchstart / pointerdown / click on the document increments
  // a counter. If you tap an element and the touch/ptr count goes up
  // but click doesn't, the event is being captured/stopped somewhere
  // BEFORE it can become a click. If touch/ptr don't even increment,
  // something at the OS or page-overlay level is eating the input.
  let touchCount = 0, ptrCount = 0, clickCount = 0;
  const renderInput = () => {
    set('touch', 'touchstart', touchCount);
    set('ptr', 'pointerdown', ptrCount);
    set('click', 'click', clickCount);
  };
  document.addEventListener('touchstart', () => { touchCount++; renderInput(); }, { capture: true, passive: true });
  document.addEventListener('pointerdown', () => { ptrCount++; renderInput(); }, { capture: true, passive: true });
  document.addEventListener('click', () => { clickCount++; renderInput(); }, { capture: true, passive: true });
  renderInput();

  // Battery (async)
  if (navigator.getBattery) {
    navigator.getBattery().then((b) => {
      const update = () => set('batt', 'battery', `${Math.round(b.level * 100)}%${b.charging ? ' ⚡' : ''}`);
      update();
      b.addEventListener('levelchange', update);
      b.addEventListener('chargingchange', update);
    }).catch(() => set('batt', 'battery', '—'));
  } else {
    set('batt', 'battery', '— (Safari hides)');
  }
})();

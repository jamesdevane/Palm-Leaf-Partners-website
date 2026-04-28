/* ============================================================
   PALM LEAF PARTNERS — SHARED COMPONENTS (Nav + Footer)
   ============================================================ */

function renderNav() {
  const nav = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="../index.html" class="navbar-logo">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="20" stroke="#B8860B" stroke-width="1.5"/>
          <path d="M21 8 C21 8 14 14 14 21 C14 26 17 30 21 32 C25 30 28 26 28 21 C28 14 21 8 21 8Z" fill="#B8860B" opacity="0.9"/>
          <path d="M21 8 C21 8 17 16 19 22 L21 32 L23 22 C25 16 21 8 21 8Z" fill="#1B4332"/>
          <path d="M14 18 C14 18 10 16 9 20 C10 22 14 21 16 20Z" fill="#B8860B" opacity="0.7"/>
          <path d="M28 18 C28 18 32 16 33 20 C32 22 28 21 26 20Z" fill="#B8860B" opacity="0.7"/>
          <path d="M15 14 C15 14 11 11 10 15 C11 17 15 16 17 15Z" fill="#B8860B" opacity="0.5"/>
          <path d="M27 14 C27 14 31 11 32 15 C31 17 27 16 25 15Z" fill="#B8860B" opacity="0.5"/>
        </svg>
        <div class="navbar-logo-text">
          <span class="brand-name">PALM LEAF</span>
          <span class="brand-sub">— PARTNERS —</span>
        </div>
      </a>
      <ul class="navbar-nav">
        <li><a href="../index.html">Home</a></li>
        <li><a href="mapping.html">Mapping</a></li>
        <li><a href="data-center.html">Data Center</a></li>
        <li><a href="call-centers.html">Call Centers</a></li>
        <li><a href="fiber-backbone.html">Fiber Backbone</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="partnership.html">Partnership</a></li>
        <li><a href="contact.html" class="nav-cta">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu">
    <ul>
      <li><a href="../index.html">Home</a></li>
      <li><a href="mapping.html">Mapping</a></li>
      <li><a href="data-center.html">Data Center</a></li>
      <li><a href="call-centers.html">Call Centers</a></li>
      <li><a href="fiber-backbone.html">Fiber Backbone</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="partnership.html">Partnership &amp; Governance</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function renderHomeNav() {
  const nav = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="21" cy="21" r="20" stroke="#B8860B" stroke-width="1.5"/>
          <path d="M21 8 C21 8 14 14 14 21 C14 26 17 30 21 32 C25 30 28 26 28 21 C28 14 21 8 21 8Z" fill="#B8860B" opacity="0.9"/>
          <path d="M21 8 C21 8 17 16 19 22 L21 32 L23 22 C25 16 21 8 21 8Z" fill="#1B4332"/>
          <path d="M14 18 C14 18 10 16 9 20 C10 22 14 21 16 20Z" fill="#B8860B" opacity="0.7"/>
          <path d="M28 18 C28 18 32 16 33 20 C32 22 28 21 26 20Z" fill="#B8860B" opacity="0.7"/>
          <path d="M15 14 C15 14 11 11 10 15 C11 17 15 16 17 15Z" fill="#B8860B" opacity="0.5"/>
          <path d="M27 14 C27 14 31 11 32 15 C31 17 27 16 25 15Z" fill="#B8860B" opacity="0.5"/>
        </svg>
        <div class="navbar-logo-text">
          <span class="brand-name">PALM LEAF</span>
          <span class="brand-sub">— PARTNERS —</span>
        </div>
      </a>
      <ul class="navbar-nav">
        <li><a href="index.html">Home</a></li>
        <li><a href="pages/mapping.html">Mapping</a></li>
        <li><a href="pages/data-center.html">Data Center</a></li>
        <li><a href="pages/call-centers.html">Call Centers</a></li>
        <li><a href="pages/fiber-backbone.html">Fiber Backbone</a></li>
        <li><a href="pages/about.html">About</a></li>
        <li><a href="pages/partnership.html">Partnership</a></li>
        <li><a href="pages/contact.html" class="nav-cta">Contact</a></li>
      </ul>
      <button class="hamburger" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="pages/mapping.html">Mapping</a></li>
      <li><a href="pages/data-center.html">Data Center</a></li>
      <li><a href="pages/call-centers.html">Call Centers</a></li>
      <li><a href="pages/fiber-backbone.html">Fiber Backbone</a></li>
      <li><a href="pages/about.html">About</a></li>
      <li><a href="pages/partnership.html">Partnership &amp; Governance</a></li>
      <li><a href="pages/contact.html">Contact</a></li>
    </ul>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function renderFooter(isHome = false) {
  const base = isHome ? 'pages/' : '';
  const homeBase = isHome ? '' : '../';
  const footer = `
  <section class="sister-brand">
    <div class="sister-brand-inner">
      <div class="sister-brand-item">
        <div class="brand-logo-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="20" stroke="#B8860B" stroke-width="1.5"/>
            <path d="M22 9 C22 9 15 15 15 22 C15 27 18 31 22 33 C26 31 29 27 29 22 C29 15 22 9 22 9Z" fill="#B8860B" opacity="0.9"/>
            <path d="M22 9 C22 9 18 17 20 23 L22 33 L24 23 C26 17 22 9 22 9Z" fill="#1B4332"/>
            <path d="M15 19 C15 19 11 17 10 21 C11 23 15 22 17 21Z" fill="#B8860B" opacity="0.7"/>
            <path d="M29 19 C29 19 33 17 34 21 C33 23 29 22 27 21Z" fill="#B8860B" opacity="0.7"/>
          </svg>
        </div>
        <div class="brand-title">PALM LEAF<br>PARTNERS</div>
        <div class="brand-tagline">Infrastructure · Technology · Investment</div>
      </div>
      <div class="sister-divider">
        <div class="roots-line"></div>
        <div class="roots-text">Shared Roots<br>Shared Purpose</div>
        <div class="roots-line"></div>
      </div>
      <div class="sister-brand-item">
        <div class="brand-logo-wrap">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="20" stroke="#B8860B" stroke-width="1.5"/>
            <path d="M22 8 C18 10 16 14 16 18 C16 22 18 25 22 27 C26 25 28 22 28 18 C28 14 26 10 22 8Z" fill="#1B4332"/>
            <path d="M22 8 L22 27" stroke="#B8860B" stroke-width="1.5"/>
            <path d="M16 30 C16 30 14 28 13 30 C13 32 16 33 18 32Z" fill="#1B4332"/>
            <path d="M28 30 C28 30 30 28 31 30 C31 32 28 33 26 32Z" fill="#1B4332"/>
            <path d="M22 27 L18 32 M22 27 L26 32" stroke="#B8860B" stroke-width="1.2"/>
            <circle cx="16" cy="31" r="3" fill="#B8860B" opacity="0.5"/>
            <circle cx="28" cy="31" r="3" fill="#B8860B" opacity="0.5"/>
            <circle cx="22" cy="33" r="3" fill="#B8860B" opacity="0.5"/>
          </svg>
        </div>
        <div class="brand-title">PALM TREE<br>WOMEN ORGANIZATION</div>
        <div class="brand-tagline">Empowering Women · Transforming Communities</div>
      </div>
    </div>
  </section>

  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-logo">
            <svg width="40" height="40" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="20" stroke="#B8860B" stroke-width="1.5"/>
              <path d="M21 8 C21 8 14 14 14 21 C14 26 17 30 21 32 C25 30 28 26 28 21 C28 14 21 8 21 8Z" fill="#B8860B" opacity="0.9"/>
              <path d="M21 8 C21 8 17 16 19 22 L21 32 L23 22 C25 16 21 8 21 8Z" fill="#1B4332"/>
            </svg>
            <div class="footer-logo-text">
              <span class="brand-name">PALM LEAF PARTNERS</span>
              <span class="brand-sub">Building Systems. Growing Futures.</span>
            </div>
          </div>
          <p>Palm Leaf Partners is a DRC-rooted infrastructure and technology firm building the foundational systems — address mapping, data centers, call centers, and fiber backbone — that the Democratic Republic of Congo needs to grow.</p>
          <p style="font-size:0.78rem; color: rgba(245,240,232,0.4);">Governed under OHADA law · DRC PPP Law 20/018 · SCPT MOU · UPTWB SAS</p>
        </div>
        <div class="footer-col">
          <h5>Projects</h5>
          <ul>
            <li><a href="${base}mapping.html">Address Mapping</a></li>
            <li><a href="${base}data-center.html">Data Center</a></li>
            <li><a href="${base}call-centers.html">Call Centers</a></li>
            <li><a href="${base}fiber-backbone.html">Fiber Backbone</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Company</h5>
          <ul>
            <li><a href="${base}about.html">About Us</a></li>
            <li><a href="${base}partnership.html">Partnership &amp; Governance</a></li>
            <li><a href="${base}contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Legal Framework</h5>
          <ul>
            <li><a href="#">OHADA Law</a></li>
            <li><a href="#">DRC PPP Law 20/018</a></li>
            <li><a href="#">SCPT Partnership</a></li>
            <li><a href="#">UPTWB SAS</a></li>
            <li><a href="#">UPTW USA</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Palm Leaf Partners. All rights reserved. Kinshasa, DRC.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

/* ============================================================
   PALM LEAF PARTNERS — SHARED COMPONENTS (Nav + Footer)
   ============================================================ */

function renderNav() {
  const nav = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="../index.html" class="navbar-logo">
        <img src="../assets/images/plp-logo-nav.png" alt="Palm Leaf Partners" width="42" height="42" style="width:42px;height:42px;object-fit:contain;" />
        <div class="navbar-logo-text">
          <span class="brand-name" data-i18n="nav.brand.name">PALM LEAF</span>
          <span class="brand-sub" data-i18n="nav.brand.sub">— PARTNERS —</span>
        </div>
      </a>
      <ul class="navbar-nav">
        <li><a href="../index.html" data-i18n="nav.home">Home</a></li>
        <li class="nav-dropdown">
          <a href="#" class="nav-dropdown-toggle" data-i18n="nav.projects">Projects <span class="nav-arrow">▾</span></a>
          <ul class="nav-dropdown-menu">
            <li><a href="mapping.html" data-i18n="nav.mapping">Mapping</a></li>
            <li><a href="data-center.html" data-i18n="nav.datacenter">Data Center</a></li>
            <li><a href="call-centers.html" data-i18n="nav.callcenters">Call Centers</a></li>
            <li><a href="fiber-backbone.html" data-i18n="nav.fiber">Fiber Backbone</a></li>
          </ul>
        </li>
        <li><a href="about.html" data-i18n="nav.about">About</a></li>
        <li><a href="partnership.html" data-i18n="nav.partnership">Partnership</a></li>
        <li><a href="contact.html" class="nav-cta" data-i18n="nav.contact">Contact</a></li>
      </ul>
      <div class="lang-toggle" role="group" aria-label="Language selector">
        <button data-lang="en" onclick="I18N.setLang('en')" class="active">EN</button>
        <button data-lang="fr" onclick="I18N.setLang('fr')">FR</button>
      </div>
      <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-nav" role="navigation" aria-label="Mobile navigation">
    <ul>
      <li><a href="../index.html" data-i18n="nav.home">Home</a></li>
      <li><a href="mapping.html" data-i18n="nav.mapping">Mapping</a></li>
      <li><a href="data-center.html" data-i18n="nav.datacenter">Data Center</a></li>
      <li><a href="call-centers.html" data-i18n="nav.callcenters">Call Centers</a></li>
      <li><a href="fiber-backbone.html" data-i18n="nav.fiber">Fiber Backbone</a></li>
      <li><a href="about.html" data-i18n="nav.about">About</a></li>
      <li><a href="partnership.html" data-i18n="nav.partnership">Partnership &amp; Governance</a></li>
      <li><a href="contact.html" data-i18n="nav.contact">Contact</a></li>
    </ul>
    <div class="lang-toggle" style="margin-top:1rem;" role="group" aria-label="Language selector">
      <button data-lang="en" onclick="I18N.setLang('en')" class="active">EN</button>
      <button data-lang="fr" onclick="I18N.setLang('fr')">FR</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function renderHomeNav() {
  const nav = `
  <nav class="navbar">
    <div class="navbar-inner">
      <a href="index.html" class="navbar-logo">
        <img src="assets/images/plp-logo-nav.png" alt="Palm Leaf Partners" width="42" height="42" style="width:42px;height:42px;object-fit:contain;" />
        <div class="navbar-logo-text">
          <span class="brand-name" data-i18n="nav.brand.name">PALM LEAF</span>
          <span class="brand-sub" data-i18n="nav.brand.sub">— PARTNERS —</span>
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
        <li><a href="pages/contact.html" class="nav-cta" data-i18n="nav.contact">Contact</a></li>
      </ul>
      <div class="lang-toggle" role="group" aria-label="Language selector">
        <button data-lang="en" onclick="I18N.setLang('en')" class="active">EN</button>
        <button data-lang="fr" onclick="I18N.setLang('fr')">FR</button>
      </div>
      <button class="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav-home">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobile-nav-home" role="navigation" aria-label="Mobile navigation">
    <ul>
      <li><a href="index.html" data-i18n="nav.home">Home</a></li>
      <li><a href="pages/mapping.html" data-i18n="nav.mapping">Mapping</a></li>
      <li><a href="pages/data-center.html" data-i18n="nav.datacenter">Data Center</a></li>
      <li><a href="pages/call-centers.html" data-i18n="nav.callcenters">Call Centers</a></li>
      <li><a href="pages/fiber-backbone.html" data-i18n="nav.fiber">Fiber Backbone</a></li>
      <li><a href="pages/about.html" data-i18n="nav.about">About</a></li>
      <li><a href="pages/partnership.html" data-i18n="nav.partnership">Partnership &amp; Governance</a></li>
      <li><a href="pages/contact.html" data-i18n="nav.contact">Contact</a></li>
    </ul>
    <div class="lang-toggle" style="margin-top:1rem;" role="group" aria-label="Language selector">
      <button data-lang="en" onclick="I18N.setLang('en')" class="active">EN</button>
      <button data-lang="fr" onclick="I18N.setLang('fr')">FR</button>
    </div>
  </div>`;
  document.body.insertAdjacentHTML('afterbegin', nav);
}

function renderFooter(isHome = false) {
  const base = isHome ? 'pages/' : '';
  const homeBase = isHome ? '' : '../';
  const logoBase = homeBase;
  const footer = `
  <section class="sister-brand">
    <div class="sister-brand-inner">
      <div class="sister-brand-item">
        <div class="brand-logo-wrap" style="background:transparent;border:none;">
          <img src="${logoBase}assets/images/plp-logo-footer.png" alt="Palm Leaf Partners" style="width:80px;height:80px;object-fit:contain;border-radius:50%;" />
        </div>
        <div class="brand-title" data-i18n="nav.brand.name">PALM LEAF<br>PARTNERS</div>
        <div class="brand-tagline" data-i18n="sister.plp.tagline">Infrastructure · Technology · Investment</div>
      </div>
      <div class="sister-divider">
        <div class="roots-line"></div>
        <div class="roots-text" data-i18n="sister.shared">Shared Roots<br>Shared Purpose</div>
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
            <img src="${logoBase}assets/images/plp-logo-footer.png" alt="Palm Leaf Partners" style="width:40px;height:40px;object-fit:contain;border-radius:50%;" />
            <div class="footer-logo-text">
              <span class="brand-name" data-i18n="nav.brand.name">PALM LEAF PARTNERS</span>
              <span class="brand-sub" data-i18n="footer.tagline">Building Systems. Growing Futures.</span>
            </div>
          </div>
          <p data-i18n="footer.desc">Palm Leaf Partners is a DRC-rooted infrastructure and technology firm building the foundational systems — address mapping, data centers, call centers, and fiber backbone — that the Democratic Republic of Congo needs to grow.</p>
          <p style="font-size:0.78rem; color: rgba(245,240,232,0.4);" data-i18n="footer.legal">Governed under OHADA law · DRC PPP Law 20/018 · SCPT MOU · UPTWB SAS</p>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer.projects">Projects</h5>
          <ul>
            <li><a href="${base}mapping.html" data-i18n="footer.projects.mapping">Address Mapping</a></li>
            <li><a href="${base}data-center.html" data-i18n="footer.projects.dc">Data Center</a></li>
            <li><a href="${base}call-centers.html" data-i18n="footer.projects.cc">Call Centers</a></li>
            <li><a href="${base}fiber-backbone.html" data-i18n="footer.projects.fiber">Fiber Backbone</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer.company">Company</h5>
          <ul>
            <li><a href="${base}about.html" data-i18n="footer.company.about">About Us</a></li>
            <li><a href="${base}partnership.html" data-i18n="footer.company.partner">Partnership &amp; Governance</a></li>
            <li><a href="${base}contact.html" data-i18n="footer.company.contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5 data-i18n="footer.legal.title">Legal Framework</h5>
          <ul>
            <li><a href="#" data-i18n="footer.legal.ohada">OHADA Law</a></li>
            <li><a href="#" data-i18n="footer.legal.ppp">DRC PPP Law 20/018</a></li>
            <li><a href="#" data-i18n="footer.legal.scpt">SCPT Partnership</a></li>
            <li><a href="#" data-i18n="footer.legal.uptwb">UPTWB SAS</a></li>
            <li><a href="#" data-i18n="footer.legal.uptw">UPTW USA</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer.copyright">&copy; 2025 Palm Leaf Partners. All rights reserved. Kinshasa, DRC.</p>
        <div class="footer-legal">
          <a href="#" data-i18n="footer.privacy">Privacy Policy</a>
          <a href="#" data-i18n="footer.terms">Terms of Use</a>
        </div>
      </div>
    </div>
  </footer>`;
  document.body.insertAdjacentHTML('beforeend', footer);
}

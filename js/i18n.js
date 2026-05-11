/* ============================================================
   PALM LEAF PARTNERS — FRENCH / ENGLISH i18n ENGINE
   Usage: add data-i18n="key" to any element.
   The engine replaces innerHTML on language switch.
   Language persists via localStorage across all pages.
   ============================================================ */

const translations = {

  /* ── SHARED NAV & FOOTER ── */
  'nav.home':           { en: 'Home',                    fr: 'Accueil' },
  'nav.mapping':        { en: 'Mapping',                 fr: 'Cartographie' },
  'nav.datacenter':     { en: 'Data Center',             fr: 'Centre de Données' },
  'nav.callcenters':    { en: 'Call Centers',            fr: 'Centres d\'Appel' },
  'nav.fiber':          { en: 'Fiber Backbone',          fr: 'Réseau Fibre' },
  'nav.about':          { en: 'About',                   fr: 'À Propos' },
  'nav.partnership':    { en: 'Partnership',             fr: 'Partenariat' },
  'nav.contact':        { en: 'Contact',                 fr: 'Contact' },
  'nav.projects':       { en: 'Projects',                fr: 'Projets' },
  'nav.brand.name':     { en: 'PALM LEAF',               fr: 'PALM LEAF' },
  'nav.brand.sub':      { en: '— PARTNERS —',            fr: '— PARTENAIRES —' },

  'footer.tagline':     { en: 'Building Systems. Growing Futures.', fr: 'Construire des Systèmes. Cultiver l\'Avenir.' },
  'footer.desc':        { en: 'Palm Leaf Partners is a DRC-rooted infrastructure and technology firm building the foundational systems — address mapping, data centers, call centers, and fiber backbone — that the Democratic Republic of Congo needs to grow.', fr: 'Palm Leaf Partners est une entreprise d\'infrastructure et de technologie enracinée en RDC, construisant les systèmes fondamentaux — cartographie d\'adresses, centres de données, centres d\'appel et réseau fibre — dont la République Démocratique du Congo a besoin pour se développer.' },
  'footer.legal':       { en: 'US company · DRC operations under OHADA law · DRC PPP Law 20/018 · SCPT MOU · UPTWB SAS', fr: 'Entreprise américaine · Opérations en RDC sous droit OHADA · Loi PPP RDC 20/018 · MOU SCPT · UPTWB SAS' },
  'footer.projects':    { en: 'Projects',                fr: 'Projets' },
  'footer.company':     { en: 'Company',                 fr: 'Entreprise' },
  'footer.legal.title': { en: 'Legal Framework',        fr: 'Cadre Juridique' },
  'footer.about':       { en: 'About Us',                fr: 'À Propos' },
  'footer.partnership': { en: 'Partnership &amp; Governance', fr: 'Partenariat &amp; Gouvernance' },
  'footer.copyright':   { en: '© 2026 Palm Leaf Partners LLC. All rights reserved.', fr: '© 2026 Palm Leaf Partners LLC. Tous droits réservés.' },
  'footer.privacy':     { en: 'Privacy Policy',          fr: 'Politique de Confidentialité' },
  'footer.terms':       { en: 'Terms of Use',            fr: 'Conditions d\'Utilisation' },
  'sister.shared':      { en: 'Shared Roots<br>Shared Purpose', fr: 'Racines Communes<br>Mission Commune' },
  'sister.plp.tagline': { en: 'Infrastructure · Technology · Investment', fr: 'Infrastructure · Technologie · Investissement' },
  'sister.ptwo.tagline':{ en: 'Empowering Women · Transforming Communities', fr: 'Autonomiser les Femmes · Transformer les Communautés' },

  'trust.label':        { en: 'Governed &amp; Authorized Under', fr: 'Régi et Autorisé Par' },

  /* ── HOME PAGE ── */
  'home.eyebrow':       { en: 'Democratic Republic of Congo', fr: 'République Démocratique du Congo' },
  'home.h1':            { en: 'Building Systems.<br><em>Growing Futures.</em>', fr: 'Construire des Systèmes.<br><em>Cultiver l\'Avenir.</em>' },
  'home.lead':          { en: 'Palm Leaf Partners is a DRC-rooted infrastructure and technology firm constructing the foundational systems — address mapping, data centers, call centers, and fiber backbone — that power a modern nation.', fr: 'Palm Leaf Partners est une entreprise d\'infrastructure et de technologie enracinée en RDC, construisant les systèmes fondamentaux — cartographie d\'adresses, centres de données, centres d\'appel et réseau fibre — qui alimentent une nation moderne.' },
  'home.btn.mission':   { en: 'Our Mission',              fr: 'Notre Mission' },
  'home.btn.explore':   { en: 'Explore Projects',         fr: 'Explorer les Projets' },

  'home.scale.addresses':{ en: 'Addresses Mapped<br>for the First Time', fr: 'Adresses Cartographiées<br>pour la Première Fois' },
  'home.scale.postoffices':{ en: 'Post Offices<br>Connected by Starlink', fr: 'Bureaux de Poste<br>Connectés par Starlink' },
  'home.scale.callcenters':{ en: 'Regional Call Centers<br>Across the DRC', fr: 'Centres d\'Appel Régionaux<br>à Travers la RDC' },
  'home.scale.years':   { en: 'Year Partnership<br>Program', fr: 'Ans de Programme<br>de Partenariat' },

  'home.pillars.eyebrow':{ en: 'Our Four Pillars',        fr: 'Nos Quatre Piliers' },
  'home.pillars.h2':    { en: 'Infrastructure That Connects a Nation', fr: 'Une Infrastructure Qui Connecte une Nation' },
  'home.pillars.desc':  { en: 'Every pillar reinforces the others — together they form a complete national infrastructure ecosystem.', fr: 'Chaque pilier renforce les autres — ensemble, ils forment un écosystème d\'infrastructure nationale complet.' },

  'pillar.growth.name': { en: 'Growth',                   fr: 'Croissance' },
  'pillar.growth.desc': { en: 'Nurturing potential and building for the future — in our projects, our partnerships, and our people.', fr: 'Nourrir le potentiel et construire pour l\'avenir — dans nos projets, nos partenariats et nos équipes.' },
  'pillar.partnership.name': { en: 'Partnership',         fr: 'Partenariat' },
  'pillar.partnership.desc': { en: 'Working together for lasting impact. We build with the DRC, not for it.', fr: 'Travailler ensemble pour un impact durable. Nous construisons avec la RDC, pas pour elle.' },
  'pillar.empowerment.name': { en: 'Empowerment',         fr: 'Autonomisation' },
  'pillar.empowerment.desc': { en: 'Uplifting women and strengthening communities across all 26 provinces.', fr: 'Élever les femmes et renforcer les communautés dans les 26 provinces.' },
  'pillar.drc.name':    { en: 'DRC Proud',                fr: 'Fier de la RDC' },
  'pillar.drc.desc':    { en: 'Rooted in the Congo. Governed under Congolese law. Accountable to the Congolese people.', fr: 'Enraciné au Congo. Régi par le droit congolais. Responsable devant le peuple congolais.' },

  'home.quote':         { en: '"The address map is not just a database — it is the <em>operating system</em> of a modern nation. The call centers run on it. The data center holds it. The fiber carries it."', fr: '"La carte d\'adresses n\'est pas seulement une base de données — c\'est le <em>système d\'exploitation</em> d\'une nation moderne. Les centres d\'appel fonctionnent grâce à elle. Le centre de données la conserve. La fibre la transporte."' },

  'home.projects.eyebrow':{ en: 'Active Projects',        fr: 'Projets Actifs' },
  'home.projects.h2':   { en: 'Where We Are Building',    fr: 'Où Nous Construisons' },

  'home.cta.h2':        { en: 'Ready to Build the Future of the DRC?', fr: 'Prêt à Construire l\'Avenir de la RDC ?' },
  'home.cta.p':         { en: 'Whether you are an investor, a government partner, or an organization aligned with our mission — we want to hear from you.', fr: 'Que vous soyez un investisseur, un partenaire gouvernemental ou une organisation alignée sur notre mission — nous voulons vous entendre.' },
  'home.cta.btn':       { en: 'Get in Touch',             fr: 'Nous Contacter' },

  /* ── MAPPING PAGE ── */
  'map.eyebrow':        { en: 'Project 01 · Phase 1 Active', fr: 'Projet 01 · Phase 1 Active' },
  'map.h1':             { en: 'National Address Mapping', fr: 'Cartographie Nationale des Adresses' },
  'map.lead':           { en: '20 million addresses. Mapped at 95% accuracy. For the first time in DRC history.', fr: '20 millions d\'adresses. Cartographiées à 95% de précision. Pour la première fois dans l\'histoire de la RDC.' },
  'map.breadcrumb':     { en: 'Address Mapping',          fr: 'Cartographie des Adresses' },
  'map.open.eyebrow':   { en: 'The Foundation',           fr: 'Le Fondement' },
  'map.open.h2':        { en: 'A Country That Couldn\'t Find Itself', fr: 'Un Pays Qui Ne Pouvait Pas Se Trouver' },
  'map.beat1.label':    { en: 'We start in orbit.',       fr: 'Nous commençons en orbite.' },
  'map.beat1.h2':       { en: 'Satellite imagery and LiDAR drones give us the canvas.', fr: 'Les images satellites et les drones LiDAR nous donnent la toile.' },
  'map.beat2.label':    { en: 'We finish at the front door.', fr: 'Nous finissons à la porte d\'entrée.' },
  'map.beat2.h2':       { en: 'Three thousand field collectors. Every address. Validated in person.', fr: 'Trois mille collecteurs de terrain. Chaque adresse. Validée en personne.' },
  'map.beat3.label':    { en: 'And the country gets a new map.', fr: 'Et le pays obtient une nouvelle carte.' },
  'map.beat3.h2':       { en: 'A bilingual analytics dashboard. Postal facilities going live. A public address-verification API.', fr: 'Un tableau de bord analytique bilingue. Des installations postales en service. Une API publique de vérification d\'adresses.' },
  'map.lang.eyebrow':   { en: 'Multilingual Program',     fr: 'Programme Multilingue' },
  'map.lang.h2':        { en: 'Six Languages. One Nation.', fr: 'Six Langues. Une Nation.' },
  'map.cta.h2':         { en: 'The Map That Makes Everything Possible', fr: 'La Carte Qui Rend Tout Possible' },
  'map.cta.btn':        { en: 'See Call Centers →',       fr: 'Voir les Centres d\'Appel →' },
  'map.inside':         { en: 'Inside the Build — Technical Details', fr: 'Dans la Construction — Détails Techniques' },

  /* ── DATA CENTER PAGE ── */
  'dc.eyebrow':         { en: 'Project 02 · Phase 2 Development', fr: 'Projet 02 · Phase 2 Développement' },
  'dc.h1':              { en: 'Sovereign Data Center',    fr: 'Centre de Données Souverain' },
  'dc.lead':            { en: 'A two-site sovereign cloud — Kinshasa primary, Lubumbashi disaster-recovery. The DRC\'s data stays in the DRC.', fr: 'Un cloud souverain à deux sites — Kinshasa principal, Lubumbashi reprise après sinistre. Les données de la RDC restent en RDC.' },
  'dc.breadcrumb':      { en: 'Data Center',              fr: 'Centre de Données' },
  'dc.open.eyebrow':    { en: 'Sovereign Infrastructure', fr: 'Infrastructure Souveraine' },
  'dc.open.h2':         { en: 'The DRC\'s Data Must Stay in the DRC', fr: 'Les Données de la RDC Doivent Rester en RDC' },
  'dc.beat1.label':     { en: 'Built for sovereignty.',   fr: 'Construit pour la souveraineté.' },
  'dc.beat1.h2':        { en: 'The DRC\'s most critical data — hosted on Congolese soil, under Congolese law.', fr: 'Les données les plus critiques de la RDC — hébergées sur le sol congolais, sous la loi congolaise.' },
  'dc.beat2.label':     { en: 'Always watching.',         fr: 'Toujours en veille.' },
  'dc.beat2.h2':        { en: 'A Security Operations Center that never sleeps.', fr: 'Un Centre des Opérations de Sécurité qui ne dort jamais.' },
  'dc.beat3.label':     { en: 'Two sites. One nation.',   fr: 'Deux sites. Une nation.' },
  'dc.beat3.h2':        { en: 'Kinshasa primary. Lubumbashi disaster-recovery. No single point of failure for the country.', fr: 'Kinshasa principal. Lubumbashi reprise après sinistre. Aucun point de défaillance unique pour le pays.' },
  'dc.cta.h2':          { en: 'The Backbone of Digital Sovereignty', fr: 'L\'Épine Dorsale de la Souveraineté Numérique' },
  'dc.cta.btn':         { en: 'See the Fiber Backbone →', fr: 'Voir le Réseau Fibre →' },
  'dc.inside':          { en: 'Inside the Build — Technical Specifications', fr: 'Dans la Construction — Spécifications Techniques' },

  /* ── CALL CENTERS PAGE ── */
  'cc.eyebrow':         { en: 'Project 03 · Phase 3 Planned', fr: 'Projet 03 · Phase 3 Planifiée' },
  'cc.h1':              { en: 'Regional Call Centers',    fr: 'Centres d\'Appel Régionaux' },
  'cc.lead':            { en: 'Five to ten regional centers. Every region of the DRC. Six languages. Built on the map that makes precise dispatch possible.', fr: 'Cinq à dix centres régionaux. Chaque région de la RDC. Six langues. Construits sur la carte qui rend possible un dispatch précis.' },
  'cc.breadcrumb':      { en: 'Call Centers',             fr: 'Centres d\'Appel' },
  'cc.banner.h3':       { en: 'Why the Address Map Comes First', fr: 'Pourquoi la Carte d\'Adresses Vient en Premier' },
  'cc.open.eyebrow':    { en: 'The Mission',              fr: 'La Mission' },
  'cc.open.h2':         { en: 'Emergency Services That Know Where You Are', fr: 'Des Services d\'Urgence Qui Savent Où Vous Êtes' },
  'cc.beat1.label':     { en: 'The call comes in.',       fr: 'L\'appel arrive.' },
  'cc.beat1.h2':        { en: 'A citizen dials. The system knows exactly where they are.', fr: 'Un citoyen compose. Le système sait exactement où il se trouve.' },
  'cc.beat2.label':     { en: 'Every region. Every language.', fr: 'Chaque région. Chaque langue.' },
  'cc.beat2.h2':        { en: 'Five to ten centers. Six languages. Every corner of the DRC covered.', fr: 'Cinq à dix centres. Six langues. Chaque coin de la RDC couvert.' },
  'cc.beat3.label':     { en: 'Beyond emergency.',        fr: 'Au-delà de l\'urgence.' },
  'cc.beat3.h2':        { en: 'Citizen services. Government information. Community connection.', fr: 'Services aux citoyens. Informations gouvernementales. Connexion communautaire.' },
  'cc.cta.h2':          { en: 'Precision Dispatch Starts with the Address Map', fr: 'Le Dispatch Précis Commence par la Carte d\'Adresses' },
  'cc.cta.btn':         { en: 'See Address Mapping →',    fr: 'Voir la Cartographie →' },
  'cc.inside':          { en: 'Inside the Build — Center Capabilities', fr: 'Dans la Construction — Capacités des Centres' },

  /* ── FIBER PAGE ── */
  'fb.eyebrow':         { en: 'Project 04 · Phase 2 Development', fr: 'Projet 04 · Phase 2 Développement' },
  'fb.h1':              { en: 'National Fiber Backbone',  fr: 'Réseau Fibre National' },
  'fb.lead':            { en: 'Six cities connected. One hundred remote sites reached. A 25-year partnership that lights up the DRC.', fr: 'Six villes connectées. Cent sites distants atteints. Un partenariat de 25 ans qui illumine la RDC.' },
  'fb.breadcrumb':      { en: 'Fiber Backbone',           fr: 'Réseau Fibre' },
  'fb.open.eyebrow':    { en: 'National Connectivity',    fr: 'Connectivité Nationale' },
  'fb.open.h2':         { en: 'Lighting Up the DRC',      fr: 'Illuminer la RDC' },
  'fb.beat1.label':     { en: 'The arteries of a nation.', fr: 'Les artères d\'une nation.' },
  'fb.beat1.h2':        { en: 'Six cities. One ring. No single point of failure.', fr: 'Six villes. Un anneau. Aucun point de défaillance unique.' },
  'fb.beat2.label':     { en: 'Where fiber ends, Starlink begins.', fr: 'Là où la fibre s\'arrête, Starlink commence.' },
  'fb.beat2.h2':        { en: 'Microwave reach to 100+ remote sites. Starlink for the last mile.', fr: 'Portée micro-ondes vers 100+ sites distants. Starlink pour le dernier kilomètre.' },
  'fb.beat3.label':     { en: 'The network that carries everything.', fr: 'Le réseau qui transporte tout.' },
  'fb.beat3.h2':        { en: 'The address registry. The data center. The call centers. All carried on this backbone.', fr: 'Le registre d\'adresses. Le centre de données. Les centres d\'appel. Tout porté par ce réseau.' },
  'fb.cta.h2':          { en: 'The Network That Connects Everything', fr: 'Le Réseau Qui Connecte Tout' },
  'fb.cta.btn':         { en: 'See the Data Center →',   fr: 'Voir le Centre de Données →' },
  'fb.inside':          { en: 'Inside the Build — Technical Specifications', fr: 'Dans la Construction — Spécifications Techniques' },

  /* ── ABOUT PAGE ── */
  'about.eyebrow':      { en: 'About Palm Leaf Partners', fr: 'À Propos de Palm Leaf Partners' },
  'about.h1':           { en: 'Rooted in the DRC.<br>Building for the Future.', fr: 'Enraciné en RDC.<br>Construire pour l\'Avenir.' },
  'about.lead':         { en: 'We are an infrastructure and technology firm committed to building the foundational systems the Democratic Republic of Congo needs to grow — from the ground up, on Congolese terms.', fr: 'Nous sommes une entreprise d\'infrastructure et de technologie engagée à construire les systèmes fondamentaux dont la République Démocratique du Congo a besoin pour se développer — depuis la base, selon les termes congolais.' },
  'about.breadcrumb':   { en: 'About',                    fr: 'À Propos' },
  'about.mission.eyebrow':{ en: 'Our Mission',            fr: 'Notre Mission' },
  'about.mission.h2':   { en: 'Infrastructure as a Foundation for Sovereignty', fr: 'L\'Infrastructure comme Fondement de la Souveraineté' },
  'about.zola.eyebrow': { en: 'Meet Zola',                fr: 'Rencontrez Zola' },
  'about.zola.h2':      { en: 'The Symbol of Strength, Growth &amp; Partnership', fr: 'Le Symbole de Force, de Croissance et de Partenariat' },
  'about.values.eyebrow':{ en: 'Our Values',              fr: 'Nos Valeurs' },
  'about.values.h2':    { en: 'What We Stand For',        fr: 'Ce Pour Quoi Nous Nous Battons' },
  'about.sister.eyebrow':{ en: 'Brand Family',            fr: 'Famille de Marque' },
  'about.sister.h2':    { en: 'Universal Palm Tree Women Organization', fr: 'Organisation Universelle des Femmes Palm Tree' },
  'about.cta.h2':       { en: 'Join Us in Building the DRC\'s Future', fr: 'Rejoignez-Nous pour Construire l\'Avenir de la RDC' },
  'about.cta.btn':      { en: 'Partnership &amp; Governance →', fr: 'Partenariat &amp; Gouvernance →' },

  /* ── PARTNERSHIP PAGE ── */
  'part.eyebrow':       { en: 'Partnership &amp; Governance', fr: 'Partenariat &amp; Gouvernance' },
  'part.h1':            { en: 'Built on Legitimate Foundations', fr: 'Construit sur des Fondements Légitimes' },
  'part.lead':          { en: 'Palm Leaf Partners, a US company, conducts its DRC operations through UPTWB SAS under a robust legal framework — OHADA law, DRC PPP Law 20/018, and formal MOUs with the DRC\'s national institutions — ensuring every project is authorized, transparent, and accountable.', fr: 'Palm Leaf Partners, entreprise américaine, conduit ses opérations en RDC à travers UPTWB SAS dans un cadre juridique solide — droit OHADA, Loi PPP RDC 20/018, et MOU formels avec les institutions nationales de la RDC — garantissant que chaque projet est autorisé, transparent et responsable.' },
  'part.breadcrumb':    { en: 'Partnership &amp; Governance', fr: 'Partenariat &amp; Gouvernance' },
  'part.legal.eyebrow': { en: 'Legal Framework',          fr: 'Cadre Juridique' },
  'part.legal.h2':      { en: 'Governed by Law. Accountable to the DRC.', fr: 'Régi par la Loi. Responsable devant la RDC.' },
  'part.mou.eyebrow':   { en: 'Memoranda of Understanding', fr: 'Mémorandums d\'Entente' },
  'part.mou.h2':        { en: 'Authorized Programs at National Scale', fr: 'Programmes Autorisés à l\'Échelle Nationale' },
  'part.invest.eyebrow':{ en: 'Investment Opportunities', fr: 'Opportunités d\'Investissement' },
  'part.invest.h2':     { en: 'Partner With Us',          fr: 'Devenez Notre Partenaire' },
  'part.timeline.eyebrow':{ en: '25-Year Program',        fr: 'Programme de 25 Ans' },
  'part.timeline.h2':   { en: 'A Long-Term Commitment',   fr: 'Un Engagement à Long Terme' },
  'part.cta.h2':        { en: 'Ready to Build Together?', fr: 'Prêt à Construire Ensemble ?' },
  'part.cta.btn':       { en: 'Get in Touch',             fr: 'Nous Contacter' },

  /* ── CONTACT PAGE ── */
  'contact.eyebrow':    { en: 'Get in Touch',             fr: 'Nous Contacter' },
  'contact.h1':         { en: 'Let\'s Build Together',    fr: 'Construisons Ensemble' },
  'contact.lead':       { en: 'Whether you are an investor, a government partner, a technology provider, or an organization aligned with our mission — we want to hear from you.', fr: 'Que vous soyez un investisseur, un partenaire gouvernemental, un fournisseur de technologie ou une organisation alignée sur notre mission — nous voulons vous entendre.' },
  'contact.breadcrumb': { en: 'Contact',                  fr: 'Contact' },
  'contact.form.eyebrow':{ en: 'Send a Message',          fr: 'Envoyer un Message' },
  'contact.form.h2':    { en: 'How Can We Help?',         fr: 'Comment Pouvons-Nous Vous Aider ?' },
  'contact.label.first':{ en: 'First Name',               fr: 'Prénom' },
  'contact.label.last': { en: 'Last Name',                fr: 'Nom' },
  'contact.label.email':{ en: 'Email Address',            fr: 'Adresse E-mail' },
  'contact.label.org':  { en: 'Organization',             fr: 'Organisation' },
  'contact.label.subject':{ en: 'Subject',                fr: 'Sujet' },
  'contact.label.message':{ en: 'Message',                fr: 'Message' },
  'contact.btn.send':   { en: 'Send Message',             fr: 'Envoyer le Message' },
  'contact.success':    { en: '✓ Message sent. We\'ll be in touch shortly.', fr: '✓ Message envoyé. Nous vous contacterons bientôt.' },

  /* ── ZOLA GUIDE QUOTES ── */
  'guide.map.1':        { en: '"We see the whole country before we touch a single door. That\'s how you build something that lasts."', fr: '"Nous voyons tout le pays avant de toucher une seule porte. C\'est ainsi qu\'on construit quelque chose qui dure."' },
  'guide.map.2':        { en: '"Every address is a person. Every person deserves to be found — by their family, by their doctor, by emergency services."', fr: '"Chaque adresse est une personne. Chaque personne mérite d\'être trouvée — par sa famille, par son médecin, par les services d\'urgence."' },
  'guide.dc.1':         { en: '"This is not a foreign company\'s server farm. This is the DRC\'s own infrastructure — built here, governed here, serving here."', fr: '"Ce n\'est pas la ferme de serveurs d\'une entreprise étrangère. C\'est l\'infrastructure propre de la RDC — construite ici, gouvernée ici, servant ici."' },
  'guide.dc.2':         { en: '"Two sites means the country never goes dark. That\'s not redundancy — that\'s responsibility."', fr: '"Deux sites signifient que le pays ne s\'éteint jamais. Ce n\'est pas de la redondance — c\'est de la responsabilité."' },
  'guide.cc.1':         { en: '"When someone calls for help, the most important thing is knowing where they are. We built the map so that answer is always ready."', fr: '"Quand quelqu\'un appelle à l\'aide, la chose la plus importante est de savoir où il se trouve. Nous avons construit la carte pour que cette réponse soit toujours prête."' },
  'guide.cc.2':         { en: '"A call center is not just a room full of headsets. It\'s the voice of a government that shows up for its people."', fr: '"Un centre d\'appel n\'est pas seulement une salle pleine de casques. C\'est la voix d\'un gouvernement qui se présente pour son peuple."' },
  'guide.fb.1':         { en: '"A ring means no single break can silence a city. We designed for resilience because the DRC deserves infrastructure that holds."', fr: '"Un anneau signifie qu\'aucune rupture unique ne peut réduire une ville au silence. Nous avons conçu pour la résilience car la RDC mérite une infrastructure solide."' },
  'guide.fb.2':         { en: '"The fiber reaches the cities. The satellites reach everyone else. No community is left behind."', fr: '"La fibre atteint les villes. Les satellites atteignent tous les autres. Aucune communauté n\'est laissée pour compte."' },
  'guide.attr':         { en: 'Zola · Palm Leaf Partners', fr: 'Zola · Palm Leaf Partners' },

  /* ── SHARED SECTION LABELS ── */
  'breadcrumb.home':    { en: 'Home',                     fr: 'Accueil' },
  'inside.build':       { en: 'Inside the Build',         fr: 'Dans la Construction' },
  'callout.btn.contact':{ en: 'Get in Touch',             fr: 'Nous Contacter' },
  'phase.1.active':     { en: 'Phase 1 · Active',         fr: 'Phase 1 · Active' },
  'phase.2.dev':        { en: 'Phase 2 · Development',    fr: 'Phase 2 · Développement' },
  'phase.3.planned':    { en: 'Phase 3 · Planned',        fr: 'Phase 3 · Planifiée' },
};

/* ── Engine ── */
const I18N = {
  currentLang: localStorage.getItem('plp_lang') || 'en',

  t(key) {
    const entry = translations[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['en'] || key;
  },

  setLang(lang) {
    this.currentLang = lang;
    localStorage.setItem('plp_lang', lang);
    this.applyAll();
    this.updateToggle();
    document.documentElement.lang = lang;
  },

  applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation !== key) {
        el.innerHTML = translation;
      }
    });
    // Also handle placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation !== key) el.placeholder = translation;
    });
  },

  updateToggle() {
    const toggles = document.querySelectorAll('.lang-toggle');
    toggles.forEach(toggle => {
      const enBtn = toggle.querySelector('[data-lang="en"]');
      const frBtn = toggle.querySelector('[data-lang="fr"]');
      if (enBtn) enBtn.classList.toggle('active', this.currentLang === 'en');
      if (frBtn) frBtn.classList.toggle('active', this.currentLang === 'fr');
    });
  },

  init() {
    // Apply translations on page load
    document.addEventListener('DOMContentLoaded', () => {
      this.applyAll();
      this.updateToggle();
      document.documentElement.lang = this.currentLang;
    });
    // Also apply immediately if DOM is already ready
    if (document.readyState !== 'loading') {
      this.applyAll();
      this.updateToggle();
      document.documentElement.lang = this.currentLang;
    }
  }
};

I18N.init();

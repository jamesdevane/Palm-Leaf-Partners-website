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
  'nav.mboka':          { en: '🎮 Mboka · The Game',     fr: '🎮 Mboka · Le Jeu' },

  /* ── MBOKA GAME PAGE ── */
  'mboka.preprod':      { en: 'Pre-Production · 3+ Years From Release', fr: 'Pré-Production · 3+ Ans Avant Sortie' },
  'mboka.subtitle':     { en: '<span class="sub-accent">M-Bo-Ka</span> · A Living Regional Sim of the DRC', fr: '<span class="sub-accent">M-Bo-Ka</span> · Un Simulateur Régional Vivant de la RDC' },
  'mboka.tagline':      { en: 'This is the story of how a country survived something almost unsurvivable. And how we\'re helping rebuild it — <em>in real life, and in a game.</em>', fr: 'Voici l\'histoire de comment un pays a survécu à quelque chose de presque insurmontable. Et comment nous l\'aidons à se reconstruire — <em>dans la vraie vie, et dans un jeu.</em>' },

  /* Section: The Real Work */
  'mboka.realwork.eyebrow': { en: 'The Foundation', fr: 'Le Fondement' },
  'mboka.realwork.h2':      { en: 'This is not just a game.', fr: 'Ce n\'est pas qu\'un jeu.' },
  'mboka.realwork.lead':    { en: 'MBOKA is the in-fiction shape of work that is already happening. Palm Leaf Partners is a DRC-rooted infrastructure firm. UPTW — Universal Palm Tree Women — is a real movement of 8,000+ women across 14+ chapters. The 30-year war is real history. The 2025 peace is real. The 8 flagship projects are real plans, in motion.', fr: 'MBOKA est la forme romanesque d\'un travail qui se déroule déjà. Palm Leaf Partners est une entreprise d\'infrastructure enracinée en RDC. UPTW — Universal Palm Tree Women — est un véritable mouvement de plus de 8 000 femmes à travers 14+ chapitres. La guerre de 30 ans est de l\'histoire réelle. La paix de 2025 est réelle. Les 8 projets phares sont de vrais plans, en marche.' },

  'mboka.stat1.label': { en: 'National infrastructure<br>partnership program', fr: 'Programme de partenariat<br>d\'infrastructure nationale' },
  'mboka.stat2.label': { en: 'UPTW women<br>across 14+ chapters worldwide', fr: 'Femmes UPTW<br>à travers 14+ chapitres dans le monde' },
  'mboka.stat3.label': { en: 'War in the DRC<br>that ended in 2025', fr: 'Guerre en RDC<br>qui s\'est terminée en 2025' },
  'mboka.stat4.label': { en: 'Flagship infrastructure<br>projects in motion', fr: 'Projets d\'infrastructure<br>phares en marche' },

  'mboka.proj.mapping':   { en: 'National Address Mapping', fr: 'Cartographie Nationale des Adresses' },
  'mboka.proj.datacenter':{ en: 'Sovereign Data Center', fr: 'Centre de Données Souverain' },
  'mboka.proj.callcenter':{ en: 'Regional Call Centers', fr: 'Centres d\'Appel Régionaux' },
  'mboka.proj.fiber':     { en: 'National Fiber Backbone', fr: 'Réseau Fibre National' },
  'mboka.proj.power':     { en: 'Power Generation', fr: 'Production d\'Énergie' },
  'mboka.proj.agri':      { en: 'Agriculture + Food Security', fr: 'Agriculture + Sécurité Alimentaire' },
  'mboka.proj.fish':      { en: 'Fishery + Cold-Chain', fr: 'Pêche + Chaîne du Froid' },
  'mboka.proj.memorial':  { en: 'Memorial City', fr: 'Ville Mémoriale' },

  /* Section: Council of Sovereignty */
  'mboka.council.eyebrow': { en: 'Real People. Locked In.', fr: 'De Vraies Personnes. Confirmées.' },
  'mboka.council.h2':      { en: 'The <em>Council of Sovereignty</em>', fr: 'Le <em>Conseil de la Souveraineté</em>' },
  'mboka.council.lead':    { en: 'Five real humans + one mythic guide. Each Founder defends one slice of sovereignty against the Hollow King. None can act alone — every major build requires the others first. That interdependence is the heart of the game.', fr: 'Cinq vraies personnes + une guide mythique. Chaque Fondateur défend une part de la souveraineté contre le Roi Creux. Aucun ne peut agir seul — chaque construction majeure nécessite d\'abord les autres. Cette interdépendance est le cœur du jeu.' },

  'mboka.zola.domain':     { en: 'Land · Mythic Guide', fr: 'Terre · Guide Mythique' },
  'mboka.zola.archetype':  { en: '"Walks the forest. Listens to what the land cannot say for itself."', fr: '« Marche dans la forêt. Écoute ce que la terre ne peut dire elle-même. »' },
  'mboka.loredana.domain': { en: 'Spirit · UPTW Global Mother', fr: 'Esprit · Mère Globale UPTW' },
  'mboka.loredana.archetype': { en: '"The first to kneel. The last to leave."', fr: '« La première à s\'agenouiller. La dernière à partir. »' },
  'mboka.melissa.domain':  { en: 'Defender of Truth · The Justiciar', fr: 'Défenseure de la Vérité · La Justicière' },
  'mboka.melissa.archetype': { en: '"Seeks the truth. Speaks the truth. Defends the truth."', fr: '« Cherche la vérité. Dit la vérité. Défend la vérité. »' },
  'mboka.eddie.domain':    { en: 'Infrastructure & Logistics · The Cartographer', fr: 'Infrastructure & Logistique · Le Cartographe' },
  'mboka.eddie.archetype': { en: '"Surveys the world. Lays the foundation. Connects the country."', fr: '« Arpente le monde. Pose les fondations. Connecte le pays. »' },
  'mboka.elie.domain':     { en: 'Operations · Operator-Diplomat', fr: 'Opérations · Opérateur-Diplomate' },
  'mboka.elie.archetype':  { en: '"Makes things actually happen on the ground."', fr: '« Fait en sorte que les choses se réalisent sur le terrain. »' },
  'mboka.nick.domain':     { en: 'Power · The Grid-Builder', fr: 'Énergie · Le Bâtisseur du Réseau' },
  'mboka.nick.archetype':  { en: '"Brings the actual current. Lights the country."', fr: '« Apporte le courant réel. Éclaire le pays. »' },

  /* Section: The World */
  'mboka.world.eyebrow': { en: 'The World We\'re Building', fr: 'Le Monde Que Nous Construisons' },
  'mboka.world.h2':      { en: 'Real terrain. <em>Pixar-grade rendering.</em>', fr: 'Un terrain réel. <em>Un rendu digne de Pixar.</em>' },
  'mboka.world.lead':    { en: 'Below are pre-production concept pieces showing the target aesthetic — real DRC biomes, stylized for a 2.5D engine (Godot 4 + Terrain3D for the Steam release; Phaser for the mobile F2P release). Concept art always lands above what an engine ships; expect the final game to live at ~60–70% of these pieces, with skilled lighting + atmospherics.', fr: 'Ci-dessous, des œuvres conceptuelles de pré-production montrant l\'esthétique cible — de vrais biomes de la RDC, stylisés pour un moteur 2,5D (Godot 4 + Terrain3D pour la version Steam ; Phaser pour la version mobile F2P). Les œuvres conceptuelles dépassent toujours ce que livre un moteur ; attendez-vous à ce que le jeu final atteigne ~60–70% de ces images, avec un éclairage et une atmosphère travaillés.' },
  'mboka.land1.eyebrow': { en: 'Equateur · Salonga National Park', fr: 'Équateur · Parc National de la Salonga' },
  'mboka.land1.h4':      { en: 'The Congo Basin Rainforest', fr: 'La Forêt Tropicale du Bassin du Congo' },
  'mboka.land1.p':       { en: 'Where Zola walks. Where bonobos live. Where the Mother Tree hides somewhere deep — a sacred place the player won\'t reach until late in the journey.', fr: 'Là où Zola marche. Là où vivent les bonobos. Là où l\'Arbre-Mère se cache quelque part en profondeur — un lieu sacré que le joueur n\'atteindra qu\'en fin de parcours.' },
  'mboka.land2.eyebrow': { en: 'Kivu · Eastern Highlands', fr: 'Kivu · Hauts Plateaux de l\'Est' },
  'mboka.land2.h4':      { en: 'The Eastern Highlands', fr: 'Les Hauts Plateaux de l\'Est' },
  'mboka.land2.p':       { en: 'Where the war\'s scars are deepest. Volcanic peaks rise over coffee and tea terraces. Where peace was hardest-won — and where the game\'s hardest moral choices live.', fr: 'Là où les cicatrices de la guerre sont les plus profondes. Des sommets volcaniques surplombent les terrasses de café et de thé. Là où la paix a été la plus difficile à gagner — et où vivent les choix moraux les plus durs du jeu.' },
  'mboka.land3.eyebrow': { en: 'Tshopo · Boyoma Falls', fr: 'Tshopo · Chutes Boyoma' },
  'mboka.land3.h4':      { en: 'The Mighty Congo River', fr: 'Le Puissant Fleuve Congo' },
  'mboka.land3.p':       { en: 'The second-largest river by discharge on Earth. The wooden lattice structures in the channel are <em>Wagenia fish traps</em> — a 1,000-year-old Congolese fishing tradition, still in use today.', fr: 'Le deuxième fleuve par débit sur Terre. Les structures en treillis de bois dans le chenal sont des <em>pièges à poissons Wagenia</em> — une tradition de pêche congolaise vieille de 1 000 ans, encore utilisée aujourd\'hui.' },
  'mboka.world.concept': { en: 'Concept art · Pre-production target aesthetic · Real DRC biomes, in development', fr: 'Œuvres conceptuelles · Esthétique cible de pré-production · De vrais biomes de la RDC, en développement' },

  /* Section: The Teaser */
  'mboka.teaser.eyebrow': { en: 'Watch the Teaser', fr: 'Regardez le Teaser' },
  'mboka.teaser.h2':      { en: 'A first look · <em>50 seconds</em>', fr: 'Un premier aperçu · <em>50 secondes</em>' },
  'mboka.teaser.lead':    { en: 'The Council of Sovereignty\'s six Founders, the world they protect, and the corruption they refuse. Pre-production teaser — narrated by Sekou with a custom African-orchestral score.', fr: 'Les six Fondateurs du Conseil de la Souveraineté, le monde qu\'ils protègent, et la corruption qu\'ils refusent. Teaser de pré-production — narré par Sekou avec une musique africaine-orchestrale originale.' },
  'mboka.teaser.stamp':   { en: 'Pre-Production · Concept Teaser · 50 seconds', fr: 'Pré-Production · Teaser Conceptuel · 50 secondes' },

  /* Section: The Game We're Building */
  'mboka.game.eyebrow': { en: 'The Game', fr: 'Le Jeu' },
  'mboka.game.h2':      { en: 'Build the country. Heal the land. <em>Refuse the easy lie.</em>', fr: 'Construisez le pays. Guérissez la terre. <em>Refusez le mensonge facile.</em>' },
  'mboka.game.lead':    { en: 'Overhead 2.5D regional sim. A 24-hour day/night cycle. Move the Council across provinces; stack their powers in the correct order; build the infrastructure that lets villages stand on their own. Tier-2 sisters join from every UPTW chapter. Eight provinces unlock on a designed progression. The Hollow King is patient — you have to be too.', fr: 'Simulateur régional 2,5D en vue aérienne. Un cycle jour/nuit de 24 heures. Déplacez le Conseil à travers les provinces ; empilez leurs pouvoirs dans le bon ordre ; construisez l\'infrastructure qui permet aux villages de tenir debout. Les sœurs de Niveau 2 rejoignent depuis chaque chapitre UPTW. Huit provinces se débloquent selon une progression conçue. Le Roi Creux est patient — vous devez l\'être aussi.' },

  'mboka.sys.sanctify': { en: 'Sanctify Land', fr: 'Sanctifier la Terre' },
  'mboka.sys.sanctify.p': { en: 'Loredana blesses; corruption can\'t follow.', fr: 'Loredana bénit ; la corruption ne peut suivre.' },
  'mboka.sys.survey':   { en: 'Survey + Map', fr: 'Arpenter + Cartographier' },
  'mboka.sys.survey.p': { en: 'Eddie reveals; nothing builds on unmapped ground.', fr: 'Eddie révèle ; rien ne se construit sur un terrain non cartographié.' },
  'mboka.sys.treaty':   { en: 'Treaty + Law', fr: 'Traité + Loi' },
  'mboka.sys.treaty.p': { en: 'Melissa locks in writing what was promised.', fr: 'Melissa fixe par écrit ce qui a été promis.' },
  'mboka.sys.power':    { en: 'Power the Grid', fr: 'Alimenter le Réseau' },
  'mboka.sys.power.p':  { en: 'Nick electrifies; refining + cold-chain unlock.', fr: 'Nick électrifie ; le raffinage + la chaîne du froid se débloquent.' },
  'mboka.sys.listen':   { en: 'Listen to the Land', fr: 'Écouter la Terre' },
  'mboka.sys.listen.p': { en: 'Zola vetoes builds the ecosystem can\'t carry.', fr: 'Zola oppose son veto aux constructions que l\'écosystème ne peut porter.' },
  'mboka.sys.coord':    { en: 'Ground Coordination', fr: 'Coordination de Terrain' },
  'mboka.sys.coord.p':  { en: 'Dr. Elie gets the buy-in that makes it land.', fr: 'Dr. Elie obtient l\'adhésion qui fait aboutir le projet.' },
  'mboka.sys.mining':   { en: 'Ethical Mining', fr: 'Exploitation Minière Éthique' },
  'mboka.sys.mining.p': { en: 'Defeat the Vein-Born first. Refine in-country.', fr: 'Vaincre d\'abord les Nés-de-Veine. Raffiner sur place.' },
  'mboka.sys.memorial': { en: 'Memorial City', fr: 'Ville Mémoriale' },
  'mboka.sys.memorial.p': { en: 'The endgame crown — the proof that peace held.', fr: 'La couronne de fin de partie — la preuve que la paix a tenu.' },

  'mboka.hollowed.eyebrow': { en: 'The Antagonist', fr: 'L\'Antagoniste' },
  'mboka.hollowed.h3':      { en: 'Something is hollowing the country from inside.', fr: 'Quelque chose creuse le pays de l\'intérieur.' },
  'mboka.hollowed.p':       { en: 'Five named antagonists. Each takes a different part of sovereignty by force — land, spirit, law, infrastructure, operations. Some you\'ll fight. Others you\'ll try to heal. One of them will offer you a deal you\'ll be tempted to take.', fr: 'Cinq antagonistes nommés. Chacun s\'empare par la force d\'une part de la souveraineté — la terre, l\'esprit, la loi, l\'infrastructure, les opérations. Certains, vous les combattrez. D\'autres, vous tenterez de les guérir. L\'un d\'eux vous offrira un marché que vous serez tenté d\'accepter.' },
  'mboka.hollowed.reveal':  { en: 'You\'ll meet them when the time is right.', fr: 'Vous les rencontrerez quand le moment sera venu.' },

  'mboka.wild.eyebrow': { en: 'Zola\'s Bestiary', fr: 'Le Bestiaire de Zola' },
  'mboka.wild.h2':      { en: 'Wild Companions', fr: 'Compagnons Sauvages' },
  'mboka.wild.lead':    { en: 'The DRC\'s real wildlife — accurate to species — serves as Zola\'s allies. Corrupted Hollow Brood, once healed, join her bestiary too. <em>Heal, don\'t kill.</em>', fr: 'La vraie faune de la RDC — fidèle aux espèces — sert d\'alliés à Zola. Une fois guérie, la Couvée Creuse corrompue rejoint aussi son bestiaire. <em>Soigner, ne pas tuer.</em>' },
  'mboka.wild.bonobo.tag':  { en: 'Endemic · Salonga', fr: 'Endémique · Salonga' },
  'mboka.wild.bonobo.h5':   { en: 'The Bonobo', fr: 'Le Bonobo' },
  'mboka.wild.bonobo.p':    { en: 'Found only in the DRC. The "make love not war" great ape — quietly the most peaceful primate species on Earth.', fr: 'Trouvé uniquement en RDC. Le grand singe « faites l\'amour, pas la guerre » — discrètement l\'espèce de primate la plus pacifique sur Terre.' },
  'mboka.wild.okapi.tag':   { en: 'Endemic · Ituri', fr: 'Endémique · Ituri' },
  'mboka.wild.okapi.h5':    { en: 'The Okapi', fr: 'L\'Okapi' },
  'mboka.wild.okapi.p':     { en: 'The DRC\'s national symbol. Half-zebra, half-giraffe, fully unique to the Ituri rainforest.', fr: 'Le symbole national de la RDC. Mi-zèbre, mi-girafe, entièrement unique à la forêt tropicale de l\'Ituri.' },

  /* Section: How We're Building It */
  'mboka.how.eyebrow': { en: 'How', fr: 'Comment' },
  'mboka.how.h2':      { en: 'Built honestly. Built carefully.', fr: 'Construit honnêtement. Construit avec soin.' },
  'mboka.how.lead':    { en: 'A 3-year-plus pre-production. No racing to ship. No shortcuts on the cultural work. No fake-it-til-you-make-it gameplay screenshots.', fr: 'Une pré-production de plus de 3 ans. Aucune précipitation pour publier. Aucun raccourci sur le travail culturel. Aucune capture d\'écran de gameplay simulée.' },
  'mboka.how.1.h3':    { en: 'AI-Augmented, Human-Authored', fr: 'Augmenté par l\'IA, Écrit par l\'Humain' },
  'mboka.how.1.p':     { en: 'Concept art, world-building, asset generation accelerated with AI tools — but every design decision goes through a cultural validation pass before it lands in canon. AI is a force-multiplier, not a substitute for judgment.', fr: 'Œuvres conceptuelles, construction du monde, génération d\'assets accélérées avec des outils d\'IA — mais chaque décision de conception passe par une validation culturelle avant d\'entrer dans le canon. L\'IA est un multiplicateur de force, pas un substitut au jugement.' },
  'mboka.how.2.h3':    { en: 'Real Congolese Voices in the Loop', fr: 'De Vraies Voix Congolaises dans la Boucle' },
  'mboka.how.2.p':     { en: 'UPTW members, Dr. Elie\'s network, real DRC consultants reviewing characters, dialogue, and cultural representation. "African voices in dev loop — not optional" is a design law, written into our canon repo.', fr: 'Les membres UPTW, le réseau de Dr. Elie, de vrais consultants de la RDC revoient les personnages, les dialogues et la représentation culturelle. « Les voix africaines dans la boucle de développement — non négociables » est une loi de conception, inscrite dans notre dépôt canon.' },
  'mboka.how.3.h3':    { en: 'Two Products. One World.', fr: 'Deux Produits. Un Seul Monde.' },
  'mboka.how.3.p':     { en: '<strong>Mboka Mobile</strong> — F2P Android, Phaser engine, designed for African mainland reach.<br><strong>Mboka Academy</strong> — Steam premium, Godot 4 + Terrain3D, an educational-grade simulation depth for diaspora and Western audiences. Shared canon. Different art floors. Same story.', fr: '<strong>Mboka Mobile</strong> — Android gratuit, moteur Phaser, conçu pour la portée du continent africain.<br><strong>Mboka Academy</strong> — Steam premium, Godot 4 + Terrain3D, une profondeur de simulation de niveau éducatif pour la diaspora et les publics occidentaux. Canon partagé. Sols artistiques différents. Même histoire.' },
  'mboka.how.4.h3':    { en: '3+ Year Timeline', fr: 'Calendrier de 3+ Ans' },
  'mboka.how.4.p':     { en: 'Pre-production is locked. Vertical slice (Kinshasa) is the first build target. Tier-A provinces unlock one at a time. We will ship when the work is honest — not when the calendar says to.', fr: 'La pré-production est verrouillée. La tranche verticale (Kinshasa) est la première cible de construction. Les provinces de Niveau A se débloquent une à une. Nous publierons quand le travail sera honnête — pas quand le calendrier le dira.' },
  'mboka.modern.h3':   { en: 'Modernization ≠ Westernization', fr: 'Modernisation ≠ Occidentalisation' },
  'mboka.modern.p':    { en: 'The DRC\'s future is built by Congolese hands, on Congolese soil, with Congolese governance. Mboka tells that story in the engine. The real work tells it on the ground.', fr: 'L\'avenir de la RDC est construit par des mains congolaises, sur un sol congolais, avec une gouvernance congolaise. Mboka raconte cette histoire dans le moteur. Le vrai travail la raconte sur le terrain.' },

  /* Section: Join the Journey */
  'mboka.join.eyebrow': { en: 'Stay Connected', fr: 'Restez Connecté' },
  'mboka.join.h2':      { en: 'The journey <em>has just begun.</em>', fr: 'Le voyage <em>ne fait que commencer.</em>' },
  'mboka.join.lead':    { en: 'Mboka is 3+ years from release. The real work — Palm Leaf Partners infrastructure, UPTW programs, Memorial City — is happening now. There\'s a way to be part of both.', fr: 'Mboka est à 3+ ans de sa sortie. Le vrai travail — l\'infrastructure de Palm Leaf Partners, les programmes UPTW, la Ville Mémoriale — se déroule maintenant. Il y a un moyen de faire partie des deux.' },
  'mboka.join.wishlist': { en: '🎮 Wishlist on Steam', fr: '🎮 Liste de Souhaits sur Steam' },
  'mboka.join.wishlist.tag': { en: 'Soon', fr: 'Bientôt' },
  'mboka.join.support': { en: 'Support the Real Work', fr: 'Soutenir le Vrai Travail' },

  /* Project tile descriptions */
  'mboka.proj.mapping.p':   { en: '20M+ addresses surveyed for the first time — the literal foundation of every other system.', fr: 'Plus de 20M d\'adresses cartographiées pour la première fois — le fondement littéral de tout autre système.' },
  'mboka.proj.datacenter.p':{ en: 'DRC-owned, DRC-operated digital infrastructure. Not a foreign outpost.', fr: 'Infrastructure numérique détenue et exploitée par la RDC. Pas un avant-poste étranger.' },
  'mboka.proj.callcenter.p':{ en: '5–10 regional emergency dispatch + service centers serving every province.', fr: '5–10 centres régionaux de répartition d\'urgence + de service desservant chaque province.' },
  'mboka.proj.fiber.p':     { en: 'The connective tissue. Internet sovereignty for a billion-plus connections.', fr: 'Le tissu connecteur. Souveraineté internet pour plus d\'un milliard de connexions.' },
  'mboka.proj.power.p':     { en: 'Hydro, solar, geothermal — domestic supply, locked against foreign extortion.', fr: 'Hydro, solaire, géothermie — approvisionnement domestique, verrouillé contre l\'extorsion étrangère.' },
  'mboka.proj.agri.p':      { en: 'Cocoa, cassava, palm — value-added, processed in-country, exported as products.', fr: 'Cacao, manioc, palme — à valeur ajoutée, transformés sur place, exportés comme produits.' },
  'mboka.proj.fish.p':      { en: 'Congo River + Lake Kivu yield. Cold-chain that finally makes export viable.', fr: 'Rendement du fleuve Congo + lac Kivu. Chaîne du froid qui rend enfin l\'exportation viable.' },
  'mboka.proj.memorial.p':  { en: 'A 5 km² living memorial. <a href="memorial-city.html" style="color:var(--gold);">Learn more →</a>', fr: 'Un mémorial vivant de 5 km². <a href="memorial-city.html" style="color:var(--gold);">En savoir plus →</a>' },

  /* Council card POWERS — Zola */
  'mboka.zola.p1.n':  { en: 'Root Network', fr: 'Réseau des Racines' },
  'mboka.zola.p1.d':  { en: 'Innate Palm Folk long-range awareness', fr: 'Conscience longue-distance innée du Peuple-Palme' },
  'mboka.zola.p2.n':  { en: 'Bestiary Bond', fr: 'Lien du Bestiaire' },
  'mboka.zola.p2.d':  { en: 'Wild Companions follow her; healed Hollow Brood join', fr: 'Les Compagnons Sauvages la suivent ; la Couvée Creuse guérie la rejoint' },
  'mboka.zola.p3.n':  { en: 'Listen to the Land', fr: 'Écouter la Terre' },
  'mboka.zola.p3.d':  { en: 'Reveals ecological fragility; vetoes harmful builds', fr: 'Révèle la fragilité écologique ; oppose un veto aux constructions nocives' },
  'mboka.zola.p4.n':  { en: 'Rewilding', fr: 'Réensauvagement' },
  'mboka.zola.p4.d':  { en: 'Restores corrupted territory to natural state', fr: 'Restaure un territoire corrompu à son état naturel' },
  'mboka.zola.p5.n':  { en: 'Hidden Paths', fr: 'Sentiers Cachés' },
  'mboka.zola.p5.d':  { en: 'Forest knowledge — reveals routes others can\'t see', fr: 'Savoir forestier — révèle des chemins que d\'autres ne voient pas' },
  'mboka.zola.p6.n':  { en: 'Mother Tree Communion', fr: 'Communion de l\'Arbre-Mère' },
  'mboka.zola.p6.d':  { en: 'A bond saved for endgame. You\'ll know when.', fr: 'Un lien réservé à la fin de partie. Vous saurez quand.' },

  /* Loredana */
  'mboka.lor.p1.n':  { en: 'Sanctify', fr: 'Sanctifier' },
  'mboka.lor.p1.d':  { en: 'Blesses ground — corruption can\'t travel Sanctified land', fr: 'Bénit la terre — la corruption ne peut traverser une terre sanctifiée' },
  'mboka.lor.p2.n':  { en: 'Sanctuary', fr: 'Sanctuaire' },
  'mboka.lor.p2.d':  { en: 'Refuge for the displaced; safe-zone in any region', fr: 'Refuge pour les déplacés ; zone sûre dans toute région' },
  'mboka.lor.p3.n':  { en: 'Spiritual Healing', fr: 'Guérison Spirituelle' },
  'mboka.lor.p3.d':  { en: 'Restores faith + morale in war-traumatized villages', fr: 'Restaure la foi + le moral dans les villages traumatisés par la guerre' },
  'mboka.lor.p4.n':  { en: 'Cross-Chapter Call', fr: 'Appel Inter-Chapitres' },
  'mboka.lor.p4.d':  { en: 'Summons Tier-2 sisters across the Root Network', fr: 'Convoque les sœurs de Niveau 2 à travers le Réseau des Racines' },
  'mboka.lor.p5.n':  { en: 'Vow Renewal', fr: 'Renouvellement du Vœu' },
  'mboka.lor.p5.d':  { en: 'Counters False Vow corruption from the Hollow King', fr: 'Contre la corruption du Faux Vœu du Roi Creux' },
  'mboka.lor.p6.n':  { en: 'Founding Light', fr: 'Lumière Fondatrice' },
  'mboka.lor.p6.d':  { en: 'USA Founding Chapter\'s signature — global movement anchor', fr: 'Signature du Chapitre Fondateur USA — ancre du mouvement mondial' },

  /* Melissa */
  'mboka.mel.p1.n':  { en: 'Treaty', fr: 'Traité' },
  'mboka.mel.p1.d':  { en: 'Binding legal protection — locks sovereignty in writing', fr: 'Protection juridique contraignante — verrouille la souveraineté par écrit' },
  'mboka.mel.p2.n':  { en: 'Charter', fr: 'Charte' },
  'mboka.mel.p2.d':  { en: 'Founds new legal entity (chapter, region, project)', fr: 'Fonde une nouvelle entité juridique (chapitre, région, projet)' },
  'mboka.mel.p3.n':  { en: 'Due Process', fr: 'Procédure Régulière' },
  'mboka.mel.p3.d':  { en: 'Blocks counterfeit treaties from the Hollow King', fr: 'Bloque les traités contrefaits du Roi Creux' },
  'mboka.mel.p4.n':  { en: 'Audit', fr: 'Audit' },
  'mboka.mel.p4.d':  { en: 'Reveals legal corruption + hidden contracts on any node', fr: 'Révèle la corruption juridique + les contrats cachés sur tout nœud' },
  'mboka.mel.p5.n':  { en: 'Strike Down', fr: 'Annuler' },
  'mboka.mel.p5.d':  { en: 'Voids extraction contracts in Sanctified territory', fr: 'Annule les contrats d\'extraction en territoire sanctifié' },
  'mboka.mel.p6.n':  { en: 'Cross-Border Compact', fr: 'Pacte Transfrontalier' },
  'mboka.mel.p6.d':  { en: 'Treaty between regions; required for inter-province builds', fr: 'Traité entre régions ; requis pour les constructions inter-provinciales' },

  /* Eddie */
  'mboka.edd.p1.n':  { en: 'Survey', fr: 'Arpenter' },
  'mboka.edd.p1.d':  { en: 'Reveal hidden region; required before any build', fr: 'Révèle une région cachée ; requis avant toute construction' },
  'mboka.edd.p2.n':  { en: 'Foundation', fr: 'Fondation' },
  'mboka.edd.p2.d':  { en: 'Instant-build infra (only on Sanctified or surveyed land)', fr: 'Construction instantanée d\'infra (uniquement sur terre sanctifiée ou arpentée)' },
  'mboka.edd.p3.n':  { en: 'Signal Tower', fr: 'Tour de Signal' },
  'mboka.edd.p3.d':  { en: 'Connects remote villages + powers regional call centers', fr: 'Connecte les villages éloignés + alimente les centres d\'appel régionaux' },
  'mboka.edd.p4.n':  { en: 'Post Office Network', fr: 'Réseau Postal' },
  'mboka.edd.p4.d':  { en: 'Builds logistics hubs for cargo, mail, supply routing — also fast-travel for the Council', fr: 'Construit des hubs logistiques pour le fret, le courrier, le routage des approvisionnements — aussi voyage rapide pour le Conseil' },
  'mboka.edd.p5.n':  { en: 'Foresight', fr: 'Prévoyance' },
  'mboka.edd.p5.d':  { en: 'Preview future resource forecast + bottleneck timelines', fr: 'Aperçu des prévisions futures de ressources + des goulots d\'étranglement' },
  'mboka.edd.p6.n':  { en: 'Sovereignty Lock', fr: 'Verrou de Souveraineté' },
  'mboka.edd.p6.d':  { en: 'Protects from extraction (requires Melissa\'s prior Treaty)', fr: 'Protège de l\'extraction (nécessite le Traité préalable de Melissa)' },

  /* Dr. Elie */
  'mboka.eli.p1.n':  { en: 'Triage', fr: 'Triage' },
  'mboka.eli.p1.d':  { en: 'Emergency physical healing — modern medicine', fr: 'Soins d\'urgence — médecine moderne' },
  'mboka.eli.p2.n':  { en: 'Alliance', fr: 'Alliance' },
  'mboka.eli.p2.d':  { en: 'Recruit government officials + village chiefs to a project', fr: 'Recrute des fonctionnaires + chefs de village pour un projet' },
  'mboka.eli.p3.n':  { en: 'Field Hospital', fr: 'Hôpital de Campagne' },
  'mboka.eli.p3.d':  { en: 'Build healthcare infrastructure (requires Power Plant for night-op)', fr: 'Construit l\'infrastructure de santé (nécessite une Centrale pour l\'opération de nuit)' },
  'mboka.eli.p4.n':  { en: 'SAS Charter', fr: 'Charte SAS' },
  'mboka.eli.p4.d':  { en: 'Establishes operational sovereignty on the ground', fr: 'Établit la souveraineté opérationnelle sur le terrain' },
  'mboka.eli.p5.n':  { en: 'Diagnose', fr: 'Diagnostiquer' },
  'mboka.eli.p5.d':  { en: 'Reveals hidden corruption or disease at any node', fr: 'Révèle la corruption ou la maladie cachée sur tout nœud' },
  'mboka.eli.p6.n':  { en: 'Bush Pharmacy', fr: 'Pharmacie de Brousse' },
  'mboka.eli.p6.d':  { en: 'Integrates respected traditional DRC medicine into Field Hospitals', fr: 'Intègre la médecine traditionnelle congolaise respectée dans les Hôpitaux de Campagne' },

  /* Nick */
  'mboka.nck.p1.n':  { en: 'Grid Command', fr: 'Commande du Réseau' },
  'mboka.nck.p1.d':  { en: 'Reveals all powered nodes + energy flow overlay', fr: 'Révèle tous les nœuds alimentés + la superposition des flux d\'énergie' },
  'mboka.nck.p2.n':  { en: 'Lightning Surge', fr: 'Surtension' },
  'mboka.nck.p2.d':  { en: 'Temporary boost to all powered facilities', fr: 'Boost temporaire à toutes les installations alimentées' },
  'mboka.nck.p3.n':  { en: 'Brownout Shield', fr: 'Bouclier Anti-Coupure' },
  'mboka.nck.p3.d':  { en: 'Protects critical infra from sabotage + outages', fr: 'Protège l\'infra critique du sabotage + des pannes' },
  'mboka.nck.p4.n':  { en: 'Power Plant', fr: 'Centrale Électrique' },
  'mboka.nck.p4.d':  { en: 'Builds region-appropriate generation (hydro/solar/geothermal)', fr: 'Construit une génération appropriée à la région (hydro/solaire/géothermie)' },
  'mboka.nck.p5.n':  { en: 'Connect Village', fr: 'Connecter le Village' },
  'mboka.nck.p5.d':  { en: 'Extends grid (requires Sanctify + Survey + Treaty + Alliance)', fr: 'Étend le réseau (nécessite Sanctifier + Arpenter + Traité + Alliance)' },
  'mboka.nck.p6.n':  { en: 'Sovereign Grid', fr: 'Réseau Souverain' },
  'mboka.nck.p6.d':  { en: 'Locks region to domestic supply — anti-Crown-of-Coin', fr: 'Verrouille la région à l\'approvisionnement domestique — anti-Couronne-de-Pièces' },

  /* Hero figure domain tags (one-word) */
  'mboka.hero.land':           { en: 'Land',           fr: 'Terre' },
  'mboka.hero.spirit':         { en: 'Spirit',         fr: 'Esprit' },
  'mboka.hero.law':            { en: 'Law',            fr: 'Loi' },
  'mboka.hero.infrastructure': { en: 'Infrastructure', fr: 'Infrastructure' },
  'mboka.hero.operations':     { en: 'Operations',     fr: 'Opérations' },
  'mboka.hero.power':          { en: 'Power',          fr: 'Énergie' },
  'mboka.hero.pending':        { en: 'Portrait<br>Coming', fr: 'Portrait<br>À Venir' },

  /* Footer authorship statement */
  'mboka.author.eyebrow': { en: 'Cultural Authorship Statement', fr: 'Déclaration d\'Auctorialité Culturelle' },
  'mboka.author.quote':   { en: '"MBOKA is being developed in collaboration with real Congolese voices, UPTW members, and the Founders of the Council of Sovereignty. Every cultural element is grounded in real DRC heritage. Every story beat is reviewed for honesty. Modernization is not Westernization. The story belongs to the people whose story it is — we are the stewards of how it gets told in this medium, and we take that seriously."', fr: '« MBOKA est développé en collaboration avec de vraies voix congolaises, des membres de l\'UPTW et les Fondateurs du Conseil de la Souveraineté. Chaque élément culturel est ancré dans le véritable patrimoine de la RDC. Chaque battement narratif est revu pour son honnêteté. La modernisation n\'est pas l\'occidentalisation. L\'histoire appartient aux gens dont elle est l\'histoire — nous sommes les gardiens de la manière dont elle est racontée dans ce médium, et nous prenons cela au sérieux. »' },
  'nav.brand.name':     { en: 'PALM LEAF',               fr: 'PALM LEAF' },
  'nav.brand.sub':      { en: '— PARTNERS —',            fr: '— PARTENAIRES —' },

  'footer.tagline':     { en: 'Building Systems. Growing Futures.', fr: 'Construire des Systèmes. Cultiver l\'Avenir.' },
  'footer.desc':        { en: 'Palm Leaf Partners is a DRC-rooted infrastructure and technology firm building the foundational systems — address mapping, data centers, call centers, and fiber backbone — that the Democratic Republic of Congo needs to grow.', fr: 'Palm Leaf Partners est une entreprise d\'infrastructure et de technologie enracinée en RDC, construisant les systèmes fondamentaux — cartographie d\'adresses, centres de données, centres d\'appel et réseau fibre — dont la République Démocratique du Congo a besoin pour se développer.' },
  'footer.legal':       { en: 'Palm Leaf Partners LLC (Wyoming, USA) · DRC operations conducted by UPTWB SAS under OHADA law · DRC PPP Law 20/018 · MOU with SCPT', fr: 'Palm Leaf Partners LLC (Wyoming, USA) · Opérations en RDC conduites par UPTWB SAS sous droit OHADA · Loi PPP RDC 20/018 · MOU avec SCPT' },
  'footer.projects':    { en: 'Projects',                fr: 'Projets' },
  'footer.company':     { en: 'Company',                 fr: 'Entreprise' },
  'footer.legal.title': { en: 'Legal Framework',        fr: 'Cadre Juridique' },
  'footer.about':       { en: 'About Us',                fr: 'À Propos' },
  'footer.partnership': { en: 'Partnership &amp; Governance', fr: 'Partenariat &amp; Gouvernance' },
  'footer.copyright':   { en: '© 2026 Palm Leaf Partners LLC. All rights reserved.', fr: '© 2026 Palm Leaf Partners LLC. Tous droits réservés.' },
  'footer.privacy':     { en: 'Privacy Policy',          fr: 'Politique de Confidentialité' },
  'footer.terms':       { en: 'Terms of Use',            fr: 'Conditions d\'Utilisation' },
  'footer.forward':     { en: 'Forward-Looking Statements', fr: 'Déclarations Prospectives' },
  'footer.disclaimer':  { en: 'Forward-looking notice: This website describes contemplated infrastructure programs in the Democratic Republic of Congo. Many references — including the 50-year scope, ~20 million address target, 95% accuracy goal, Tier III data center design, fiber and call-center networks, and SCPT Mobile — are indicative and subject to (i) a Scope Validation Survey, (ii) the Definitive Agreement(s) with the DRC counterparties, and (iii) applicable DRC regulatory approvals. No partnership referenced on this site (including with UN agencies) should be construed as binding unless and until a formal written agreement is executed. See the Forward-Looking Statements section of our Terms of Use.', fr: 'Avis de déclaration prospective : Ce site web décrit des programmes d\'infrastructure envisagés en République Démocratique du Congo. De nombreuses références — y compris la portée de 50 ans, la cible d\'environ 20 millions d\'adresses, l\'objectif de précision de 95%, la conception du centre de données Tier III, les réseaux fibre et de centres d\'appel, et SCPT Mobile — sont indicatives et soumises à (i) une étude de validation du périmètre, (ii) le ou les accords définitifs avec les contreparties en RDC, et (iii) les approbations réglementaires applicables en RDC. Aucun partenariat mentionné sur ce site (y compris avec des agences de l\'ONU) ne doit être considéré comme contraignant tant qu\'un accord écrit formel n\'a pas été exécuté. Voir la section Déclarations Prospectives de nos Conditions d\'Utilisation.' },
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
  'map.lead':           { en: 'A target of up to 20 million addresses. A 95% accuracy goal. For the first time in DRC history.', fr: 'Une cible allant jusqu\'à 20 millions d\'adresses. Un objectif de précision de 95%. Pour la première fois dans l\'histoire de la RDC.' },
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
  'cc.lead':            { en: 'Five to ten planned regional centers. Every region of the DRC. Six languages. To be built on the map that makes precise dispatch possible.', fr: 'Cinq à dix centres régionaux prévus. Chaque région de la RDC. Six langues. À construire sur la carte qui rend possible un dispatch précis.' },
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
  'fb.lead':            { en: 'Six cities planned to be connected. One hundred remote sites targeted. A proposed 50-year partnership designed to light up the DRC.', fr: 'Six villes prévues d\'être connectées. Cent sites distants ciblés. Un partenariat proposé de 50 ans conçu pour illuminer la RDC.' },
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
  'part.timeline.eyebrow':{ en: '50-Year Program',        fr: 'Programme de 50 Ans' },
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

  /* ── GLOBE PAGE — LAYER TOGGLES & BACK BUTTONS ── */
  'globe.layer.wildlife':    { en: 'Wildlife',        fr: 'Faune' },
  'globe.layer.mining':      { en: 'Mining',          fr: 'Mines' },
  'globe.layer.grid':        { en: 'Grid',            fr: 'Réseau' },
  'globe.layer.fiber':       { en: 'Fiber',           fr: 'Fibre' },
  'globe.layer.geothermal':  { en: 'Geothermal',      fr: 'Géothermie' },
  'globe.layer.datacenter':  { en: 'Data Center',     fr: 'Centre de données' },
  'globe.layer.fishery':     { en: 'Fishery',         fr: 'Pêche' },
  'globe.layer.agriculture': { en: 'Agriculture',     fr: 'Agriculture' },
  'globe.layer.postoffices': { en: 'Post Offices',    fr: 'Bureaux de poste' },
  'globe.back.world':        { en: '↶ Back to World', fr: '↶ Retour au monde' },
  'globe.back.drc':          { en: '↶ Back to DRC',   fr: '↶ Retour à la RDC' },
};

/* ── Language detection ── */
// First-visit default: respect the visitor's browser/OS language. A user
// in Kinshasa with a French-language phone should land on the French site
// automatically; a user in Texas with an English-language phone gets
// English. The DRC (official language: French), France, Belgium, Senegal,
// Canada (QC), and other Francophone regions all have French-coded
// `navigator.language` values, so this covers the geographic ask without
// any IP-geolocation call.
//
// IMPORTANT: detection runs ONLY when no `plp_lang` has been saved. The
// moment the user explicitly clicks the EN/FR toggle, we save that choice
// to localStorage and it takes precedence forever — auto-detection never
// overrides a deliberate user preference.
function detectInitialLang() {
  let saved = null;
  try { saved = localStorage.getItem('plp_lang'); } catch {}
  if (saved === 'en' || saved === 'fr') return saved;
  const candidates = [];
  if (Array.isArray(navigator.languages)) candidates.push(...navigator.languages);
  if (navigator.language) candidates.push(navigator.language);
  for (const code of candidates) {
    if (!code) continue;
    const lc = code.toLowerCase();
    if (lc.startsWith('fr')) return 'fr';
    if (lc.startsWith('en')) return 'en';
  }
  return 'en';
}

/* ── Engine ── */
const I18N = {
  currentLang: detectInitialLang(),

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
    // Pages with custom dynamic content (e.g. globe.html voice narration
    // and Zola bubbles) listen for this event to re-render or cancel
    // in-flight state when the user toggles language mid-session.
    try {
      window.dispatchEvent(new CustomEvent('plp:langchange', { detail: { lang } }));
    } catch {}
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
// Globe button
translations['home.btn.globe'] = { en: 'Explore Our World', fr: 'Explorer Notre Monde' };

// Expose the engine on `window` so dynamic helpers in other scripts
// (e.g. globe.html's `localized(item, field)` and any future per-page
// helpers) can read `window.I18N.currentLang` reliably. Top-level
// `const` declarations in classic script tags are script-scoped in
// modern browsers and do NOT attach to `window` — so without this
// assignment, `window.I18N` is undefined and the dynamic content
// path silently falls back to English even when the user has
// toggled the site to French.
window.I18N = I18N;

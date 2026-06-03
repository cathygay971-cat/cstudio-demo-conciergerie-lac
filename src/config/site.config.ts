// =============================================================================
// FICHIER DE CONFIGURATION — TEMPLATE CONCIERGERIE
// =============================================================================
// POUR CRÉER UN NOUVEAU SITE CLIENT :
//   1. Remplacer TOUS les placeholders [EN_MAJUSCULES] par les vraies valeurs
//   2. Remplacer les images SVG par de vraies photos (même nom, extension .jpg)
//   3. Copier .env.example → .env.local, remplir les clés Resend
//   4. npm run build pour vérifier
//
// Pour repartir d'un exemple complet :
//   → voir examples/site.config.azur-demo.ts (exemple de référence Azur Conciergerie / Cassis)
// =============================================================================

import type {
  SiteTheme, HeroVariant, ServicesVariant,
  TestimonialsVariant, TestimonialsMode, GalleryVariant, ContactVariant, TeamVariant, CookieBannerMode,
  Stat, TrustBadge, Service, Step, WhyCityData,
  GalleryImage, Testimonial, FaqItem, TeamMember, SeoBlock, City, NavItem
} from '@/types'

export const siteConfig = {

  // ===========================================================================
  // IDENTITÉ
  // ===========================================================================
  identity: {
    name: '[NOM_CONCIERGERIE]',           // ex : 'Azur Conciergerie'
    tagline: '[SLOGAN_COURT]',             // ex : 'Conciergerie location saisonnière'
    logoImage: '',                         // chemin image logo (ex: '/images/logo.svg') — '' = repli sur le cercle initiale
    logoTitle: '[LOGO_TITRE]',             // texte principal du logo, ex : 'Azur'
    logoSubtitle: '[LOGO_SOUS_TITRE]',     // sous-texte du logo, ex : 'Conciergerie'
    logoInitial: '[INITIALE]',             // 1 lettre pour le cercle logo (mode repli), ex : 'A'
    baseCity: '[VILLE_PRINCIPALE]',        // ex : 'Ville principale'
    foundedYear: 0,                        // ex : AAAA (année de création)
    heroBadge: '[BADGE_HERO]',             // ex : 'Depuis AAAA · Ville'
  },

  // ===========================================================================
  // TYPES DE BIENS — liste de référence unique (EstimBand + EstimatorForm)
  // ===========================================================================
  propertyTypes: ['Studio', 'Appartement T2', 'Appartement T3 et +', 'Maison', 'Villa', 'Autre'],

  // ===========================================================================
  // THÈME — couleurs hex libres + polices Google Fonts
  // Toutes ces valeurs sont injectées en variables CSS sur <html> au runtime.
  // Changer une valeur ici → tout le site change, sans toucher un composant.
  // ===========================================================================
  theme: {
    colors: {
      bg:              '#F6F3ED',   // fond général de page
      surface:         '#FFFFFF',   // fond des cartes/panneaux
      surface2:        '#ECE7DC',   // sections légèrement colorées
      ink:             '#1C3A2E',   // h1-h4
      inkSoft:         '#2A4A3A',   // variante douce des titres
      text:            '#37423B',   // corps de texte
      muted:           '#74807A',   // labels, captions
      line:            '#DFD9CC',   // bordures, séparateurs
      accent:          '#B07A4B',   // boutons, focus, eyebrows
      accentDark:      '#8F5F36',   // hover boutons, texte eyebrow
      accentTint:      '#EFE2D2',   // focus ring, badges légers
      accentForeground:'#F6F3ED',   // texte clair sur boutons accent (lisible sur cuivre)
      onDark:          '#F6F3ED',   // texte sur footer/hero
      onDarkMuted:     '#B6C2BA',   // texte atténué sur fond foncé
      darkBg:          '#1C3A2E',   // footer, sections sombres
      darkBg2:         '#152C23',   // sous-sections sombres
    },
    fonts: {
      display:         'Fraunces',          // nom exact Google Fonts
      displayFallback: 'Georgia, serif',    // fallback CSS si la police ne charge pas
      body:            'DM Sans',           // nom exact Google Fonts
      bodyFallback:    'system-ui, sans-serif',
    },
  } as SiteTheme,

  // ===========================================================================
  // 6 VARIANTES — pilotent l'affichage de chaque section
  // ===========================================================================
  variants: {
    hero: 'plein' as HeroVariant,                      // 'plein' | 'light' | 'split'
    services: 'cartes' as ServicesVariant,             // 'cartes' | 'liste-alternee'
    testimonials: 'carrousel' as TestimonialsVariant,  // 'carrousel' | 'grille'
    gallery: 'mosaique' as GalleryVariant,             // 'mosaique' | 'classique'
    contact: 'compact' as ContactVariant,              // 'cartes' | 'compact'
  },

  // ===========================================================================
  // SOCIÉTÉ — apparaît dans le footer et les pages mentions légales
  // ===========================================================================
  company: {
    name: '[NOM_SOCIÉTÉ]',                    // ex : 'Azur Conciergerie'
    legalForm: '[FORME_JURIDIQUE]',           // ex : 'SARL', 'SAS', 'EI'
    capital: '[CAPITAL_SOCIAL]',              // ex : '10 000 €'
    siret: '[SIRET]',                         // ex : '812 345 678 00019'
    address: '[ADRESSE]',                     // ex : '12 avenue du Port'
    zipCode: '[CODE_POSTAL]',                 // ex : '13260'
    city: '[VILLE_SIÈGE]',                    // ex : 'Ville'
    phone: '[TÉLÉPHONE_INTERNATIONAL]',       // ex : '+33486123456'
    phoneDisplay: '[TÉLÉPHONE_AFFICHÉ]',      // ex : '04 86 12 34 56'
    email: '[EMAIL_CONTACT]',                 // ex : 'contact@azur-conciergerie.fr'
    hours: '[HORAIRES]',                      // ex : 'Lun – Sam · 9h – 19h'
    carteProNumber: '[CARTE_PRO]',            // ex : 'CPI 1306' — '' = masqué
    rcPro: '[ASSURANCE_RCPRO]',               // ex : 'AXA' — '' = masqué
    website: 'https://example.fr',             // ← remplacer par le vrai domaine
    emailDestinataire: '[EMAIL_LEADS]',       // reçoit les leads formulaire
  },

  // ===========================================================================
  // SEO
  // ===========================================================================
  seo: {
    siteUrl: 'https://example.fr',             // ← remplacer par le vrai domaine
    defaultTitle: '[TITRE_SEO_DEFAUT]',       // ex : '[Nom] Conciergerie — Conciergerie à [Ville]'
    defaultDescription: '[DESCRIPTION_SEO_DEFAUT]', // ~155 caractères
    ogImage: '/og-image.jpg',                 // 1200×630 — à remplacer
  },

  // ===========================================================================
  // INTÉGRATIONS TIERS
  // ===========================================================================
  integrations: {
    // Google Tag Manager — '' = GTM non chargé. Ex : 'GTM-XXXXXX'
    gtmId: '',

    // Bannière cookies : 'maison' = bannière intégrée | 'cookieyes' = script CookieYes
    cookieBanner: 'maison' as CookieBannerMode,

    // CookieYes — uniquement si cookieBanner = 'cookieyes'. Ex : 'abc123def456'
    cookieYesId: '',
  },

  // ===========================================================================
  // RÉSEAUX SOCIAUX — '' = lien masqué
  // ===========================================================================
  social: {
    instagram: '',   // ex : 'https://instagram.com/azurconciergerie'
    facebook: '',    // ex : 'https://facebook.com/azurconciergerie'
    linkedin: '',
  },

  // ===========================================================================
  // CALENDLY — '' = bouton "Réserver un rendez-vous" masqué partout
  // ===========================================================================
  calendly: {
    url: '',         // ex : 'https://calendly.com/azur-conciergerie'
  },

  // ===========================================================================
  // WHATSAPP BUSINESS — '' = bouton WhatsApp masqué partout
  // Numéro au format international sans + ni espaces (ex: '33612345678')
  // ===========================================================================
  whatsapp: {
    number: '',
    message: 'Bonjour, je souhaite obtenir une estimation pour mon bien.',
  },

  // ===========================================================================
  // NAVIGATION — labels fixes, ne pas modifier les href
  // ===========================================================================
  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Estimation', href: '/estimation' },
    { label: 'Zones', href: '/zones' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],

  // ===========================================================================
  // CHIFFRES CLÉS (bande sombre sous le hero)
  // ===========================================================================
  stats: [
    { value: '[NB_SÉJOURS]', unit: '',   label: '[LABEL_STAT_1]' },  // ex : '+320' / 'séjours gérés depuis 2014'
    { value: '[NOTE]',       unit: '/5', label: '[LABEL_STAT_2]' },  // ex : '4,9' / 'note moyenne des voyageurs'
    { value: '[TAUX_OCC]',   unit: '%',  label: '[LABEL_STAT_3]' },  // ex : '82' / 'de taux d'occupation moyen'
    { value: '[COMMISSION]', unit: '%',  label: '[LABEL_STAT_4]' },  // ex : '18' / 'commission unique, tout compris'
  ] as Stat[],

  trustBadges: [
    { icon: 'shield', label: '[BADGE_1]' },  // ex : 'Assurance habitation incluse'
    { icon: 'card',   label: '[BADGE_2]' },  // ex : 'Carte professionnelle T'
    { icon: 'check',  label: '[BADGE_3]' },  // ex : 'Sans engagement de durée'
    { icon: 'clock',  label: '[BADGE_4]' },  // ex : 'Réponse voyageurs 24/7'
  ] as TrustBadge[],

  // ===========================================================================
  // COPY — textes des sections (titres, sous-titres, phrases UI)
  // ===========================================================================
  copy: {
    // Footer — phrase sous le logo
    footerTagline: '[FOOTER_TAGLINE]',
    // ex : 'Conciergerie de location saisonnière à [Ville] et dans sa région. Nous gérons votre bien comme s'il était le nôtre.'

    // Section Services
    servicesEyebrow:  '[SERVICES_EYEBROW]',   // ex : 'Nos services'
    servicesTitle:    '[SERVICES_TITRE]',      // ex : 'Qu'est-ce qu'on gère pour vous ?'
    servicesSubtitle: '[SERVICES_SOUS_TITRE]', // ex : 'De la mise en ligne à l'accueil des voyageurs…'

    // Section Comment ça marche
    howItWorksEyebrow:  '[METHODE_EYEBROW]',   // ex : 'La méthode'
    howItWorksTitle:    '[METHODE_TITRE]',      // ex : 'Comment ça se passe, concrètement ?'
    howItWorksSubtitle: '[METHODE_SOUS_TITRE]', // ex : 'Quatre étapes simples…'

    // Section Galerie
    galleryEyebrow:  '[GALERIE_EYEBROW]',   // ex : 'Nos biens'
    galleryTitle:    '[GALERIE_TITRE]',      // ex : 'À quoi ressemblent les logements que nous gérons ?'
    gallerySubtitle: '[GALERIE_SOUS_TITRE]', // ex : 'Des intérieurs lumineux, soignés et prêts à accueillir.'

    // Section Témoignages
    testimonialsEyebrow:  '[TEMOIGNAGES_EYEBROW]',   // ex : 'Ils nous font confiance'
    testimonialsTitle:    '[TEMOIGNAGES_TITRE]',      // ex : 'Que disent les propriétaires ?'
    testimonialsSubtitle: '[TEMOIGNAGES_SOUS_TITRE]', // ex : 'Des propriétaires qui ont retrouvé du temps libre.'

    // Bande estimation (EstimBand)
    estimBandEyebrow:  '[ESTIM_EYEBROW]',   // ex : 'Estimation gratuite'
    estimBandSubtitle: '[ESTIM_SOUS_TITRE]', // ex : 'Obtenez une estimation personnalisée en quelques clics.'

    // Bloc contact home
    contactBlockTitle:    '[CONTACT_TITRE]',      // ex : 'Parlons de votre projet'
    contactBlockSubtitle: '[CONTACT_SOUS_TITRE]', // ex : 'Une question, une estimation, l'envie d'en savoir plus ?'

    // Formulaire estimateur — indice étape ville
    estimatorCityHint: '[ESTIMATEUR_INDICE_VILLE]', // ex : 'Nous intervenons à [Ville] et dans sa région.'

    // Section services condensés des pages villes (/conciergerie/[slug])
    // {ville} est remplacé automatiquement par le nom de la ville
    cityServicesEyebrow:  '[VILLE_SERVICES_EYEBROW]',   // ex : 'Nos services'
    cityServicesTitle:    '[VILLE_SERVICES_TITRE]',      // ex : 'Que gérons-nous pour vous à {ville} ?'
    cityServicesSubtitle: '[VILLE_SERVICES_SOUS_TITRE]', // ex : 'Une prise en charge complète de votre location…'
    cityServicesCta:      '[VILLE_SERVICES_CTA]',        // ex : 'Voir tous nos services'
  },

  // ===========================================================================
  // HERO — contenu des 3 variantes (choisir celle qui correspond à variants.hero)
  // ===========================================================================
  hero: {
    imageFull:  '/images/hero/hero-home.svg',   // 1920×1080 — remplacer par .jpg
    imageSplit: '/images/hero/hero-split.svg',  // 1100×1400 — remplacer par .jpg
    imageFullAlt: '[HERO_IMAGE_ALT]',           // alt SEO du hero (utilisé dans l'aria-label). ex : 'Conciergerie Airbnb · [Ville]'
    full: {
      title:    '[HERO_PLEIN_TITRE]',    // ex : 'Votre bien à [Ville], géré comme un hôtel.'
      subtitle: '[HERO_PLEIN_SOUS_TITRE]',
    },
    light: {
      title:    '[HERO_LIGHT_TITRE]',
      subtitle: '[HERO_LIGHT_SOUS_TITRE]',
    },
    split: {
      title:      '[HERO_SPLIT_TITRE]',
      subtitle:   '[HERO_SPLIT_SOUS_TITRE]',
      floatValue: '[VALEUR_FLOTTANTE]',  // ex : '82%'
      floatLabel: '[LABEL_FLOTTANT]',   // ex : 'de taux d'occupation moyen sur nos biens'
    },
  },

  // ===========================================================================
  // SERVICES — 6 recommandés, duplicables ou supprimables
  // ===========================================================================
  services: [
    {
      icon: 'photo',
      num: '01',
      category: '[SERVICE_1_CATÉGORIE]',   // ex : 'Visibilité'
      title: '[SERVICE_1_TITRE]',           // ex : 'Annonces & photos pro'
      description: '[SERVICE_1_DESCRIPTION]',
      bullets: ['[SERVICE_1_BULLET_1]', '[SERVICE_1_BULLET_2]', '[SERVICE_1_BULLET_3]'],
      image: '/images/services/annonces-photos.svg',
      imageAlt: '[SERVICE_1_IMAGE_ALT]',    // ex : 'Création annonce Airbnb à [Ville]'
    },
    {
      icon: 'chat',
      num: '02',
      category: '[SERVICE_2_CATÉGORIE]',
      title: '[SERVICE_2_TITRE]',
      description: '[SERVICE_2_DESCRIPTION]',
      bullets: ['[SERVICE_2_BULLET_1]', '[SERVICE_2_BULLET_2]', '[SERVICE_2_BULLET_3]'],
      image: '/images/services/gestion-voyageurs.svg',
      imageAlt: '[SERVICE_2_IMAGE_ALT]',    // ex : 'Gestion des voyageurs à [Ville]'
    },
    {
      icon: 'clean',
      num: '03',
      category: '[SERVICE_3_CATÉGORIE]',
      title: '[SERVICE_3_TITRE]',
      description: '[SERVICE_3_DESCRIPTION]',
      bullets: ['[SERVICE_3_BULLET_1]', '[SERVICE_3_BULLET_2]', '[SERVICE_3_BULLET_3]'],
      image: '/images/services/menage-linge.svg',
      imageAlt: '[SERVICE_3_IMAGE_ALT]',    // ex : 'Ménage et linge hôtelier à [Ville]'
    },
    {
      icon: 'key',
      num: '04',
      category: '[SERVICE_4_CATÉGORIE]',
      title: '[SERVICE_4_TITRE]',
      description: '[SERVICE_4_DESCRIPTION]',
      bullets: ['[SERVICE_4_BULLET_1]', '[SERVICE_4_BULLET_2]', '[SERVICE_4_BULLET_3]'],
      image: '/images/services/checkin-checkout.svg',
      imageAlt: '[SERVICE_4_IMAGE_ALT]',    // ex : 'Check-in / check-out des voyageurs à [Ville]'
    },
    {
      icon: 'wrench',
      num: '05',
      category: '[SERVICE_5_CATÉGORIE]',
      title: '[SERVICE_5_TITRE]',
      description: '[SERVICE_5_DESCRIPTION]',
      bullets: ['[SERVICE_5_BULLET_1]', '[SERVICE_5_BULLET_2]', '[SERVICE_5_BULLET_3]'],
      image: '/images/services/maintenance.svg',
      imageAlt: '[SERVICE_5_IMAGE_ALT]',    // ex : 'Maintenance du logement à [Ville]'
    },
    {
      icon: 'chart',
      num: '06',
      category: '[SERVICE_6_CATÉGORIE]',
      title: '[SERVICE_6_TITRE]',
      description: '[SERVICE_6_DESCRIPTION]',
      bullets: ['[SERVICE_6_BULLET_1]', '[SERVICE_6_BULLET_2]', '[SERVICE_6_BULLET_3]'],
      image: '/images/services/optimisation-prix.svg',
      imageAlt: '[SERVICE_6_IMAGE_ALT]',    // ex : 'Optimisation des prix de location à [Ville]'
    },
  ] as Service[],

  // ===========================================================================
  // COMMENT ÇA MARCHE — 4 étapes
  // ===========================================================================
  steps: [
    { num: '01', title: '[ÉTAPE_1_TITRE]', description: '[ÉTAPE_1_DESCRIPTION]' },
    { num: '02', title: '[ÉTAPE_2_TITRE]', description: '[ÉTAPE_2_DESCRIPTION]' },
    { num: '03', title: '[ÉTAPE_3_TITRE]', description: '[ÉTAPE_3_DESCRIPTION]' },
    { num: '04', title: '[ÉTAPE_4_TITRE]', description: '[ÉTAPE_4_DESCRIPTION]' },
  ] as Step[],

  // ===========================================================================
  // ÉQUIPE — section "les personnes derrière la conciergerie"
  // enabled: false = section entièrement masquée
  // variant 'grille' = cartes (3-4 personnes) | 'portraits' = grand format (1-2 personnes)
  // ===========================================================================
  team: {
    enabled: true,
    variant: 'grille' as TeamVariant,        // 'grille' | 'portraits'
    eyebrow:  '[EQUIPE_SURTITRE]',           // ex : 'Notre équipe'
    title:    '[EQUIPE_TITRE]',              // ex : 'Les personnes derrière votre conciergerie'
    subtitle: '[EQUIPE_SOUS_TITRE]',         // ex : 'Une équipe locale à votre écoute'
    // imageAlt : alt SEO du portrait, ex : 'Prénom Nom, fondateur · [Ville]'
    members: [
      { name: '[MEMBRE_1_NOM]', role: '[MEMBRE_1_ROLE]', description: '[MEMBRE_1_DESC]', image: '/images/team/membre-1.svg', imageAlt: '[MEMBRE_1_IMAGE_ALT]' },
      { name: '[MEMBRE_2_NOM]', role: '[MEMBRE_2_ROLE]', description: '[MEMBRE_2_DESC]', image: '/images/team/membre-2.svg', imageAlt: '[MEMBRE_2_IMAGE_ALT]' },
      { name: '[MEMBRE_3_NOM]', role: '[MEMBRE_3_ROLE]', description: '[MEMBRE_3_DESC]', image: '/images/team/membre-3.svg', imageAlt: '[MEMBRE_3_IMAGE_ALT]' },
    ] as TeamMember[],
  },

  // ===========================================================================
  // CTA INTERMÉDIAIRE LÉGER — bandeau titre + 1 bouton (pas de formulaire)
  // enabled: false = masqué. buttonHref pointe vers l'ancre #estimation (EstimBand)
  // ===========================================================================
  ctaBand: {
    enabled: true,
    title:       '[CTA_BAND_TITRE]',         // ex : 'Curieux de savoir combien votre bien peut rapporter ?'
                                             // Token {ville} → remplacé par le nom de la ville sur les pages villes
                                             // (ex : 'Combien votre bien peut-il rapporter à {ville} ?'). Sur la home : tel quel.
    buttonLabel: '[CTA_BAND_BOUTON]',        // ex : 'Estimer mes revenus'
    buttonHref:  '#estimation',              // ancre vers la section estimation complète (EstimBand)
  },

  // ===========================================================================
  // SECTION "POURQUOI [VILLE]" — home page
  // ===========================================================================
  whyMainCity: {
    eyebrow: 'Marché local',
    title:   '[WHY_MAIN_TITRE]',   // ex : 'Pourquoi louer son bien à [Ville] ?'
    lead:    '[WHY_MAIN_LEAD]',    // 1-2 phrases d'accroche
    body:    '[WHY_MAIN_BODY]',    // 2-3 phrases de développement
    image:   '/images/market/why-main.svg',  // 900×600 — remplacer par .jpg
    imageAlt: '[WHY_IMAGE_ALT]',   // alt SEO. ex : 'Marché de la location saisonnière à [Ville]'
    stats: [
      { value: '[STAT_WHY_1_VALEUR]', label: '[STAT_WHY_1_LABEL]' },
      { value: '[STAT_WHY_2_VALEUR]', label: '[STAT_WHY_2_LABEL]' },
      { value: '[STAT_WHY_3_VALEUR]', label: '[STAT_WHY_3_LABEL]' },
      { value: '[STAT_WHY_4_VALEUR]', label: '[STAT_WHY_4_LABEL]' },
    ],
  } as WhyCityData,

  // ===========================================================================
  // GALERIE — 9 images recommandées (mosaïque : respecter tall/wide)
  // caption = légende affichée au survol · alt = texte alternatif SEO (indexable Google Images)
  // ex alt : 'Salon d'un appartement géré à [Ville]'
  // ===========================================================================
  gallery: {
    images: [
      { src: '/images/gallery/gallery-01.svg', caption: '[GALERIE_CAPTION_1]', alt: '[GALERIE_ALT_1]', tall: true,  wide: false },
      { src: '/images/gallery/gallery-02.svg', caption: '[GALERIE_CAPTION_2]', alt: '[GALERIE_ALT_2]', tall: false, wide: false },
      { src: '/images/gallery/gallery-03.svg', caption: '[GALERIE_CAPTION_3]', alt: '[GALERIE_ALT_3]', tall: false, wide: true  },
      { src: '/images/gallery/gallery-04.svg', caption: '[GALERIE_CAPTION_4]', alt: '[GALERIE_ALT_4]', tall: false, wide: false },
      { src: '/images/gallery/gallery-05.svg', caption: '[GALERIE_CAPTION_5]', alt: '[GALERIE_ALT_5]', tall: false, wide: true  },
      { src: '/images/gallery/gallery-06.svg', caption: '[GALERIE_CAPTION_6]', alt: '[GALERIE_ALT_6]', tall: false, wide: false },
      { src: '/images/gallery/gallery-07.svg', caption: '[GALERIE_CAPTION_7]', alt: '[GALERIE_ALT_7]', tall: false, wide: false },
      { src: '/images/gallery/gallery-08.svg', caption: '[GALERIE_CAPTION_8]', alt: '[GALERIE_ALT_8]', tall: false, wide: false },
      { src: '/images/gallery/gallery-09.svg', caption: '[GALERIE_CAPTION_9]', alt: '[GALERIE_ALT_9]', tall: false, wide: false },
    ] as GalleryImage[],
  },

  // ===========================================================================
  // TÉMOIGNAGES — 4 recommandés
  // ===========================================================================
  // Mode d'affichage des avis sur les pages villes :
  //   'global'   = mêmes avis partout (home + villes) — idéal client qui débute
  //   'parVille' = chaque ville affiche cities[].testimonials (repli auto sur global si vide)
  testimonialsMode: 'global' as TestimonialsMode,
  testimonials: [
    { initial: '[I1]', author: '[TÉMOIN_1_PRÉNOM]', property: '[TÉMOIN_1_BIEN]', quote: '[TÉMOIN_1_CITATION]' },
    { initial: '[I2]', author: '[TÉMOIN_2_PRÉNOM]', property: '[TÉMOIN_2_BIEN]', quote: '[TÉMOIN_2_CITATION]' },
    { initial: '[I3]', author: '[TÉMOIN_3_PRÉNOM]', property: '[TÉMOIN_3_BIEN]', quote: '[TÉMOIN_3_CITATION]' },
    { initial: '[I4]', author: '[TÉMOIN_4_PRÉNOM]', property: '[TÉMOIN_4_BIEN]', quote: '[TÉMOIN_4_CITATION]' },
  ] as Testimonial[],

  // ===========================================================================
  // FAQ GÉNÉRALE
  // ===========================================================================
  faq: [
    { question: '[FAQ_1_QUESTION]', answer: '[FAQ_1_RÉPONSE]' },
    { question: '[FAQ_2_QUESTION]', answer: '[FAQ_2_RÉPONSE]' },
    { question: '[FAQ_3_QUESTION]', answer: '[FAQ_3_RÉPONSE]' },
    { question: '[FAQ_4_QUESTION]', answer: '[FAQ_4_RÉPONSE]' },
    { question: '[FAQ_5_QUESTION]', answer: '[FAQ_5_RÉPONSE]' },
    { question: '[FAQ_6_QUESTION]', answer: '[FAQ_6_RÉPONSE]' },
  ] as FaqItem[],

  // ===========================================================================
  // PAGE ESTIMATION — contenu SEO sous le formulaire
  // ===========================================================================
  estimation: {
    metadata: {
      title:       '[ESTIMATION_TITRE_SEO]',
      description: '[ESTIMATION_DESCRIPTION_SEO]',
    },
    methodPoints: [
      { question: '[METHODE_1_QUESTION]', answer: '[METHODE_1_RÉPONSE]' },
      { question: '[METHODE_2_QUESTION]', answer: '[METHODE_2_RÉPONSE]' },
      { question: '[METHODE_3_QUESTION]', answer: '[METHODE_3_RÉPONSE]' },
      { question: '[METHODE_4_QUESTION]', answer: '[METHODE_4_RÉPONSE]' },
    ],
    faq: [
      { question: '[ESTIMATION_FAQ_1_QUESTION]', answer: '[ESTIMATION_FAQ_1_RÉPONSE]' },
      { question: '[ESTIMATION_FAQ_2_QUESTION]', answer: '[ESTIMATION_FAQ_2_RÉPONSE]' },
      { question: '[ESTIMATION_FAQ_3_QUESTION]', answer: '[ESTIMATION_FAQ_3_RÉPONSE]' },
      { question: '[ESTIMATION_FAQ_4_QUESTION]', answer: '[ESTIMATION_FAQ_4_RÉPONSE]' },
      { question: '[ESTIMATION_FAQ_5_QUESTION]', answer: '[ESTIMATION_FAQ_5_RÉPONSE]' },
    ],
    seoText: '[ESTIMATION_TEXTE_SEO]',
  },

  // ===========================================================================
  // PAGE ZONES — contenu SEO et FAQ géographique
  // ===========================================================================
  zones: {
    // En-tête + métadonnées de la page /zones (plus aucun texte en dur dans le composant).
    // {NOM} dans heroSubtitle est remplacé automatiquement par identity.name.
    // metaTitle / metaDescription PROPRES à Zones (ne pas copier ceux de la home).
    metaTitle:       '[ZONES_META_TITLE]',        // ex : 'Zones d'intervention — Conciergerie au lac d'Annecy'
    metaDescription: '[ZONES_META_DESCRIPTION]',  // ~155 car., propre à la page Zones
    heroEyebrow:     '[ZONES_EYEBROW]',            // ex : 'Zones d'intervention'
    heroTitle:       '[ZONES_TITRE]',              // ex : 'Où intervenons-nous ?'
    heroSubtitle:    '[ZONES_SOUS_TITRE]',         // ex : '{NOM} gère des locations saisonnières autour du lac d'Annecy…'
    seoText: '[ZONES_TEXTE_SEO]',
    faq: [
      { question: '[ZONES_FAQ_1_QUESTION]', answer: '[ZONES_FAQ_1_RÉPONSE]' },
      { question: '[ZONES_FAQ_2_QUESTION]', answer: '[ZONES_FAQ_2_RÉPONSE]' },
      { question: '[ZONES_FAQ_3_QUESTION]', answer: '[ZONES_FAQ_3_RÉPONSE]' },
    ] as FaqItem[],
  },

  // ===========================================================================
  // BLOC SEO RICHE (2 colonnes) — version HOME (global)
  // Affiché en bas de la home. Les pages villes ont LEUR PROPRE seoBlock
  // (cities[].seoBlock) → contenu SEO unique par page, jamais dupliqué.
  // enabled: false = masqué sur la home.
  // ===========================================================================
  seoBlock: {
    enabled: true,
    title: '[SEO_HOME_TITRE]',
    keywords: ['[SEO_HOME_KW_1]', '[SEO_HOME_KW_2]', '[SEO_HOME_KW_3]', '[SEO_HOME_KW_4]', '[SEO_HOME_KW_5]'],
    paragraphs: ['[SEO_HOME_PARA_1]', '[SEO_HOME_PARA_2]', '[SEO_HOME_PARA_3]'],
  } as SeoBlock,

  // ===========================================================================
  // VILLES — 1 entrée = 1 page /conciergerie/[slug] + carte dans /zones
  // Dupliquer ce bloc pour chaque ville supplémentaire.
  // ===========================================================================
  cities: [
    {
      slug: '[VILLE_1_SLUG]',                      // ex : 'nom-ville' (URL, sans accents)
      name: '[VILLE_1_NOM]',                        // ex : 'Nom de ville'
      heroImage: '/images/cities/cassis.svg',       // 1900×1267 — remplacer par .jpg (renommer au besoin)
      heroImageAlt: '[VILLE_1_HERO_ALT]',           // alt SEO du hero ville. ex : 'Conciergerie Airbnb à [Ville]'
      badge: '[VILLE_1_BADGE]',                     // ex : 'Région · Ville'
      headline: '[VILLE_1_HEADLINE]',               // ex : 'Conciergerie Airbnb à [Ville]'
      subline:  '[VILLE_1_SUBLINE]',
      stats: [
        { value: '[V1_STAT_1]', unit: '',   label: '[V1_STAT_1_LABEL]' },
        { value: '[V1_STAT_2]', unit: '/5', label: '[V1_STAT_2_LABEL]' },
        { value: '[V1_STAT_3]', unit: '%',  label: '[V1_STAT_3_LABEL]' },
        { value: '[V1_STAT_4]', unit: '%',  label: '[V1_STAT_4_LABEL]' },
      ],
      whyTitle: '[VILLE_1_WHY_TITRE]',
      whyLead:  '[VILLE_1_WHY_LEAD]',
      whyBody:  '[VILLE_1_WHY_BODY]',
      whyImage: '/images/market/cassis.svg',        // 900×600 — remplacer par .jpg (renommer au besoin)
      whyImageAlt: '[VILLE_1_WHY_ALT]',             // alt SEO. ex : 'Marché de la location saisonnière à [Ville]'
      whyStats: [
        { value: '[V1_WHY_STAT_1]', label: '[V1_WHY_STAT_1_LABEL]' },
        { value: '[V1_WHY_STAT_2]', label: '[V1_WHY_STAT_2_LABEL]' },
        { value: '[V1_WHY_STAT_3]', label: '[V1_WHY_STAT_3_LABEL]' },
        { value: '[V1_WHY_STAT_4]', label: '[V1_WHY_STAT_4_LABEL]' },
      ],
      faq: [
        { question: '[V1_FAQ_1_QUESTION]', answer: '[V1_FAQ_1_RÉPONSE]' },
        { question: '[V1_FAQ_2_QUESTION]', answer: '[V1_FAQ_2_RÉPONSE]' },
        { question: '[V1_FAQ_3_QUESTION]', answer: '[V1_FAQ_3_RÉPONSE]' },
        { question: '[V1_FAQ_4_QUESTION]', answer: '[V1_FAQ_4_RÉPONSE]' },
        { question: '[V1_FAQ_5_QUESTION]', answer: '[V1_FAQ_5_RÉPONSE]' },
        { question: '[V1_FAQ_6_QUESTION]', answer: '[V1_FAQ_6_RÉPONSE]' },
      ],
      // Avis spécifiques à cette ville (mode 'parVille'). Vide = repli sur les avis globaux.
      testimonials: [] as Testimonial[],
      // Bloc SEO riche PROPRE à la ville — contenu UNIQUE (jamais celui de la home ni d'une autre ville).
      // 3 paragraphes + 5 mots-clés → viser ~60 % de contenu unique par ville (SEO local).
      seoBlock: {
        title: '[VILLE_1_SEO_TITRE]',
        keywords: ['[VILLE_1_SEO_KW_1]', '[VILLE_1_SEO_KW_2]', '[VILLE_1_SEO_KW_3]', '[VILLE_1_SEO_KW_4]', '[VILLE_1_SEO_KW_5]'],
        paragraphs: ['[VILLE_1_SEO_PARA_1]', '[VILLE_1_SEO_PARA_2]', '[VILLE_1_SEO_PARA_3]'],
      },
      seo: {
        title:       '[VILLE_1_TITRE_SEO]',
        description: '[VILLE_1_DESCRIPTION_SEO]',
        textBlock:   '[VILLE_1_TEXTE_SEO]',
      },
    },
  ] as City[],

} as const

export type SiteConfig = typeof siteConfig

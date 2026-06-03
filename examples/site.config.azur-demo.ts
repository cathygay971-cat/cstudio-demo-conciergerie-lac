// =============================================================================
// EXEMPLE DE RÉFÉRENCE — AZUR CONCIERGERIE / CASSIS
// =============================================================================
// ⚠️  Ce fichier n'est PAS utilisé par le template actif : il n'est importé
//     par aucune page ni composant. C'est uniquement un exemple complet et
//     cohérent montrant à quoi ressemble un site entièrement rempli.
//
//     NE PAS le dupliquer tel quel comme config client. Pour créer un site,
//     remplir `src/config/site.config.ts` (la config active) en s'inspirant
//     des valeurs ci-dessous, section par section.
// =============================================================================

import type {
  SiteTheme, HeroVariant, ServicesVariant,
  TestimonialsVariant, GalleryVariant, ContactVariant, CookieBannerMode,
  Stat, TrustBadge, Service, Step, WhyCityData,
  GalleryImage, Testimonial, FaqItem, City, NavItem
} from '@/types'

export const siteConfigAzurDemo = {

  // ===========================================================================
  // IDENTITÉ
  // ===========================================================================
  identity: {
    name: 'Azur Conciergerie',
    tagline: 'Conciergerie location saisonnière',
    logoImage: '',                // '' = repli sur le cercle initiale ci-dessous
    logoTitle: 'Azur',            // texte principal du logo
    logoSubtitle: 'Conciergerie', // sous-texte du logo
    logoInitial: 'A',             // lettre dans le cercle doré (mode repli)
    baseCity: 'Cassis',       // ville principale (affichée dans les titres et le SEO)
    foundedYear: 2014,
    heroBadge: 'Depuis 2014 · Cassis',
  },

  // ===========================================================================
  // TYPES DE BIENS — liste de référence unique (EstimBand + EstimatorForm)
  // ===========================================================================
  propertyTypes: ['Studio', 'Appartement T2', 'Appartement T3 et +', 'Maison', 'Villa', 'Autre'],

  // ===========================================================================
  // THÈME — Azur Conciergerie : bleu nuit + doré sable + crème
  // ===========================================================================
  theme: {
    colors: {
      bg:           '#F7F4EF',
      surface:      '#FFFFFF',
      surface2:     '#F1ECE3',
      ink:          '#1A2238',
      inkSoft:      '#2A3354',
      text:         '#3C4256',
      muted:        '#767C8C',
      line:         '#E4DED2',
      accent:       '#C9A24B',
      accentDark:   '#A8842F',
      accentTint:   '#F3EAD2',
      accentForeground: '#1B1606',  // texte foncé lisible sur le doré
      onDark:       '#F7F4EF',
      onDarkMuted:  '#B9BFD0',
      darkBg:       '#1A2238',
      darkBg2:      '#141A2C',
    },
    fonts: {
      display:         'Fraunces',
      displayFallback: 'Georgia, serif',
      body:            'DM Sans',
      bodyFallback:    'system-ui, sans-serif',
    },
  } as SiteTheme,

  // ===========================================================================
  // 6 VARIANTES — pilotent l'affichage de chaque section
  // ===========================================================================
  variants: {
    hero: 'plein' as HeroVariant,                       // 'plein' | 'light' | 'split'
    services: 'cartes' as ServicesVariant,              // 'cartes' | 'liste-alternee'
    testimonials: 'carrousel' as TestimonialsVariant,   // 'carrousel' | 'grille'
    gallery: 'mosaique' as GalleryVariant,              // 'mosaique' | 'classique'
    contact: 'compact' as ContactVariant,                // 'cartes' | 'compact'
  },

  // ===========================================================================
  // SOCIÉTÉ — apparaît dans le footer et les pages mentions légales
  // ===========================================================================
  company: {
    name: 'Azur Conciergerie',
    legalForm: 'SARL',
    capital: '10 000 €',
    siret: '812 345 678 00019',
    address: '12 avenue du Port',
    zipCode: '13260',
    city: 'Cassis',
    phone: '+33486123456',
    phoneDisplay: '04 86 12 34 56',
    email: 'contact@azur-conciergerie.fr',
    hours: 'Lun – Sam · 9h – 19h',
    carteProNumber: 'CPI 1306',  // '' = masqué dans le footer
    rcPro: 'AXA',                // '' = masqué dans le footer
    website: 'https://azur-conciergerie.fr',
    emailDestinataire: 'contact@azur-conciergerie.fr', // reçoit les leads formulaire
  },

  // ===========================================================================
  // SEO
  // ===========================================================================
  seo: {
    siteUrl: 'https://azur-conciergerie.fr',
    defaultTitle: 'Azur Conciergerie — Conciergerie location saisonnière à Cassis',
    defaultDescription: 'Azur Conciergerie gère votre location saisonnière à Cassis, La Ciotat, Bandol et Sanary-sur-Mer. Estimation de revenus gratuite, gestion clé en main.',
    ogImage: '/og-image.jpg',
  },

  // ===========================================================================
  // INTÉGRATIONS TIERS
  // ===========================================================================
  integrations: {
    // Google Tag Manager — '' = GTM non chargé. Ex : 'GTM-XXXXXX'
    gtmId: '',

    // Bannière cookies : 'maison' = bannière intégrée | 'cookieyes' = script CookieYes
    cookieBanner: 'maison' as CookieBannerMode,

    // CookieYes — uniquement utilisé si cookieBanner = 'cookieyes'
    // Coller l'ID trouvé dans votre dashboard CookieYes (ex. 'abc123def456abc123def456')
    cookieYesId: '',
  },

  // ===========================================================================
  // RÉSEAUX SOCIAUX — '' = lien masqué
  // ===========================================================================
  social: {
    instagram: 'https://instagram.com/azurconciergerie',
    facebook: 'https://facebook.com/azurconciergerie',
    linkedin: '',
  },

  // ===========================================================================
  // CALENDLY — '' = bouton "Réserver un rendez-vous" masqué partout
  // ===========================================================================
  calendly: {
    url: 'https://calendly.com/azur-conciergerie',
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
  // NAVIGATION
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
    { value: '+320', unit: '', label: 'séjours gérés depuis 2014' },
    { value: '4,9', unit: '/5', label: 'note moyenne des voyageurs' },
    { value: '82', unit: '%', label: 'de taux d\'occupation moyen' },
    { value: '18', unit: '%', label: 'commission unique, tout compris' },
  ] as Stat[],

  trustBadges: [
    { icon: 'shield', label: 'Assurance habitation incluse' },
    { icon: 'card', label: 'Carte professionnelle T' },
    { icon: 'check', label: 'Sans engagement de durée' },
    { icon: 'clock', label: 'Réponse voyageurs 24/7' },
  ] as TrustBadge[],

  // ===========================================================================
  // COPY — textes des sections (titres, sous-titres, phrases UI)
  // ===========================================================================
  copy: {
    // Footer — phrase sous le logo
    footerTagline: 'Conciergerie de location saisonnière à Cassis et sur la Côte Bleue. Nous gérons votre bien comme s\'il était le nôtre.',

    // Section Services
    servicesEyebrow:  'Nos services',
    servicesTitle:    'Qu\'est-ce qu\'on gère pour vous ?',
    servicesSubtitle: 'De la mise en ligne à l\'accueil des voyageurs, nous prenons en charge l\'intégralité de votre location saisonnière.',

    // Section Comment ça marche
    howItWorksEyebrow:  'La méthode',
    howItWorksTitle:    'Comment ça se passe, concrètement ?',
    howItWorksSubtitle: 'Quatre étapes simples, de la première estimation au versement de vos premiers revenus.',

    // Section Galerie
    galleryEyebrow:  'Nos biens',
    galleryTitle:    'À quoi ressemblent les logements que nous gérons ?',
    gallerySubtitle: 'Des intérieurs lumineux, soignés et prêts à accueillir les voyageurs.',

    // Section Témoignages
    testimonialsEyebrow:  'Ils nous font confiance',
    testimonialsTitle:    'Que disent les propriétaires ?',
    testimonialsSubtitle: 'Des propriétaires qui ont retrouvé du temps libre et augmenté leurs revenus.',

    // Bande estimation (EstimBand)
    estimBandEyebrow:  'Estimation gratuite',
    estimBandSubtitle: 'Obtenez une estimation personnalisée de vos revenus locatifs en quelques clics.',

    // Bloc contact home
    contactBlockTitle:    'Parlons de votre projet',
    contactBlockSubtitle: 'Une question, une estimation, l\'envie d\'en savoir plus ? Notre équipe vous répond sous 24h.',

    // Formulaire estimateur — indice étape ville
    estimatorCityHint: 'Nous intervenons sur la Côte Bleue et le littoral varois.',

    // Section services condensés des pages villes (/conciergerie/[slug])
    // {ville} est remplacé automatiquement par le nom de la ville
    cityServicesEyebrow:  'Nos services',
    cityServicesTitle:    'Que gérons-nous pour vous à {ville} ?',
    cityServicesSubtitle: 'Une prise en charge complète de votre location, du premier voyageur au versement de vos revenus.',
    cityServicesCta:      'Voir tous nos services',
  },

  // ===========================================================================
  // HERO — contenu des 3 variantes
  // ===========================================================================
  hero: {
    imageFull: '/images/hero/hero-home.svg',
    imageSplit: '/images/hero/hero-split.svg',
    imageFullAlt: 'Conciergerie Airbnb à Cassis · Azur Conciergerie',
    full: {
      title: 'Votre bien à Cassis, géré comme un hôtel. Sans y penser.',
      subtitle: 'Nous gérons votre location saisonnière de A à Z — annonces, voyageurs, ménage, prix. Vous percevez des revenus optimisés, en toute tranquillité.',
    },
    light: {
      title: 'Combien votre bien peut-il vraiment rapporter à Cassis ?',
      subtitle: 'Conciergerie clé en main pour propriétaires. Estimation gratuite et sans engagement, gestion complète, revenus optimisés.',
    },
    split: {
      title: 'Confiez votre bien. Encaissez sereinement.',
      subtitle: 'Azur Conciergerie prend en charge l\'intégralité de votre location saisonnière à Cassis et ses environs.',
      floatValue: '82%',
      floatLabel: 'de taux d\'occupation moyen sur nos biens',
    },
  },

  // ===========================================================================
  // SERVICES
  // ===========================================================================
  services: [
    {
      icon: 'photo',
      num: '01',
      category: 'Visibilité',
      title: 'Annonces & photos pro',
      description: 'Reportage photo professionnel, rédaction optimisée et diffusion multi-plateformes (Airbnb, Booking, Abritel).',
      bullets: ['Reportage photo professionnel', 'Diffusion Airbnb, Booking, Abritel', 'Annonce rédigée et optimisée'],
      image: '/images/services/annonces-photos.svg',
      imageAlt: 'Création d\'annonce et photos professionnelles Airbnb à Cassis',
    },
    {
      icon: 'chat',
      num: '02',
      category: 'Sérénité',
      title: 'Gestion des voyageurs',
      description: 'Réponses aux demandes, sélection des profils, assistance 24/7 pendant le séjour. Vous n\'êtes jamais dérangé.',
      bullets: ['Sélection et validation des profils', 'Assistance 24/7 pendant le séjour', 'Check-in et check-out gérés de A à Z'],
      image: '/images/services/gestion-voyageurs.svg',
      imageAlt: 'Gestion des voyageurs et assistance 24/7 à Cassis',
    },
    {
      icon: 'clean',
      num: '03',
      category: 'Qualité',
      title: 'Ménage & linge hôtelier',
      description: 'Nettoyage professionnel entre chaque séjour et linge de qualité hôtelière fourni et entretenu.',
      bullets: ['Ménage & linge entre chaque séjour', 'Linge de qualité hôtelière', 'Contrôle qualité systématique'],
      image: '/images/services/menage-linge.svg',
      imageAlt: 'Ménage et linge hôtelier entre chaque séjour à Cassis',
    },
    {
      icon: 'key',
      num: '04',
      category: 'Accueil',
      title: 'Check-in / check-out',
      description: 'Accueil personnalisé ou autonome, remise des clés sécurisée, état des lieux à chaque entrée et sortie.',
      bullets: ['Accueil personnalisé ou autonome', 'Remise des clés sécurisée', 'État des lieux entrant et sortant'],
      image: '/images/services/checkin-checkout.svg',
      imageAlt: 'Check-in et check-out des voyageurs à Cassis',
    },
    {
      icon: 'wrench',
      num: '05',
      category: 'Technique',
      title: 'Maintenance & petits travaux',
      description: 'Suivi technique du logement, interventions rapides et réseau d\'artisans de confiance en cas de besoin.',
      bullets: ['Suivi technique régulier', 'Interventions rapides', 'Réseau d\'artisans de confiance'],
      image: '/images/services/maintenance.svg',
      imageAlt: 'Maintenance et petits travaux du logement à Cassis',
    },
    {
      icon: 'chart',
      num: '06',
      category: 'Performance',
      title: 'Optimisation des prix',
      description: 'Tarification dynamique selon la saison, les événements locaux et la demande, pour maximiser vos revenus.',
      bullets: ['Tarification dynamique saisonnière', 'Veille sur les événements locaux', 'Reporting mensuel des revenus'],
      image: '/images/services/optimisation-prix.svg',
      imageAlt: 'Optimisation des prix de location saisonnière à Cassis',
    },
  ] as Service[],

  // ===========================================================================
  // COMMENT ÇA MARCHE
  // ===========================================================================
  steps: [
    { num: '01', title: 'Estimation', description: 'Vous estimez gratuitement le potentiel de revenus de votre bien en 2 minutes.' },
    { num: '02', title: 'Visite & mise en valeur', description: 'Nous visitons le logement, conseillons l\'aménagement et réalisons le reportage photo.' },
    { num: '03', title: 'Mise en ligne', description: 'Votre annonce est créée, optimisée et diffusée sur toutes les plateformes.' },
    { num: '04', title: 'Vous encaissez', description: 'Les réservations arrivent, nous gérons tout. Vous recevez vos revenus chaque mois.' },
  ] as Step[],

  // ===========================================================================
  // SECTION "POURQUOI [VILLE]" — home page
  // ===========================================================================
  whyMainCity: {
    eyebrow: 'Marché local',
    title: 'Pourquoi louer son bien à Cassis ?',
    lead: 'Entre calanques classées et port de pêche, Cassis attire une clientèle haut de gamme toute l\'année. Une destination où la demande dépasse largement l\'offre.',
    body: 'La saison s\'étire d\'avril à octobre, avec des pics autour des événements locaux et des ponts. Résultat : un taux d\'occupation élevé et des nuitées parmi les plus valorisées de la région.',
    image: '/images/market/why-main.svg',
    imageAlt: 'Marché de la location saisonnière à Cassis et sur la Côte Bleue',
    stats: [
      { value: '198 €', label: 'nuitée moyenne en haute saison' },
      { value: '7 mois', label: 'de forte demande locative' },
      { value: '+12%', label: 'de fréquentation sur 3 ans' },
      { value: '4 zones', label: 'Cassis · La Ciotat · Bandol · Sanary' },
    ],
  } as WhyCityData,

  // ===========================================================================
  // GALERIE
  // ===========================================================================
  gallery: {
    images: [
      { src: '/images/gallery/gallery-01.svg', caption: 'Villa vue mer · Cassis', alt: 'Villa avec vue mer gérée à Cassis', tall: true, wide: false },
      { src: '/images/gallery/gallery-02.svg', caption: 'Chambre lumineuse · Bandol', alt: 'Chambre lumineuse d\'une location saisonnière à Bandol', tall: false, wide: false },
      { src: '/images/gallery/gallery-03.svg', caption: 'Séjour ouvert · La Ciotat', alt: 'Séjour ouvert d\'un appartement à La Ciotat', tall: false, wide: true },
      { src: '/images/gallery/gallery-04.svg', caption: 'Cuisine équipée · Sanary', alt: 'Cuisine équipée d\'un logement à Sanary-sur-Mer', tall: false, wide: false },
      { src: '/images/gallery/gallery-05.svg', caption: 'Pièce de vie · Cassis', alt: 'Pièce de vie d\'une location de vacances à Cassis', tall: false, wide: true },
      { src: '/images/gallery/gallery-06.svg', caption: 'Salon lumineux · Bandol', alt: 'Salon lumineux d\'un bien géré à Bandol', tall: false, wide: false },
      { src: '/images/gallery/gallery-07.svg', caption: 'Salon cosy · La Ciotat', alt: 'Salon cosy d\'un appartement à La Ciotat', tall: false, wide: false },
      { src: '/images/gallery/gallery-08.svg', caption: 'Chambre vue mer · Cassis', alt: 'Chambre avec vue mer à Cassis', tall: false, wide: false },
      { src: '/images/gallery/gallery-09.svg', caption: 'Terrasse ensoleillée · Bandol', alt: 'Terrasse ensoleillée d\'une location à Bandol', tall: false, wide: false },
    ] as GalleryImage[],
  },

  // ===========================================================================
  // TÉMOIGNAGES
  // ===========================================================================
  testimonials: [
    { initial: 'M', author: 'Marc', property: 'Appartement T3 · Cassis', quote: 'Je n\'ai plus à m\'occuper de rien et mes revenus ont augmenté de 30 %. Le rêve pour un propriétaire à distance.' },
    { initial: 'S', author: 'Sophie', property: 'Villa avec piscine · Bandol', quote: 'Communication impeccable et transparence totale sur les comptes. Je recommande les yeux fermés.' },
    { initial: 'N', author: 'Nathalie', property: 'Studio bord de mer · La Ciotat', quote: 'J\'hésitais à confier ma résidence secondaire. Aujourd\'hui je regrette de ne pas l\'avoir fait plus tôt.' },
    { initial: 'P', author: 'Philippe', property: 'Maison de village · Sanary', quote: 'Une équipe locale qui connaît son marché. Mon bien est loué presque toute l\'année.' },
  ] as Testimonial[],

  // ===========================================================================
  // FAQ GÉNÉRALE
  // ===========================================================================
  faq: [
    { question: 'Faut-il une autorisation de la mairie pour louer à Cassis ?', answer: 'Oui. À Cassis, la mise en location d\'un meublé de tourisme nécessite une déclaration en mairie et, selon les cas, un changement d\'usage. Nous vous accompagnons dans l\'ensemble de ces démarches administratives.' },
    { question: 'Quelle est votre commission ?', answer: 'Notre commission est unique et tout compris : 18 % des revenus locatifs, sans frais cachés. Vous ne payez que lorsque votre bien génère des revenus.' },
    { question: 'Quel taux d\'occupation puis-je espérer ?', answer: 'Sur la zone de Cassis et ses environs, nos biens affichent un taux d\'occupation moyen de 82 % sur l\'année, avec des pics à plus de 95 % en haute saison.' },
    { question: 'Y a-t-il une durée d\'engagement ?', answer: 'Non. Notre mandat est sans engagement de durée : vous restez libre de récupérer la gestion de votre bien à tout moment, avec un simple préavis.' },
    { question: 'Mon bien est-il assuré pendant les séjours ?', answer: 'Oui. Chaque séjour bénéficie d\'une assurance habitation et d\'une garantie contre les dommages. Nous sélectionnons par ailleurs les voyageurs avec soin.' },
    { question: 'Puis-je continuer à profiter de mon logement ?', answer: 'Bien sûr. Vous bloquez vos dates personnelles quand vous le souhaitez depuis votre espace propriétaire. Votre bien reste avant tout le vôtre.' },
  ] as FaqItem[],

  // ===========================================================================
  // PAGE ESTIMATION — contenu SEO sous le formulaire
  // ===========================================================================
  estimation: {
    metadata: {
      title: 'Estimation revenus location saisonnière à Cassis — Gratuit & sans engagement',
      description: 'Estimez gratuitement le potentiel de revenus de votre bien à Cassis, La Ciotat, Bandol ou Sanary-sur-Mer. Méthode locale, réponse sous 24h, aucun engagement.',
    },
    methodPoints: [
      {
        question: 'L\'emplacement influence-t-il vraiment les revenus ?',
        answer: 'C\'est le facteur n°1. La proximité de la mer, une vue dégagée, l\'accès aux calanques ou au port peuvent faire varier le prix d\'une nuitée de 30 à 50 %. Nous analysons la micro-localisation de chaque bien, pas seulement la commune.',
      },
      {
        question: 'Comment la saisonnalité est-elle prise en compte ?',
        answer: 'Sur notre secteur, la haute saison s\'étend de juin à septembre, mais les ponts de printemps, les événements locaux (Grand Prix, Fête de la Musique, marchés de Noël) et la demande croissante en basse saison génèrent des pics que nous intégrons dans notre tarification dynamique.',
      },
      {
        question: 'La capacité d\'accueil change-t-elle vraiment la donne ?',
        answer: 'Oui. Un bien pouvant accueillir 6 personnes génère en moyenne 40 % de revenus supplémentaires par rapport à un bien de 2 personnes de surface équivalente, grâce aux groupes familiaux et amicaux qui acceptent de payer plus pour rester ensemble.',
      },
      {
        question: 'La qualité du bien et du mobilier est-elle déterminante ?',
        answer: 'Absolument. Un logement bien équipé (cuisine complète, qualité du linge, terrasse ou extérieur valorisé) obtient de meilleures notes voyageurs. Ces notes renforcent le référencement sur Airbnb et Booking, et justifient des prix supérieurs à la moyenne du secteur.',
      },
    ],
    faq: [
      {
        question: 'L\'estimation est-elle vraiment gratuite ?',
        answer: 'Oui, entièrement. Aucune carte bancaire, aucun engagement, aucune contrepartie. Vous remplissez le formulaire en 2 minutes, notre équipe analyse votre bien et vous envoie une projection personnalisée par email sous 24h.',
      },
      {
        question: 'Comment calculez-vous les revenus estimés ?',
        answer: 'Nous croisons plusieurs données : la localisation exacte du bien, la saisonnalité du secteur, la capacité d\'accueil, les prix pratiqués sur des biens comparables actifs, et notre historique de plus de 320 séjours gérés depuis 2014 à Cassis et ses environs.',
      },
      {
        question: 'Y a-t-il un engagement après avoir reçu l\'estimation ?',
        answer: 'Aucun. L\'estimation est un premier échange, sans engagement de votre part. Si vous souhaitez aller plus loin, nous vous proposons une visite et un mandat sans durée d\'engagement minimum. Vous restez libre à chaque étape.',
      },
      {
        question: 'Sous quel délai est-ce que je reçois mon estimation ?',
        answer: 'Nous nous engageons à vous répondre sous 24 heures ouvrées. En haute saison (juin–septembre), le délai peut exceptionnellement atteindre 48h. Vous recevrez une notification dès que votre estimation est prête.',
      },
      {
        question: 'Sur quelle base est calculé votre taux d\'occupation annoncé ?',
        answer: 'Notre taux moyen de 82 % est calculé sur l\'ensemble du portefeuille géré depuis 2014, toutes villes et saisons confondues. Les biens bénéficiant d\'un emplacement premium et d\'annonces optimisées dépassent régulièrement 90 % en haute saison.',
      },
    ],
    seoText: `Azur Conciergerie propose des estimations de revenus locatifs gratuites et personnalisées pour les propriétaires de logements sur le littoral méditerranéen. Que votre bien se situe à Cassis, La Ciotat, Bandol ou Sanary-sur-Mer, notre équipe combine analyse de marché, données de saisonnalité et historique local pour vous fournir une projection réaliste de votre potentiel en location saisonnière. Avec plus de 320 séjours gérés depuis 2014 et un taux d\'occupation moyen de 82 %, nous disposons des données terrain nécessaires pour vous accompagner dans votre projet. L\'estimation est entièrement gratuite, sans engagement, et vous recevez votre réponse sous 24 heures.`,
  },

  // ===========================================================================
  // PAGE ZONES — contenu SEO et FAQ géographique
  // ===========================================================================
  zones: {
    seoText: `Azur Conciergerie intervient sur l'ensemble du littoral entre Cassis et Sanary-sur-Mer. Notre présence locale dans ces quatre communes nous permet de vous offrir une connaissance fine du marché, des artisans et des prestataires sur chaque secteur. Que votre bien se situe en bord de mer, en centre-ville ou dans les hauteurs, notre équipe est disponible pour intervenir rapidement et assurer une gestion de qualité. Nous accompagnons les propriétaires résidents comme ceux qui gèrent leur bien à distance, depuis toute la France ou l'étranger.`,
    faq: [
      {
        question: 'Dans quelles villes intervenez-vous ?',
        answer: 'Nous gérons des locations saisonnières à Cassis, La Ciotat, Bandol et Sanary-sur-Mer. Ces quatre destinations couvrent l\'ensemble de la Côte Bleue et du littoral varois entre Marseille et Toulon.',
      },
      {
        question: 'Intervenez-vous pour les propriétaires qui n\'habitent pas sur place ?',
        answer: 'Oui. La majorité de nos propriétaires gèrent leur bien à distance. Nous prenons en charge l\'ensemble des opérations locales — accueil des voyageurs, ménage, maintenance — et vous envoyons un reporting mensuel complet.',
      },
      {
        question: 'Pouvez-vous étendre votre zone à d\'autres communes ?',
        answer: 'Nous étudions les demandes au cas par cas pour les biens situés à proximité de nos zones d\'intervention actuelles. Contactez-nous pour que nous évaluions la faisabilité selon la localisation de votre bien.',
      },
    ] as FaqItem[],
  },

  // ===========================================================================
  // VILLES — AJOUTER UNE ENTRÉE = UNE NOUVELLE PAGE /conciergerie-[slug]
  // ===========================================================================
  cities: [
    {
      slug: 'cassis',
      name: 'Cassis',
      heroImage: '/images/cities/cassis.svg',
      heroImageAlt: 'Conciergerie Airbnb à Cassis — port et calanques',
      badge: 'Côte Bleue · Cassis',
      headline: 'Conciergerie Airbnb à Cassis',
      subline: 'Confiez la gestion de votre location saisonnière à une équipe locale. Annonces, voyageurs, ménage et optimisation des prix — vous encaissez, sans contrainte.',
      stats: [
        { value: '+320', unit: '', label: 'séjours gérés depuis 2014' },
        { value: '4,9', unit: '/5', label: 'note moyenne des voyageurs' },
        { value: '82', unit: '%', label: 'de taux d\'occupation à Cassis' },
        { value: '18', unit: '%', label: 'commission unique, tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Cassis ?',
      whyLead: 'Entre calanques classées et port de pêche, Cassis attire une clientèle haut de gamme toute l\'année. Une destination où la demande dépasse largement l\'offre.',
      whyBody: 'La saison s\'étire d\'avril à octobre, avec des pics autour des événements locaux et des ponts. Résultat : un taux d\'occupation élevé et des nuitées parmi les plus valorisées de la région.',
      whyImage: '/images/market/cassis.svg',
      whyImageAlt: 'Marché de la location saisonnière à Cassis',
      whyStats: [
        { value: '198 €', label: 'nuitée moyenne en haute saison' },
        { value: '7 mois', label: 'de forte demande locative' },
        { value: '+12 %', label: 'de fréquentation sur 3 ans' },
        { value: '< 5 min', label: 'des plages et des calanques' },
      ],
      faq: [
        {
          question: 'Faut-il une autorisation spécifique pour louer en saisonnier à Cassis ?',
          answer: 'Oui. Cassis exige une déclaration de meublé de tourisme en mairie (formulaire Cerfa 14004). Dans les zones soumises au changement d\'usage (centre-ville, secteurs protégés), une autorisation préalable peut être requise. Azur Conciergerie vous accompagne dans toutes ces démarches administratives.',
        },
        {
          question: 'Quelle est la saisonnalité d\'une location Airbnb à Cassis ?',
          answer: 'La haute saison s\'étend de mi-juin à mi-septembre, avec des taux d\'occupation proches de 95 %. La saison intermédiaire (avril-mai et octobre) reste très active grâce aux randonneurs des Calanques et aux week-ends prolongés. Certains événements locaux (rallye, fêtes de la mer) génèrent des pics inattendus en hiver.',
        },
        {
          question: 'Quel taux d\'occupation peut-on espérer pour un Airbnb à Cassis ?',
          answer: 'Nos biens gérés à Cassis affichent en moyenne 82 % de taux d\'occupation annuel, et plus de 90 % en haute saison. Ce résultat s\'explique par une demande locative qui dépasse structurellement l\'offre disponible sur cette commune classée.',
        },
        {
          question: 'Quels types de biens gérez-vous à Cassis ?',
          answer: 'Nous gérons tous types de biens : studios, appartements T2 et T3, maisons et villas avec ou sans piscine. La clientèle cassidaine étant exigeante, nous recommandons un niveau de prestations premium pour maximiser les revenus et les avis cinq étoiles.',
        },
        {
          question: 'Gérez-vous aussi des biens dans les communes proches de Cassis ?',
          answer: 'Oui. Nous intervenons également à La Ciotat, Carnoux-en-Provence et dans les secteurs proches des Calanques côté Marseille. Si votre bien est situé à moins de 30 minutes de Cassis, contactez-nous pour évaluer la faisabilité.',
        },
        {
          question: 'Quelle est votre commission pour la gestion locative à Cassis ?',
          answer: 'Notre commission est de 18 % des revenus encaissés, tout compris : création et optimisation des annonces, gestion des voyageurs 24h/24, ménage, linge, maintenance courante et reporting mensuel. Aucun frais caché ni engagement de durée.',
        },
      ],
      seo: {
        title: 'Conciergerie Airbnb à Cassis — Gestion location saisonnière | Azur Conciergerie',
        description: 'Confiez la gestion de votre Airbnb à Cassis à Azur Conciergerie : estimation gratuite, gestion clé en main, 82 % de taux d\'occupation moyen. Commission unique 18 %.',
        textBlock: 'Cassis, joyau des Calanques de Provence, est l\'une des destinations les plus prisées du littoral méditerranéen français. Nichée entre les falaises calcaires et la mer turquoise, cette commune de 8 000 habitants attire chaque année des centaines de milliers de visiteurs venus du monde entier. Pour les propriétaires d\'appartements ou de villas, cette attractivité se traduit par un potentiel locatif exceptionnel. Confier son bien à une conciergerie spécialisée comme Azur Conciergerie permet de maximiser ses revenus tout en profitant d\'une gestion entièrement déléguée.',
      },
    },
    {
      slug: 'la-ciotat',
      name: 'La Ciotat',
      heroImage: '/images/cities/la-ciotat.svg',
      heroImageAlt: 'Conciergerie Airbnb à La Ciotat — port et plage du Mugel',
      badge: 'Côte Bleue · La Ciotat',
      headline: 'Conciergerie Airbnb à La Ciotat',
      subline: 'Confiez la gestion de votre location saisonnière à une équipe locale. Annonces, voyageurs, ménage et optimisation des prix — vous encaissez, sans contrainte.',
      stats: [
        { value: '+320', unit: '', label: 'séjours gérés depuis 2014' },
        { value: '4,9', unit: '/5', label: 'note moyenne des voyageurs' },
        { value: '84', unit: '%', label: 'de taux d\'occupation à La Ciotat' },
        { value: '18', unit: '%', label: 'commission unique, tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à La Ciotat ?',
      whyLead: 'Port historique, plus grand chantier naval de plaisance de Méditerranée et plages du Mugel : La Ciotat attire une clientèle familiale et internationale sur une saison qui s\'allonge d\'année en année.',
      whyBody: 'Moins saturée que ses voisines mais tout aussi recherchée, la ville offre un excellent rapport entre prix d\'acquisition et rendement locatif. La proximité du parc national des Calanques et de Cassis prolonge la demande au printemps et à l\'automne.',
      whyImage: '/images/market/la-ciotat.svg',
      whyImageAlt: 'Marché de la location saisonnière à La Ciotat',
      whyStats: [
        { value: '172 €', label: 'nuitée moyenne en haute saison' },
        { value: '84 %', label: 'de taux d\'occupation estival' },
        { value: '6 mois', label: 'de forte demande locative' },
        { value: '+15 %', label: 'de fréquentation sur 3 ans' },
      ],
      faq: [
        {
          question: 'Faut-il déclarer son bien en mairie à La Ciotat pour la location saisonnière ?',
          answer: 'Oui. La Ciotat impose une déclaration de meublé de tourisme en mairie (Cerfa 14004), obligatoire avant toute mise en location. Pour certains biens en secteur soumis au changement d\'usage (centre-ville, zones protégées), une autorisation supplémentaire peut être nécessaire. Azur Conciergerie vous accompagne dans ces démarches.',
        },
        {
          question: 'Quelle est la saisonnalité des locations à La Ciotat ?',
          answer: 'La saison forte court de mai à septembre. La proximité avec Cassis et le parc des Calanques prolonge la demande en avril et octobre. La clientèle d\'affaires liée au chantier naval génère une occupation hivernale régulière, ce qui allonge la saison par rapport à d\'autres communes du littoral.',
        },
        {
          question: 'Quel taux d\'occupation peut-on espérer pour un Airbnb à La Ciotat ?',
          answer: 'Nos propriétaires à La Ciotat atteignent en moyenne 84 % de taux d\'occupation annuel. La demande est soutenue par la double attractivité touristique et économique de la ville, avec des pics en juillet-août et des séjours courts réguliers toute l\'année.',
        },
        {
          question: 'Quels types de biens peut-on rentabiliser en location saisonnière à La Ciotat ?',
          answer: 'Les appartements avec vue mer ou proches du port sont les plus demandés. Les maisons avec jardin ou terrasse séduisent les familles. Les studios et T2 bien situés plaisent à la clientèle professionnelle. Nous adaptons notre stratégie tarifaire au profil de chaque bien.',
        },
        {
          question: 'Gérez-vous aussi des biens à Ceyreste, Saint-Cyr-sur-Mer ou dans les communes proches ?',
          answer: 'Oui, nous intervenons sur les communes limitrophes de La Ciotat : Ceyreste, Cassis, Saint-Cyr-sur-Mer (Les Lecques) et une partie du secteur Aubagne-littoral. Contactez-nous avec l\'adresse de votre bien pour confirmer la prise en charge.',
        },
        {
          question: 'Quelle est la commission pour la gestion de mon Airbnb à La Ciotat ?',
          answer: 'Notre tarif unique est de 18 % des revenus encaissés, sans frais d\'entrée ni engagement de durée. Ce forfait comprend la création des annonces, la gestion complète des voyageurs, le ménage professionnel, la gestion du linge et un reporting mensuel détaillé.',
        },
      ],
      seo: {
        title: 'Conciergerie Airbnb à La Ciotat — Gestion location saisonnière | Azur Conciergerie',
        description: 'Gestion complète de votre Airbnb à La Ciotat : estimation gratuite, 84 % de taux d\'occupation, commission unique 18 %. Azur Conciergerie, votre équipe locale.',
        textBlock: 'La Ciotat, ville emblématique de la Côte Bleue, conjugue patrimoine maritime, paysages calanquais et dynamisme économique. Avec son chantier naval réputé, ses plages familiales et sa proximité immédiate avec Cassis et Marseille, la ville attire une clientèle diverse : touristes estivaux, familles, professionnels en déplacement. Pour un propriétaire, cet attrait se traduit par des taux d\'occupation élevés et des revenus locatifs réguliers tout au long de l\'année.',
      },
    },
    {
      slug: 'bandol',
      name: 'Bandol',
      heroImage: '/images/cities/bandol.svg',
      heroImageAlt: 'Conciergerie Airbnb à Bandol — port de plaisance et plage',
      badge: 'Var · Bandol',
      headline: 'Conciergerie Airbnb à Bandol',
      subline: 'Gestion clé en main de votre location saisonnière à Bandol. Revenus optimisés, zéro contrainte.',
      stats: [
        { value: '+320', unit: '', label: 'séjours gérés depuis 2014' },
        { value: '4,9', unit: '/5', label: 'note moyenne des voyageurs' },
        { value: '80', unit: '%', label: 'de taux d\'occupation à Bandol' },
        { value: '18', unit: '%', label: 'commission unique, tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Bandol ?',
      whyLead: 'Bandol, capitale du rosé et de la plaisance varoise, combine plage en arc de cercle, casino et vignobles classés. Une clientèle aisée en quête d\'authenticité méditerranéenne.',
      whyBody: 'Le port de plaisance et la promenade animée assurent une fréquentation quasi annuelle. Le vignoble AOC Bandol, l\'île de Bendor et les calanques voisines prolongent la saison au-delà de l\'été.',
      whyImage: '/images/market/bandol.svg',
      whyImageAlt: 'Marché de la location saisonnière à Bandol',
      whyStats: [
        { value: '165 €', label: 'nuitée moyenne en haute saison' },
        { value: '80 %', label: 'de taux d\'occupation estival' },
        { value: '6 mois', label: 'de forte demande locative' },
        { value: '+10 %', label: 'de fréquentation sur 3 ans' },
      ],
      faq: [
        {
          question: 'Y a-t-il des règles spécifiques à Bandol pour la location saisonnière ?',
          answer: 'Comme dans toutes les communes du littoral varois, une déclaration de meublé de tourisme en mairie est obligatoire. La limite des 120 nuitées par an s\'applique aux résidences principales. Pour les résidences secondaires, il n\'y a pas de plafond de nuitées, mais un changement d\'usage peut être requis dans certains secteurs.',
        },
        {
          question: 'Quelle est la saisonnalité d\'une location Airbnb à Bandol ?',
          answer: 'Bandol connaît une haute saison de juin à septembre avec une demande très forte autour du festival des Caves du Roy et des régates. La proximité du vignoble AOC Bandol et de l\'île de Bendor prolonge la saison en mai et octobre. Des pics hivernaux sont observés lors des Fêtes du Millésime et des week-ends gastronomiques.',
        },
        {
          question: 'Quel taux d\'occupation moyen observe-t-on à Bandol ?',
          answer: 'Nos biens gérés à Bandol affichent environ 80 % de taux d\'occupation annuel. Les logements proches du port ou avec vue mer dépassent régulièrement 90 % en haute saison. L\'optimisation dynamique des prix que nous pratiquons permet de maximiser les revenus même en basse saison.',
        },
        {
          question: 'Quels types de biens gérez-vous à Bandol ?',
          answer: 'Nous gérons des appartements (du studio au T3), des villas avec piscine et des maisons de caractère. Les biens à proximité du front de mer, du casino et du marché provençal sont particulièrement recherchés. Nous adaptons chaque annonce pour attirer la clientèle cible du bien.',
        },
        {
          question: 'Gérez-vous aussi des biens à Sanary-sur-Mer, La Cadière-d\'Azur ou Saint-Cyr ?',
          answer: 'Oui. Notre zone d\'intervention couvre Bandol et ses communes voisines : Sanary-sur-Mer, Ollioules, La Cadière-d\'Azur et Saint-Cyr-sur-Mer. Si votre bien est dans ce périmètre, contactez-nous pour une estimation de revenus gratuite.',
        },
        {
          question: 'Quelle est votre commission pour gérer un Airbnb à Bandol ?',
          answer: 'Notre commission est de 18 % des revenus locatifs encaissés, tout inclus. Pas de frais de mise en place, pas d\'engagement minimum. Nous nous rémunérons uniquement sur les locations réalisées, ce qui aligne nos intérêts avec les vôtres.',
        },
      ],
      seo: {
        title: 'Conciergerie Airbnb à Bandol — Gestion location saisonnière | Azur Conciergerie',
        description: 'Azur Conciergerie gère votre Airbnb à Bandol : gestion complète, 80 % de taux d\'occupation, commission unique. Estimation gratuite.',
        textBlock: 'Bandol, perle du Var, séduit par son port de plaisance pittoresque, sa plage en croissant et son vignoble d\'exception. La station balnéaire attire une clientèle française et européenne recherchant authenticité et qualité de vie méditerranéenne. Pour les propriétaires, le marché locatif bandolais offre un excellent rendement grâce à une demande soutenue de juin à septembre et des créneaux hivernaux portés par les courts séjours et la clientèle d\'affaires.',
      },
    },
    {
      slug: 'sanary-sur-mer',
      name: 'Sanary-sur-Mer',
      heroImage: '/images/cities/sanary-sur-mer.svg',
      heroImageAlt: 'Conciergerie Airbnb à Sanary-sur-Mer — port coloré',
      badge: 'Var · Sanary-sur-Mer',
      headline: 'Conciergerie Airbnb à Sanary-sur-Mer',
      subline: 'Votre location saisonnière à Sanary gérée de A à Z. Annonces, voyageurs, ménage — vous encaissez.',
      stats: [
        { value: '+320', unit: '', label: 'séjours gérés depuis 2014' },
        { value: '4,9', unit: '/5', label: 'note moyenne des voyageurs' },
        { value: '78', unit: '%', label: 'de taux d\'occupation à Sanary' },
        { value: '18', unit: '%', label: 'commission unique, tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Sanary-sur-Mer ?',
      whyLead: 'Sanary-sur-Mer, "la plus jolie ville du Var" selon Aldous Huxley, séduit par son port coloré, ses ruelles provençales et ses criques cachées. Une clientèle familiale fidèle et attachée à la destination.',
      whyBody: 'Le marché locatif sanaryais se distingue par une forte clientèle de fidèles qui reviennent chaque année, garantissant un taux d\'occupation régulier. La proximité du Castellet et du circuit Paul Ricard génère des pics en mai et juin.',
      whyImage: '/images/market/sanary-sur-mer.svg',
      whyImageAlt: 'Marché de la location saisonnière à Sanary-sur-Mer',
      whyStats: [
        { value: '148 €', label: 'nuitée moyenne en haute saison' },
        { value: '78 %', label: 'de taux d\'occupation estival' },
        { value: '5 mois', label: 'de forte demande locative' },
        { value: '+8 %', label: 'de fréquentation sur 3 ans' },
      ],
      faq: [
        {
          question: 'Quelles sont les obligations réglementaires pour louer en saisonnier à Sanary-sur-Mer ?',
          answer: 'La déclaration de meublé de tourisme en mairie est obligatoire (Cerfa 14004). Sanary-sur-Mer applique les règles nationales sans restriction supplémentaire pour les résidences secondaires. La limite de 120 nuitées par an s\'applique aux résidences principales. Nous gérons ces formalités pour vous.',
        },
        {
          question: 'Quelle est la saisonnalité des locations à Sanary-sur-Mer ?',
          answer: 'La haute saison court de juin à septembre. Des pics de demande se produisent en mai lors du Grand Prix de Formule 1 du Castellet (circuit Paul Ricard à 15 km) et pendant les Fêtes de la Saint-Pierre (juillet). L\'arrière-saison (octobre) reste active grâce à une clientèle fidèle qui revient chaque année.',
        },
        {
          question: 'Quel taux d\'occupation peut-on espérer pour un Airbnb à Sanary-sur-Mer ?',
          answer: 'Nos propriétaires sanaryais atteignent en moyenne 78 % de taux d\'occupation annuel. La clientèle très fidèle de Sanary génère des réservations récurrentes d\'une année sur l\'autre, ce qui stabilise les revenus et améliore la note voyageurs dans le temps.',
        },
        {
          question: 'Quels types de biens peut-on louer en saisonnier à Sanary-sur-Mer ?',
          answer: 'Les maisons provençales avec jardin, les appartements proches du port et les mas sur les hauteurs sont très prisés. La clientèle familiale cherche souvent des biens avec extérieur et stationnement. Nous gérons aussi bien des studios que des villas jusqu\'à 8 personnes.',
        },
        {
          question: 'Gérez-vous des biens à Bandol, Ollioules ou Les Lecques (Saint-Cyr-sur-Mer) ?',
          answer: 'Oui. Notre zone d\'intervention couvre Sanary-sur-Mer et les communes limitrophes : Bandol, Ollioules, Saint-Cyr-sur-Mer et ses plages des Lecques, et une partie du secteur Six-Fours. Nous évaluons chaque bien au cas par cas selon sa localisation.',
        },
        {
          question: 'Quelle est la commission pour la gestion locative à Sanary-sur-Mer ?',
          answer: 'Notre commission unique de 18 % des revenus encaissés comprend la gestion intégrale : annonces multi-plateformes, tarification dynamique, accueil des voyageurs, ménage et linge professionnel, maintenance et reporting mensuel. Sans frais fixes ni engagement de durée.',
        },
      ],
      seo: {
        title: 'Conciergerie Airbnb à Sanary-sur-Mer — Gestion location saisonnière | Azur Conciergerie',
        description: 'Confiez votre Airbnb à Sanary-sur-Mer à Azur Conciergerie. Gestion clé en main, revenus optimisés, 78 % de taux d\'occupation moyen.',
        textBlock: 'Sanary-sur-Mer, cité provençale au charme intact, est l\'une des destinations préférées des familles sur le littoral varois. Son port aux barques colorées, ses marchés animés et ses criques sauvages en font une destination où l\'on aime revenir. Pour un propriétaire, ce fidélité de la clientèle se traduit par des taux de remplissage stables et des avis voyageurs excellents, gages de revenus locatifs réguliers.',
      },
    },
  ] as City[],

} as const

// export type SiteConfigAzurDemo = typeof siteConfigAzurDemo

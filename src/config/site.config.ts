// =============================================================================
// DÉMO — CONCIERGERIE DU LAC (Annecy) — palette bleu nuit & or
// Régénéré après refonte template (RevealObserver, blocs SEO par ville, images <img>+alt)
// =============================================================================

import type {
  SiteTheme, HeroVariant, ServicesVariant,
  TestimonialsVariant, TestimonialsMode, GalleryVariant, ContactVariant, TeamVariant, CookieBannerMode,
  Stat, TrustBadge, Service, Step, WhyCityData,
  GalleryImage, Testimonial, FaqItem, TeamMember, SeoBlock, City, NavItem
} from '@/types'

export const siteConfig = {

  identity: {
    name: 'Conciergerie du Lac',
    tagline: 'Conciergerie location saisonnière au lac d’Annecy',
    logoImage: '',
    logoTitle: 'Conciergerie',
    logoSubtitle: 'du Lac',
    logoInitial: 'C',
    baseCity: 'Annecy',
    foundedYear: 2017,
    heroBadge: 'Depuis 2017 · Lac d’Annecy',
  },

  propertyTypes: ['Studio', 'Appartement T2', 'Appartement T3 et +', 'Maison', 'Villa', 'Autre'],

  theme: {
    colors: {
      bg: '#F5F3EE', surface: '#FFFFFF', surface2: '#E9E6DC',
      ink: '#1B2A3A', inkSoft: '#2A3D52', text: '#3A4351', muted: '#75808C',
      line: '#DCD9CF', accent: '#C2A24E', accentDark: '#9E8235', accentTint: '#EFE7D0',
      accentForeground: '#1B2A3A', onDark: '#F4F1EA', onDarkMuted: '#A9B6C4',
      darkBg: '#1B2A3A', darkBg2: '#142233',
    },
    fonts: {
      display: 'Fraunces', displayFallback: 'Georgia, serif',
      body: 'DM Sans', bodyFallback: 'system-ui, sans-serif',
    },
  } as SiteTheme,

  variants: {
    hero: 'plein' as HeroVariant,
    services: 'liste-alternee' as ServicesVariant,
    testimonials: 'carrousel' as TestimonialsVariant,
    gallery: 'mosaique' as GalleryVariant,
    contact: 'compact' as ContactVariant,
  },

  company: {
    name: 'Conciergerie du Lac', legalForm: 'SAS', capital: '10 000 €',
    siret: '000 000 000 00000', address: '15 rue Royale', zipCode: '74000', city: 'Annecy',
    phone: '+33000000000', phoneDisplay: '00 00 00 00 00',
    email: 'contact@conciergerie-du-lac.fr', hours: 'Lun – Sam · 9h – 19h',
    carteProNumber: '', rcPro: '', website: 'https://example.fr',
    emailDestinataire: 'contact@conciergerie-du-lac.fr',
  },

  seo: {
    siteUrl: 'https://example.fr',
    defaultTitle: 'Conciergerie du Lac — Conciergerie Airbnb à Annecy',
    defaultDescription: 'Conciergerie du Lac gère votre location saisonnière de A à Z à Annecy et autour du lac : annonces, voyageurs, ménage, revenus. Vous percevez, on s’occupe du reste.',
    ogImage: '/og-image.jpg',
  },

  integrations: { gtmId: '', cookieBanner: 'maison' as CookieBannerMode, cookieYesId: '' },
  social: { instagram: '', facebook: '', linkedin: '' },
  calendly: { url: '' },
  whatsapp: { number: '', message: 'Bonjour, je souhaite une estimation pour mon bien au lac d’Annecy.' },

  nav: [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Estimation', href: '/estimation' },
    { label: 'Zones', href: '/zones' },
    { label: 'Contact', href: '/contact' },
  ] as NavItem[],

  stats: [
    { value: '+450', unit: '',   label: 'biens gérés au lac d’Annecy' },
    { value: '4,9',  unit: '/5', label: 'note moyenne des voyageurs' },
    { value: '86',   unit: '%',  label: 'de taux d’occupation moyen' },
    { value: '20',   unit: '%',  label: 'commission unique, tout compris' },
  ] as Stat[],

  trustBadges: [
    { icon: 'shield', label: 'Assurance habitation incluse' },
    { icon: 'card',   label: 'Standing hôtelier 5 étoiles' },
    { icon: 'check',  label: 'Sans engagement de durée' },
    { icon: 'clock',  label: 'Réponse voyageurs 24/7' },
  ] as TrustBadge[],

  copy: {
    footerTagline: 'Conciergerie de location saisonnière à Annecy et autour du lac. Nous gérons votre bien comme s’il était le nôtre, avec un service de standing hôtelier.',
    servicesEyebrow: 'Nos services',
    servicesTitle: 'Que gérons-nous pour vous ?',
    servicesSubtitle: 'De la mise en ligne à l’accueil des voyageurs, nous prenons en charge l’intégralité de votre location saisonnière au lac d’Annecy.',
    howItWorksEyebrow: 'La méthode',
    howItWorksTitle: 'Comment ça se passe, concrètement ?',
    howItWorksSubtitle: 'Quatre étapes simples, de la première estimation au versement de vos revenus.',
    galleryEyebrow: 'Nos biens',
    galleryTitle: 'À quoi ressemblent les logements que nous gérons ?',
    gallerySubtitle: 'Des intérieurs lumineux et soignés, prêts à accueillir les voyageurs au bord du lac.',
    testimonialsEyebrow: 'Ils nous font confiance',
    testimonialsTitle: 'Que disent les propriétaires ?',
    testimonialsSubtitle: 'Des propriétaires qui ont retrouvé du temps libre et augmenté leurs revenus locatifs.',
    estimBandEyebrow: 'Estimation gratuite',
    estimBandSubtitle: 'Obtenez une estimation personnalisée de vos revenus locatifs en quelques clics.',
    contactBlockTitle: 'Parlons de votre projet',
    contactBlockSubtitle: 'Une question, une estimation, l’envie d’en savoir plus ? Notre équipe vous répond sous 24h.',
    estimatorCityHint: 'Nous intervenons à Annecy et tout autour du lac.',
    cityServicesEyebrow: 'Nos services',
    cityServicesTitle: 'Que gérons-nous pour vous à {ville} ?',
    cityServicesSubtitle: 'Une prise en charge complète de votre location, du premier voyageur au versement de vos revenus.',
    cityServicesCta: 'Voir tous nos services',
  },

  hero: {
    imageFull:  '/images/hero/hero-home.webp',
    imageSplit: '/images/hero/hero-split.webp',
    imageFullAlt: 'Conciergerie Airbnb au bord du lac d’Annecy',
    full: {
      title: 'Votre bien au bord du lac, géré comme un hôtel 5 étoiles',
      subtitle: 'De la mise en ligne à l’accueil des voyageurs, Conciergerie du Lac gère votre location saisonnière de A à Z à Annecy et autour du lac. Vous percevez vos revenus, on s’occupe du reste.',
    },
    light: {
      title: 'Votre conciergerie au lac d’Annecy',
      subtitle: 'On s’occupe de tout, vous percevez vos revenus.',
    },
    split: {
      title: 'Votre bien au bord du lac, géré comme un hôtel',
      subtitle: 'Conciergerie du Lac gère votre location saisonnière de A à Z à Annecy.',
      floatValue: '86%', floatLabel: 'de taux d’occupation moyen sur nos biens',
    },
  },

  services: [
    { icon: 'photo', num: '01', category: 'Visibilité', title: 'Annonces & photos pro',
      description: 'Nous créons et optimisons votre annonce sur toutes les plateformes (Airbnb, Booking, Abritel) avec un reportage photo professionnel qui valorise votre bien et maximise les réservations.',
      bullets: ['Reportage photo professionnel', 'Diffusion multi-plateformes', 'Annonce optimisée et traduite'],
      image: '/images/services/annonces-photos.webp', imageAlt: 'Création d’annonce et photos professionnelles pour une location Airbnb à Annecy' },
    { icon: 'chat', num: '02', category: 'Relation voyageurs', title: 'Gestion des voyageurs',
      description: 'Accueil personnalisé, messagerie 24/7, sélection des voyageurs : nous gérons l’intégralité de la relation pour des séjours irréprochables et des avis 5 étoiles.',
      bullets: ['Réponse en moins d’une heure', 'Assistance 24/7', 'Sélection des voyageurs'],
      image: '/images/services/gestion-voyageurs.webp', imageAlt: 'Gestion et accueil des voyageurs d’une location saisonnière à Annecy' },
    { icon: 'clean', num: '03', category: 'Entretien', title: 'Ménage & linge hôtelier',
      description: 'Ménage professionnel entre chaque séjour et linge de qualité hôtelière fourni et blanchi. Votre logement est toujours impeccable, prêt à accueillir.',
      bullets: ['Ménage entre chaque séjour', 'Linge hôtelier fourni', 'Produits d’accueil inclus'],
      image: '/images/services/menage-linge.webp', imageAlt: 'Ménage et linge hôtelier pour location saisonnière à Annecy' },
    { icon: 'key', num: '04', category: 'Logistique', title: 'Check-in / check-out',
      description: 'Remise des clés en main propre ou en autonomie, état des lieux à l’arrivée et au départ, gestion des cautions : un accueil soigné et sans souci pour vous.',
      bullets: ['État des lieux entrée/sortie', 'Remise des clés flexible', 'Gestion des cautions'],
      image: '/images/services/checkin-checkout.webp', imageAlt: 'Check-in et check-out des voyageurs à Annecy' },
    { icon: 'wrench', num: '05', category: 'Intendance', title: 'Maintenance & intendance',
      description: 'Suivi régulier du logement, gestion des petits travaux et coordination des artisans de confiance : nous veillons sur votre bien toute l’année.',
      bullets: ['Suivi technique du bien', 'Réseau d’artisans de confiance', 'Intervention rapide'],
      image: '/images/services/maintenance.webp', imageAlt: 'Maintenance et intendance d’un logement loué à Annecy' },
    { icon: 'chart', num: '06', category: 'Revenus', title: 'Optimisation des prix',
      description: 'Tarification dynamique selon la saison, les événements et la demande locale au lac d’Annecy, pour maximiser vos revenus sans jamais sacrifier le taux d’occupation.',
      bullets: ['Tarification dynamique', 'Calage sur la saisonnalité', 'Reporting mensuel clair'],
      image: '/images/services/optimisation-prix.webp', imageAlt: 'Optimisation des prix et des revenus locatifs à Annecy' },
  ] as Service[],

  steps: [
    { num: '01', title: 'Estimation', description: 'Nous estimons gratuitement le potentiel locatif de votre bien au lac d’Annecy.' },
    { num: '02', title: 'Mise en valeur', description: 'Reportage photo, création de l’annonce et mise en ligne sur les plateformes.' },
    { num: '03', title: 'Mise en ligne', description: 'Votre bien est visible et réservable. Nous gérons voyageurs et séjours.' },
    { num: '04', title: 'Vous encaissez', description: 'Vous percevez vos revenus chaque mois, avec un reporting clair et transparent.' },
  ] as Step[],

  team: {
    enabled: true,
    variant: 'portraits' as TeamVariant,
    eyebrow: 'Notre équipe',
    title: 'La personne derrière Conciergerie du Lac',
    subtitle: 'Un interlocuteur unique, local, à votre écoute toute l’année.',
    members: [
      { name: 'Théo Lacroix', role: 'Fondateur & gérant',
        description: 'Ancien hôtelier sur les rives du lac d’Annecy, Théo a créé Conciergerie du Lac pour offrir aux propriétaires un service de standing hôtelier. Il suit personnellement chaque bien confié et veille à ce que chaque séjour soit irréprochable, comme à l’hôtel.',
        image: '/images/team/membre-1.webp', imageAlt: 'Théo Lacroix, fondateur de Conciergerie du Lac à Annecy' },
    ] as TeamMember[],
  },

  ctaBand: {
    enabled: true,
    title: 'Curieux de savoir combien votre bien peut rapporter au lac d’Annecy ?',
    buttonLabel: 'Estimer mes revenus', buttonHref: '#estimation',
  },

  whyMainCity: {
    eyebrow: 'Marché local',
    title: 'Pourquoi louer son bien au bord du lac d’Annecy ?',
    lead: 'Le lac d’Annecy est l’une des destinations les plus prisées des Alpes, été comme hiver.',
    body: 'Entre la vieille ville, les plages et les sommets, Annecy attire une clientèle nationale et internationale toute l’année. Une location saisonnière bien gérée y génère des revenus nettement supérieurs à une location classique — à condition d’un service irréprochable, c’est exactement ce que nous apportons.',
    image: '/images/market/why-main.webp',
    imageAlt: 'Marché de la location saisonnière au bord du lac d’Annecy',
    stats: [
      { value: '198 €', label: 'nuitée moyenne en haute saison' },
      { value: '2 saisons', label: 'été & hiver, activité continue' },
      { value: '+38 %', label: 'de revenus vs location classique' },
      { value: '5', label: 'communes couvertes autour du lac' },
    ],
  } as WhyCityData,

  gallery: {
    images: [
      { src: '/images/gallery/gallery-01.webp', caption: 'Séjour vue lac · Annecy', alt: 'Séjour avec vue sur le lac d’Annecy dans une location gérée par Conciergerie du Lac', tall: true,  wide: false },
      { src: '/images/gallery/gallery-02.webp', caption: 'Chambre cosy', alt: 'Chambre cosy d’un logement loué à Annecy', tall: false, wide: false },
      { src: '/images/gallery/gallery-03.webp', caption: 'Terrasse face au lac', alt: 'Terrasse avec vue sur le lac d’Annecy', tall: false, wide: true  },
      { src: '/images/gallery/gallery-04.webp', caption: 'Cuisine équipée', alt: 'Cuisine équipée d’une location saisonnière à Annecy', tall: false, wide: false },
      { src: '/images/gallery/gallery-05.webp', caption: 'Salon lumineux', alt: 'Salon lumineux d’un appartement géré à Annecy', tall: false, wide: true  },
      { src: '/images/gallery/gallery-06.webp', caption: 'Salle de bain', alt: 'Salle de bain soignée d’une location à Annecy', tall: false, wide: false },
      { src: '/images/gallery/gallery-07.webp', caption: 'Coin repas', alt: 'Coin repas d’un logement loué au lac d’Annecy', tall: false, wide: false },
      { src: '/images/gallery/gallery-08.webp', caption: 'Balcon vue montagne', alt: 'Balcon avec vue sur les montagnes près du lac d’Annecy', tall: false, wide: false },
      { src: '/images/gallery/gallery-09.webp', caption: 'Entrée soignée', alt: 'Entrée soignée d’une location saisonnière à Annecy', tall: false, wide: false },
    ] as GalleryImage[],
  },

  testimonialsMode: 'global' as TestimonialsMode,
  testimonials: [
    { initial: 'M', author: 'Marc D.', property: 'Appartement T2, Annecy', quote: 'Je gère mon bien à distance depuis Lyon. Conciergerie du Lac s’occupe de tout, mes revenus ont augmenté de 30 % dès la première saison.' },
    { initial: 'S', author: 'Sophie L.', property: 'Studio, Veyrier-du-Lac', quote: 'Communication impeccable, ménage irréprochable. Mes voyageurs laissent systématiquement des avis 5 étoiles.' },
    { initial: 'J', author: 'Jean-Marc P.', property: 'Villa, Talloires', quote: 'Un interlocuteur unique, réactif et professionnel. Je recommande les yeux fermés.' },
    { initial: 'C', author: 'Claire B.', property: 'Maison, Sévrier', quote: 'J’ai retrouvé du temps libre et une tranquillité totale. Tout est géré, je n’ai qu’à encaisser.' },
  ] as Testimonial[],

  faq: [
    { question: 'Quels sont vos tarifs et votre commission à Annecy ?', answer: 'Nous appliquons une commission unique de 20 % sur les revenus générés, tout compris (annonces, voyageurs, ménage, maintenance). Aucun frais caché, aucun abonnement.' },
    { question: 'Quel taux d’occupation puis-je espérer au lac d’Annecy ?', answer: 'Nos biens affichent un taux d’occupation moyen de 86 % grâce à la double saison (été et hiver) et à notre tarification dynamique. Le résultat dépend du bien et de sa localisation.' },
    { question: 'Gérez-vous la location toute l’année ou seulement l’été ?', answer: 'Toute l’année. Le lac d’Annecy attire des voyageurs été comme hiver, ce qui permet une activité locative continue et des revenus réguliers.' },
    { question: 'Mon bien est-il assuré pendant les séjours ?', answer: 'Oui, une assurance habitation adaptée à la location saisonnière est incluse, et nous gérons les cautions pour chaque séjour.' },
    { question: 'Puis-je continuer à profiter de mon bien ?', answer: 'Bien sûr. Vous bloquez vos dates personnelles quand vous le souhaitez, et nous adaptons le calendrier en conséquence.' },
    { question: 'Y a-t-il un engagement de durée ?', answer: 'Non, nous travaillons sans engagement de durée. Vous restez libre, c’est la qualité de notre service qui vous fidélise.' },
  ] as FaqItem[],

  estimation: {
    metadata: {
      title: 'Estimation gratuite de vos revenus locatifs — Annecy',
      description: 'Estimez gratuitement le potentiel locatif de votre bien au lac d’Annecy avec Conciergerie du Lac. Réponse personnalisée sous 24h.',
    },
    methodPoints: [
      { question: 'Comment estimez-vous mes revenus ?', answer: 'Nous analysons votre bien, sa localisation au lac d’Annecy, sa capacité et les données de marché locales pour estimer vos revenus annuels.' },
      { question: 'L’estimation est-elle gratuite ?', answer: 'Oui, totalement gratuite et sans engagement. Vous recevez une estimation personnalisée sous 24h.' },
      { question: 'Combien de temps pour être en ligne ?', answer: 'Une fois le mandat signé, votre bien est généralement en ligne sous 15 jours, photos professionnelles comprises.' },
      { question: 'Dois-je m’occuper de quelque chose ?', answer: 'Non. De la photo à l’accueil voyageurs, nous gérons tout. Vous percevez simplement vos revenus.' },
    ],
    faq: [
      { question: 'L’estimation m’engage-t-elle ?', answer: 'Pas du tout. C’est une estimation gratuite et sans engagement, pour vous aider à décider.' },
      { question: 'Sur quelles communes intervenez-vous ?', answer: 'Annecy, Sévrier, Veyrier-du-Lac, Menthon-Saint-Bernard et Talloires, soit tout le tour du lac.' },
      { question: 'Quel type de bien acceptez-vous ?', answer: 'Studios, appartements, maisons et villas, du moment qu’ils se prêtent à la location saisonnière.' },
      { question: 'Quand vais-je percevoir mes premiers revenus ?', answer: 'Dès les premières réservations. Les versements sont mensuels, avec un reporting clair.' },
      { question: 'Puis-je arrêter quand je veux ?', answer: 'Oui, nous travaillons sans engagement de durée.' },
    ],
    seoText: 'Conciergerie du Lac estime gratuitement le potentiel locatif de votre bien à Annecy et autour du lac. Notre estimation s’appuie sur les données réelles du marché local et notre expérience de la location saisonnière en Haute-Savoie.',
  },

  zones: {
    metaTitle: 'Zones d’intervention — Conciergerie au lac d’Annecy',
    metaDescription: 'Conciergerie du Lac intervient sur tout le tour du lac d’Annecy : Annecy, Sévrier, Veyrier-du-Lac, Menthon-Saint-Bernard et Talloires.',
    heroEyebrow: 'Zones d’intervention',
    heroTitle: 'Où intervenons-nous ?',
    heroSubtitle: 'Conciergerie du Lac gère des locations saisonnières sur tout le tour du lac d’Annecy. Sélectionnez votre commune pour découvrir notre offre locale.',
    seoText: 'Conciergerie du Lac intervient sur tout le tour du lac d’Annecy : Annecy, Sévrier, Veyrier-du-Lac, Menthon-Saint-Bernard et Talloires. Une connaissance fine de chaque commune pour optimiser vos revenus locatifs.',
    faq: [
      { question: 'Sur quelles communes intervenez-vous autour du lac d’Annecy ?', answer: 'Nous couvrons Annecy, Sévrier, Veyrier-du-Lac, Menthon-Saint-Bernard et Talloires, soit l’ensemble du tour du lac.' },
      { question: 'Gérez-vous des biens en dehors d’Annecy ?', answer: 'Oui, nous intervenons sur toutes les communes riveraines du lac d’Annecy. Contactez-nous pour vérifier votre secteur.' },
      { question: 'Le service est-il le même dans chaque commune ?', answer: 'Oui, le même service de standing hôtelier, avec une connaissance spécifique du marché de chaque commune.' },
    ] as FaqItem[],
  },

  seoBlock: {
    enabled: true,
    title: 'Conciergerie de location saisonnière au lac d’Annecy',
    keywords: ['conciergerie Airbnb Annecy', 'gestion locative lac d’Annecy', 'location saisonnière Annecy', 'conciergerie Haute-Savoie', 'gestion Airbnb clé en main', 'ménage hôtelier Annecy'],
    paragraphs: [
      'Conciergerie du Lac est votre partenaire de gestion locative au bord du lac d’Annecy. Nous prenons en charge l’intégralité de votre location saisonnière : création et diffusion de l’annonce, photos professionnelles, accueil des voyageurs, ménage hôtelier, maintenance et optimisation des revenus. Vous percevez vos loyers, nous nous occupons de tout le reste.',
      'Que votre bien se situe à Annecy, Sévrier, Veyrier-du-Lac, Menthon-Saint-Bernard ou Talloires, notre équipe locale connaît parfaitement le marché de chaque commune du lac. Cette expertise nous permet d’appliquer une tarification dynamique et d’atteindre un taux d’occupation moyen de 86 %, été comme hiver.',
      'Faire appel à une conciergerie spécialisée dans la location courte durée au lac d’Annecy, c’est gagner du temps, augmenter vos revenus locatifs et offrir à vos voyageurs un séjour de standing hôtelier. Contactez-nous pour une estimation gratuite et sans engagement de vos revenus.',
    ],
  } as SeoBlock,

  cities: [
    {
      slug: 'annecy', name: 'Annecy',
      heroImage: '/images/cities/annecy.webp',
      heroImageAlt: 'Conciergerie Airbnb dans la vieille ville d’Annecy',
      badge: 'Lac d’Annecy · Annecy',
      headline: 'Conciergerie Airbnb à Annecy',
      subline: 'Confiez votre location saisonnière à Annecy à une équipe locale. Nous gérons tout, vous percevez vos revenus.',
      stats: [
        { value: '+450', unit: '',   label: 'biens gérés au lac' },
        { value: '4,9',  unit: '/5', label: 'note des voyageurs' },
        { value: '86',   unit: '%',  label: 'taux d’occupation moyen' },
        { value: '20',   unit: '%',  label: 'commission tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Annecy ?',
      whyLead: 'Capitale du lac, Annecy attire des voyageurs toute l’année, entre vieille ville, canaux et plages.',
      whyBody: 'La « Venise des Alpes » est l’une des villes les plus visitées de France. Sa vieille ville, ses canaux fleuris et ses plages en font une destination de courts séjours très demandée, été comme hiver. Du Pâquier au Vieil Annecy en passant par les Marquisats, chaque quartier attire une clientèle spécifique. Une location saisonnière bien gérée y atteint des taux d’occupation élevés et des revenus nettement supérieurs à une location classique.',
      whyImage: '/images/market/why-main.webp',
      whyImageAlt: 'Marché de la location saisonnière à Annecy',
      whyStats: [
        { value: '198 €', label: 'nuitée moyenne haute saison' },
        { value: '2 saisons', label: 'été & hiver' },
        { value: '+38 %', label: 'vs location classique' },
        { value: '4,9/5', label: 'satisfaction voyageurs' },
      ],
      faq: [
        { question: 'Combien puis-je gagner avec ma location saisonnière à Annecy ?', answer: 'Cela dépend du bien et du quartier, mais nos propriétaires à Annecy constatent en moyenne +38 % de revenus par rapport à une location classique, grâce à la double saison et à notre tarification dynamique.' },
        { question: 'Gérez-vous les locations toute l’année à Annecy ?', answer: 'Oui. Annecy attire des visiteurs été comme hiver, grâce au lac, à la vieille ville et à la proximité des stations de ski. L’activité locative est donc continue toute l’année.' },
        { question: 'Quel quartier d’Annecy est le plus demandé ?', answer: 'Le Vieil Annecy et les abords du lac (le Pâquier, les Marquisats) sont les plus prisés, mais tous les secteurs bien situés trouvent leur public. Nous adaptons la stratégie tarifaire à l’emplacement de votre bien.' },
        { question: 'Proposez-vous un service de ménage à Annecy ?', answer: 'Oui, un ménage professionnel et du linge hôtelier sont assurés entre chaque séjour, partout à Annecy et autour du lac.' },
        { question: 'Comment se passe l’accueil des voyageurs à Annecy ?', answer: 'Nous assurons un accueil personnalisé, en main propre ou en autonomie selon votre bien, avec une assistance 24/7 pendant tout le séjour des voyageurs.' },
        { question: 'Y a-t-il un engagement pour confier mon bien à Annecy ?', answer: 'Non, nous travaillons sans engagement de durée à Annecy comme sur tout le lac. C’est la qualité de notre service qui vous fidélise.' },
      ],
      testimonials: [] as Testimonial[],
      seoBlock: {
        title: 'Conciergerie Airbnb à Annecy : votre location gérée de A à Z',
        keywords: ['conciergerie Airbnb Annecy', 'gestion locative Annecy', 'location saisonnière vieille ville Annecy', 'ménage location Annecy', 'conciergerie lac Annecy'],
        paragraphs: [
          'Au cœur de la « Venise des Alpes », Conciergerie du Lac gère votre location saisonnière à Annecy de la première photo au versement de vos revenus. Vieille ville, bords du lac, quartiers résidentiels : nous connaissons chaque secteur d’Annecy et adaptons votre annonce pour capter une clientèle française et internationale toute l’année.',
          'Annecy est l’une des villes les plus visitées de France, avec une demande locative forte été comme hiver. En confiant votre bien à notre équipe locale, vous bénéficiez d’une tarification optimisée, d’un ménage de standing hôtelier et d’un accueil voyageurs irréprochable, pour des revenus supérieurs à une location classique.',
          'De la gestion des annonces multi-plateformes (Airbnb, Booking, Abritel) à la maintenance de votre logement, nous prenons tout en charge. Vous gardez la liberté de bloquer vos dates personnelles et profitez d’un reporting clair chaque mois. Demandez votre estimation gratuite des revenus de votre bien à Annecy.',
        ],
      },
      seo: {
        title: 'Conciergerie Airbnb à Annecy — Conciergerie du Lac',
        description: 'Conciergerie de location saisonnière à Annecy : annonces, voyageurs, ménage, revenus. Gestion complète de votre bien au bord du lac d’Annecy.',
        textBlock: 'Conciergerie du Lac est votre conciergerie de location saisonnière à Annecy. De la création de l’annonce à l’accueil des voyageurs, en passant par le ménage hôtelier et l’optimisation des revenus, nous gérons votre bien de A à Z au cœur de la « Venise des Alpes ».',
      },
    },
    {
      slug: 'sevrier', name: 'Sévrier',
      heroImage: '/images/cities/sevrier.webp',
      heroImageAlt: 'Conciergerie Airbnb à Sévrier, rive ouest du lac d’Annecy',
      badge: 'Lac d’Annecy · Sévrier',
      headline: 'Conciergerie Airbnb à Sévrier',
      subline: 'Votre location saisonnière à Sévrier gérée de A à Z, sur la rive ouest du lac d’Annecy.',
      stats: [
        { value: '+450', unit: '',   label: 'biens gérés au lac' },
        { value: '4,9',  unit: '/5', label: 'note des voyageurs' },
        { value: '88',   unit: '%',  label: 'taux d’occupation moyen' },
        { value: '20',   unit: '%',  label: 'commission tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Sévrier ?',
      whyLead: 'Sur la rive ouest du lac, Sévrier séduit les familles avec ses plages et ses pistes cyclables.',
      whyBody: 'Réputée pour ses plages et sa proximité immédiate avec Annecy, Sévrier est une destination familiale très recherchée l’été. La piste cyclable du tour du lac, les activités nautiques et le musée de la Cloche en font un point de chute idéal pour les séjours en famille, garantissant une forte demande locative en haute saison et de beaux week-ends le reste de l’année.',
      whyImage: '/images/market/why-main.webp',
      whyImageAlt: 'Marché de la location saisonnière à Sévrier au bord du lac d’Annecy',
      whyStats: [
        { value: '185 €', label: 'nuitée moyenne haute saison' },
        { value: 'Plages', label: 'destination familiale' },
        { value: '+35 %', label: 'vs location classique' },
        { value: '4,9/5', label: 'satisfaction voyageurs' },
      ],
      faq: [
        { question: 'Combien puis-je gagner avec une location à Sévrier ?', answer: 'Sévrier, très prisée des familles l’été, offre d’excellents revenus en haute saison. Nos propriétaires y constatent en moyenne +35 % par rapport à une location classique.' },
        { question: 'La demande à Sévrier est-elle seulement estivale ?', answer: 'L’été est le pic, grâce aux plages et aux activités nautiques, mais la proximité immédiate d’Annecy assure aussi des réservations au printemps, à l’automne et lors des week-ends.' },
        { question: 'Gérez-vous le ménage et l’accueil à Sévrier ?', answer: 'Oui, ménage hôtelier, linge fourni et accueil personnalisé des voyageurs sont assurés à Sévrier comme partout autour du lac.' },
        { question: 'Quel type de bien se loue le mieux à Sévrier ?', answer: 'Les logements proches des plages et adaptés aux familles (appartements spacieux, maisons avec extérieur) sont particulièrement recherchés l’été. Nous valorisons ces atouts dans votre annonce.' },
        { question: 'Mon bien est-il assuré pendant les séjours à Sévrier ?', answer: 'Oui, une assurance adaptée à la location saisonnière est incluse, et nous gérons les cautions pour chaque séjour.' },
        { question: 'Y a-t-il un engagement pour confier mon bien à Sévrier ?', answer: 'Non, aucun engagement de durée. Vous restez libre à tout moment.' },
      ],
      testimonials: [] as Testimonial[],
      seoBlock: {
        title: 'Conciergerie Airbnb à Sévrier : gestion locative sur la rive ouest',
        keywords: ['conciergerie Airbnb Sévrier', 'location saisonnière Sévrier', 'gestion locative rive ouest lac Annecy', 'location plage Sévrier', 'conciergerie familiale lac Annecy'],
        paragraphs: [
          'À Sévrier, sur la rive ouest du lac d’Annecy, Conciergerie du Lac gère votre location saisonnière auprès d’une clientèle familiale en quête de plages et d’activités nautiques. Nous valorisons les atouts de votre bien — proximité de l’eau, calme, accès à la piste cyclable — pour maximiser vos réservations en haute saison.',
          'Notre connaissance fine du marché de Sévrier nous permet d’ajuster les tarifs au plus près de la demande estivale tout en captant des séjours hors saison grâce à la proximité d’Annecy. Ménage hôtelier, accueil voyageurs et suivi du logement sont intégralement pris en charge.',
          'De la création de l’annonce à l’optimisation des prix, vous déléguez toute la gestion et percevez vos revenus sereinement. Contactez-nous pour une estimation gratuite du potentiel locatif de votre bien à Sévrier.',
        ],
      },
      seo: {
        title: 'Conciergerie Airbnb à Sévrier — Conciergerie du Lac',
        description: 'Conciergerie de location saisonnière à Sévrier, rive ouest du lac d’Annecy. Gestion complète : annonces, voyageurs, ménage, revenus.',
        textBlock: 'Conciergerie du Lac gère votre location saisonnière à Sévrier, sur la rive ouest du lac d’Annecy. Une commune familiale prisée pour ses plages, où nous prenons en charge votre bien de A à Z.',
      },
    },
    {
      slug: 'veyrier-du-lac', name: 'Veyrier-du-Lac',
      heroImage: '/images/cities/veyrier-du-lac.webp',
      heroImageAlt: 'Conciergerie Airbnb à Veyrier-du-Lac, rive est du lac d’Annecy',
      badge: 'Lac d’Annecy · Veyrier-du-Lac',
      headline: 'Conciergerie Airbnb à Veyrier-du-Lac',
      subline: 'Gestion locative haut de gamme à Veyrier-du-Lac, sur la rive est prisée du lac d’Annecy.',
      stats: [
        { value: '+450', unit: '',   label: 'biens gérés au lac' },
        { value: '4,9',  unit: '/5', label: 'note des voyageurs' },
        { value: '85',   unit: '%',  label: 'taux d’occupation moyen' },
        { value: '20',   unit: '%',  label: 'commission tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Veyrier-du-Lac ?',
      whyLead: 'Commune résidentielle chic de la rive est, Veyrier-du-Lac attire une clientèle exigeante.',
      whyBody: 'Veyrier-du-Lac est l’une des adresses les plus prisées du lac d’Annecy, réputée pour ses villas, ses vues exceptionnelles et la proximité du mont Veyrier. La clientèle y recherche des biens de standing avec prestations soignées, ce qui permet des nuitées élevées — à condition d’un service à la hauteur, notre spécialité. La demande reste soutenue en été comme lors des week-ends prolongés.',
      whyImage: '/images/market/why-main.webp',
      whyImageAlt: 'Marché de la location saisonnière à Veyrier-du-Lac au bord du lac d’Annecy',
      whyStats: [
        { value: '230 €', label: 'nuitée moyenne haute saison' },
        { value: 'Standing', label: 'clientèle exigeante' },
        { value: '+40 %', label: 'vs location classique' },
        { value: '4,9/5', label: 'satisfaction voyageurs' },
      ],
      faq: [
        { question: 'Veyrier-du-Lac est-elle une bonne commune pour louer ?', answer: 'Oui, c’est l’une des adresses les plus prisées du lac. Les biens de standing y atteignent des nuitées élevées, avec une clientèle exigeante que nous savons satisfaire.' },
        { question: 'Quel type de bien se loue le mieux à Veyrier-du-Lac ?', answer: 'Les biens avec vue sur le lac et prestations de qualité (villas, appartements haut de gamme) sont particulièrement recherchés, mais tout logement bien tenu trouve son public.' },
        { question: 'Assurez-vous un service haut de gamme à Veyrier-du-Lac ?', answer: 'Absolument, notre service de standing hôtelier — accueil soigné, linge de qualité, produits d’accueil — est particulièrement adapté à la clientèle de Veyrier-du-Lac.' },
        { question: 'Combien puis-je espérer à Veyrier-du-Lac ?', answer: 'Les biens de standing y génèrent des revenus parmi les plus élevés du lac, en moyenne +40 % vs une location classique selon nos données locales.' },
        { question: 'Gérez-vous l’accueil et le ménage à Veyrier-du-Lac ?', answer: 'Oui, de l’accueil personnalisé des voyageurs au ménage hôtelier entre chaque séjour, tout est pris en charge localement.' },
        { question: 'Y a-t-il un engagement à Veyrier-du-Lac ?', answer: 'Non, nous travaillons sans engagement de durée, ici comme sur tout le lac d’Annecy.' },
      ],
      testimonials: [] as Testimonial[],
      seoBlock: {
        title: 'Conciergerie Airbnb à Veyrier-du-Lac : gestion locative de standing',
        keywords: ['conciergerie Airbnb Veyrier-du-Lac', 'location saisonnière de standing Veyrier', 'gestion villa lac Annecy', 'location vue lac Veyrier', 'conciergerie haut de gamme Annecy'],
        paragraphs: [
          'Veyrier-du-Lac, sur la rive est du lac d’Annecy, est une adresse résidentielle prisée où la clientèle recherche des biens d’exception. Conciergerie du Lac y gère votre villa ou appartement de standing avec un niveau de service à la hauteur des attentes : accueil soigné, prestations haut de gamme et valorisation des vues sur le lac.',
          'Notre maîtrise du marché premium de Veyrier-du-Lac nous permet de positionner votre bien sur des nuitées élevées tout en préservant un fort taux d’occupation. Vous bénéficiez d’une gestion complète et discrète, pensée pour les propriétaires exigeants.',
          'De la diffusion multi-plateformes à la maintenance, en passant par la tarification dynamique, nous prenons tout en charge pour maximiser la rentabilité de votre bien à Veyrier-du-Lac. Demandez votre estimation gratuite et sans engagement.',
        ],
      },
      seo: {
        title: 'Conciergerie Airbnb à Veyrier-du-Lac — Conciergerie du Lac',
        description: 'Conciergerie de location saisonnière haut de gamme à Veyrier-du-Lac, rive est du lac d’Annecy. Gestion complète de votre bien.',
        textBlock: 'Conciergerie du Lac gère votre location saisonnière à Veyrier-du-Lac, commune résidentielle prisée de la rive est du lac d’Annecy. Un service de standing pour une clientèle exigeante.',
      },
    },
    {
      slug: 'menthon-saint-bernard', name: 'Menthon-Saint-Bernard',
      heroImage: '/images/cities/menthon-saint-bernard.webp',
      heroImageAlt: 'Conciergerie Airbnb à Menthon-Saint-Bernard au bord du lac d’Annecy',
      badge: 'Lac d’Annecy · Menthon-Saint-Bernard',
      headline: 'Conciergerie Airbnb à Menthon-Saint-Bernard',
      subline: 'Votre location saisonnière gérée de A à Z à Menthon-Saint-Bernard, au pied de son célèbre château.',
      stats: [
        { value: '+450', unit: '',   label: 'biens gérés au lac' },
        { value: '4,9',  unit: '/5', label: 'note des voyageurs' },
        { value: '85',   unit: '%',  label: 'taux d’occupation moyen' },
        { value: '20',   unit: '%',  label: 'commission tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Menthon-Saint-Bernard ?',
      whyLead: 'Dominée par son château, Menthon-Saint-Bernard charme par son cadre préservé et sa plage.',
      whyBody: 'Menthon-Saint-Bernard est une commune emblématique du lac, célèbre pour son château médiéval et sa plage. Son cadre préservé et ses paysages attirent une clientèle en quête d’authenticité et de calme, idéale pour des séjours de charme générant de beaux revenus en saison. La proximité de Talloires et d’Annecy renforce l’attrait touristique de la commune toute l’année.',
      whyImage: '/images/market/why-main.webp',
      whyImageAlt: 'Marché de la location saisonnière à Menthon-Saint-Bernard au bord du lac d’Annecy',
      whyStats: [
        { value: '210 €', label: 'nuitée moyenne haute saison' },
        { value: 'Château', label: 'cadre patrimonial' },
        { value: '+37 %', label: 'vs location classique' },
        { value: '4,9/5', label: 'satisfaction voyageurs' },
      ],
      faq: [
        { question: 'Menthon-Saint-Bernard attire-t-elle des voyageurs ?', answer: 'Oui, son château, sa plage et son cadre préservé en font une destination de charme recherchée, surtout l’été et lors des beaux week-ends.' },
        { question: 'Quel revenu espérer à Menthon-Saint-Bernard ?', answer: 'Le cadre préservé permet de belles nuitées en saison. Nos propriétaires y constatent en moyenne +37 % vs une location classique.' },
        { question: 'Gérez-vous tout sur place à Menthon-Saint-Bernard ?', answer: 'Oui, de l’accueil des voyageurs au ménage hôtelier en passant par la maintenance, tout est pris en charge localement.' },
        { question: 'Quel type de bien se loue le mieux à Menthon-Saint-Bernard ?', answer: 'Les biens de charme, avec vue sur le lac ou le château, et les logements proches de la plage sont très recherchés. Nous mettons ces atouts en avant.' },
        { question: 'La demande est-elle seulement estivale à Menthon ?', answer: 'L’été est le pic, mais les week-ends de printemps et d’automne ainsi que la proximité d’Annecy assurent une activité étalée sur l’année.' },
        { question: 'Y a-t-il un engagement à Menthon-Saint-Bernard ?', answer: 'Non, aucun engagement de durée. Vous gardez la maîtrise de votre bien à tout moment.' },
      ],
      testimonials: [] as Testimonial[],
      seoBlock: {
        title: 'Conciergerie Airbnb à Menthon-Saint-Bernard : séjours de charme',
        keywords: ['conciergerie Airbnb Menthon-Saint-Bernard', 'location saisonnière Menthon', 'gestion locative château Menthon', 'location charme lac Annecy', 'conciergerie Menthon plage'],
        paragraphs: [
          'Au pied de son célèbre château, Menthon-Saint-Bernard séduit les voyageurs en quête de calme et d’authenticité au bord du lac d’Annecy. Conciergerie du Lac met en valeur le charme de votre bien et assure une gestion complète, de la mise en ligne de l’annonce à l’accueil personnalisé des voyageurs.',
          'Grâce à notre connaissance du marché local de Menthon-Saint-Bernard, nous positionnons votre logement sur des séjours de charme à forte valeur, en haute saison comme lors des week-ends prisés. Ménage hôtelier et entretien du bien sont intégralement assurés.',
          'Vous déléguez l’ensemble de la gestion — annonces, voyageurs, tarification, maintenance — et percevez vos revenus en toute tranquillité. Demandez votre estimation gratuite pour votre bien à Menthon-Saint-Bernard.',
        ],
      },
      seo: {
        title: 'Conciergerie Airbnb à Menthon-Saint-Bernard — Conciergerie du Lac',
        description: 'Conciergerie de location saisonnière à Menthon-Saint-Bernard, au bord du lac d’Annecy. Gestion complète de votre bien de charme.',
        textBlock: 'Conciergerie du Lac gère votre location saisonnière à Menthon-Saint-Bernard, commune de charme dominée par son célèbre château, au bord du lac d’Annecy.',
      },
    },
    {
      slug: 'talloires', name: 'Talloires',
      heroImage: '/images/cities/talloires.webp',
      heroImageAlt: 'Conciergerie Airbnb à Talloires, baie du lac d’Annecy',
      badge: 'Lac d’Annecy · Talloires',
      headline: 'Conciergerie Airbnb à Talloires',
      subline: 'Gestion locative de standing à Talloires, joyau gastronomique de la rive est du lac d’Annecy.',
      stats: [
        { value: '+450', unit: '',   label: 'biens gérés au lac' },
        { value: '4,9',  unit: '/5', label: 'note des voyageurs' },
        { value: '87',   unit: '%',  label: 'taux d’occupation moyen' },
        { value: '20',   unit: '%',  label: 'commission tout compris' },
      ],
      whyTitle: 'Pourquoi louer son bien à Talloires ?',
      whyLead: 'Réputée pour sa gastronomie et sa baie, Talloires attire une clientèle haut de gamme.',
      whyBody: 'Talloires-Montmin est l’une des destinations les plus prestigieuses du lac d’Annecy, célèbre pour ses tables étoilées, son abbaye et sa baie magnifique. La clientèle y est exigeante et internationale, en quête de séjours d’exception — un terrain idéal pour des revenus locatifs élevés avec un service de standing. La Réserve naturelle du Roc de Chère et les activités nautiques renforcent l’attrait de la commune.',
      whyImage: '/images/market/why-main.webp',
      whyImageAlt: 'Marché de la location saisonnière à Talloires au bord du lac d’Annecy',
      whyStats: [
        { value: '245 €', label: 'nuitée moyenne haute saison' },
        { value: 'Gastronomie', label: 'destination prestige' },
        { value: '+42 %', label: 'vs location classique' },
        { value: '4,9/5', label: 'satisfaction voyageurs' },
      ],
      faq: [
        { question: 'Talloires est-elle rentable pour une location saisonnière ?', answer: 'Très. Destination gastronomique prestigieuse, Talloires attire une clientèle haut de gamme et permet des nuitées parmi les plus élevées du lac, en moyenne +42 % vs une location classique.' },
        { question: 'Quelle clientèle vient à Talloires ?', answer: 'Une clientèle exigeante, souvent internationale, en quête de séjours d’exception près des tables étoilées, de l’abbaye et de la baie.' },
        { question: 'Votre service convient-il aux biens de prestige à Talloires ?', answer: 'Oui, notre service de standing hôtelier — accueil haut de gamme, linge de qualité, conciergerie sur mesure — est parfaitement adapté aux biens d’exception de Talloires.' },
        { question: 'Gérez-vous le ménage et la maintenance à Talloires ?', answer: 'Oui, ménage hôtelier entre chaque séjour, linge fourni et suivi technique du logement sont intégralement assurés.' },
        { question: 'La demande est-elle continue à Talloires ?', answer: 'La haute saison estivale est le pic, mais la gastronomie et le cadre exceptionnel attirent une clientèle toute l’année, notamment pour les week-ends et séjours œnologiques.' },
        { question: 'Y a-t-il un engagement à Talloires ?', answer: 'Non, nous travaillons sans engagement de durée. La qualité de notre service haut de gamme est notre meilleur argument.' },
      ],
      testimonials: [] as Testimonial[],
      seoBlock: {
        title: 'Conciergerie Airbnb à Talloires : gestion locative d’exception',
        keywords: ['conciergerie Airbnb Talloires', 'location saisonnière prestige Talloires', 'gestion locative baie Talloires', 'location haut de gamme lac Annecy', 'conciergerie Talloires-Montmin'],
        paragraphs: [
          'Talloires-Montmin, joyau gastronomique du lac d’Annecy, accueille une clientèle internationale en quête de séjours d’exception près des tables étoilées et de sa baie magnifique. Conciergerie du Lac gère votre bien de prestige avec un service de standing hôtelier, à la hauteur des attentes les plus élevées.',
          'Notre expertise du marché premium de Talloires nous permet de positionner votre logement sur les nuitées les plus élevées du lac, tout en garantissant un accueil irréprochable et un entretien soigné. Vous profitez d’une gestion complète, discrète et rentable.',
          'Annonces multi-plateformes, tarification dynamique, accueil voyageurs et maintenance : nous prenons tout en charge pour valoriser votre bien d’exception à Talloires. Contactez-nous pour une estimation gratuite et personnalisée.',
        ],
      },
      seo: {
        title: 'Conciergerie Airbnb à Talloires — Conciergerie du Lac',
        description: 'Conciergerie de location saisonnière de standing à Talloires, joyau gastronomique du lac d’Annecy. Gestion complète de votre bien de prestige.',
        textBlock: 'Conciergerie du Lac gère votre location saisonnière à Talloires-Montmin, destination prestigieuse du lac d’Annecy réputée pour sa gastronomie. Un service d’exception pour une clientèle haut de gamme.',
      },
    },
  ] as City[],

} as const

export type SiteConfig = typeof siteConfig
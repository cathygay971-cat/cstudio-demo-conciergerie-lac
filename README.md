# CStudio — Template Conciergerie

Template Next.js 14 pour sites de conciergerie location saisonnière. Un seul fichier à modifier par client.

---

## Démarrage rapide

```bash
npm install
cp .env.example .env.local   # puis remplir les clés
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

---

## Dupliquer pour un nouveau client

### 1. Cloner le repo

```bash
git clone <ce-repo> site-client-nom
cd site-client-nom
npm install
```

### 2. Modifier `src/config/site.config.ts`

C'est **le seul fichier à toucher**. Il contient :

| Section | Ce qu'il faut changer |
|---|---|
| `identity` | Nom du site, logo (optionnel), téléphone |
| `design.palette` | `"azur"` ou `"sauge"` |
| `design.typography` | `"fraunces-dm"`, `"fraunces-inter"` ou `"playfair-dm"` |
| `variants` | 6 variantes visuelles (hero, services, témoignages, galerie…) |
| `company` | Nom légal, adresse, email, SIRET, N° carte pro, RC Pro |
| `seo` | URL du site, titre par défaut, description, OG image |
| `social` | URLs Instagram, Facebook, Airbnb (laisser vide si absent) |
| `calendly` | URL du widget Calendly (laisser vide pour masquer le bouton) |
| `nav` | Labels et liens de navigation |
| `hero` | Titre, sous-titre, CTA pour chaque variant |
| `stats` | 4 chiffres clés |
| `services` | 6 services avec icône, titre, description |
| `testimonials` | Avis clients |
| `faq` | Questions / réponses |
| `cities` | Tableau des villes couvertes (voir ci-dessous) |

### 3. Ajouter une ville

Dans le tableau `cities` du config :

```ts
{
  slug: 'cassis',               // URL : /conciergerie/cassis
  name: 'Cassis',
  region: 'Bouches-du-Rhône',
  coverImage: '/images/cassis.jpg',   // placer le fichier dans /public/images/
  tagline: 'La Méditerranée à portée de main',
  description: 'Texte SEO pour cette ville...',
  statPhare: { value: '3 200 €', label: 'revenu moy./mois' },
  whyCity: {
    title: 'Pourquoi confier votre bien à Cassis ?',
    body: '...',
    highlights: [
      { icon: 'star', text: 'Taux occupation élevé' },
      // ...
    ],
  },
  gallery: [{ src: '/images/cassis-1.jpg', alt: '...', tall: false, wide: false }],
  faq: [{ question: '...', answer: '...' }],
  seo: {
    title: 'Conciergerie Airbnb Cassis — Azur Conciergerie',
    description: '...',
  },
}
```

La page `/conciergerie/cassis`, la carte dans `/zones`, et l'entrée dans le sitemap XML sont générées **automatiquement**.

### 4. Variables d'environnement

Copier `.env.example` → `.env.local` et remplir :

```
RESEND_API_KEY=re_...          # clé API Resend
RESEND_TO_EMAIL=...            # adresse qui reçoit les leads
RESEND_FROM_EMAIL=...          # adresse expéditrice (domaine vérifié dans Resend)
```

### 5. Vérifier et déployer

```bash
npm run build    # doit se terminer sans erreur
```

Déployer sur [Vercel](https://vercel.com) :
- Connecter le repo GitHub
- Ajouter les 3 variables d'environnement dans Settings → Environment Variables
- Le déploiement se fait automatiquement à chaque push

---

## Structure du projet

```
src/
├── config/
│   └── site.config.ts     ← SEUL fichier à modifier par client
├── app/
│   ├── page.tsx            Accueil
│   ├── estimation/         Formulaire estimateur 5 étapes
│   ├── contact/            Page contact
│   ├── zones/              Grille des villes couvertes
│   ├── conciergerie/[slug] Pages villes (générées depuis cities[])
│   ├── mentions-legales/
│   ├── confidentialite/
│   └── api/
│       ├── contact/        POST → Resend
│       └── estimation/     POST → Resend
├── components/
│   ├── layout/             Header, Footer, MobileBar, CookieBanner
│   ├── sections/           Hero, Services, FAQ, Testimonials…
│   ├── forms/              ContactForm, EstimatorForm
│   └── ui/                 SectionHead, Breadcrumb, JsonLd…
├── lib/
│   ├── content.ts          Abstraction contenu (prêt pour Sanity)
│   └── resend.ts           Envoi emails
└── types/
    └── index.ts
```

---

## Variantes visuelles

| Clé | Options |
|---|---|
| `variants.hero` | `plein` (plein écran) · `light` (voile clair) · `split` (2 colonnes) |
| `variants.services` | `cartes` · `liste-alternee` |
| `variants.testimonials` | `carrousel` · `grille` |
| `variants.gallery` | `mosaique` · `classique` |
| `variants.contact` | `cartes` · `compact` |
| `variants.galleryBeforeAfter` | `true` · `false` |

---

## Évolution CMS (Sanity)

Quand le client veut gérer son contenu sans développeur :
1. Installer et configurer Sanity Studio
2. Remplacer les fonctions dans `src/lib/content.ts` par des appels Sanity
3. Ajouter `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN` dans les env vars
4. Aucun composant ni page ne change

---

Réalisé par [CStudio](https://cstudio.fr)

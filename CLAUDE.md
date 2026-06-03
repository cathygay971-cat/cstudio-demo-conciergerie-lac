# CLAUDE.md — Template Conciergerie (location saisonnière)
## Lire CLAUDE-GLOBAL.md en premier avant ce fichier

---

## IDENTITÉ DU TEMPLATE

**Nom :** cstudio-template-conciergerie
**Usage :** Conciergerie Airbnb / location saisonnière — gestion de biens pour propriétaires
**Offre :** Essentiel 490€ ou Autonomie 690€
**Stack :** Next.js 14 App Router · TypeScript · Tailwind CSS 3 · Resend (emails)
**Sanity :** Non connecté — prévu via `src/lib/content.ts` (voir section dédiée)
**Pages SEO Local :** villes dynamiques `/conciergerie/[slug]` (incluses, pilotées par la config)

> ⚠️ Ce template a été refondu pour être **100% configurable** et **100% responsive mobile**.
> Toutes les règles ci-dessous reflètent l'état réel du code après refonte.

---

## RÈGLE D'OR — FICHIER UNIQUE

> **Pour créer le site d'un nouveau client, on ne modifie QUE `src/config/site.config.ts`.**
> Aucun composant ne contient de texte, de couleur ni de police en dur.

Pour repartir d'un exemple rempli : voir `examples/site.config.azur-demo.ts`.
Ce fichier est un **exemple de référence**, hors structure active — il n'est jamais importé par le code. **Ne pas le dupliquer tel quel** : remplir `src/config/site.config.ts` en s'en inspirant.

---

## ARCHITECTURE DU PROJET

```
src/app/
├── page.tsx                       ← accueil (hero configurable)
├── layout.tsx                     ← injecte le thème (CSS vars) + GTM + cookies + Header/Footer
├── globals.css                    ← styles non-thème uniquement (pas de couleur/police)
├── sitemap.ts / robots.ts         ← générés depuis la config
├── conciergerie/[slug]/page.tsx   ← page ville dynamique (1 par entrée cities[])
├── zones/page.tsx                 ← liste des villes (sans hero)
├── contact/page.tsx               ← contact (sans hero)
├── estimation/page.tsx            ← estimateur de revenus (sans hero)
├── mentions-legales/page.tsx
├── confidentialite/page.tsx
└── api/contact + api/estimation   ← envoi Resend

src/components/
├── layout/   SiteHeader, SiteFooter, MobileBar, CookieBanner, CookieYesScript, GTMScript, RevealObserver
├── sections/ Hero, Services, Testimonials, Gallery, WhyCity, HowItWorks, TeamSection, CtaBand, EstimBand, StatsBand, ContactBlock, FAQ, SeoTextBlock, SeoBlock
├── forms/    ContactForm, ContactFormCompact, EstimatorForm, EstimatorFormWithParams
└── ui/       Breadcrumb, JsonLd, SectionHead, ServiceIcon, TrustIcon

src/config/  site.config.ts (SEUL fichier à modifier par client)
src/lib/     content.ts (abstraction contenu → futur Sanity), jsonld.ts, resend.ts
examples/    site.config.azur-demo.ts (exemple de référence, non importé)
```

---

## THÈME — COULEURS & POLICES (100% libre)

- Définis une seule fois dans `siteConfig.theme` (`site.config.ts`).
- `layout.tsx` lit `theme` et injecte **toutes** les variables CSS sur `<html>` au runtime.
- **Couleurs :** liberté totale, aucune palette fermée. Modifier les valeurs hex dans `theme.colors`.
- **Polices :** n'importe quelle police Google Fonts. Mettre le nom exact dans `theme.fonts.display` (titres) et `theme.fonts.body` (corps) — ex. `'Fraunces'`, `'Playfair Display'`, `'DM Sans'`. Ce ne sont pas 2 choix figés mais 2 emplacements libres.
- **Palette par défaut du template = « montagne »** (vert sapin + cuivre + crème), polices Fraunces / DM Sans.

### 17 variables couleur

| Clé config | Variable CSS | Rôle |
|---|---|---|
| `bg` | `--bg` | Fond général |
| `surface` | `--surface` | Fond cartes/panneaux |
| `surface2` | `--surface-2` | Sections légèrement colorées |
| `ink` | `--ink` | Titres |
| `inkSoft` | `--ink-soft` | Titres (variante douce) |
| `text` | `--text` | Corps de texte |
| `muted` | `--muted` | Labels, captions |
| `line` | `--line` | Bordures, séparateurs |
| `accent` | `--accent` | Boutons, focus, eyebrows |
| `accentDark` | `--accent-dk` | Hover boutons, texte eyebrow |
| `accentTint` | `--accent-tint` | Focus ring, badges légers |
| **`accentForeground`** | **`--accent-foreground`** | **Texte SUR les boutons accent** (à adapter si accent foncé) |
| `onDark` | `--on-dark` | Texte sur fond foncé |
| `onDarkMuted` | `--on-dark-mut` | Texte atténué sur fond foncé |
| `darkBg` | `--dark-bg` | Footer, sections sombres |
| `darkBg2` | `--dark-bg-2` | Sous-sections sombres |

> ⚠️ **Règle critique `accentForeground` :** c'est la couleur du texte sur les boutons dorés. Si le client choisit un **accent foncé**, mettre une valeur **claire** ici, sinon le texte des boutons devient illisible.

Variables calculées automatiquement (ne pas définir) : `--hero-veil-1/2`, `--hero-light-veil`, `--header-glass-bg`.

---

## LOGO CONFIGURABLE (header + footer)

4 champs dans `identity` :
- `logoImage` — chemin d'une image (ex. `/images/logo.svg`). **`''` (vide) = repli sur le cercle initiale.** L'image a une hauteur contrainte (40/52px) et ne casse jamais le menu, quelle que soit sa taille d'origine.
- `logoTitle` — texte principal (ex. `'Azur'`).
- `logoSubtitle` — sous-texte (ex. `'Conciergerie'`).
- `logoInitial` — mode repli : seule la **première lettre** est affichée dans le cercle (le code force `.charAt(0)`, donc aucun débordement même si on tape un mot entier).

> Note technique : le logo (header + footer) et les images de contenu utilisent des balises `<img>` → plusieurs warnings ESLint `no-img-element` au build, **sans gravité** (choix assumé, notamment pour l'indexation des images de contenu — voir section « IMAGES INDEXABLES »).

---

## 5 VARIANTES CONFIGURABLES (bloc `variants`)

| Clé | Options | Effet |
|---|---|---|
| `hero` | `plein` / `light` / `split` | mise en page du hero accueil |
| `services` | `cartes` / `liste-alternee` | affichage des 6 services |
| `testimonials` | `carrousel` / `grille` | affichage des avis |
| `gallery` | `mosaique` / `classique` | affichage de la galerie |
| `contact` | `cartes` / `compact` | mise en page page contact |

Vente : montrer les options en démo, le client choisit, on change **une seule ligne** dans le config. Pas de sélecteur en direct sur le site livré.

> 🗑️ La section **avant/après** a été retirée (sans objet pour une conciergerie). Plus de `galleryBeforeAfter` ni de bloc `gallery.beforeAfter`.

## IMAGES INDEXABLES (SEO Google Images)

Les images de **contenu** (Services liste-alternée, Équipe, WhyCity, Galerie) sont de vraies balises `<img>` avec :
- `alt` descriptif géolocalisé, **lu depuis la config** (jamais en dur) : `services[].imageAlt`, `team.members[].imageAlt`, `whyMainCity.imageAlt`, `gallery.images[].alt`, `cities[].heroImageAlt` / `whyImageAlt`.
- `loading="lazy"` + ratio fixe (`aspect-[4/3]`, `aspect-[4/5]`…) sur le conteneur → pas de CLS.

Le **Hero** reste en `background-image` (image décorative plein écran) ; son `aria-label` vient de `hero.imageFullAlt` (et `cities[].heroImageAlt` pour les hero villes).

> ⚠️ Ces `<img>` génèrent des warnings ESLint `no-img-element` au build (choix assumé pour l'indexation ; `next/image` changerait le comportement). Build = 0 erreur, warnings tolérés.

---

## SECTIONS ÉQUIPE & CTA LÉGER (configurables)

Deux sections additionnelles de la home, pilotées par leurs propres blocs de config.

**`team` (section Équipe) — `TeamSection`**
- `enabled: false` → section entièrement masquée (`return null`).
- `variant` : `grille` (cartes 3-4 personnes, `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` ou `md:grid-cols-4` si 4 membres) · `portraits` (grand format 1-2 personnes, photo + texte côte à côte sur desktop, empilé sur mobile).
- Textes : `eyebrow` · `title` · `subtitle` + tableau `members[]` (`name`, `role`, `description`, `image`).
- Photos en format portrait `/images/team/membre-N.jpg` (~600×750).
- Bonus SEO : chaque membre est ajouté comme `Person` (`employee`) dans le JSON-LD Organization de l'accueil.

**`ctaBand` (CTA intermédiaire léger) — `CtaBand`**
- `enabled: false` → masqué.
- Bandeau sombre (`--dark-bg`) : `title` court centré + 1 bouton accent (`buttonLabel`) renvoyant vers `buttonHref` (par défaut `#estimation`, l'ancre de `EstimBand`). **Pas de formulaire.**
- Responsive : titre + bouton empilés sur mobile, en ligne sur desktop.

**`seoBlock` (bloc SEO riche 2 colonnes) — `SeoBlock`** (composant prop `data`)
- Layout « Fullboutik » : gauche = icône + grand titre **H2** (font display) + pilules de mots-clés (`keywords[]`, étiquettes arrondies bordure `--line` / fond `--surface`) ; droite = paragraphes (`paragraphs[]`, vraies balises `<p>`). Classe `reveal`.
- Responsive : `md:grid-cols-2` desktop → `grid-cols-1` mobile.
- **Deux sources DISTINCTES** (contenu SEO unique par page, jamais dupliqué) :
  - **Home** → `siteConfig.seoBlock` (global). `enabled: false` = masqué. `<SeoBlock data={siteConfig.seoBlock} />` (sans maillage).
  - **Chaque ville** → `cities[].seoBlock` (propre à la ville) **+ maillage interne**. `<SeoBlock data={city.seoBlock} currentCity={city} allCities={allCities} />`.
- Le composant renvoie `null` si `data` est absent ou `data.enabled === false`.
- **Maillage interne (pages villes uniquement)** : props optionnelles `currentCity` + `allCities`. Si fournies, une **phrase** s'affiche en fin de bloc — « Nous intervenons également à [Ville A], [Ville B] et [Ville C]. » — chaque ville étant un `<Link>` cliquable (accent souligné), séparées par des virgules et un « et » avant la dernière. Filtrage : exclut la ville courante et les slugs placeholder (`!c.slug.includes('[')`). Sur la home (props absentes), pas de phrase.

> 🗑️ L'ancien composant `SeoTextBlock` (2ᵉ bloc SEO + pilules de villes) a été **supprimé** : son maillage est désormais intégré au `SeoBlock` ville sous forme de phrase. Un seul bloc SEO en bas de page ville, plus de redondance.

> ⚠️ **Règle SEO : contenu unique par page.** Le `seoBlock` d'une ville ne doit JAMAIS reprendre celui de la home ni d'une autre ville (placeholders `[VILLE_N_SEO_*]` distincts). Un seul H1 par page (le hero) ; le `SeoBlock` est en H2. **Viser ~60 % de contenu unique par ville** : FAQ ville à **6 questions**, `seoBlock` ville à **3 paragraphes + 5 mots-clés**.

---

## ORDRE DE LA PAGE D'ACCUEIL (FUNNEL TOFU → MOFU → BOFU)

`src/app/page.tsx` enchaîne les sections dans cet ordre exact :

```
Hero → StatsBand → Services → HowItWorks → TeamSection → CtaBand
     → Testimonials → WhyCity → Gallery → EstimBand → ContactBlock → FAQ → SeoBlock
```

- `EstimBand` porte `id="estimation"` : c'est la cible de l'ancre `#estimation` du `CtaBand`.
- Fin de funnel : `ContactBlock` (conversion) **avant** la `FAQ` (réassurance finale), puis `SeoBlock` (SEO, contenu global) tout en dernier.
- `TeamSection`, `CtaBand` et `SeoBlock` se masquent seuls si `enabled: false` (l'ordre reste valide).

---

## RESPONSIVE MOBILE — RÈGLE ABSOLUE

> **Toutes les grilles doivent rester en classes Tailwind responsive** (ex. `grid-cols-1 md:grid-cols-2`).
> **NE JAMAIS** écrire `gridTemplateColumns` en style inline pour une grille multi-colonnes : un style inline ne réagit pas au responsive → la section reste figée et casse sur mobile (image collée au texte, débordement).

Toutes les sections repassent en 1 colonne sur mobile. Cas particuliers gérés :
- Hero `split` : l'image passe **sous** le texte sur mobile.
- Témoignages `carrousel` : 1 carte à la fois sur mobile, 3 sur desktop.
- Liste-alternée : le texte reste **toujours avant** l'image sur mobile (`md:order-2`, jamais `order-2` seul).

Seules grilles inline tolérées (volontaires) : `MobileBar` (2 boutons), chips dynamiques de `EstimatorForm`, et les grilles `auto-fill` de zones/estimation (déjà responsives par nature).

---

## RÈGLES HERO

- **Accueil `/`** → hero plein écran selon `variants.hero`.
- **Pages villes `/conciergerie/[slug]`** → hero court (~56vh, voile léger), bord à bord.
- **`/contact`, `/estimation`, `/zones`, pages légales** → **PAS de hero**.
- **JAMAIS de stats dans le hero.**

---

## HEADER (unique, géré par le layout)

- Le header est rendu **une seule fois**, par `layout.tsx`. **Ne jamais** rajouter `<SiteHeader />` dans une page (cela créait un double header — bug corrigé).
- Il détecte lui-même la page via `usePathname()` : transparent sur l'accueil, opaque partout ailleurs.
- Disposition : **logo à gauche / menu centré / téléphone + CTA pilule à droite**, burger sur mobile.
- Liens simples (pas de menu déroulant) : Accueil · Services · Estimation · Zones · Contact.

---

## PAGES VILLES — SECTIONS & TEXTES

La page `/conciergerie/[slug]` est une **vraie landing page** (Ads/SEO), **générée automatiquement** pour chaque entrée de `cities[]`. Ordre des sections (funnel landing TOFU → MOFU → BOFU) :
`Breadcrumb` → Hero court (2 CTA) → `StatsBand` (chiffres) → `WhyCity` (pourquoi la ville) → services condensés → **`CtaBand`** (relance conversion au milieu, titre contextualisé ville) → `Testimonials` (preuve sociale) → **`EstimBand`** (CTA estimation) → **`FAQ` ville** (réassurance finale, 6 questions) → `SeoBlock` ville (`cities[].seoBlock`, 3 paragraphes + 5 keywords, contenu unique) **+ phrase de maillage interne cliquable** vers les autres villes.

> ⚠️ Nouvel ordre landing : `CtaBand` relance la conversion **au milieu** du funnel ; l'`EstimBand` (CTA estimation) passe **avant** la `FAQ` ; la `FAQ` ville (réassurance) clôt le funnel juste avant le bloc SEO.
> `CtaBand` sur la page ville réutilise `siteConfig.ctaBand` ; si son `title` contient le token `{ville}`, il est remplacé par `city.name` (sinon affiché tel quel). Le bouton pointe vers l'ancre `#estimation`.
> Le maillage interne (anciennement `SeoTextBlock`, **supprimé**) est désormais une **phrase** intégrée au `SeoBlock` ville (« Nous intervenons également à … » avec liens cliquables). Un seul bloc SEO en bas de page, plus de doublon.
> `Testimonials` accepte une prop `items` : sur les pages villes, les avis affichés dépendent de **`testimonialsMode`** :
> - `'global'` (défaut) → mêmes avis partout (home + villes), lus depuis `siteConfig.testimonials`.
> - `'parVille'` → chaque ville affiche `cities[].testimonials`. **Repli automatique** : si une ville n'a pas d'avis (`testimonials` vide/absent), on retombe sur les avis globaux → jamais de section vide.
> Sur la home, `<Testimonials />` (sans prop) utilise toujours les avis globaux.
> La page ville n'inclut **volontairement PAS** la section Équipe ni « Comment ça marche » : anti-duplication (contenu identique d'une ville à l'autre et avec la home) et focus sur la spécificité locale.

Textes de ces sections (tous configurables) :
- Hero ville → `cities[].badge` · `headline` · `subline`
- Chiffres → `cities[].stats`
- Pourquoi la ville → `cities[].whyTitle` · `whyLead` · `whyBody` (sur-titre = `whyMainCity.eyebrow`)
- Services condensés → `copy.cityServicesEyebrow` · `cityServicesTitle` (gabarit `{ville}` remplacé par le nom) · `cityServicesSubtitle` · `cityServicesCta`

---

## AJOUTER UNE VILLE

Dans `site.config.ts`, ajouter un objet au tableau `cities` (structure réelle) :
```ts
{
  slug: 'cassis',                 // URL sans accents → /conciergerie/cassis
  name: 'Cassis',
  heroImage: '/images/cities/cassis.jpg',
  badge: 'Côte Bleue · Cassis',
  headline: 'Conciergerie Airbnb à Cassis',
  subline: '...',
  stats: [ { value, unit, label } × 4 ],
  whyTitle: '...', whyLead: '...', whyBody: '...',
  whyImage: '/images/market/cassis.jpg',
  whyStats: [ { value, label } × 4 ],
  faq: [ { question, answer } × 6 ],
  seoBlock: { title, keywords: [ … × 5 ], paragraphs: [ … × 3 ] },  // contenu UNIQUE ville
  seo: { title, description, textBlock },
}
```
La page, la carte dans `/zones` et le sitemap sont générés automatiquement.

---

## SEO / GEO EN PLACE

- Metadata API par page (title/description/canonical depuis la config).
- `sitemap.ts` + `robots.ts` dynamiques. Bots IA autorisés : GPTBot, ClaudeBot, PerplexityBot, Google-Extended, ChatGPT-User, Applebot, Bingbot.
- JSON-LD : **accueil** → LocalBusiness, FAQPage, WebSite, Organization, Service. **Pages villes** → LocalBusiness, BreadcrumbList, FAQPage, Service.
- **Ne jamais** ajouter `aggregateRating` sans vrais avis vérifiés.
- `public/llms.txt` présent (GEO).

---

## FORMULAIRES

- 2 formulaires (contact + estimateur) → envoi via **Resend**.
- Honeypot anti-spam sur les deux.
- Clés dans `.env.local` (copier depuis `.env.example`).

---

## CHECKLIST DUPLICATION — NOUVEAU CLIENT

```
[ ] Dupliquer le repo (Use this template)
[ ] Remplir src/config/site.config.ts section par section
    [ ] identity (name, logoImage OU logoInitial, logoTitle, logoSubtitle, baseCity, foundedYear, heroBadge)
    [ ] theme.colors (dont accentForeground cohérent avec l'accent) + theme.fonts
    [ ] variants (hero, services, testimonials, gallery, contact, galleryBeforeAfter)
    [ ] company (SIRET, adresse, phone +33…, email, hours…)
    [ ] seo (siteUrl SANS slash final, titres, description)
    [ ] integrations (gtmId, cookieBanner/cookieYesId)
    [ ] social / calendly / whatsapp (vide = masqué)
    [ ] stats + trustBadges
    [ ] copy (tous les eyebrows/titres/sous-titres, dont cityServices*)
    [ ] hero (variante choisie) / services ×6 / steps ×4
    [ ] team (enabled, variant, membres) + ctaBand (enabled, titre, bouton)
    [ ] whyMainCity / gallery / testimonials / faq
    [ ] testimonialsMode ('global' si peu d'avis · 'parVille' + cities[].testimonials sinon)
    [ ] estimation / zones (dont metaTitle, metaDescription, heroEyebrow, heroTitle, heroSubtitle — {NOM} = nom auto)
    [ ] seoBlock home (titre, keywords[], paragraphs[]) — contenu global, unique
    [ ] cities[] (1 bloc par ville, dont cities[].seoBlock UNIQUE par ville)
    [ ] ALT des images (SEO) : hero.imageFullAlt · services[].imageAlt ×6 · team.members[].imageAlt
        · whyMainCity.imageAlt · gallery.images[].alt ×9 · cities[].heroImageAlt + whyImageAlt
[ ] Remplacer les images SVG par de vraies photos (.jpg, même nom)
[ ] .env.example → .env.local (clés Resend)
[ ] npm run build → 0 erreur
[ ] Vérifier le rendu MOBILE de chaque page (375px) : aucune section image+texte côte à côte
[ ] Déployer sur Vercel + variables d'environnement
[ ] Sitemap soumis Google Search Console + Bing
```

> ⚠️ **Avant livraison**, demander à Claude Code :
> *« Liste tous les placeholders `[MAJUSCULES]` restants dans `site.config.ts` avec leur ligne »*
> pour vérifier qu'aucun n'a été oublié (textes, alt d'images, SEO, villes…).

---

## IMAGES — DIMENSIONS

```
OG image        : public/og-image.jpg          1200×630
Hero accueil    : hero/hero-home.jpg            1920×1080
Hero split      : hero/hero-split.jpg           1100×1400
Services (×6)   : services/*.jpg                900×600
Marché (×5)     : market/*.jpg                  900×600
Galerie (×9)    : gallery/*.jpg                 voir tall/wide dans la config
Équipe (×N)     : team/membre-N.jpg             600×750 (portrait)
Villes (×N)     : cities/[slug].jpg             1900×1267
Logo (option)   : images/logo.svg|png           hauteur libre (contrainte à 40/52px à l'affichage)
```
Toutes les images livrées sont des SVG placeholders : remplacer par les vraies photos (même nom, même dossier) et ajuster le chemin si besoin.

---

## ÉVOLUTION SANITY (prévue)

`src/lib/content.ts` centralise l'accès au contenu (`getCities`, `getCityBySlug`…). Pour brancher un CMS : remplacer uniquement les implémentations de ce fichier, sans toucher aux composants ni aux pages.

---

## RÈGLES GIT — ABSOLUES

Ne jamais committer : `node_modules/`, `.next/`, `out/`, `.claude/`.
Toujours `git status` avant `git add`. Commits en français.
Travailler sur une branche pour toute refonte, fusionner dans `main` après validation visuelle (notamment mobile).

---

## COMMANDES UTILES

```bash
npm run dev            # local
npm run build          # vérifier 0 erreur
git add . && git commit -m "Description" && git push
```

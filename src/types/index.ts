// Types partagés dans tout le projet
// Toutes les structures de données correspondent au schéma de site.config.ts

export interface Stat {
  value: string
  unit: string
  label: string
}

export interface TrustBadge {
  icon: 'shield' | 'card' | 'check' | 'clock' | 'star'
  label: string
}

export interface Service {
  icon: string
  num: string
  category: string
  title: string
  description: string
  bullets: string[]
  image: string
  imageAlt: string   // alt SEO de l'image (variante liste-alternée)
}

export interface Step {
  num: string
  title: string
  description: string
}

export interface WhyCityData {
  eyebrow: string
  title: string
  lead: string
  body: string
  image: string
  imageAlt: string   // alt SEO de l'image
  stats: { value: string; label: string }[]
}

export interface GalleryImage {
  src: string
  caption: string
  alt: string        // alt SEO (distinct du caption affiché au survol)
  tall: boolean
  wide: boolean
}

export interface Testimonial {
  initial: string
  author: string
  property: string
  quote: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TeamMember {
  name: string
  role: string
  description: string
  image: string
  imageAlt: string   // alt SEO du portrait (ex : 'Prénom Nom, fondateur · Ville')
}

export interface SeoBlock {
  title: string
  keywords: string[]
  paragraphs: string[]
  enabled?: boolean   // home : false = masqué. Ville : absent = toujours affiché.
}

export interface SocialLinks {
  instagram: string
  facebook: string
  linkedin: string
}

export interface City {
  slug: string
  name: string
  heroImage: string
  heroImageAlt: string   // alt SEO du hero ville
  badge: string
  headline: string
  subline: string
  stats: Stat[]
  whyTitle: string
  whyLead: string
  whyBody: string
  whyImage: string
  whyImageAlt: string    // alt SEO de l'image « pourquoi cette ville »
  whyStats: { value: string; label: string }[]
  faq: FaqItem[]
  testimonials?: Testimonial[]   // vide/absent = repli sur les avis globaux (mode parVille)
  seoBlock?: SeoBlock            // bloc SEO riche PROPRE à la ville (contenu unique)
  seo: {
    title: string
    description: string
    textBlock: string
  }
}

export interface NavItem {
  label: string
  href: string
}

export interface SiteTheme {
  colors: {
    bg: string
    surface: string
    surface2: string
    ink: string
    inkSoft: string
    text: string
    muted: string
    line: string
    accent: string
    accentDark: string
    accentTint: string
    accentForeground: string
    onDark: string
    onDarkMuted: string
    darkBg: string
    darkBg2: string
  }
  fonts: {
    display: string
    displayFallback: string
    body: string
    bodyFallback: string
  }
}

export type HeroVariant = 'plein' | 'light' | 'split'
export type ServicesVariant = 'cartes' | 'liste-alternee'
export type TestimonialsVariant = 'carrousel' | 'grille'
export type TestimonialsMode = 'global' | 'parVille'
export type GalleryVariant = 'mosaique' | 'classique'
export type ContactVariant = 'cartes' | 'compact'
export type TeamVariant = 'grille' | 'portraits'
export type CookieBannerMode = 'maison' | 'cookieyes'

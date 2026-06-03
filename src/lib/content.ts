// =============================================================================
// COUCHE D'ABSTRACTION DU CONTENU
// =============================================================================
// Ces fonctions lisent aujourd'hui depuis site.config.ts.
// Pour brancher Sanity plus tard : modifier uniquement ce fichier,
// sans toucher aux composants ni aux pages.
//
// Exemple de migration future :
//   import { client } from '@/lib/sanity'
//   export async function getCities() { return await client.fetch('...') }
// =============================================================================

import { siteConfig } from '@/config/site.config'
import type { City } from '@/types'

export function getSiteContent() {
  return siteConfig
}

export function getCities(): readonly City[] {
  return siteConfig.cities
}

export function getCityBySlug(slug: string): City | undefined {
  return siteConfig.cities.find(c => c.slug === slug)
}

export function getAllCitySlugs(): string[] {
  return siteConfig.cities.map(c => c.slug)
}

// ─── Placeholder : futurs points d'entrée Sanity ──────────────────────────
// export async function getProperties(citySlug?: string) { /* TODO Sanity */ }
// export async function getBlogPosts() { /* TODO Sanity */ }
// export async function getBlogPostBySlug(slug: string) { /* TODO Sanity */ }

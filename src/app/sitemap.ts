import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'
import { getAllCitySlugs } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.seo.siteUrl
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/estimation`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/zones`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map(slug => ({
    url: `${base}/conciergerie/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...cityPages]
}

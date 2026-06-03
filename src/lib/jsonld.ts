import type { Service } from '@/types'

export function buildServicesJsonLd(
  services: readonly Service[],
  opts: { companyName: string; siteUrl: string; areaServed: string[] }
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gestion locative saisonnière clé en main',
    serviceType: 'Conciergerie location saisonnière',
    provider: {
      '@type': 'LocalBusiness',
      name: opts.companyName,
      url: opts.siteUrl,
    },
    areaServed: opts.areaServed.map(name => ({ '@type': 'City', name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de conciergerie',
      itemListElement: services.map(s => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
    },
  }
}

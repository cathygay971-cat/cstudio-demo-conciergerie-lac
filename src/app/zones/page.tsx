import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import Breadcrumb from '@/components/ui/Breadcrumb'
import EstimBand from '@/components/sections/EstimBand'
import FAQ from '@/components/sections/FAQ'
import JsonLd from '@/components/ui/JsonLd'

export const metadata: Metadata = {
  title: siteConfig.zones.metaTitle,
  description: siteConfig.zones.metaDescription,
  alternates: { canonical: `${siteConfig.seo.siteUrl}/zones` },
}

export default function ZonesPage() {
  const { cities, seo, identity, zones } = siteConfig

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Zones', item: `${seo.siteUrl}/zones` },
    ],
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <div className="wrap">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Zones d\'intervention' }]} />

        {/* En-tête compact — pas de hero. Tous les textes viennent de la config. */}
        <div className="pt-[clamp(20px,3vw,32px)] pb-[clamp(36px,5vw,56px)] max-w-[680px]">
          <span className="eyebrow mb-4">{zones.heroEyebrow}</span>
          <h1 className="font-display font-medium" style={{ fontSize: 'clamp(32px, 4.6vw, 52px)', color: 'var(--ink)' }}>
            {zones.heroTitle}
          </h1>
          <p className="mt-4 text-[19px]" style={{ color: 'var(--muted)' }}>
            {zones.heroSubtitle.replace('{NOM}', identity.name)}
          </p>
        </div>

        {/* Grille de cartes villes — générée depuis siteConfig.cities */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}
        >
          {cities.map(city => (
            <CityCard key={city.slug} city={city} />
          ))}
        </div>

        {/* Texte SEO géographique */}
        <section className="mt-[clamp(64px,9vw,110px)] pt-[clamp(48px,6vw,80px)] border-t" style={{ borderColor: 'var(--line)' }}>
          <p className="text-[15.5px] leading-[1.75] max-w-[820px]" style={{ color: 'var(--muted)' }}>
            {zones.seoText}
          </p>
        </section>

        {/* FAQ géographique */}
        <section className="mt-[clamp(48px,6vw,80px)] pb-[clamp(64px,8vw,110px)]">
          <FAQ
            bare
            items={zones.faq}
            eyebrow="Questions fréquentes"
            title="Nos zones d'intervention"
          />
        </section>
      </div>

      {/* Bandeau estimateur */}
      <EstimBand />
    </>
  )
}

function CityCard({ city }: { city: typeof siteConfig.cities[number] }) {
  return (
    <article
      className="group flex flex-col h-full rounded-[10px] overflow-hidden border shadow-sm transition-all duration-[250ms] hover:-translate-y-1 hover:shadow-md hover:border-[var(--accent)]"
      style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
    >
      {/* Photo de la ville */}
      <div
        className="aspect-[16/9] bg-cover bg-center relative overflow-hidden"
        style={{ backgroundImage: `url('${city.heroImage}')` }}
      >
        <div
          className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{ background: 'rgba(16,21,38,.15)' }}
        />
        <span
          className="absolute top-3 left-3 text-[12px] font-semibold tracking-[.08em] px-3 py-1 rounded-full"
          style={{ background: 'var(--surface)', color: 'var(--accent-dk)' }}
        >
          {city.badge}
        </span>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <h2 className="font-display font-medium text-[22px] mb-2 min-h-[2.4em]" style={{ color: 'var(--ink)' }}>
          {city.name}
        </h2>
        <p className="text-[15px] mb-5 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {city.subline}
        </p>

        {/* Bloc bas aligné (bandeau stat + lien) — mt-auto le pousse en bas,
            donc stat et lien sont alignés d'une carte à l'autre quel que soit le titre */}
        <div className="mt-auto">
          {/* Stat phare */}
          <div
            className="flex items-center gap-3 mb-5 p-3 rounded"
            style={{ background: 'var(--accent-tint)' }}
          >
            <b className="font-display text-[28px] leading-none" style={{ color: 'var(--ink)' }}>
              {city.stats[2]?.value}<span style={{ color: 'var(--accent)', fontSize: '.65em' }}>{city.stats[2]?.unit}</span>
            </b>
            <span className="text-[13px]" style={{ color: 'var(--accent-dk)' }}>
              {city.stats[2]?.label}
            </span>
          </div>

          {!city.slug.includes('[') ? (
            <Link
              href={`/conciergerie/${city.slug}`}
              className="inline-flex items-center gap-2 font-semibold text-[15px] transition-colors duration-200 group/link"
              style={{ color: 'var(--accent-dk)' }}
            >
              Découvrir notre offre
              <span className="transition-transform duration-200 group-hover/link:translate-x-[3px]">→</span>
            </Link>
          ) : (
            <span className="inline-flex items-center gap-2 font-semibold text-[15px]" style={{ color: 'var(--muted)' }}>
              Découvrir notre offre →
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

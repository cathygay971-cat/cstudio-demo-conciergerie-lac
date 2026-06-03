import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCityBySlug, getAllCitySlugs, getCities } from '@/lib/content'
import { siteConfig } from '@/config/site.config'
import { buildServicesJsonLd } from '@/lib/jsonld'
import Breadcrumb from '@/components/ui/Breadcrumb'
import StatsBand from '@/components/sections/StatsBand'
import WhyCity from '@/components/sections/WhyCity'
import Testimonials from '@/components/sections/Testimonials'
import CtaBand from '@/components/sections/CtaBand'
import EstimBand from '@/components/sections/EstimBand'
import FAQ from '@/components/sections/FAQ'
import SeoBlock from '@/components/sections/SeoBlock'
import JsonLd from '@/components/ui/JsonLd'
import ServiceIcon from '@/components/ui/ServiceIcon'

// Génère les routes statiques depuis le tableau cities du config
export function generateStaticParams() {
  return getAllCitySlugs().map(slug => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = getCityBySlug(params.slug)
  if (!city) return {}
  return {
    title: city.seo.title,
    description: city.seo.description,
    alternates: { canonical: `${siteConfig.seo.siteUrl}/conciergerie/${city.slug}` },
    openGraph: {
      title: city.seo.title,
      description: city.seo.description,
      images: [{ url: city.heroImage }],
    },
  }
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = getCityBySlug(params.slug)
  if (!city) notFound()

  const allCities = getCities()
  const { trustBadges, services, seo, copy, whyMainCity } = siteConfig

  const cityWhyData = {
    eyebrow: whyMainCity.eyebrow,
    title: city.whyTitle,
    lead: city.whyLead,
    body: city.whyBody,
    image: city.whyImage,
    imageAlt: city.whyImageAlt,
    stats: city.whyStats,
  }

  // Avis affichés : en mode 'parVille' avec avis ville présents → avis ville ;
  // sinon (mode 'global', ou ville sans avis) → avis globaux. Repli garanti.
  const cityTestimonials =
    siteConfig.testimonialsMode === 'parVille' && city.testimonials?.length
      ? city.testimonials
      : siteConfig.testimonials

  // Titre du CtaBand contextualisé à la ville : token {ville} → nom de la ville.
  const cityCtaTitle = siteConfig.ctaBand.title.replace('{ville}', city.name)

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Zones', item: `${seo.siteUrl}/zones` },
      { '@type': 'ListItem', position: 3, name: city.name, item: `${seo.siteUrl}/conciergerie/${city.slug}` },
    ],
  }

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${siteConfig.company.name} — ${city.name}`,
    description: city.seo.description,
    url: `${seo.siteUrl}/conciergerie/${city.slug}`,
    telephone: siteConfig.company.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressCountry: 'FR',
    },
  }

  const servicesJsonLd = buildServicesJsonLd(siteConfig.services, {
    companyName: `${siteConfig.company.name} — ${city.name}`,
    siteUrl: `${seo.siteUrl}/conciergerie/${city.slug}`,
    areaServed: [city.name],
  })

  const faqJsonLd = city.faq.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  } : null

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={servicesJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      {/* Fil d'Ariane */}
      <div className="wrap">
        <Breadcrumb items={[
          { label: 'Accueil', href: '/' },
          { label: 'Zones', href: '/zones' },
          { label: city.name },
        ]} />
      </div>

      {/* Hero court bord à bord (~56vh) avec voile léger */}
      <section
        className="relative grid items-center bg-cover bg-center overflow-hidden mt-[6px]"
        style={{ minHeight: '56vh', backgroundImage: `url('${city.heroImage}')` }}
        aria-label={city.heroImageAlt}
      >
        <div className="absolute inset-0" style={{ background: 'var(--hero-light-veil)' }} />
        <div className="wrap relative z-10">
          <div className="text-center max-w-[720px] mx-auto py-[clamp(48px,7vw,84px)]">
            <span
              className="inline-flex items-center gap-[9px] px-4 py-2 rounded-full text-[13px] font-semibold tracking-[.02em] mb-[26px] backdrop-blur-[6px] border"
              style={{ background: 'rgba(16,21,38,.75)', borderColor: 'var(--accent)', color: 'white' }}
            >
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: 'var(--accent)' }} />
              {city.badge}
            </span>
            <h1 className="font-display font-medium" style={{ fontSize: 'clamp(34px, 5vw, 56px)', color: 'var(--ink)' }}>
              {city.headline}
            </h1>
            <p className="mt-[18px]" style={{ fontSize: 'clamp(17px, 1.7vw, 20px)', color: 'var(--text)', lineHeight: 1.55 }}>
              {city.subline}
            </p>
            <div className="flex flex-wrap justify-center gap-[14px] mt-8">
              <Link
                href="/estimation"
                className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] group"
                style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
              >
                Estimer mes revenus<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
              </Link>
              <Link
                href="#pourquoi"
                className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px]"
                style={{ background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line)' }}
              >
                Pourquoi {city.name} ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <StatsBand stats={city.stats} trustBadges={trustBadges} />

      {/* Pourquoi cette ville */}
      <div id="pourquoi">
        <WhyCity data={cityWhyData} />
      </div>

      {/* Services condensés */}
      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="wrap">
          <div className="section-head reveal" style={{ marginBottom: 'clamp(38px,5vw,60px)', maxWidth: '680px' }}>
            <span className="eyebrow">{copy.cityServicesEyebrow}</span>
            <h2 className="font-display font-medium mt-[18px]" style={{ fontSize: 'clamp(30px,4.2vw,48px)', color: 'var(--ink)' }}>
              {copy.cityServicesTitle.replace('{ville}', city.name)}
            </h2>
            <p className="mt-[18px] text-[18px]" style={{ color: 'var(--muted)' }}>
              {copy.cityServicesSubtitle}
            </p>
          </div>
          <div className="reveal grid gap-[14px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((svc, i) => (
              <div
                key={i}
                className="flex items-center gap-[15px] px-5 py-[18px] border rounded"
                style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
              >
                <span
                  className="w-[42px] h-[42px] rounded grid place-items-center flex-shrink-0"
                  style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
                >
                  <ServiceIcon name={svc.icon} className="w-[22px] h-[22px]" />
                </span>
                <b className="font-display font-medium text-[17px]" style={{ color: 'var(--ink)' }}>{svc.title}</b>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/#services"
              className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px] group"
              style={{ background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line)' }}
            >
              {copy.cityServicesCta}<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA intermédiaire léger — relance conversion au milieu du funnel (titre contextualisé ville) */}
      <CtaBand title={cityCtaTitle} />

      {/* Témoignages — preuve sociale. Avis ville ou globaux selon testimonialsMode. */}
      <Testimonials items={cityTestimonials} />

      {/* Bandeau estimateur — CTA estimation, juste avant la réassurance FAQ */}
      <EstimBand cityName={city.name} />

      {/* FAQ spécifique à la ville — réassurance finale après l'estimation */}
      {city.faq.length > 0 && (
        <FAQ
          items={city.faq}
          eyebrow={`Conciergerie ${city.name}`}
          title={`Questions fréquentes sur la location saisonnière à ${city.name}`}
        />
      )}

      {/* Bloc SEO riche PROPRE à la ville (contenu unique) + maillage interne cliquable
          vers les autres villes — bloc SEO UNIQUE en bas de page (fusion de l'ancien SeoTextBlock). */}
      <SeoBlock data={city.seoBlock} currentCity={city} allCities={allCities} />
    </>
  )
}

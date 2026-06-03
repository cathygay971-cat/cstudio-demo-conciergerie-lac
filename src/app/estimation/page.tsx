import { Suspense } from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import Breadcrumb from '@/components/ui/Breadcrumb'
import JsonLd from '@/components/ui/JsonLd'
import EstimatorFormWithParams from '@/components/forms/EstimatorFormWithParams'
import FAQ from '@/components/sections/FAQ'

const { estimation, seo, trustBadges, cities } = siteConfig

export const metadata: Metadata = {
  title: estimation.metadata.title,
  description: estimation.metadata.description,
  alternates: { canonical: `${seo.siteUrl}/estimation` },
}

export default function EstimationPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Estimation', item: `${seo.siteUrl}/estimation` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: estimation.faq.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={faqJsonLd} />

      <div className="wrap pb-[clamp(64px,8vw,110px)]">
        <Breadcrumb items={[
          { label: 'Accueil', href: '/' },
          { label: 'Estimation' },
        ]} />

        {/* En-tête compact */}
        <div className="pt-[clamp(20px,3vw,32px)] pb-[clamp(28px,4vw,42px)] max-w-[720px]">
          <span className="eyebrow mb-4">Estimation gratuite</span>
          <h1 className="font-display font-medium" style={{ fontSize: 'clamp(32px, 4.6vw, 52px)', color: 'var(--ink)' }}>
            Combien votre bien peut-il vraiment rapporter ?
          </h1>
          <p className="mt-4 text-[19px]" style={{ color: 'var(--muted)' }}>
            Estimation gratuite, personnalisée, réponse sous 24h · sans engagement.
          </p>
          <span
            className="inline-flex items-center gap-[9px] mt-5 px-4 py-[9px] rounded-full text-[13.5px] font-semibold"
            style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            Vos données ne sont jamais partagées
          </span>
        </div>

        {/* ── Formulaire + réassurance ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.45fr_.9fr] gap-[clamp(22px,3vw,40px)] items-center">
          <Suspense fallback={<div className="rounded-[10px] border p-[clamp(26px,3vw,44px)]" style={{ background: 'var(--surface)', borderColor: 'var(--line)', minHeight: '320px' }} />}>
            <EstimatorFormWithParams />
          </Suspense>

          <aside className="flex flex-col gap-4">
            <div
              className="rounded-[10px] border p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
            >
              <span className="w-[42px] h-[42px] rounded grid place-items-center mb-4" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}>
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </span>
              <h3 className="font-display text-[18px] mb-2" style={{ color: 'var(--ink)' }}>Réponse sous 24h</h3>
              <p className="text-[14.5px]" style={{ color: 'var(--muted)' }}>
                Notre équipe analyse votre bien et vous envoie une estimation personnalisée par email.
              </p>
            </div>
            <div
              className="rounded-[10px] border p-6"
              style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
            >
              <span className="w-[42px] h-[42px] rounded grid place-items-center mb-4" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}>
                <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </span>
              <h3 className="font-display text-[18px] mb-2" style={{ color: 'var(--ink)' }}>Sans engagement</h3>
              <p className="text-[14.5px]" style={{ color: 'var(--muted)' }}>
                Entièrement gratuit. Vous décidez librement de la suite à donner.
              </p>
            </div>
            <div className="rounded-[10px] p-6" style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}>
              <h3 className="font-body text-[15px] font-bold tracking-[.08em] uppercase mb-4 text-white">
                Pourquoi nous confier votre bien ?
              </h3>
              <ul className="flex flex-col gap-[13px]">
                {trustBadges.map((badge, i) => (
                  <li key={i} className="flex items-center gap-3 text-[14.5px]" style={{ color: 'var(--on-dark-mut)' }}>
                    <svg className="w-[18px] h-[18px] flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {badge.label}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {/* ── Comment estimons-nous vos revenus ? ── */}
        <section className="mt-[clamp(64px,9vw,110px)] pt-[clamp(48px,6vw,80px)] border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="max-w-[680px] mb-[clamp(36px,4vw,56px)]">
            <span className="eyebrow mb-4">Notre méthode</span>
            <h2 className="font-display font-medium mt-[14px]" style={{ fontSize: 'clamp(28px,3.8vw,44px)', color: 'var(--ink)' }}>
              Comment estimons-nous vos revenus ?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]">
            {estimation.methodPoints.map((point, i) => (
              <div
                key={i}
                className="rounded-[10px] border p-[clamp(24px,2.5vw,36px)]"
                style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
              >
                <span
                  className="inline-flex items-center justify-center w-9 h-9 rounded font-display font-semibold text-[15px] mb-[18px]"
                  style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display font-medium text-[19px] mb-3" style={{ color: 'var(--ink)' }}>
                  {point.question}
                </h3>
                <p className="text-[15.5px] leading-[1.65]" style={{ color: 'var(--muted)' }}>
                  {point.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Nos zones d'intervention ── */}
        <section className="mt-[clamp(64px,9vw,110px)] pt-[clamp(48px,6vw,80px)] border-t" style={{ borderColor: 'var(--line)' }}>
          <div className="max-w-[680px] mb-[clamp(32px,4vw,48px)]">
            <span className="eyebrow mb-4">Zones couvertes</span>
            <h2 className="font-display font-medium mt-[14px]" style={{ fontSize: 'clamp(28px,3.8vw,44px)', color: 'var(--ink)' }}>
              Nous intervenons dans votre secteur
            </h2>
            <p className="mt-4 text-[18px]" style={{ color: 'var(--muted)' }}>
              Découvrez le potentiel locatif spécifique à chaque ville où nous opérons.
            </p>
          </div>
          <div className="grid gap-[14px]" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))' }}>
            {cities.filter(city => !city.slug.includes('[')).map(city => (
              <Link
                key={city.slug}
                href={`/conciergerie/${city.slug}`}
                className="group flex items-center justify-between rounded-[10px] border px-6 py-5 transition-all duration-[250ms] hover:-translate-y-[2px] hover:shadow-md hover:border-[var(--accent)]"
                style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
              >
                <div>
                  <b className="block font-display text-[19px]" style={{ color: 'var(--ink)' }}>{city.name}</b>
                  <span className="text-[13.5px]" style={{ color: 'var(--muted)' }}>{city.badge}</span>
                </div>
                <span className="transition-transform duration-[250ms] group-hover:translate-x-[4px] text-[18px]" style={{ color: 'var(--accent-dk)' }}>→</span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FAQ estimation ── */}
        <section className="mt-[clamp(64px,9vw,110px)] pt-[clamp(48px,6vw,80px)] border-t" style={{ borderColor: 'var(--line)' }}>
          <FAQ
            bare
            items={estimation.faq}
            eyebrow="Questions fréquentes"
            title="Tout savoir sur l'estimation"
          />
        </section>

        {/* ── Bloc texte SEO ── */}
        <section className="mt-[clamp(48px,6vw,80px)] pt-[clamp(36px,4vw,56px)] border-t" style={{ borderColor: 'var(--line)' }}>
          <p className="text-[15.5px] leading-[1.75] max-w-[820px]" style={{ color: 'var(--muted)' }}>
            {estimation.seoText}
          </p>
        </section>
      </div>
    </>
  )
}

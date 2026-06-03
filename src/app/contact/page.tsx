import type { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site.config'
import Breadcrumb from '@/components/ui/Breadcrumb'
import JsonLd from '@/components/ui/JsonLd'
import ContactForm from '@/components/forms/ContactForm'
import ContactFormCompact from '@/components/forms/ContactFormCompact'

export const metadata: Metadata = {
  title: 'Contact — Parlons de votre bien',
  description: `Contactez ${siteConfig.identity.name} pour une estimation gratuite ou un renseignement. Réponse sous 24h, sans engagement.`,
  alternates: { canonical: `${siteConfig.seo.siteUrl}/contact` },
}

export default function ContactPage() {
  const { company, calendly, seo, variants, stats } = siteConfig

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: seo.siteUrl },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: `${seo.siteUrl}/contact` },
    ],
  }

  if (variants.contact === 'compact') {
    return (
      <>
        <JsonLd data={breadcrumbJsonLd} />

        <div className="wrap pb-[clamp(64px,8vw,110px)]">
          <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-start mt-[clamp(16px,2vw,24px)]">
            {/* ── Colonne gauche : discours + réassurance ── */}
            <div className="py-[clamp(16px,2vw,32px)]">
              <span className="eyebrow mb-5">Contact</span>

              {/* Titre en 2 couleurs avec trait doré */}
              <h1
                className="font-display font-medium"
                style={{ fontSize: 'clamp(28px, 3.4vw, 44px)', color: 'var(--ink)', lineHeight: 1.15 }}
              >
                Confiez-nous votre bien{' '}
                <span className="relative inline-block whitespace-nowrap">
                  en toute sérénité
                  <span
                    className="absolute left-0 right-0 bottom-[-4px] h-[3px] rounded"
                    style={{ background: 'var(--accent)' }}
                  />
                </span>
              </h1>

              <p className="mt-[20px] text-[17px] leading-[1.65]" style={{ color: 'var(--muted)', maxWidth: '460px' }}>
                Remplissez le formulaire et notre équipe vous recontacte sous 24h pour estimer vos revenus
                et discuter de votre projet. C&apos;est gratuit et sans engagement.
              </p>

              {/* 3 arguments de réassurance */}
              <div className="flex flex-col gap-[18px] mt-[36px]">
                {[
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <polyline points="9 12 11 14 15 10"/>
                      </svg>
                    ),
                    title: '100% gratuit, sans engagement',
                    desc: 'Aucun frais caché, aucun engagement avant la signature. Vous décidez.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ),
                    title: 'Réponse sous 24h',
                    desc: 'Notre équipe vous rappelle le jour même ou au plus tard le lendemain.',
                  },
                  {
                    icon: (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    ),
                    title: 'Une équipe locale',
                    desc: `Nous gérons exclusivement les biens de notre secteur, pour un service de proximité et une vraie connaissance du marché.`,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-[16px]">
                    <span
                      className="w-[44px] h-[44px] rounded-full grid place-items-center flex-shrink-0 mt-[2px]"
                      style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-semibold text-[15.5px]" style={{ color: 'var(--ink)' }}>{item.title}</p>
                      <p className="text-[14px] mt-[3px] leading-[1.55]" style={{ color: 'var(--muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chiffres clés */}
              <div
                className="grid grid-cols-1 sm:grid-cols-3 gap-[1px] mt-[40px] rounded-[10px] overflow-hidden border"
                style={{ borderColor: 'var(--line)', background: 'var(--line)' }}
              >
                {stats.slice(0, 3).map((stat, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center px-[16px] py-[20px]"
                    style={{ background: 'var(--surface)' }}
                  >
                    <span className="font-display font-semibold text-[26px] leading-none" style={{ color: 'var(--accent-dk)' }}>
                      {stat.value}{stat.unit}
                    </span>
                    <span className="text-[12px] mt-[6px] leading-[1.4]" style={{ color: 'var(--muted)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Colonne droite : formulaire sur carte ── */}
            <div
              className="rounded-[14px] border p-[clamp(28px,3.5vw,44px)] sticky top-[110px]"
              style={{
                background: 'var(--surface)',
                borderColor: 'var(--line)',
                boxShadow: '0 8px 48px rgba(20,24,38,.10)',
              }}
            >
              <h2 className="font-display font-medium mb-[6px]" style={{ fontSize: 'clamp(20px,2.2vw,26px)', color: 'var(--ink)' }}>
                Demandez votre estimation gratuite
              </h2>
              <p className="text-[15px] mb-[24px]" style={{ color: 'var(--muted)' }}>
                Un conseiller local vous rappelle sous 24h avec une estimation personnalisée.
              </p>
              <ContactFormCompact />
            </div>
          </div>
        </div>
      </>
    )
  }

  // ── Variante "cartes" ──────────────────────────────────────────────────────

  const routes = [
    {
      num: '01',
      icon: (
        <svg className="w-[27px] h-[27px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/>
        </svg>
      ),
      title: 'Estimer mes revenus',
      description: 'Obtenez une estimation gratuite et personnalisée de vos revenus locatifs en 2 minutes.',
      cta: { label: 'Lancer l\'estimation', href: '/estimation' },
    },
    ...(calendly.url ? [{
      num: '02',
      icon: (
        <svg className="w-[27px] h-[27px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
      ),
      title: 'Réserver un rendez-vous',
      description: 'Choisissez un créneau dans notre agenda et discutons de votre projet directement.',
      cta: { label: 'Voir les disponibilités', href: calendly.url, external: true },
    }] : []),
    {
      num: calendly.url ? '03' : '02',
      icon: (
        <svg className="w-[27px] h-[27px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
        </svg>
      ),
      title: 'Nous appeler',
      description: `Notre équipe vous répond du lundi au samedi de 9h à 19h.`,
      cta: { label: company.phoneDisplay, href: `tel:${company.phone}` },
    },
  ]

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />

      <div className="wrap pb-[clamp(64px,8vw,110px)]">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Contact' }]} />

        <div className="pt-[clamp(20px,3vw,32px)] pb-[clamp(28px,4vw,42px)] text-center max-w-[720px] mx-auto">
          <span className="eyebrow mb-4">Contact</span>
          <h1 className="font-display font-medium" style={{ fontSize: 'clamp(32px, 4.6vw, 52px)', color: 'var(--ink)' }}>
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="mt-4 text-[19px]" style={{ color: 'var(--muted)' }}>
            Choisissez la voie qui vous convient le mieux.
          </p>
        </div>

        {/* 3 voies de contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[18px] mb-[clamp(40px,5vw,66px)]">
          {routes.map((route, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center rounded-[10px] border overflow-hidden p-[clamp(26px,3vw,38px)] shadow-md hover:-translate-y-1 hover:shadow-xl hover:border-[var(--accent)] transition-all duration-[250ms]"
              style={{ borderColor: 'var(--line)', borderTopColor: 'var(--accent)', borderTopWidth: '3px', background: 'var(--surface)' }}
            >
              <span className="font-display text-[14px] font-semibold tracking-[.1em] mb-[14px]" style={{ color: 'var(--accent-dk)' }}>
                {route.num}
              </span>
              <span className="w-[58px] h-[58px] grid place-items-center rounded-full mb-[18px]" style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}>
                {route.icon}
              </span>
              <h3 className="font-display font-medium text-[21px]" style={{ color: 'var(--ink)' }}>{route.title}</h3>
              <p className="text-[15px] mt-[10px] mb-[22px] flex-grow" style={{ color: 'var(--muted)' }}>{route.description}</p>
              {route.cta.external ? (
                <a
                  href={route.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px]"
                  style={{ borderColor: 'var(--line)', background: 'transparent', color: 'var(--ink)' }}
                >
                  {route.cta.label}
                </a>
              ) : (
                <Link
                  href={route.cta.href}
                  className="w-full inline-flex items-center justify-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px]"
                  style={{ borderColor: 'var(--line)', background: 'transparent', color: 'var(--ink)' }}
                >
                  {route.cta.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Coordonnées + formulaire */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(24px,3vw,44px)]">
          <div className="rounded-[10px] p-[clamp(28px,3vw,40px)] flex flex-col" style={{ background: 'var(--dark-bg-2)' }}>
            <h2 className="font-display mb-[22px] text-white" style={{ fontSize: 'clamp(22px,2.6vw,28px)' }}>
              Nos coordonnées
            </h2>
            <div className="flex flex-col gap-1 mb-[26px]">
              {[
                { icon: 'phone', label: 'Téléphone', value: company.phoneDisplay, href: `tel:${company.phone}` },
                { icon: 'email', label: 'Email', value: company.email, href: `mailto:${company.email}` },
                { icon: 'pin', label: 'Adresse', value: `${company.address}, ${company.zipCode} ${company.city}` },
                { icon: 'clock', label: 'Horaires', value: company.hours },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-[14px] py-3 border-b" style={{ borderColor: 'rgba(255,255,255,.1)' }}>
                  <CoordIcon name={item.icon} />
                  <div>
                    <span className="block text-[12.5px]" style={{ color: 'var(--on-dark-mut)' }}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className="text-[16px] transition-opacity hover:opacity-80" style={{ color: 'var(--on-dark)' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[16px]" style={{ color: 'var(--on-dark)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="relative flex-1 min-h-[120px] rounded-[8px] overflow-hidden"
              style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)' }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-[10px]">
                <span className="w-[46px] h-[46px] rounded-full rounded-br-none grid place-items-center shadow-md rotate-[-45deg]" style={{ background: 'var(--accent)' }}>
                  <svg className="w-[22px] h-[22px] rotate-45" style={{ color: 'var(--accent-foreground)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span className="text-[13.5px] font-semibold px-[14px] py-[6px] rounded-full" style={{ background: 'rgba(255,255,255,.12)', color: 'var(--on-dark)' }}>
                  {company.city}
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[10px] border shadow-sm p-[clamp(28px,3vw,40px)]" style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}>
            <h2 className="font-display mb-[22px]" style={{ fontSize: 'clamp(22px,2.6vw,28px)', color: 'var(--ink)' }}>
              Envoyez-nous un message
            </h2>
            <ContactForm />
          </div>
        </div>

        {/* Bloc rattrapage */}
        <div
          className="flex items-center justify-between gap-7 flex-wrap rounded-[10px] p-[clamp(34px,4vw,56px)] mt-[clamp(40px,5vw,64px)]"
          style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}
        >
          <div>
            <h2 className="text-white font-display" style={{ fontSize: 'clamp(24px, 2.8vw, 34px)' }}>
              Pas encore prêt(e) à nous contacter ?
            </h2>
            <p className="mt-[10px] text-[17px] max-w-[460px]" style={{ color: 'var(--on-dark-mut)' }}>
              Commencez par estimer le potentiel de revenus de votre bien. C&apos;est gratuit, sans engagement, et ça prend 2 minutes.
            </p>
          </div>
          <Link
            href="/estimation"
            className="flex-shrink-0 inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] group"
            style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
          >
            Estimer mes revenus<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>
      </div>
    </>
  )
}

function CoordIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 flex-shrink-0 mt-[2px]"
  const style = { color: 'var(--accent)' }
  const p = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className: cls, style }
  switch (name) {
    case 'phone': return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    case 'email': return <svg {...p}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg>
    case 'pin': return <svg {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    case 'clock': return <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    default: return null
  }
}

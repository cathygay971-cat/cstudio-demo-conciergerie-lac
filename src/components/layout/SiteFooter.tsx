import Link from 'next/link'
import { siteConfig } from '@/config/site.config'

export default function SiteFooter() {
  const { identity, company, social, nav, cities, copy } = siteConfig
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--dark-bg-2)', color: 'var(--on-dark-mut)' }} className="pt-[clamp(56px,7vw,90px)]">
      <div className="wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[minmax(200px,300px)_1fr_1fr_1.2fr] gap-[clamp(30px,4vw,56px)] pb-[54px] border-b border-white/10">
          {/* Colonne marque */}
          <div>
            <Link href="/" className="flex items-center gap-[11px] mb-[22px]">
              {identity.logoImage ? (
                <img
                  src={identity.logoImage}
                  alt={identity.name}
                  className="flex-shrink-0 w-auto"
                  style={{ height: 'auto', maxHeight: '40px' }}
                />
              ) : (
                <span className="w-[38px] h-[38px] rounded-full grid place-items-center font-display font-semibold text-[19px] flex-shrink-0"
                  style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}>
                  {identity.logoInitial.charAt(0).toUpperCase()}
                </span>
              )}
              <span className="flex flex-col leading-[1.05]">
                <b className="font-display text-[20px] font-medium text-white">{identity.logoTitle}</b>
                <span className="text-[10.5px] tracking-[.22em] uppercase opacity-70 font-semibold">{identity.logoSubtitle}</span>
              </span>
            </Link>
            <p className="text-[14.5px] leading-[1.7] max-w-[320px]">
              {copy.footerTagline}
            </p>
            <div className="mt-[22px] text-[13px] leading-[1.8] opacity-80">
              {company.name} — {company.legalForm} au capital de {company.capital}<br />
              SIRET {company.siret}<br />
              {company.address}, {company.zipCode} {company.city}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-body text-[13px] font-bold tracking-[.12em] uppercase mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {nav.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[14.5px] transition-colors duration-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h4 className="text-white font-body text-[13px] font-bold tracking-[.12em] uppercase mb-5">Zones d&apos;intervention</h4>
            <ul className="flex flex-col gap-3">
              {cities.filter(city => !city.slug.includes('[')).map(city => (
                <li key={city.slug}>
                  <Link href={`/conciergerie/${city.slug}`} className="text-[14.5px] transition-colors duration-200 hover:text-white">
                    Conciergerie {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-body text-[13px] font-bold tracking-[.12em] uppercase mb-5">Contact</h4>
            <ul className="flex flex-col gap-[18px]">
              <li className="flex items-center gap-[11px]">
                <svg className="w-[17px] h-[17px] flex-shrink-0 mt-[2px]" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <a href={`tel:${company.phone}`} className="text-[14.5px] hover:text-white transition-colors">{company.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-[11px]">
                <svg className="w-[17px] h-[17px] flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
                </svg>
                <a href={`mailto:${company.email}`} className="text-[14.5px] hover:text-white transition-colors">{company.email}</a>
              </li>
              <li className="flex items-center gap-[11px]">
                <svg className="w-[17px] h-[17px] flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span className="text-[14.5px]">{company.hours}</span>
              </li>
            </ul>

            {/* Badges carte pro & RC Pro */}
            <div className="flex flex-wrap gap-[10px] mt-[22px]">
              {company.carteProNumber && (
                <span className="inline-flex items-center gap-2 text-[12.5px] px-3 py-2 rounded border border-white/16" style={{ color: 'var(--on-dark)' }}>
                  <svg className="w-[15px] h-[15px]" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/>
                  </svg>
                  Carte pro T n° {company.carteProNumber}
                </span>
              )}
              {company.rcPro && (
                <span className="inline-flex items-center gap-2 text-[12.5px] px-3 py-2 rounded border border-white/16" style={{ color: 'var(--on-dark)' }}>
                  <svg className="w-[15px] h-[15px]" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                  RC Pro {company.rcPro}
                </span>
              )}
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-3 mt-5">
              {social.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                  className="w-10 h-10 rounded-full grid place-items-center border border-white/18 transition-all duration-[250ms] hover:border-[var(--accent)]"
                  style={{ '--hover-bg': 'var(--accent)' } as React.CSSProperties}
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
                  </svg>
                </a>
              )}
              {social.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                  className="w-10 h-10 rounded-full grid place-items-center border border-white/18 transition-all duration-[250ms]">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              )}
              {social.linkedin && (
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full grid place-items-center border border-white/18 transition-all duration-[250ms]">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Barre bas */}
        <div className="flex flex-wrap items-center justify-between gap-[14px] py-7 text-[13px]">
          <div className="flex gap-6 flex-wrap">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link>
          </div>
          <span>© {year} {company.name}. Tous droits réservés.</span>
          <span className="inline-flex items-center gap-[7px]">
            Réalisé par <b style={{ color: 'var(--accent)', fontWeight: 600 }}>CStudio</b>
          </span>
        </div>
      </div>
    </footer>
  )
}

import SectionHead from '@/components/ui/SectionHead'
import ServiceIcon from '@/components/ui/ServiceIcon'
import { siteConfig } from '@/config/site.config'

// Services — 2 variantes : 'cartes' | 'liste-alternee'
// Variante active lue depuis siteConfig.variants.services

export default function Services() {
  const { variants, services, copy } = siteConfig

  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead
          eyebrow={copy.servicesEyebrow}
          title={copy.servicesTitle}
          subtitle={copy.servicesSubtitle}
        />

        {variants.services === 'cartes' ? (
          <ServicesCartes services={services} />
        ) : (
          <ServicesListeAlternee services={services} />
        )}
      </div>
    </section>
  )
}

// ─── Variante cartes (grille 3 colonnes) ─────────────────────────────────
function ServicesCartes({ services }: { services: typeof siteConfig.services }) {
  return (
    <div
      className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px rounded-[10px] overflow-hidden border"
      style={{
        background: 'var(--line)',
        borderColor: 'var(--line)',
      }}
    >
      {services.map((svc, i) => (
        <article
          key={i}
          className="group transition-colors duration-[250ms] p-[clamp(28px,3vw,40px)]"
          style={{ background: 'var(--surface)' }}
        >
          <span
            className="w-[50px] h-[50px] rounded grid place-items-center mb-[22px] transition-colors duration-[250ms]"
            style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
          >
            <ServiceIcon name={svc.icon} className="w-[26px] h-[26px]" />
          </span>
          <h3 className="text-[21px] mb-[10px] font-display font-medium" style={{ color: 'var(--ink)' }}>
            {svc.title}
          </h3>
          <p className="text-[15.5px]" style={{ color: 'var(--muted)' }}>{svc.description}</p>
        </article>
      ))}
    </div>
  )
}

// ─── Variante liste alternée (image + texte, direction alternée) ──────────
function ServicesListeAlternee({ services }: { services: typeof siteConfig.services }) {
  return (
    <div className="reveal flex flex-col gap-[clamp(48px,6vw,90px)]">
      {services.map((svc, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(30px,5vw,72px)] items-center"
        >
          <div className={i % 2 === 0 ? '' : 'md:order-2'}>
            <span className="text-[14px] font-semibold tracking-[.1em]" style={{ color: 'var(--accent-dk)', fontFamily: 'var(--font-display)' }}>
              {svc.num} — {svc.category}
            </span>
            <h3 className="font-display font-medium mt-3 mb-[14px]" style={{ fontSize: 'clamp(24px, 3vw, 34px)', color: 'var(--ink)' }}>
              {svc.title}
            </h3>
            <p style={{ color: 'var(--muted)', fontSize: '17px' }}>{svc.description}</p>
            <ul className="flex flex-col gap-[10px] mt-5">
              {svc.bullets.map((bullet, j) => (
                <li key={j} className="flex items-center gap-[11px] text-[15.5px]" style={{ color: 'var(--text)' }}>
                  <svg className="w-[18px] h-[18px] flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className={`aspect-[4/3] rounded-[10px] overflow-hidden shadow-md ${i % 2 === 0 ? '' : 'md:order-1'}`}>
            <img
              src={svc.image}
              alt={svc.imageAlt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

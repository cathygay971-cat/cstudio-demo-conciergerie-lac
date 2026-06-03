import Link from 'next/link'
import { siteConfig } from '@/config/site.config'

// CTA intermédiaire léger — bandeau sombre : titre court + 1 bouton accent (pas de formulaire).
// Contenu lu depuis siteConfig.ctaBand. enabled: false → rien rendu.
// buttonHref pointe en général vers #estimation (EstimBand plus bas dans la home).
// Prop `title` optionnelle : permet de contextualiser le titre (ex. page ville où
// le token {ville} est déjà remplacé par le nom de la ville). Absente → titre global.

export default function CtaBand({ title }: { title?: string } = {}) {
  const { ctaBand } = siteConfig
  if (!ctaBand.enabled) return null

  const displayTitle = title ?? ctaBand.title

  return (
    <section className="section" style={{ background: 'var(--dark-bg)' }}>
      <div className="wrap">
        <div className="reveal flex flex-col md:flex-row items-center justify-between gap-[clamp(20px,3vw,40px)] text-center md:text-left">
          <h2
            className="font-display max-w-[680px]"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'var(--on-dark)' }}
          >
            {displayTitle}
          </h2>
          <Link
            href={ctaBand.buttonHref}
            className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap flex-shrink-0 group"
            style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
          >
            {ctaBand.buttonLabel}
            <span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

import SectionHead from '@/components/ui/SectionHead'
import { siteConfig } from '@/config/site.config'
import type { TeamMember } from '@/types'

// Section Équipe — 2 variantes : 'grille' (cartes 3-4 pers.) | 'portraits' (grand format 1-2 pers.)
// Variante et contenu lus depuis siteConfig.team. enabled: false → rien rendu.

export default function TeamSection() {
  const { team } = siteConfig
  if (!team.enabled) return null

  return (
    <section className="section" style={{ background: 'var(--bg)' }}>
      <div className="wrap">
        <SectionHead eyebrow={team.eyebrow} title={team.title} subtitle={team.subtitle} />
        {team.variant === 'portraits' ? (
          <TeamPortraits members={team.members} />
        ) : (
          <TeamGrille members={team.members} />
        )}
      </div>
    </section>
  )
}

// ─── Variante grille (cartes alignées) ───────────────────────────────────────
function TeamGrille({ members }: { members: readonly TeamMember[] }) {
  // 4 membres → 4 colonnes en desktop, sinon 3. Classes Tailwind statiques (responsive).
  const cols = members.length === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'
  return (
    <div className={`reveal grid grid-cols-1 sm:grid-cols-2 ${cols} gap-[clamp(20px,2.5vw,30px)]`}>
      {members.map((m, i) => (
        <article
          key={i}
          className="flex flex-col h-full rounded-[10px] overflow-hidden border"
          style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={m.image}
              alt={m.imageAlt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col flex-1 p-[clamp(20px,2vw,26px)]">
            <h3 className="font-display font-medium text-[21px] mb-[4px]" style={{ color: 'var(--ink)' }}>
              {m.name}
            </h3>
            <span className="text-[13px] font-semibold tracking-[.06em] uppercase mb-[12px]" style={{ color: 'var(--accent-dk)' }}>
              {m.role}
            </span>
            <p className="text-[15.5px]" style={{ color: 'var(--muted)' }}>{m.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

// ─── Variante portraits (grand format, photo + texte côte à côte) ─────────────
function TeamPortraits({ members }: { members: readonly TeamMember[] }) {
  const single = members.length === 1
  return (
    <div className="reveal flex flex-col gap-[clamp(28px,4vw,52px)]">
      {members.map((m, i) => (
        <article
          key={i}
          className={`grid grid-cols-1 md:grid-cols-2 gap-[clamp(24px,3vw,48px)] items-center rounded-[10px] overflow-hidden border ${single ? 'max-w-[920px] mx-auto' : ''}`}
          style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={m.image}
              alt={m.imageAlt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="p-[clamp(24px,3vw,48px)]">
            <h3 className="font-display font-medium text-[clamp(26px,3vw,34px)] mb-[6px]" style={{ color: 'var(--ink)' }}>
              {m.name}
            </h3>
            <span className="text-[14px] font-semibold tracking-[.06em] uppercase" style={{ color: 'var(--accent-dk)' }}>
              {m.role}
            </span>
            <p className="mt-[18px] text-[17px]" style={{ color: 'var(--text)', lineHeight: 1.6 }}>{m.description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

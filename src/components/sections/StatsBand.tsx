import TrustIcon from '@/components/ui/TrustIcon'
import type { Stat, TrustBadge } from '@/types'

interface StatsBandProps {
  stats: readonly Stat[]
  trustBadges: readonly TrustBadge[]
}

// Bande de chiffres clés sur fond sombre — juste sous le hero
// Les chiffres et labels viennent de siteConfig.stats et siteConfig.trustBadges

export default function StatsBand({ stats, trustBadges }: StatsBandProps) {
  return (
    <section
      className="relative overflow-hidden py-[clamp(36px,4vw,56px)]"
      style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}
    >
      {/* Orbe décoratif */}
      <div
        className="absolute right-[-120px] top-[-120px] w-[420px] h-[420px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 62%)' }}
      />

      <div className="wrap">
        <div className="reveal grid grid-cols-2 md:grid-cols-4 relative gap-[clamp(24px,4vw,56px)]">
          {stats.map((stat, i) => (
            <div key={i} className={`relative ${i > 0 ? 'stat-sep' : ''}`}>
              {i > 0 && (
                <span
                  className="absolute left-[calc(-1*clamp(12px,2vw,28px))] top-[6px] bottom-[6px] w-px"
                  style={{ background: 'rgba(255,255,255,.14)' }}
                />
              )}
              <b
                className="font-display block leading-none"
                style={{ fontSize: 'clamp(38px, 5vw, 58px)', color: 'var(--on-dark)' }}
              >
                {stat.value}
                {stat.unit && (
                  <span style={{ color: 'var(--accent)', fontSize: '.6em' }}>{stat.unit}</span>
                )}
              </b>
              <span
                className="mt-3 block text-[15px]"
                style={{ color: 'var(--on-dark-mut)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Badges de réassurance */}
        <div
          className="reveal flex flex-wrap gap-[12px_28px] mt-[clamp(24px,3vw,36px)] pt-[24px] border-t"
          style={{ borderColor: 'rgba(255,255,255,.12)' }}
        >
          {trustBadges.map((badge, i) => (
            <span key={i} className="inline-flex items-center gap-[10px] text-[14px]" style={{ color: 'var(--on-dark-mut)' }}>
              <TrustIcon name={badge.icon} className="w-[19px] h-[19px] flex-shrink-0" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

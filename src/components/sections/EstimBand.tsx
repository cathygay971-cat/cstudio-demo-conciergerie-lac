'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { siteConfig } from '@/config/site.config'

interface EstimBandProps {
  cityName?: string
}

export default function EstimBand({ cityName }: EstimBandProps) {
  const { propertyTypes, copy } = siteConfig
  const [selected, setSelected] = useState<string>(propertyTypes[0])
  const router = useRouter()

  const titre = cityName
    ? `Combien peut rapporter votre bien à ${cityName} ?`
    : 'Combien peut rapporter votre bien ?'

  function launch() {
    router.push(`/estimation?type=${encodeURIComponent(selected)}`)
  }

  return (
    <section className="section" id="estimation">
      <div className="wrap">
        <div
          className="reveal rounded-[10px] overflow-hidden relative"
          style={{ background: 'var(--dark-bg-2)', color: 'var(--on-dark)' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1.1fr_.9fr] gap-[clamp(30px,5vw,70px)] items-center px-[clamp(32px,5vw,64px)] py-[clamp(48px,6vw,76px)]">
            {/* Texte gauche */}
            <div>
              <span className="eyebrow" style={{ color: 'var(--accent)' }}>{copy.estimBandEyebrow}</span>
              <h2 className="text-white mt-4 mb-[18px]" style={{ fontSize: 'clamp(28px, 3.6vw, 44px)' }}>
                {titre}
              </h2>
              <p className="text-[18px] max-w-[460px]" style={{ color: 'var(--on-dark-mut)' }}>
                {copy.estimBandSubtitle}
              </p>
            </div>

            {/* Mini-estimateur interactif */}
            <div className="rounded-[10px] p-7 shadow-lg" style={{ background: 'var(--surface)' }}>
              <div className="text-[12.5px] font-semibold tracking-[.14em] uppercase mb-[14px]" style={{ color: 'var(--muted)' }}>
                Estimateur · étape 1/5
              </div>
              <div className="flex gap-[6px] mb-[22px]">
                {[true, false, false, false, false].map((on, i) => (
                  <span key={i} className="h-[4px] flex-1 rounded-[2px]" style={{ background: on ? 'var(--accent)' : 'var(--line)' }} />
                ))}
              </div>
              <div className="font-display text-[20px] mb-[16px]" style={{ color: 'var(--ink)' }}>
                Quel type de bien ?
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[8px] mb-[20px]">
                {propertyTypes.map(opt => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setSelected(opt)}
                    className="px-[12px] py-[11px] border rounded text-[14px] font-medium text-left cursor-pointer transition-all duration-150"
                    style={{
                      borderColor: selected === opt ? 'var(--accent)' : 'var(--line)',
                      background: selected === opt ? 'var(--accent-tint)' : 'var(--surface)',
                      color: selected === opt ? 'var(--ink)' : 'var(--text)',
                    }}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={launch}
                className="flex items-center justify-center gap-[10px] w-full px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] group"
                style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
              >
                Lancer mon estimation
                <span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

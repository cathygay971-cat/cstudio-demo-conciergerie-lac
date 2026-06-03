'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site.config'

// Hero — 3 variantes : 'plein' (overlay-full) | 'light' (overlay-light) | 'split'
// La variante active est lue depuis siteConfig.variants.hero
// Règle : seule la home utilise ce composant. Pages villes → CityHero. Contact/Estimation → pas de hero.

export default function Hero() {
  const { variants, hero, identity } = siteConfig
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animation reveal au chargement
    const el = sectionRef.current
    if (!el) return
    const reveals = el.querySelectorAll('.reveal')
    reveals.forEach(r => r.classList.add('in'))
  }, [])

  if (variants.hero === 'plein') return <HeroFull hero={hero} identity={identity} ref={sectionRef} />
  if (variants.hero === 'light') return <HeroLight hero={hero} identity={identity} ref={sectionRef} />
  return <HeroSplit hero={hero} identity={identity} ref={sectionRef} />
}

// ─── Variante plein (overlay-full) ────────────────────────────────────────
import { forwardRef } from 'react'
const HeroFull = forwardRef<HTMLElement, { hero: typeof siteConfig.hero; identity: typeof siteConfig.identity }>(
  function HeroFull({ hero, identity }, ref) {
    return (
      <section
        ref={ref}
        className="relative min-h-screen grid items-center pt-[78px] bg-cover bg-center"
        style={{ backgroundImage: `url('${hero.imageFull}')` }}
        aria-label={hero.imageFullAlt}
      >
        {/* Voile dégradé */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `linear-gradient(95deg, var(--hero-veil-2) 0%, var(--hero-veil-2) 20%, var(--hero-veil-1) 60%, transparent 92%), linear-gradient(180deg, rgba(16,21,38,.34) 0%, transparent 28%, var(--hero-veil-2) 100%)`
        }} />
        <div className="wrap">
          <div className="relative max-w-[680px] py-[90px]" style={{ color: 'var(--on-dark)' }}>
            <span className="inline-flex items-center gap-[9px] px-4 py-2 rounded-full text-[13px] font-semibold tracking-[.02em] mb-[26px] backdrop-blur-[6px] border" style={{ background: 'rgba(16,21,38,.75)', borderColor: 'var(--accent)', color: 'var(--on-dark)' }}>
              <span className="w-[7px] h-[7px] rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
              {identity.heroBadge}
            </span>
            <h1 className="text-white" style={{ fontSize: 'clamp(38px, 6vw, 72px)', textShadow: '0 2px 28px rgba(10,14,28,.45)' }}>
              {hero.full.title}
            </h1>
            <p className="mt-[22px] text-white/92" style={{ fontSize: 'clamp(17px, 1.7vw, 21px)', lineHeight: 1.55, textShadow: '0 1px 18px rgba(10,14,28,.5)' }}>
              {hero.full.subtitle}
            </p>
            <div className="flex flex-wrap gap-[14px] mt-[38px]">
              <Link href="/estimation" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap group" style={{ background: 'var(--accent)', color: 'var(--accent-foreground)', borderColor: 'var(--accent)' }}>
                Estimer mes revenus<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-white/35 cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap hover:border-white/80 hover:bg-white/8 text-white">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 text-white/70 text-[12px] tracking-[.18em] uppercase flex flex-col items-center gap-[10px]">
          Découvrir
          <span className="w-px h-[38px] animate-scrolldn block" style={{ background: 'linear-gradient(rgba(255,255,255,.6), transparent)' }} />
        </div>
      </section>
    )
  }
)

// ─── Variante light (hero court, voile léger) ─────────────────────────────
const HeroLight = forwardRef<HTMLElement, { hero: typeof siteConfig.hero; identity: typeof siteConfig.identity }>(
  function HeroLight({ hero, identity }, ref) {
    return (
      <section
        ref={ref}
        className="relative pt-[78px] bg-cover bg-center"
        style={{ backgroundImage: `url('${hero.imageFull}')` }}
        aria-label={hero.imageFullAlt}
      >
        <div className="absolute inset-0" style={{ background: 'var(--hero-light-veil)' }} />
        <div className="wrap relative z-10">
          <div className="text-center max-w-[760px] mx-auto py-[clamp(52px,7vw,88px)]">
            <span className="inline-flex items-center gap-[9px] px-4 py-2 rounded-full text-[13px] font-semibold tracking-[.02em] mb-[26px] border" style={{ background: 'var(--surface)', color: 'var(--ink)', borderColor: 'var(--accent)' }}>
              <span className="w-[7px] h-[7px] rounded-full" style={{ background: 'var(--accent)' }} />
              {identity.heroBadge}
            </span>
            <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>{hero.light.title}</h1>
            <p className="mt-[22px]" style={{ fontSize: 'clamp(17px, 1.7vw, 21px)', lineHeight: 1.55, color: 'var(--text)' }}>
              {hero.light.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-[14px] mt-[38px]">
              <Link href="/estimation" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap group" style={{ background: 'var(--accent)', color: 'var(--accent-foreground)', borderColor: 'var(--accent)' }}>
                Estimer mes revenus<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap" style={{ background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line)' }}>
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

// ─── Variante split ────────────────────────────────────────────────────────
const HeroSplit = forwardRef<HTMLElement, { hero: typeof siteConfig.hero; identity: typeof siteConfig.identity }>(
  function HeroSplit({ hero, identity }, ref) {
    return (
      <section
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen pt-[78px]"
        style={{ background: 'var(--bg)' }}
        aria-label={hero.imageFullAlt}
      >
        <div className="flex flex-col justify-center px-[clamp(30px,5vw,80px)] py-[clamp(50px,7vw,110px)]">
          <span className="inline-flex items-center gap-[9px] px-4 py-2 rounded-full text-[13px] font-semibold tracking-[.02em] mb-[26px] self-start border" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)', borderColor: 'var(--accent)' }}>
            <span className="w-[7px] h-[7px] rounded-full" style={{ background: 'var(--accent)' }} />
            {identity.heroBadge}
          </span>
          <h1 style={{ fontSize: 'clamp(38px, 6vw, 72px)' }}>{hero.split.title}</h1>
          <p className="mt-[22px]" style={{ fontSize: 'clamp(17px, 1.7vw, 21px)', lineHeight: 1.55, color: 'var(--text)' }}>
            {hero.split.subtitle}
          </p>
          <div className="flex flex-wrap gap-[14px] mt-[38px]">
            <Link href="/estimation" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap group" style={{ background: 'var(--accent)', color: 'var(--accent-foreground)', borderColor: 'var(--accent)' }}>
              Estimer mes revenus<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
            </Link>
            <Link href="/#services" className="inline-flex items-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[50px] whitespace-nowrap" style={{ background: 'transparent', color: 'var(--ink)', borderColor: 'var(--line)' }}>
              Découvrir nos services
            </Link>
          </div>
        </div>
        <div className="relative bg-cover bg-center min-h-[280px] md:min-h-0 md:mt-[28px]" style={{ backgroundImage: `url('${hero.imageSplit}')` }}>
          <div
            className="absolute left-0 bottom-[42px] -translate-x-[40%] rounded-[10px] p-[20px_24px] flex items-center gap-4 max-w-[280px]"
            style={{ background: 'var(--surface)', boxShadow: 'var(--shadow-lg)' }}
          >
            <span className="w-11 h-11 rounded-full border-[3px] grid place-items-center flex-shrink-0" style={{ borderColor: 'var(--accent)', color: 'var(--accent-dk)' }}>
              <svg className="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </span>
            <div>
              <b className="block font-display text-[30px] leading-none mb-1" style={{ color: 'var(--ink)' }}>{hero.split.floatValue}</b>
              <span className="text-[13px]" style={{ color: 'var(--muted)' }}>{hero.split.floatLabel}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
)

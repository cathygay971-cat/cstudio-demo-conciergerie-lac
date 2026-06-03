'use client'

import { useState, useEffect } from 'react'
import SectionHead from '@/components/ui/SectionHead'
import { siteConfig } from '@/config/site.config'
import type { Testimonial } from '@/types'

// Témoignages — 2 variantes : 'carrousel' | 'grille'
// Variante active lue depuis siteConfig.variants.testimonials
// items (optionnel) : permet d'injecter des avis spécifiques (page ville).
// Sans prop → avis globaux siteConfig.testimonials (comportement par défaut, home).

export default function Testimonials({ items }: { items?: readonly Testimonial[] } = {}) {
  const { variants, copy } = siteConfig
  const list = items ?? siteConfig.testimonials

  if (!list.length) return null

  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          eyebrow={copy.testimonialsEyebrow}
          title={copy.testimonialsTitle}
          subtitle={copy.testimonialsSubtitle}
        />
        {variants.testimonials === 'carrousel'
          ? <TestiCarousel testimonials={list} />
          : <TestiGrid testimonials={list} />
        }
      </div>
    </section>
  )
}

// ─── Variante carrousel ────────────────────────────────────────────────────
function TestiCarousel({ testimonials }: { testimonials: readonly Testimonial[] }) {
  const [current, setCurrent] = useState(0)
  // 1 carte par vue sur mobile, 3 sur desktop (≥ md)
  const [perPage, setPerPage] = useState(3)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const apply = () => setPerPage(mq.matches ? 3 : 1)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  const maxStart = Math.max(0, testimonials.length - perPage)
  const safeCurrent = Math.min(current, maxStart)

  function prev() { setCurrent(c => Math.max(0, c - 1)) }
  function next() { setCurrent(c => Math.min(maxStart, c + 1)) }

  return (
    <div className="reveal" id="testiCarousel">
      <div className="overflow-hidden">
        <div
          className="flex items-stretch gap-6 transition-transform duration-500"
          style={{ transform: `translateX(calc(-${safeCurrent} * (100% + 24px) / ${perPage}))` }}
        >
          {testimonials.map((t, i) => <TestiCard key={i} t={t} />)}
        </div>
      </div>
      <div className="flex gap-[10px] mt-[34px]">
        <button
          onClick={prev}
          disabled={safeCurrent === 0}
          aria-label="Précédent"
          className="w-12 h-12 rounded-full border grid place-items-center cursor-pointer transition-all duration-200 disabled:opacity-40"
          style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <button
          onClick={next}
          disabled={safeCurrent >= maxStart}
          aria-label="Suivant"
          className="w-12 h-12 rounded-full border grid place-items-center cursor-pointer transition-all duration-200 disabled:opacity-40"
          style={{ borderColor: 'var(--line)', background: 'var(--surface)' }}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

// ─── Variante grille ───────────────────────────────────────────────────────
function TestiGrid({ testimonials }: { testimonials: readonly Testimonial[] }) {
  return (
    <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((t, i) => <TestiCard key={i} t={t} />)}
    </div>
  )
}

// ─── Carte témoignage partagée ─────────────────────────────────────────────
function TestiCard({ t }: { t: Testimonial }) {
  return (
    <article
      className="flex flex-col h-full rounded-[10px] border p-[clamp(28px,3vw,38px)] flex-shrink-0 w-full md:w-auto md:flex-[0_0_calc((100%-48px)/3)] min-w-0"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--line)',
      }}
    >
      <div className="flex gap-[3px] mb-[18px]" style={{ color: 'var(--accent)' }} aria-label="5 sur 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9"/>
          </svg>
        ))}
      </div>
      <blockquote
        className="font-display text-[20px] leading-[1.4] font-normal"
        style={{ color: 'var(--ink)' }}
      >
        « {t.quote} »
      </blockquote>
      <div
        className="flex items-center gap-[14px] mt-auto pt-[22px] border-t"
        style={{ borderColor: 'var(--line)' }}
      >
        <span
          className="w-[46px] h-[46px] rounded-full grid place-items-center font-display font-semibold text-[18px] flex-shrink-0"
          style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
        >
          {t.initial}
        </span>
        <div>
          <b className="block text-[15px]" style={{ color: 'var(--ink)' }}>{t.author}</b>
          <span className="text-[13px]" style={{ color: 'var(--muted)' }}>{t.property}</span>
        </div>
      </div>
    </article>
  )
}

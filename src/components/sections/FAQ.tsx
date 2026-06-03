'use client'

import { useState } from 'react'
import SectionHead from '@/components/ui/SectionHead'
import type { FaqItem } from '@/types'

interface FAQProps {
  items: readonly FaqItem[]
  eyebrow?: string
  title?: string
  bare?: boolean
}

export default function FAQ({
  items,
  eyebrow = 'Questions fréquentes',
  title = 'Vos questions avant de vous lancer',
  bare = false,
}: FAQProps) {
  const [open, setOpen] = useState<number | null>(0)

  if (!items.length) return null

  const accordion = (
    <>
      <SectionHead eyebrow={eyebrow} title={title} />
      <div className="border-t max-w-[880px]" style={{ borderColor: 'var(--line)' }}>
        {items.map((item, i) => (
          <div key={i} className="border-b" style={{ borderColor: 'var(--line)' }}>
            <button
              type="button"
              className="w-full bg-transparent border-0 cursor-pointer text-left flex items-center gap-5 py-[26px] font-display transition-colors duration-200"
              style={{ fontSize: 'clamp(18px, 2vw, 23px)', color: 'var(--ink)' }}
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span className="flex-1">{item.question}</span>
              <span
                className="ml-auto flex-shrink-0 w-[30px] h-[30px] rounded-full border grid place-items-center relative transition-all duration-300"
                style={{
                  borderColor: open === i ? 'var(--accent)' : 'var(--line)',
                  background: open === i ? 'var(--accent)' : 'transparent',
                }}
              >
                <span
                  className="absolute w-[12px] h-[2px]"
                  style={{ background: open === i ? 'var(--accent-foreground)' : 'var(--ink)' }}
                />
                <span
                  className="absolute w-[2px] h-[12px] transition-transform duration-300"
                  style={{
                    background: open === i ? 'var(--accent-foreground)' : 'var(--ink)',
                    transform: open === i ? 'scaleY(0)' : 'scaleY(1)',
                  }}
                />
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-[400ms]"
              style={{ maxHeight: open === i ? '500px' : '0' }}
            >
              <p className="pb-7 pr-[50px] text-[16.5px]" style={{ color: 'var(--muted)' }}>
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )

  if (bare) return accordion

  return (
    <section className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="wrap">{accordion}</div>
    </section>
  )
}

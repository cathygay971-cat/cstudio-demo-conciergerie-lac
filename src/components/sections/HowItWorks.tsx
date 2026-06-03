import SectionHead from '@/components/ui/SectionHead'
import { siteConfig } from '@/config/site.config'
import type { Step } from '@/types'

interface HowItWorksProps {
  steps: readonly Step[]
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  const { copy } = siteConfig
  return (
    <section className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="wrap">
        <SectionHead
          eyebrow={copy.howItWorksEyebrow}
          title={copy.howItWorksTitle}
          subtitle={copy.howItWorksSubtitle}
        />
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[clamp(20px,2.5vw,30px)]">
          {steps.map((step, i) => (
            <div key={i} className="relative pt-[26px]">
              {/* Barre horizontale + accent */}
              <span
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'var(--line)' }}
              />
              <span
                className="absolute top-[-3px] left-0 w-[36px] h-[8px] rounded"
                style={{ background: 'var(--accent)' }}
              />
              <span
                className="font-display text-[15px] font-semibold tracking-[.08em]"
                style={{ color: 'var(--accent-dk)' }}
              >
                {step.num}
              </span>
              <h3 className="font-display font-medium text-[22px] mt-[14px] mb-[10px]" style={{ color: 'var(--ink)' }}>
                {step.title}
              </h3>
              <p className="text-[15.5px]" style={{ color: 'var(--muted)' }}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

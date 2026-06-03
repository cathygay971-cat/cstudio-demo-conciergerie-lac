import type { WhyCityData } from '@/types'

interface WhyCityProps {
  data: WhyCityData
}

export default function WhyCity({ data }: WhyCityProps) {
  return (
    <section className="section">
      <div className="wrap">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(36px,5vw,72px)]">
          {/* Texte */}
          <div className="reveal">
            <span className="eyebrow mb-[18px]">{data.eyebrow}</span>
            <h2 className="font-display font-medium" style={{ fontSize: 'clamp(30px, 4.2vw, 48px)', color: 'var(--ink)' }}>
              {data.title}
            </h2>
            <p className="mt-[18px] text-[19px]" style={{ color: 'var(--text)', lineHeight: 1.55 }}>
              {data.lead}
            </p>
            <p className="mt-[14px] text-[17.5px]" style={{ color: 'var(--text)', lineHeight: 1.6 }}>
              {data.body}
            </p>
            <div className="grid grid-cols-2 gap-[14px] mt-[30px]">
              {data.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-[10px] p-[22px_24px] border"
                  style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
                >
                  <b className="font-display text-[32px] block leading-none" style={{ color: 'var(--ink)' }}>
                    {stat.value}
                  </b>
                  <span className="text-[14px] mt-1 block" style={{ color: 'var(--muted)' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image — s'étire pour aligner son bas avec le bas des cartes */}
          <div className="reveal flex flex-col">
            <div
              className="flex-1 rounded-[10px] overflow-hidden shadow-md"
              style={{ minHeight: 'clamp(340px, 45vw, 580px)' }}
            >
              <img
                src={data.image}
                alt={data.imageAlt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

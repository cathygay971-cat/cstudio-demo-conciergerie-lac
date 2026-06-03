interface SectionHeadProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean // texte clair sur fond sombre
}

export default function SectionHead({ eyebrow, title, subtitle, centered, light }: SectionHeadProps) {
  return (
    <div
      className="mb-[clamp(38px,5vw,60px)]"
      style={{ maxWidth: centered ? undefined : '680px', textAlign: centered ? 'center' : undefined, marginInline: centered ? 'auto' : undefined }}
    >
      {eyebrow && (
        <span
          className="eyebrow mb-[18px] inline-flex"
          style={light ? { color: 'var(--accent)', '--eyebrow-before': 'var(--accent)' } as React.CSSProperties : undefined}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className="font-display"
        style={{
          fontSize: 'clamp(30px, 4.2vw, 48px)',
          color: light ? 'var(--on-dark)' : 'var(--ink)',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-[18px] text-[18px]"
          style={{ color: light ? 'var(--on-dark-mut)' : 'var(--muted)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

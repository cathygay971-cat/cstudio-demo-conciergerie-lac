import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="flex gap-[9px] items-center flex-wrap text-[13.5px] pt-[104px] pb-1"
      style={{ color: 'var(--muted)' }}
      aria-label="Fil d'Ariane"
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-[9px]">
          {i > 0 && <span className="opacity-45">›</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="transition-colors duration-200 hover:text-c-ink"
              style={{ color: 'var(--muted)' }}
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold" style={{ color: 'var(--ink)' }}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}

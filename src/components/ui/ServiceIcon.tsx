// Icônes SVG pour les services (correspondance avec le champ icon du config)

interface ServiceIconProps {
  name: string
  className?: string
}

export default function ServiceIcon({ name, className = 'w-[26px] h-[26px]' }: ServiceIconProps) {
  const props = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }

  switch (name) {
    case 'photo':
      return <svg {...props}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    case 'chat':
      return <svg {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    case 'clean':
      return <svg {...props}><path d="M3 21v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4"/><path d="M3 13l2-7h14l2 7"/><path d="M8 6V3h8v3"/></svg>
    case 'key':
      return <svg {...props}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    case 'wrench':
      return <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    case 'chart':
      return <svg {...props}><path d="M3 3v18h18"/><path d="M19 9l-5 5-4-4-3 3"/></svg>
    default:
      return <svg {...props}><circle cx="12" cy="12" r="10"/></svg>
  }
}

import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site.config'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import MobileBar from '@/components/layout/MobileBar'
import CookieBanner from '@/components/layout/CookieBanner'
import CookieYesScript from '@/components/layout/CookieYesScript'
import GTMScript from '@/components/layout/GTMScript'
import RevealObserver from '@/components/layout/RevealObserver'

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: `%s | ${siteConfig.identity.name}`,
  },
  description: siteConfig.seo.defaultDescription,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteConfig.seo.siteUrl,
    siteName: siteConfig.identity.name,
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme, integrations } = siteConfig
  const c = theme.colors

  const cssVars = {
    '--bg':              c.bg,
    '--surface':         c.surface,
    '--surface-2':       c.surface2,
    '--ink':             c.ink,
    '--ink-soft':        c.inkSoft,
    '--text':            c.text,
    '--muted':           c.muted,
    '--line':            c.line,
    '--accent':          c.accent,
    '--accent-dk':       c.accentDark,
    '--accent-tint':     c.accentTint,
    '--accent-foreground': c.accentForeground,
    '--on-dark':         c.onDark,
    '--on-dark-mut':     c.onDarkMuted,
    '--dark-bg':         c.darkBg,
    '--dark-bg-2':       c.darkBg2,
    '--hero-veil-1':     hexToRgba(c.darkBg, 0.34),
    '--hero-veil-2':     hexToRgba(c.darkBg, 0.78),
    '--hero-light-veil': hexToRgba(c.bg, 0.66),
    '--header-glass-bg': hexToRgba(c.bg, 0.92),
    '--font-display':    `"${theme.fonts.display}", ${theme.fonts.displayFallback}`,
    '--font-body':       `"${theme.fonts.body}", ${theme.fonts.bodyFallback}`,
  } as React.CSSProperties

  const displayParam = theme.fonts.display.replace(/ /g, '+')
  const bodyParam = theme.fonts.body.replace(/ /g, '+')
  const fontFamilies = Array.from(new Set([
    `${displayParam}:ital,wght@0,400;0,500;0,600`,
    `${bodyParam}:wght@400;500;600;700`,
  ]))
  const fontUrl = `https://fonts.googleapis.com/css2?family=${fontFamilies.join('&family=')}&display=swap`

  return (
    <html lang="fr" style={cssVars}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={fontUrl} rel="stylesheet" />
      </head>
      <body>
        <GTMScript gtmId={integrations.gtmId} />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <MobileBar />
        {integrations.cookieBanner === 'cookieyes'
          ? <CookieYesScript cookieYesId={integrations.cookieYesId} />
          : <CookieBanner />
        }
        <RevealObserver />
      </body>
    </html>
  )
}

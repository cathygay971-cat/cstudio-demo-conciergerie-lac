'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/site.config'

export default function SiteHeader() {
  const pathname = usePathname()
  const isSubpage = pathname !== '/' // header opaque partout sauf sur la home
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    if (isSubpage) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isSubpage])

  const { company, nav, variants } = siteConfig

  // 'plein' = image sombre → texte blanc. 'light' et 'split' = fond clair → texte foncé.
  const transparentColor = variants.hero === 'plein' ? 'var(--on-dark)' : 'var(--ink)'

  const headerStyle: React.CSSProperties = scrolled || isSubpage
    ? {
        background: 'var(--bg)',
        borderBottomColor: 'var(--line)',
        boxShadow: '0 2px 20px rgba(20,24,38,.08)',
        color: 'var(--ink)',
      }
    : {
        color: transparentColor,
      }

  return (
    <>
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent"
        style={headerStyle}
      >
        <div className="wrap flex items-center gap-6 h-[94px]">
          {/* Logo à gauche */}
          <Logo />

          {/* Nav centré */}
          <nav className="hidden md:flex flex-1 justify-center gap-[46px]" aria-label="Navigation principale">
            {nav.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] font-medium relative py-1 opacity-[.92] hover:opacity-100 transition-opacity group"
              >
                {item.label}
                <span
                  className="absolute left-0 right-full bottom-[-2px] h-[2px] group-hover:right-0 transition-all duration-[280ms]"
                  style={{ background: 'var(--accent)' }}
                />
              </Link>
            ))}
          </nav>

          {/* Outils à droite */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center gap-2 font-semibold text-[15px] whitespace-nowrap"
            >
              <svg className="w-[17px] h-[17px] opacity-80 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {company.phoneDisplay}
            </a>
            <Link
              href="/estimation"
              className="inline-flex items-center justify-center gap-[8px] px-[22px] py-[12px] font-semibold text-[15px] rounded-full cursor-pointer transition-all duration-[250ms] min-h-[44px] whitespace-nowrap group hover:opacity-90"
              style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}
            >
              Estimer mes revenus
              <span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span>
            </Link>
          </div>

          {/* Bouton hamburger mobile */}
          <button
            className="md:hidden ml-auto bg-transparent border-0 cursor-pointer p-2 -m-2"
            onClick={() => setDrawerOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Drawer mobile */}
      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}

// Logo configurable : image si identity.logoImage, sinon cercle initiale
function Logo({ small = false, inkColor }: { small?: boolean; inkColor?: string }) {
  const { identity } = siteConfig
  const circle = small ? 'w-[38px] h-[38px] text-[19px]' : 'w-[48px] h-[48px] text-[22px]'
  const titleSize = small ? 'text-[20px]' : 'text-[24px]'
  const subSize = small ? 'text-[10.5px]' : 'text-[11.5px]'

  return (
    <Link href="/" className="flex items-center gap-[14px] flex-shrink-0" aria-label={`${identity.name}, accueil`}>
      {identity.logoImage ? (
        <img
          src={identity.logoImage}
          alt={identity.name}
          className="flex-shrink-0 w-auto"
          style={{ height: 'auto', maxHeight: small ? '40px' : '52px' }}
        />
      ) : (
        <span
          className={`${circle} rounded-full grid place-items-center flex-shrink-0 font-display font-semibold`}
          style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
        >
          {identity.logoInitial.charAt(0).toUpperCase()}
        </span>
      )}
      <span className="flex flex-col leading-[1.05]">
        <b className={`font-display ${titleSize} font-medium tracking-[-0.01em]`} style={inkColor ? { color: inkColor } : undefined}>
          {identity.logoTitle}
        </b>
        <span className={`${subSize} tracking-[.22em] uppercase opacity-70 font-semibold`}>{identity.logoSubtitle}</span>
      </span>
    </Link>
  )
}

function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { company, nav, whatsapp } = siteConfig

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-[200] transition-all duration-300 ${open ? 'visible' : 'invisible'}`}
    >
      {/* Fond */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        style={{ background: 'rgba(16,21,38,.5)' }}
        onClick={onClose}
      />
      {/* Panel */}
      <div
        className={`absolute top-0 right-0 bottom-0 w-[min(86vw,380px)] flex flex-col p-[26px] transition-transform duration-[350ms]`}
        style={{
          background: 'var(--bg)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <div className="flex justify-between items-center mb-8" style={{ color: 'var(--ink)' }}>
          <div onClick={onClose}>
            <Logo small inkColor="var(--ink)" />
          </div>
          <button className="bg-transparent border-0 cursor-pointer p-2" onClick={onClose} aria-label="Fermer le menu">
            <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1">
          {nav.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="py-[15px] font-display text-[24px] border-b"
              style={{ color: 'var(--ink)', borderColor: 'var(--line)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-[14px] pt-6">
          <a
            href={`tel:${company.phone}`}
            className="inline-flex items-center justify-center gap-[10px] font-semibold px-5 py-[11px] rounded border min-h-[50px]"
            style={{ borderColor: 'var(--line)', color: 'var(--ink)' }}
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {company.phoneDisplay}
          </a>
          {whatsapp.number && (
            <a
              href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[10px] font-semibold px-5 py-[11px] rounded border min-h-[50px]"
              style={{ borderColor: '#25D366', color: '#25D366' }}
            >
              <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L0 24l6.336-1.502A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.197-1.373l-.373-.217-3.763.893.952-3.653-.24-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              WhatsApp
            </a>
          )}
          <Link
            href="/estimation"
            onClick={onClose}
            className="inline-flex items-center justify-center gap-[10px] font-semibold text-[15.5px] rounded-full min-h-[50px] transition-all duration-[250ms]"
            style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}
          >
            Estimer mes revenus
          </Link>
        </div>
      </div>
    </div>
  )
}

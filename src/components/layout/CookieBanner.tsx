'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

// Bandeau RGPD simple — s'affiche tant que le consentement n'a pas été donné
// Stocke le choix dans localStorage

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function refuse() {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[150] p-4 md:p-6 shadow-lg"
      style={{
        background: 'var(--dark-bg-2)',
        color: 'var(--on-dark-mut)',
        bottom: 'calc(60px + env(safe-area-inset-bottom, 0px))',
      }}
    >
      <div className="wrap">
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <p className="text-[14px] max-w-[680px]">
            Nous utilisons des cookies pour mesurer l&apos;audience et améliorer votre expérience.{' '}
            <Link href="/confidentialite" className="underline hover:text-white transition-colors">
              En savoir plus
            </Link>
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={refuse}
              className="px-4 py-[10px] text-[14px] font-semibold rounded border cursor-pointer transition-all duration-200 hover:text-white"
              style={{ borderColor: 'rgba(255,255,255,.2)', background: 'transparent' }}
            >
              Refuser
            </button>
            <button
              onClick={accept}
              className="px-4 py-[10px] text-[14px] font-semibold rounded cursor-pointer transition-all duration-200"
              style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

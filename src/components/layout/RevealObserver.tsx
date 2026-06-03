'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Active la classe .in sur les éléments .reveal quand ils entrent dans le viewport
// (IntersectionObserver — pas de JS inutile sur desktop/mobile).
//
// IMPORTANT : dépend de usePathname() → l'effet se relance à CHAQUE navigation
// Next.js, sinon les .reveal des nouvelles pages (villes, zones…) ne sont jamais
// observés et restent bloqués à opacity:0 (grands blocs vides).

export default function RevealObserver() {
  const pathname = usePathname()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in')
            observer.unobserve(entry.target)
          }
        })
      },
      // threshold 0 + rootMargin légèrement positif → déclenche dès qu'une section
      // approche du viewport (y compris en bas de page).
      { threshold: 0, rootMargin: '0px 0px 10% 0px' }
    )

    // Re-scan après un tick, pour que le DOM de la nouvelle page soit bien en place.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => {
        // Éléments déjà dans le viewport au chargement → affichage immédiat (pas d'attente de scroll).
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('in')
        } else {
          observer.observe(el)
        }
      })
    })

    // Filet de sécurité : rien ne doit rester invisible (timing, layout, sections
    // qui se masquent/réaffichent…). Relancé à chaque navigation via [pathname].
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.in)').forEach(el => el.classList.add('in'))
    }, 1500)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(fallback)
      observer.disconnect()
    }
  }, [pathname])

  return null
}

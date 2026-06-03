import Link from 'next/link'
import type { SeoBlock as SeoBlockData, City } from '@/types'

// Bloc SEO riche en 2 colonnes (format « Fullboutik ») :
//  - gauche : icône + grand titre (H2) + pilules de mots-clés
//  - droite : 2-3 paragraphes de texte
//  - (pages villes uniquement) phrase de maillage interne vers les autres villes
// Reçoit son contenu en prop `data` : bloc HOME (siteConfig.seoBlock) OU bloc VILLE
// (cities[].seoBlock) → contenu SEO UNIQUE par page.
// Props maillage `currentCity` + `allCities` : si fournies (pages villes), une phrase
// « Nous intervenons également à … » avec liens cliquables s'affiche en fin de bloc.
// Sur la home, ces props sont absentes → pas de phrase de maillage.
// return null si data absent ou data.enabled === false.
// Responsive : 2 colonnes desktop (md:grid-cols-2), empilées sur mobile.

export default function SeoBlock({
  data,
  currentCity,
  allCities,
}: {
  data?: SeoBlockData
  currentCity?: City
  allCities?: readonly City[]
}) {
  if (!data || data.enabled === false) return null

  // Maillage interne : autres villes (hors ville courante et hors slugs placeholder).
  const otherCities =
    currentCity && allCities
      ? allCities.filter(c => c.slug !== currentCity.slug && !c.slug.includes('['))
      : []

  return (
    <section className="section" style={{ background: 'var(--surface-2)' }}>
      <div className="wrap">
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-[clamp(32px,5vw,72px)] items-start">
          {/* Colonne gauche : icône + titre H2 + pilules */}
          <div>
            <span
              className="w-[50px] h-[50px] rounded grid place-items-center mb-[22px]"
              style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}
            >
              <svg className="w-[26px] h-[26px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
            </span>
            <h2 className="font-display font-medium" style={{ fontSize: 'clamp(28px,3.6vw,42px)', color: 'var(--ink)' }}>
              {data.title}
            </h2>
            {data.keywords.length > 0 && (
              <div className="flex flex-wrap gap-[10px] mt-[26px]">
                {data.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-[16px] py-[8px] rounded-full border text-[14px] font-medium"
                    style={{ background: 'var(--surface)', borderColor: 'var(--line)', color: 'var(--ink)' }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Colonne droite : paragraphes + phrase de maillage (pages villes) */}
          <div className="flex flex-col gap-[18px]">
            {data.paragraphs.map((para, i) => (
              <p key={i} className="text-[16.5px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                {para}
              </p>
            ))}

            {/* Maillage interne : phrase « Nous intervenons également à … » */}
            {otherCities.length > 0 && (
              <p className="text-[16.5px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
                Nous intervenons également à{' '}
                {otherCities.map((city, i) => (
                  <span key={city.slug}>
                    <Link
                      href={`/conciergerie/${city.slug}`}
                      className="font-medium underline underline-offset-2"
                      style={{ color: 'var(--accent-dk)' }}
                    >
                      {city.name}
                    </Link>
                    {i < otherCities.length - 2 ? ', ' : i === otherCities.length - 2 ? ' et ' : ''}
                  </span>
                ))}
                .
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

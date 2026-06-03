import Script from 'next/script'

// Charge le script CookieYes si un ID est fourni dans siteConfig.integrations.cookieYesId.
// Le script gère automatiquement la bannière RGPD, les catégories de cookies et le log de consentement.
export default function CookieYesScript({ cookieYesId }: { cookieYesId: string }) {
  if (!cookieYesId) return null
  return (
    <Script
      id="cookieyes"
      src={`https://cdn-cookieyes.com/client_data/${cookieYesId}/script.js`}
      strategy="afterInteractive"
    />
  )
}

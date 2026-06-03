import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: `Politique de confidentialité et gestion des données personnelles de ${siteConfig.company.name}.`,
  robots: { index: false },
}

export default function ConfidentialitePage() {
  const { company } = siteConfig
  const year = new Date().getFullYear()

  return (
    <>
      <div className="wrap pb-[clamp(64px,8vw,110px)]">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Politique de confidentialité' }]} />
        <div className="max-w-[760px] py-[clamp(20px,3vw,40px)]">
          <h1 className="font-display font-medium mb-10" style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--ink)' }}>
            Politique de confidentialité
          </h1>

          <Section title="Responsable du traitement">
            <p>{company.name}, {company.address}, {company.zipCode} {company.city}.<br />
            Contact : <a href={`mailto:${company.email}`} style={{ color: 'var(--accent-dk)' }}>{company.email}</a></p>
          </Section>

          <Section title="Données collectées">
            <p>Nous collectons les données suivantes :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Formulaire de contact : prénom, téléphone, email, message.</li>
              <li>Formulaire d&apos;estimation : type de bien, ville, informations sur la capacité, prénom, téléphone, email.</li>
            </ul>
          </Section>

          <Section title="Finalités et base légale">
            <p>Vos données sont utilisées pour répondre à vos demandes (base légale : exécution de mesures précontractuelles) et améliorer nos services (intérêt légitime). Elles ne sont jamais vendues ni partagées avec des tiers à des fins commerciales.</p>
          </Section>

          <Section title="Durée de conservation">
            <p>Vos données sont conservées 3 ans à compter de votre dernière interaction avec nous, sauf obligation légale contraire.</p>
          </Section>

          <Section title="Vos droits">
            <p>Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation, de portabilité et d&apos;opposition. Pour exercer ces droits, contactez-nous à <a href={`mailto:${company.email}`} style={{ color: 'var(--accent-dk)' }}>{company.email}</a>.</p>
            <p className="mt-2">Vous pouvez également introduire une réclamation auprès de la CNIL (cnil.fr).</p>
          </Section>

          <Section title="Cookies">
            <p>Ce site utilise des cookies techniques (nécessaires au bon fonctionnement) et, avec votre consentement, des cookies analytiques pour mesurer l&apos;audience. Vous pouvez retirer votre consentement à tout moment via le bandeau cookie ou en vidant les cookies de votre navigateur.</p>
          </Section>

          <Section title="Sécurité">
            <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction.</p>
          </Section>

          <p className="text-[14px] mt-8" style={{ color: 'var(--muted)' }}>
            Dernière mise à jour : {year}
          </p>
        </div>
      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 pb-8 border-b last:border-b-0 last:pb-0" style={{ borderColor: 'var(--line)' }}>
      <h2 className="font-display font-medium text-[22px] mb-4" style={{ color: 'var(--ink)' }}>{title}</h2>
      <div className="text-[16.5px] leading-[1.7]" style={{ color: 'var(--muted)' }}>
        {children}
      </div>
    </div>
  )
}

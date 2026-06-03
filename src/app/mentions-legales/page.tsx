import type { Metadata } from 'next'
import { siteConfig } from '@/config/site.config'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: `Mentions légales de ${siteConfig.company.name}.`,
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  const { company } = siteConfig

  return (
    <>
      <div className="wrap pb-[clamp(64px,8vw,110px)]">
        <Breadcrumb items={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]} />
        <div className="max-w-[760px] py-[clamp(20px,3vw,40px)]">
          <h1 className="font-display font-medium mb-10" style={{ fontSize: 'clamp(30px, 4vw, 44px)', color: 'var(--ink)' }}>
            Mentions légales
          </h1>

          <Section title="Éditeur du site">
            <p><strong>{company.name}</strong><br />
            {company.legalForm} au capital de {company.capital}<br />
            SIRET : {company.siret}<br />
            {company.address}, {company.zipCode} {company.city}<br />
            Téléphone : {company.phoneDisplay}<br />
            Email : <a href={`mailto:${company.email}`} style={{ color: 'var(--accent-dk)' }}>{company.email}</a>
            </p>
            {company.carteProNumber && (
              <p className="mt-3">Carte professionnelle n° {company.carteProNumber}</p>
            )}
            {company.rcPro && (
              <p className="mt-2">Assurance RC Pro : {company.rcPro}</p>
            )}
          </Section>

          <Section title="Hébergement">
            <p>
              Ce site est hébergé par Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-dk)' }}>vercel.com</a>
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>L&apos;ensemble des contenus de ce site (textes, images, vidéos, logos) sont la propriété exclusive de {company.name} ou de ses partenaires. Toute reproduction, distribution ou modification sans autorisation écrite préalable est interdite.</p>
          </Section>

          <Section title="Responsabilité">
            <p>{company.name} s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations présentes sur ce site. Toutefois, {company.name} ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus suite à l&apos;utilisation de ces informations.</p>
          </Section>

          <Section title="Liens hypertextes">
            <p>Ce site peut contenir des liens vers des sites externes. {company.name} n&apos;a aucun contrôle sur ces sites et n&apos;est pas responsable de leur contenu.</p>
          </Section>

          <Section title="Droit applicable">
            <p>Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.</p>
          </Section>
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

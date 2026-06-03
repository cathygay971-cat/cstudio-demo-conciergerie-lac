import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/config/site.config'

// Bloc contact intégré à la home page (pas la page /contact)
// Contient : infos à gauche (fond sombre) + formulaire simple à droite

export default function ContactBlock() {
  const { company, calendly, whatsapp, copy } = siteConfig

  return (
    <section className="section" id="contact">
      <div className="wrap">
        <div className="reveal rounded-[10px] overflow-hidden shadow-sm" style={{ background: 'var(--surface)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Côté gauche — informations */}
            <div
              className="p-[clamp(38px,5vw,64px)] relative"
              style={{ background: 'var(--dark-bg)', color: 'var(--on-dark)' }}
            >
              <span className="eyebrow mb-[14px]" style={{ color: 'var(--accent)' }}>Contact</span>
              <h2 className="text-white mt-[14px] mb-[18px]" style={{ fontSize: 'clamp(27px, 3vw, 40px)', lineHeight: 1.14 }}>
                {copy.contactBlockTitle}
              </h2>
              <p className="text-[17px]" style={{ color: 'var(--on-dark-mut)' }}>
                {copy.contactBlockSubtitle}
              </p>
              <span className="inline-flex items-center gap-[10px] mt-[26px] text-[14px] font-semibold" style={{ color: 'var(--accent)' }}>
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                Réponse sous 24h · sans engagement
              </span>
              <div className="mt-[34px] flex flex-col gap-[18px]">
                <a href={`tel:${company.phone}`} className="flex items-center gap-[14px] text-[15.5px] hover:text-white transition-colors" style={{ color: 'var(--on-dark)' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {company.phoneDisplay}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-[14px] text-[15.5px] hover:text-white transition-colors" style={{ color: 'var(--on-dark)' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>
                  </svg>
                  {company.email}
                </a>
                <div className="flex items-center gap-[14px] text-[15.5px]" style={{ color: 'var(--on-dark)' }}>
                  <svg className="w-5 h-5 flex-shrink-0" style={{ color: 'var(--accent)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  {company.address}, {company.zipCode} {company.city}
                </div>
              </div>
              <div className="mt-[30px] flex flex-wrap gap-3">
                {whatsapp.number && (
                  <a
                    href={`https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-[10px] px-[22px] py-[13px] font-semibold text-[15px] rounded border cursor-pointer transition-all duration-[250ms] min-h-[48px]"
                    style={{ borderColor: '#25D366', color: '#25D366' }}
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.554 4.122 1.522 5.854L0 24l6.336-1.502A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.89 0-3.663-.5-5.197-1.373l-.373-.217-3.763.893.952-3.653-.24-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                    </svg>
                    WhatsApp
                  </a>
                )}
                {calendly.url && (
                  <a
                    href={calendly.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-[10px] px-[22px] py-[13px] font-semibold text-[15px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[48px]"
                    style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
                  >
                    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Réserver un rendez-vous
                  </a>
                )}
              </div>
            </div>

            {/* Côté droit — formulaire */}
            <div className="p-[clamp(38px,5vw,64px)]">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

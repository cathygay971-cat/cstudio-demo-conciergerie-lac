'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'

// Formulaire multi-étapes : 5 étapes + succès
// Étape 1 : Type de bien
// Étape 2 : Ville
// Étape 3 : Chambres + capacité
// Étape 4 : Meublé ou non
// Étape 5 : Coordonnées (email obligatoire — c'est le lead)

type StepData = {
  typeBien: string
  ville: string
  chambres: string
  capacite: string
  meuble: string
  prenom: string
  telephone: string
  email: string
}

const STEPS_LABELS = ['Votre bien', 'Localisation', 'Capacité', 'Statut', 'Vos coordonnées']

export default function EstimatorForm({ initialType = '' }: { initialType?: string }) {
  const validType = (siteConfig.propertyTypes as readonly string[]).includes(initialType) ? initialType : ''
  const [step, setStep] = useState(validType ? 1 : 0)
  const [data, setData] = useState<StepData>({
    typeBien: validType, ville: '', chambres: '', capacite: '',
    meuble: '', prenom: '', telephone: '', email: '',
  })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  const cities = siteConfig.cities.map(c => c.name)

  function canNext(): boolean {
    if (step === 0) return !!data.typeBien
    if (step === 1) return !!data.ville
    if (step === 2) return !!data.chambres && !!data.capacite
    if (step === 3) return !!data.meuble
    if (step === 4) return !!data.prenom && !!data.telephone && !!data.email
    return true
  }

  async function handleSubmit() {
    if (honeypot) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/estimation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler.')
    } finally {
      setSending(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-[clamp(30px,5vw,56px)] px-[10px] animate-efade">
        <div className="w-[72px] h-[72px] rounded-full grid place-items-center mx-auto mb-6" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}>
          <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 className="font-display" style={{ fontSize: 'clamp(26px,3vw,36px)', color: 'var(--ink)' }}>
          Votre demande est envoyée !
        </h2>
        <p className="mt-3 text-[17px] max-w-[440px] mx-auto" style={{ color: 'var(--muted)' }}>
          Nous analysons votre bien et vous recontactons sous 24h avec une estimation personnalisée.
        </p>
      </div>
    )
  }

  return (
    <form
      className="rounded-[10px] border p-[clamp(26px,3vw,44px)] shadow-md"
      style={{ background: 'var(--surface)', borderColor: 'var(--line)' }}
      onSubmit={e => { e.preventDefault(); if (step < 4) setStep(s => s + 1); else handleSubmit() }}
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text" name="website" value={honeypot} onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1} aria-hidden style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
      />

      {/* En-tête */}
      <div className="flex justify-between items-baseline gap-3 mb-4">
        <span className="text-[12.5px] font-bold tracking-[.14em] uppercase" style={{ color: 'var(--muted)' }}>
          Étape {step + 1}/{STEPS_LABELS.length}
        </span>
        <span className="text-[12.5px] font-semibold" style={{ color: 'var(--accent-dk)' }}>
          {STEPS_LABELS[step]}
        </span>
      </div>

      {/* Barre de progression */}
      <div className="flex gap-[6px] mb-[clamp(26px,3vw,36px)]">
        {STEPS_LABELS.map((_, i) => (
          <span
            key={i}
            className="h-[5px] flex-1 rounded-[3px] transition-colors duration-[350ms]"
            style={{ background: i <= step ? 'var(--accent)' : 'var(--line)' }}
          />
        ))}
      </div>

      {/* Étapes */}
      {step === 0 && (
        <Step title="Quel type de bien souhaitez-vous louer ?" hint="Sélectionnez la catégorie qui correspond le mieux.">
          <OptGrid>
            {siteConfig.propertyTypes.map(opt => (
              <Opt key={opt} label={opt} selected={data.typeBien === opt} onSelect={() => setData(d => ({ ...d, typeBien: opt }))} />
            ))}
          </OptGrid>
        </Step>
      )}

      {step === 1 && (
        <Step title="Dans quelle ville se trouve votre bien ?" hint={siteConfig.copy.estimatorCityHint}>
          <OptGrid>
            {[...cities, 'Autre commune'].map(opt => (
              <Opt key={opt} label={opt} selected={data.ville === opt} onSelect={() => setData(d => ({ ...d, ville: opt }))} />
            ))}
          </OptGrid>
        </Step>
      )}

      {step === 2 && (
        <Step title="Combien de chambres et de couchages ?" hint="Une estimation rapide de la taille de votre bien.">
          <ChipBlock
            label="Nombre de chambres"
            options={['Studio', '1', '2', '3', '4', '5 et +']}
            selected={data.chambres}
            onSelect={v => setData(d => ({ ...d, chambres: v }))}
          />
          <ChipBlock
            label="Capacité d'accueil"
            options={['1–2', '3–4', '5–6', '7–8', '9 et +']}
            selected={data.capacite}
            onSelect={v => setData(d => ({ ...d, capacite: v }))}
          />
        </Step>
      )}

      {step === 3 && (
        <Step title="Votre bien est-il meublé ?" hint="Cela influence la réglementation et le potentiel locatif.">
          <OptGrid cols={1}>
            {['Oui, il est déjà meublé', 'Non, il n\'est pas encore meublé', 'Je ne suis pas sûr(e)'].map(opt => (
              <Opt key={opt} label={opt} selected={data.meuble === opt} onSelect={() => setData(d => ({ ...d, meuble: opt }))} />
            ))}
          </OptGrid>
        </Step>
      )}

      {step === 4 && (
        <Step title="À qui envoyons-nous votre estimation ?" hint="Vos coordonnées ne seront jamais partagées.">
          <div className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField
                label="Prénom *" id="est-prenom" type="text" placeholder="Votre prénom"
                value={data.prenom} onChange={v => setData(d => ({ ...d, prenom: v }))} required
              />
              <InputField
                label="Téléphone *" id="est-tel" type="tel" placeholder="06 12 34 56 78"
                value={data.telephone} onChange={v => setData(d => ({ ...d, telephone: v }))} required
              />
            </div>
            <InputField
              label="Email *" id="est-email" type="email" placeholder="vous@email.fr"
              value={data.email} onChange={v => setData(d => ({ ...d, email: v }))} required
            />
          </div>
        </Step>
      )}

      {error && (
        <p className="text-[14px] mb-4 p-3 rounded" style={{ background: '#FEE2E2', color: '#991B1B' }}>{error}</p>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center gap-3 mt-[clamp(28px,3vw,38px)]">
        <button
          type="button"
          disabled={step === 0}
          onClick={() => setStep(s => s - 1)}
          className="bg-transparent border-0 font-semibold cursor-pointer py-[10px] px-1 inline-flex items-center gap-2 transition-colors duration-200 disabled:opacity-0 disabled:pointer-events-none"
          style={{ color: 'var(--muted)' }}
        >
          ← Retour
        </button>
        <button
          type="submit"
          disabled={!canNext() || sending}
          className="inline-flex items-center justify-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] disabled:opacity-45 disabled:pointer-events-none group"
          style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
        >
          {sending ? 'Envoi…' : step < 4 ? (
            <>Continuer<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span></>
          ) : 'Recevoir mon estimation'}
        </button>
      </div>
    </form>
  )
}

// ─── Sous-composants ───────────────────────────────────────────────────────

function Step({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="animate-efade">
      <h2 className="font-display" style={{ fontSize: 'clamp(22px, 2.6vw, 31px)', color: 'var(--ink)' }}>{title}</h2>
      {hint && <p className="text-[15.5px] mt-2 mb-[26px]" style={{ color: 'var(--muted)' }}>{hint}</p>}
      {children}
    </div>
  )
}

function OptGrid({ cols = 2, children }: { cols?: number; children: React.ReactNode }) {
  return (
    <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {children}
    </div>
  )
}

function Opt({ label, selected, onSelect }: { label: string; selected: boolean; onSelect: () => void }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="flex items-center gap-[14px] px-5 py-[18px] border rounded cursor-pointer transition-all duration-200 font-medium text-[16px] text-left w-full"
      style={{
        borderColor: selected ? 'var(--accent)' : 'var(--line)',
        background: selected ? 'var(--accent-tint)' : 'var(--surface)',
        color: selected ? 'var(--ink)' : 'var(--text)',
      }}
    >
      <span
        className="w-5 h-5 rounded-full border-2 grid place-items-center flex-shrink-0 relative"
        style={{ borderColor: selected ? 'var(--accent)' : 'var(--line)' }}
      >
        {selected && (
          <span
            className="w-[10px] h-[10px] rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        )}
      </span>
      {label}
    </button>
  )
}

function ChipBlock({ label, options, selected, onSelect }: { label: string; options: string[]; selected: string; onSelect: (v: string) => void }) {
  return (
    <div className="mt-6 first:mt-0">
      <label className="block text-[14px] font-semibold mb-3" style={{ color: 'var(--ink)' }}>{label}</label>
      <div className="flex flex-wrap gap-[10px]">
        {options.map(opt => (
          <button
            key={opt}
            type="button"
            onClick={() => onSelect(opt)}
            className="px-5 py-3 border rounded-full cursor-pointer font-medium text-[15px] transition-all duration-200 min-h-[44px]"
            style={{
              borderColor: selected === opt ? 'var(--accent)' : 'var(--line)',
              background: selected === opt ? 'var(--accent)' : 'var(--surface)',
              color: selected === opt ? 'var(--accent-foreground)' : 'var(--text)',
            }}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function InputField({ label, id, type, placeholder, value, onChange, required }: {
  label: string; id: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[13.5px] font-semibold mb-2" style={{ color: 'var(--ink)' }}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full px-4 py-[14px] border rounded text-[15.5px] transition-colors duration-200 outline-none"
        style={{
          borderColor: 'var(--line)',
          background: 'var(--bg)',
        }}
      />
    </div>
  )
}

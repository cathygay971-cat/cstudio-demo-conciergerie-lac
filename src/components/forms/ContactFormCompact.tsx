'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site.config'

export default function ContactFormCompact() {
  const [form, setForm] = useState({ prenom: '', telephone: '', email: '', typeBien: '', message: '' })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [honeypot, setHoneypot] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) return
    setSending(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setSending(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-[48px]">
        <div className="w-[64px] h-[64px] rounded-full grid place-items-center mx-auto mb-5" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}>
          <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display text-[26px] mb-[10px]" style={{ color: 'var(--ink)' }}>Merci !</h3>
        <p style={{ color: 'var(--muted)' }}>Votre demande a bien été envoyée. Notre équipe vous recontacte sous 24h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[14px]">
        <Field label="Prénom" id="ccf-prenom" required>
          <input
            id="ccf-prenom" type="text" placeholder="Votre prénom" required
            value={form.prenom} onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
            className="input-field"
          />
        </Field>
        <Field label="Téléphone" id="ccf-tel" required>
          <input
            id="ccf-tel" type="tel" placeholder="06 12 34 56 78" required
            value={form.telephone} onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
            className="input-field"
          />
        </Field>
      </div>

      <Field label="Email" id="ccf-email" required>
        <input
          id="ccf-email" type="email" placeholder="vous@email.fr" required
          value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="input-field"
        />
      </Field>

      <Field label="Type de bien" id="ccf-type">
        <select
          id="ccf-type" value={form.typeBien}
          onChange={e => setForm(f => ({ ...f, typeBien: e.target.value }))}
          className="input-field"
        >
          <option value="">Choisissez un type…</option>
          {siteConfig.propertyTypes.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </Field>

      <Field label="Message (optionnel)" id="ccf-msg">
        <textarea
          id="ccf-msg" placeholder="Décrivez votre bien ou votre projet…"
          value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="input-field" style={{ minHeight: '96px', resize: 'vertical' }}
        />
      </Field>

      {error && (
        <p className="text-[14px] mb-4 p-3 rounded" style={{ background: '#FEE2E2', color: '#991B1B' }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full inline-flex items-center justify-center gap-[10px] px-[26px] py-[16px] font-semibold text-[16px] rounded cursor-pointer transition-all duration-[250ms] min-h-[52px] mt-[6px] disabled:opacity-60 group"
        style={{ background: 'var(--accent)', color: 'var(--accent-foreground)' }}
      >
        {sending ? 'Envoi en cours…' : (
          <>Être recontacté sous 24h<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span></>
        )}
      </button>

      <p className="text-center text-[12.5px] mt-[12px]" style={{ color: 'var(--muted)' }}>
        Sans engagement&nbsp;·&nbsp;Réponse 24h&nbsp;·&nbsp;Données sécurisées
      </p>
    </form>
  )
}

function Field({ label, id, required, children }: { label: string; id: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="mb-[14px]">
      <label htmlFor={id} className="block text-[13px] font-semibold mb-[6px]" style={{ color: 'var(--ink)' }}>
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

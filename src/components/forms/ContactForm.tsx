'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ prenom: '', telephone: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  // Champ honeypot anti-spam (invisible pour les humains)
  const [honeypot, setHoneypot] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (honeypot) return // bot détecté
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
      <div className="text-center py-[40px]">
        <div className="w-[60px] h-[60px] rounded-full grid place-items-center mx-auto mb-5" style={{ background: 'var(--accent-tint)', color: 'var(--accent-dk)' }}>
          <svg className="w-[30px] h-[30px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h3 className="font-display text-[26px] mb-[10px]" style={{ color: 'var(--ink)' }}>Merci !</h3>
        <p style={{ color: 'var(--muted)' }}>Votre demande a bien été envoyée. Nous vous recontactons sous 24h.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot anti-spam — caché visuellement */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={e => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0 }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Prénom" id="cf-prenom" required>
          <input
            id="cf-prenom"
            type="text"
            placeholder="Votre prénom"
            required
            value={form.prenom}
            onChange={e => setForm(f => ({ ...f, prenom: e.target.value }))}
            className="input-field"
          />
        </Field>
        <Field label="Téléphone" id="cf-tel" required>
          <input
            id="cf-tel"
            type="tel"
            placeholder="06 12 34 56 78"
            required
            value={form.telephone}
            onChange={e => setForm(f => ({ ...f, telephone: e.target.value }))}
            className="input-field"
          />
        </Field>
      </div>

      <Field label="Email" id="cf-email" required>
        <input
          id="cf-email"
          type="email"
          placeholder="vous@email.fr"
          required
          value={form.email}
          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
          className="input-field"
        />
      </Field>

      <Field label="Votre message" id="cf-msg">
        <textarea
          id="cf-msg"
          placeholder="Parlez-nous de votre bien et de votre projet…"
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className="input-field"
          style={{ minHeight: '120px', resize: 'vertical' }}
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
        className="w-full inline-flex items-center justify-center gap-[10px] px-[26px] py-[15px] font-semibold text-[15.5px] rounded border border-transparent cursor-pointer transition-all duration-[250ms] min-h-[50px] mt-[6px] disabled:opacity-60 group"
        style={{ background: 'var(--ink)', color: 'var(--on-dark)' }}
      >
        {sending ? 'Envoi en cours…' : (
          <>Envoyer ma demande<span className="transition-transform duration-[250ms] group-hover:translate-x-[3px]">→</span></>
        )}
      </button>
    </form>
  )
}

function Field({ label, id, required, children }: { label: string; id: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-[13.5px] font-semibold mb-2"
        style={{ color: 'var(--ink)' }}
      >
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

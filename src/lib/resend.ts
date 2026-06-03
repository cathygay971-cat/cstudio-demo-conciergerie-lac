// Utilitaire d'envoi d'emails via Resend
// La clé API et l'adresse de destination viennent des variables d'environnement

import { Resend } from 'resend'

function getResend() {
  return new Resend(process.env.RESEND_API_KEY)
}

interface ContactEmailData {
  prenom: string
  telephone: string
  email: string
  message: string
  typeBien?: string
}

interface EstimationEmailData {
  typeBien: string
  ville: string
  chambres: string
  capacite: string
  meuble: string
  prenom: string
  telephone: string
  email: string
}

export async function sendContactEmail(data: ContactEmailData) {
  const to = process.env.RESEND_TO_EMAIL || 'contact@example.fr'
  const from = process.env.RESEND_FROM_EMAIL || 'noreply@example.fr'

  return getResend().emails.send({
    from,
    to,
    subject: `Nouveau message de ${data.prenom} — Site Conciergerie`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Prénom :</strong> ${data.prenom}</p>
      <p><strong>Téléphone :</strong> ${data.telephone}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      ${data.typeBien ? `<p><strong>Type de bien :</strong> ${data.typeBien}</p>` : ''}
      <p><strong>Message :</strong></p>
      <blockquote>${data.message}</blockquote>
    `,
  })
}

export async function sendEstimationEmail(data: EstimationEmailData) {
  const to = process.env.RESEND_TO_EMAIL || 'contact@example.fr'
  const from = process.env.RESEND_FROM_EMAIL || 'noreply@example.fr'

  return getResend().emails.send({
    from,
    to,
    subject: `Nouvelle estimation de ${data.prenom} — ${data.ville}`,
    html: `
      <h2>Nouvelle demande d'estimation</h2>
      <p><strong>Type de bien :</strong> ${data.typeBien}</p>
      <p><strong>Ville :</strong> ${data.ville}</p>
      <p><strong>Chambres :</strong> ${data.chambres}</p>
      <p><strong>Capacité :</strong> ${data.capacite}</p>
      <p><strong>Meublé :</strong> ${data.meuble}</p>
      <hr />
      <p><strong>Prénom :</strong> ${data.prenom}</p>
      <p><strong>Téléphone :</strong> ${data.telephone}</p>
      <p><strong>Email :</strong> ${data.email}</p>
    `,
  })
}

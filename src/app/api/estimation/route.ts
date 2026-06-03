import { NextRequest, NextResponse } from 'next/server'
import { sendEstimationEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { typeBien, ville, chambres, capacite, meuble, prenom, telephone, email } = body

    // Email obligatoire sur le formulaire d'estimation (c'est le lead)
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Email obligatoire.' }, { status: 400 })
    }
    if (!prenom || !telephone) {
      return NextResponse.json({ error: 'Prénom et téléphone obligatoires.' }, { status: 400 })
    }

    await sendEstimationEmail({ typeBien, ville, chambres, capacite, meuble, prenom, telephone, email })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API /estimation]', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '@/lib/resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { prenom, telephone, email, message, typeBien } = body

    // Validation minimale
    if (!prenom || !telephone || !email) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 })
    }
    if (!email.includes('@')) {
      return NextResponse.json({ error: 'Email invalide.' }, { status: 400 })
    }

    await sendContactEmail({ prenom, telephone, email, message: message || '', typeBien: typeBien || '' })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[API /contact]', err)
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}

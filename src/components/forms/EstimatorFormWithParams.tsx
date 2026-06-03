'use client'

import { useSearchParams } from 'next/navigation'
import EstimatorForm from './EstimatorForm'

export default function EstimatorFormWithParams() {
  const params = useSearchParams()
  return <EstimatorForm initialType={params.get('type') ?? ''} />
}

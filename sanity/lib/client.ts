import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const isSanityConfigured = projectId && projectId !== 'placeholder' && projectId !== ''

// Usar un projectId ficticio si no está configurado para evitar error en build
export const client = createClient({
  projectId: projectId || 'not-configured',
  dataset,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Safe fetch wrapper que devuelve array/null vacío si Sanity no está configurado
export async function safeFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!isSanityConfigured) {
    return null
  }

  try {
    if (params) {
      return await client.fetch<T>(query, params)
    }
    return await client.fetch<T>(query)
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return null
  }
}

import type { PortableTextBlock } from '@portabletext/types'

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityCategory {
  _id: string
  title: string
  slug: SanitySlug
  color: string
}

export interface SanityPost {
  _id: string
  title: string
  slug: SanitySlug
  description: string
  date: string
  featured: boolean
  image?: SanityImage
  category: SanityCategory
  content?: PortableTextBlock[]
}

// Tipos compatibles con la estructura antigua (para transición)
export type CategorySlug =
  | 'colitis-ulcerosa'
  | 'sibo'
  | 'nutricion'
  | 'habitos'
  | 'recetas'

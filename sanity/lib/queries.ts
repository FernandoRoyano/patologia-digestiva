import { groq } from 'next-sanity'

// Obtener todos los posts ordenados por fecha
export const postsQuery = groq`
  *[_type == "post"] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    featured,
    image,
    category->{
      _id,
      title,
      slug,
      color
    }
  }
`

// Obtener un post por su slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    date,
    featured,
    image,
    content,
    category->{
      _id,
      title,
      slug,
      color
    }
  }
`

// Obtener posts destacados (para la home)
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(date desc)[0...3] {
    _id,
    title,
    slug,
    description,
    date,
    image,
    category->{
      _id,
      title,
      slug,
      color
    }
  }
`

// Obtener todas las categorías
export const categoriesQuery = groq`
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    color
  }
`

// Obtener posts por categoría
export const postsByCategoryQuery = groq`
  *[_type == "post" && category->slug.current == $categorySlug] | order(date desc) {
    _id,
    title,
    slug,
    description,
    date,
    image,
    category->{
      _id,
      title,
      slug,
      color
    }
  }
`

// Obtener todos los slugs de posts (para generateStaticParams)
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`

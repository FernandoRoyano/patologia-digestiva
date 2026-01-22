import { safeFetch } from '@/sanity/lib/client';
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries';
import { BlogPageClient } from '@/app/components/blog/BlogPageClient';
import type { SanityPost, SanityCategory } from '@/app/types/sanity';

export const revalidate = 60; // Revalidar cada 60 segundos

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    safeFetch<SanityPost[]>(postsQuery),
    safeFetch<SanityCategory[]>(categoriesQuery),
  ]);

  return (
    <BlogPageClient
      posts={posts || []}
      categories={categories || []}
    />
  );
}

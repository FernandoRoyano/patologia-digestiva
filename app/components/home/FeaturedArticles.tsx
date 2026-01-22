import { safeFetch } from '@/sanity/lib/client';
import { featuredPostsQuery } from '@/sanity/lib/queries';
import type { SanityPost } from '@/app/types/sanity';
import { FeaturedArticlesClient } from './FeaturedArticlesClient';

export async function FeaturedArticles() {
  const posts = await safeFetch<SanityPost[]>(featuredPostsQuery);

  if (!posts || posts.length === 0) {
    return null;
  }

  return <FeaturedArticlesClient posts={posts} />;
}

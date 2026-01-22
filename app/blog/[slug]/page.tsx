import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PortableText } from '@portabletext/react';
import { safeFetch, isSanityConfigured } from '@/sanity/lib/client';
import { postBySlugQuery, postSlugsQuery } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import type { SanityPost } from '@/app/types/sanity';
import styles from '@/app/styles/blog.module.css';
import { ArticlePageClient } from './ArticlePageClient';

export const revalidate = 60;

export async function generateStaticParams() {
  if (!isSanityConfigured) {
    return [];
  }
  const slugs = await safeFetch<string[]>(postSlugsQuery);
  return (slugs || []).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await safeFetch<SanityPost | null>(postBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const categoryColor = post.category?.color || '#FD5825';
  const categoryTitle = post.category?.title || 'Sin categoría';

  return (
    <ArticlePageClient>
      <Link href="/blog" className={styles.backLink}>
        ← Volver al blog
      </Link>

      <header className={styles.articleHeader}>
        <div className={styles.articleMeta}>
          <span
            className={styles.categoryBadge}
            style={{
              backgroundColor: categoryColor,
              position: 'static',
            }}
          >
            {categoryTitle}
          </span>
          <time className={styles.date}>{formattedDate}</time>
        </div>
        <h1 className={styles.articleTitle}>{post.title}</h1>
        <p className={styles.articleDescription}>{post.description}</p>
      </header>

      <div className={styles.articleImageWrapper}>
        {post.image ? (
          <Image
            src={urlFor(post.image).width(1200).height(600).url()}
            alt={post.image.alt || post.title}
            fill
            className={styles.articleImage}
            priority
          />
        ) : (
          <div className={styles.articleImagePlaceholder}>
            <span>{post.title.charAt(0)}</span>
          </div>
        )}
      </div>

      {post.content && (
        <div className={styles.articleContent}>
          <PortableText
            value={post.content}
            components={{
              block: {
                h2: ({ children }) => <h2>{children}</h2>,
                h3: ({ children }) => <h3>{children}</h3>,
                blockquote: ({ children }) => (
                  <blockquote className={styles.blockquote}>{children}</blockquote>
                ),
              },
              marks: {
                strong: ({ children }) => <strong>{children}</strong>,
                em: ({ children }) => <em>{children}</em>,
                link: ({ value, children }) => (
                  <a href={value?.href} target="_blank" rel="noopener noreferrer">
                    {children}
                  </a>
                ),
              },
              list: {
                bullet: ({ children }) => <ul>{children}</ul>,
                number: ({ children }) => <ol>{children}</ol>,
              },
              listItem: {
                bullet: ({ children }) => <li>{children}</li>,
                number: ({ children }) => <li>{children}</li>,
              },
              types: {
                image: ({ value }) => {
                  if (!value?.asset) return null;
                  return (
                    <figure className={styles.contentImage}>
                      <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || 'Imagen del artículo'}
                        width={800}
                        height={450}
                        style={{ width: '100%', height: 'auto' }}
                      />
                      {value.caption && (
                        <figcaption>{value.caption}</figcaption>
                      )}
                    </figure>
                  );
                },
              },
            }}
          />
        </div>
      )}

      <div className={styles.articleCta}>
        <h3>¿Necesitas ayuda personalizada?</h3>
        <p>
          Si te identificas con lo que has leído y quieres dar el siguiente paso,
          podemos hablar sobre tu caso.
        </p>
        <Link href="/contacto" className={styles.ctaButton}>
          Reservar consulta
        </Link>
      </div>
    </ArticlePageClient>
  );
}

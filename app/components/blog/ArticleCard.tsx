'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { SanityPost } from '@/app/types/sanity';
import { urlFor } from '@/sanity/lib/image';
import styles from '@/app/styles/blog.module.css';

type ArticleCardProps = {
  post: SanityPost;
  index?: number;
};

export function ArticleCard({ post, index = 0 }: ArticleCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const categoryColor = post.category?.color || '#FD5825';
  const categoryTitle = post.category?.title || 'Sin categoría';
  const postSlug = post.slug?.current || '';

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/blog/${postSlug}`} className={styles.cardLink}>
        <div className={styles.imageWrapper}>
          {post.image ? (
            <Image
              src={urlFor(post.image).width(600).height(400).url()}
              alt={post.image.alt || post.title}
              fill
              className={styles.cardImage}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{post.title.charAt(0)}</span>
            </div>
          )}
          <span
            className={styles.categoryBadge}
            style={{ backgroundColor: categoryColor }}
          >
            {categoryTitle}
          </span>
        </div>
        <div className={styles.cardContent}>
          <time className={styles.date}>{formattedDate}</time>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardDescription}>{post.description}</p>
          <span className={styles.readMore}>Leer artículo</span>
        </div>
      </Link>
    </motion.article>
  );
}

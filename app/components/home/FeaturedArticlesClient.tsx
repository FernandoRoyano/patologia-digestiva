'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { SanityPost } from '@/app/types/sanity';
import { ArticleCard } from '@/app/components/blog/ArticleCard';
import styles from '@/app/styles/home.module.css';

type FeaturedArticlesClientProps = {
  posts: SanityPost[];
};

export function FeaturedArticlesClient({ posts }: FeaturedArticlesClientProps) {
  return (
    <section className={styles.articlesSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Blog</span>
        <h2 className={styles.sectionTitle}>
          Artículos con ciencia y sentido común
        </h2>
        <p className={styles.sectionSubtitle}>
          Información práctica y basada en evidencia para entender y mejorar tu
          salud digestiva.
        </p>
      </motion.div>

      <div className={styles.articlesGrid}>
        {posts.map((post, index) => (
          <ArticleCard key={post._id} post={post} index={index} />
        ))}
      </div>

      <motion.div
        className={styles.articlesFooter}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Link href="/blog" className={styles.viewAllLink}>
          Ver todos los artículos →
        </Link>
      </motion.div>
    </section>
  );
}

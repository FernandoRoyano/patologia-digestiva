'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { SanityPost, SanityCategory } from '@/app/types/sanity';
import { ArticleCard } from '@/app/components/blog/ArticleCard';
import { CategoryFilter } from '@/app/components/blog/CategoryFilter';
import styles from '@/app/styles/blog.module.css';

type BlogPageClientProps = {
  posts: SanityPost[];
  categories: SanityCategory[];
};

export function BlogPageClient({ posts, categories }: BlogPageClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category?.slug?.current === activeCategory)
    : posts;

  return (
    <div className={styles.page}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.badge}>Blog</span>
        <h1 className={styles.title}>Artículos sobre salud digestiva</h1>
        <p className={styles.subtitle}>
          Información práctica y basada en evidencia para entender y mejorar tu
          salud digestiva. Sin falsas promesas, solo conocimiento útil.
        </p>
      </motion.header>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {filteredPosts.length > 0 ? (
        <div className={styles.grid}>
          {filteredPosts.map((post, index) => (
            <ArticleCard key={post._id} post={post} index={index} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h3>No hay artículos en esta categoría</h3>
          <p>Prueba seleccionando otra categoría o vuelve a "Todos"</p>
        </div>
      )}
    </div>
  );
}

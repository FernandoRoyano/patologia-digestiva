'use client';

import { motion } from 'framer-motion';
import type { SanityCategory } from '@/app/types/sanity';
import styles from '@/app/styles/blog.module.css';

type CategoryFilterProps = {
  categories: SanityCategory[];
  activeCategory: string | null;
  onCategoryChange: (categorySlug: string | null) => void;
};

export function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className={styles.filterContainer}>
      <motion.button
        className={`${styles.filterButton} ${activeCategory === null ? styles.filterActive : ''}`}
        onClick={() => onCategoryChange(null)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Todos
      </motion.button>
      {categories.map((category) => {
        const categorySlug = category.slug?.current || '';
        const isActive = activeCategory === categorySlug;

        return (
          <motion.button
            key={category._id}
            className={`${styles.filterButton} ${isActive ? styles.filterActive : ''}`}
            onClick={() => onCategoryChange(categorySlug)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: isActive ? category.color : undefined,
              color: isActive ? category.color : undefined,
            }}
          >
            {category.title}
          </motion.button>
        );
      })}
    </div>
  );
}

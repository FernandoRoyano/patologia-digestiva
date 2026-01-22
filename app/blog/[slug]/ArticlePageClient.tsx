'use client';

import { motion } from 'framer-motion';
import styles from '@/app/styles/blog.module.css';

type ArticlePageClientProps = {
  children: React.ReactNode;
};

export function ArticlePageClient({ children }: ArticlePageClientProps) {
  return (
    <article className={styles.articlePage}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </article>
  );
}

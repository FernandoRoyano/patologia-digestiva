import Link from 'next/link';
import styles from '@/app/styles/blog.module.css';

export default function NotFound() {
  return (
    <div className={styles.articlePage}>
      <div className={styles.emptyState}>
        <h3>Artículo no encontrado</h3>
        <p>El artículo que buscas no existe o ha sido movido.</p>
        <Link
          href="/blog"
          className={styles.ctaButton}
          style={{ marginTop: '1rem', display: 'inline-block' }}
        >
          Volver al blog
        </Link>
      </div>
    </div>
  );
}

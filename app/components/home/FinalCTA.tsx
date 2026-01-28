'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/app/styles/home.module.css';

export function FinalCTA() {
  return (
    <section className={styles.finalCtaSection}>
      <motion.div
        className={styles.finalCtaContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.finalCtaTitle}>
          ¿Listo para dar el primer paso?
        </h2>
        <p className={styles.finalCtaText}>
          Empezamos con una consulta de valoración gratuita para conocer tu caso
          y ver si puedo ayudarte. Sin compromiso, sin presión.
        </p>
        <div className={styles.finalCtaButtons}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/reservar" className={styles.finalCtaButton}>
              Reservar consulta gratuita
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/servicios" className={styles.finalCtaButtonSecondary}>
              Ver planes y precios
            </Link>
          </motion.div>
        </div>
        <p className={styles.finalCtaNote}>
          📧 O escríbeme directamente a{' '}
          <a href="mailto:diego@saluddigestivaonline.com">
            diego@saluddigestivaonline.com
          </a>
        </p>
      </motion.div>
    </section>
  );
}

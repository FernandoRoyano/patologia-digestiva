'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/app/styles/home.module.css';

export function AboutPreview() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <motion.div
          className={styles.aboutImage}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.aboutImageWrapper}>
            <div className={styles.aboutImageDecor} aria-hidden />
            <Image
              src="/diego.jpg"
              alt="Diego Royano"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className={styles.aboutImg}
            />
            <div className={styles.aboutImageBadge}>
              <span style={{ fontSize: '1.5rem' }}>🫀</span>
              <div>
                <strong>+6 años sin síntomas</strong>
                <span>Sin medicación ni recaídas</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={styles.aboutText}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.sectionBadge}>Sobre mí</span>
          <h2 className={styles.aboutTitle}>
            No soy solo un profesional.<br />
            Soy alguien que ha <em>pasado por donde tú estás</em>.
          </h2>
          <p className={styles.aboutDescription}>
            A los 20 años me diagnosticaron colitis ulcerosa. Los médicos me dijeron
            que no tenía solución y que tendría que medicarme de por vida. Decidí no
            quedarme con esa única respuesta.
          </p>
          <p className={styles.aboutDescription}>
            Tras años de estudio, cambios en mi estilo de vida y mucho ensayo y error,
            hoy llevo más de 6 años sin síntomas y sin medicación. Esta experiencia
            transformó mi salud y mi propósito.
          </p>
          <div className={styles.aboutCredentials}>
            <div className={styles.credential}>
              <span className={styles.credentialIcon}>🎓</span>
              <span>Dietista - Nutrición Humana</span>
            </div>
            <div className={styles.credential}>
              <span className={styles.credentialIcon}>🧠</span>
              <span>Grado en Psicología</span>
            </div>
            <div className={styles.credential}>
              <span className={styles.credentialIcon}>📚</span>
              <span>Máster en Nutrición Clínica</span>
            </div>
            <div className={styles.credential}>
              <span className={styles.credentialIcon}>💚</span>
              <span>Experiencia personal</span>
            </div>
          </div>
          <Link href="/sobre-mi" className={styles.aboutLink}>
            Conoce mi historia completa <span aria-hidden>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

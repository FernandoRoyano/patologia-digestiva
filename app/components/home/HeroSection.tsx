'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import styles from '@/app/styles/home.module.css';

export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' as const },
    },
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <motion.div
          className={styles.heroText}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span className={styles.badge} variants={itemVariants}>
            Especialista en patología digestiva
          </motion.span>

          <motion.h1 variants={itemVariants}>
            Sé cómo te sientes.<br />
            <span className={styles.highlight}>Yo también estuve ahí.</span>
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            A los 20 años fui diagnosticado de colitis ulcerosa. Hoy, tras más de 6 años
            sin síntomas, te acompaño a recuperar tu bienestar digestivo con un
            enfoque integral y personalizado.
          </motion.p>

          <motion.div className={styles.heroActions} variants={itemVariants}>
            <Link href="/reservar" className={styles.primaryBtn}>
              Reservar consulta
              <span aria-hidden>→</span>
            </Link>
            <Link href="/sobre-mi" className={styles.secondaryBtn}>
              Conoce mi historia
            </Link>
          </motion.div>

          <motion.ul className={styles.checkList} variants={itemVariants}>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Primera consulta de valoración gratuita
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              100% online, desde donde estés
            </li>
            <li>
              <span className={styles.checkIcon}>✓</span>
              Enfoque integral: alimentación + hábitos + acompañamiento
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' as const }}
        >
          <div className={styles.imageContainer}>
            <div className={styles.imageBg} />
            <div className={styles.circle}>
              <Image
                src="/diego.jpg"
                alt="Diego Royano - Especialista en patología digestiva"
                fill
                sizes="(max-width: 768px) 280px, 420px"
                className={styles.profileImage}
                priority
              />
            </div>

            <motion.div
              className={`${styles.heroFloatingCard} ${styles.top}`}
              initial={{ opacity: 0, x: -20, y: -10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' as const }}
            >
              <div className={`${styles.heroFloatingIcon} ${styles.accent}`}>
                6+
              </div>
              <div className={styles.heroFloatingText}>
                <strong>Años sin síntomas</strong>
                <span>Sin medicación</span>
              </div>
            </motion.div>

            <motion.div
              className={`${styles.heroFloatingCard} ${styles.bottom}`}
              initial={{ opacity: 0, x: 20, y: 10 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1, ease: 'easeOut' as const }}
            >
              <div className={`${styles.heroFloatingIcon} ${styles.primary}`}>
                ⭐
              </div>
              <div className={styles.heroFloatingText}>
                <strong>100% online</strong>
                <span>Desde donde estés</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

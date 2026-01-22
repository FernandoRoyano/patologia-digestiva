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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className={styles.hero}>
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
          <Link href="/contacto" className={styles.primaryBtn}>
            Reservar consulta
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
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: 'easeOut' as const,
        }}
      >
        <div className={styles.imageContainer}>
          <div className={styles.imageBg}></div>
          <div className={styles.circle}>
            <Image
              src="/diego.jpg"
              alt="Diego Royano - Especialista en patología digestiva"
              fill
              sizes="(max-width: 768px) 280px, 340px"
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

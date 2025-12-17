'use client';

import Image from "next/image";
import styles from "./styles/home.module.css";
import { PlansSection } from "./components/PlansSection";
import { motion } from "framer-motion";

export default function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <motion.div
          className={styles.heroText}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.p className={styles.badge} variants={itemVariants}>
            Patología digestiva online
          </motion.p>

          <motion.h1 variants={itemVariants}>
            Te ayudo a entender y mejorar tu salud digestiva.
          </motion.h1>

          <motion.p className={styles.subtitle} variants={itemVariants}>
            Acompañamiento personalizado para SIBO, intolerancias, inflamación
            y otros trastornos digestivos, desde un enfoque integrativo.
          </motion.p>

          <motion.div className={styles.heroActions} variants={itemVariants}>
            <a href="/reservar" className={styles.primaryBtn}>
              Reservar videollamada
            </a>
            <a href="/servicios" className={styles.secondaryBtn}>
              Ver servicios
            </a>
          </motion.div>

          <motion.ul className={styles.checkList} variants={itemVariants}>
            <li>✓ Primera videollamada sin pago previo.</li>
            <li>✓ Planes adaptados a tu situación digestiva.</li>
            <li>✓ 100% online, desde tu casa.</li>
          </motion.ul>
        </motion.div>

        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <div className={styles.circle}>
            <Image
              src="/diego.jpg"
              alt="Foto de Diego Royano"
              fill
              sizes="(max-width: 768px) 200px, 260px"
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </section>

      <PlansSection />
    </div>
  );
}

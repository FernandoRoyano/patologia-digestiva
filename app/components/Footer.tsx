'use client';

import styles from "../styles/Footer.module.css";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.inner}
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants}>
          <h3>Diego Royano</h3>
          <p>Dietista y asesor en salud digestiva</p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h4>Enlaces</h4>
          <ul>
            <li><a href="/sobre-mi">Sobre mí</a></li>
            <li><a href="/servicios">Servicios</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contacto">Contacto</a></li>
          </ul>
        </motion.div>
        <motion.div variants={itemVariants}>
          <h4>Contacto</h4>
          <p>📧 diego@example.com</p>
          <p>📱 +34 XXX XXX XXX</p>
        </motion.div>
      </motion.div>
      <motion.div
        className={styles.copyright}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; 2025 Diego Royano. Todos los derechos reservados.</p>
      </motion.div>
    </footer>
  );
}

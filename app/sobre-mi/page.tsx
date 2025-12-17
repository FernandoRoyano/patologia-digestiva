'use client';

import Image from "next/image";
import styles from "../styles/sobre-mi.module.css";
import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/useInView";

export default function SobreMiPage() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const { ref: cardsRef, isInView: cardsInView } = useInView();

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/diego.jpg"
            alt="Foto de Diego Royano"
            width={120}
            height={120}
            className={styles.profileImage}
          />
        </motion.div>

        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={styles.badge}>Sobre mí</p>
          <h1 className={styles.title}>
            Soy Diego Royano, dietista y asesor en salud
          </h1>
          <p className={styles.lead}>
            Trabajo día a día para promocionar la salud a través de la
            alimentación, con una mirada global que integra nutrición, hábitos
            y bienestar emocional.
          </p>
          <ul className={styles.checkList}>
            <li>✓ Dietista – Técnico Superior en Nutrición Humana y Dietética.</li>
            <li>✓ Grado en Psicología y Máster en Nutrición Clínica.</li>
            <li>
              ✓ Especialización en nutrición vegana y vegetariana y poblaciones
              especiales.
            </li>
          </ul>
        </motion.div>
      </section>

      {/* FILOSOFÍA */}
      <motion.section
        ref={titleRef}
        initial="hidden"
        animate={titleInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>Mi filosofía de trabajo</h2>
        <p className={styles.sectionText}>
          No me gustan los charlatanes ni las falsas promesas. Prefiero hablar
          claro, basarme en la evidencia científica y construir contigo cambios
          que puedas mantener en el tiempo.
        </p>
        <div className={styles.grid}>
          {[
            {
              title: "Educación nutricional",
              text: "La educación nutricional es la base de mi trabajo. No se trata solo de decirte qué comer, sino de que entiendas el porqué y puedas decidir con criterio.",
            },
            {
              title: "Enfoque global",
              text: "Tu alimentación, tu descanso, tu actividad física y tu contexto emocional forman parte de la misma foto. Trabajamos todo en conjunto.",
            },
            {
              title: "Calidad y mejora constante",
              text: "Busco la calidad y la mejora constantes en lo que hago, revisando mi trabajo y actualizando mis conocimientos de forma continua.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              variants={cardVariants}
              className={`${styles.card} hover-lift`}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FORMACIÓN */}
      <motion.section
        ref={cardsRef}
        initial="hidden"
        animate={cardsInView ? "visible" : "hidden"}
        variants={sectionVariants}
        className={styles.section}
      >
        <h2 className={styles.sectionTitle}>Formación y especialización</h2>
        <div className={styles.columns}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.subtitle}>Formación</h3>
            <ul className={styles.list}>
              <li>Técnico Superior en Nutrición Humana y Dietética.</li>
              <li>Grado en Psicología.</li>
              <li>Máster en Nutrición Clínica.</li>
              <li>Máster en Recursos Humanos.</li>
              <li>Máster en Nutrición Clínica Avanzada (ICNS).</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={cardsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.subtitle}>Especialización</h3>
            <ul className={styles.list}>
              <li>Nutrición vegana y vegetariana.</li>
              <li>Poblaciones especiales.</li>
              <li>Colitis ulcerosa y otras patologías digestivas.</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className={styles.sectionCta}
      >
        <motion.div
          className={styles.ctaBox}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h2>¿Damos el primer paso?</h2>
          <p>
            Incluso el viaje más largo comienza por un primer paso. Si quieres
            trabajar tu salud digestiva de forma seria y cercana, empezamos por
            una primera videollamada sin pago previo.
          </p>
          <motion.a
            href="/reservar"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reservar videollamada
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}

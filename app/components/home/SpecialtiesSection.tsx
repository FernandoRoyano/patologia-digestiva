'use client';

import { motion } from 'framer-motion';
import styles from '@/app/styles/home.module.css';

const specialties = [
  {
    icon: '🔬',
    title: 'Colitis Ulcerosa',
    description:
      'Acompañamiento integral para personas con enfermedad inflamatoria intestinal. Estrategias nutricionales y de estilo de vida basadas en evidencia.',
  },
  {
    icon: '🦠',
    title: 'SIBO',
    description:
      'Diagnóstico y manejo del sobrecrecimiento bacteriano del intestino delgado. Identificamos la causa raíz, no solo los síntomas.',
  },
  {
    icon: '🍽️',
    title: 'Intolerancias Alimentarias',
    description:
      'Identificación y gestión de intolerancias. Creamos una alimentación que funcione para ti sin restricciones innecesarias.',
  },
  {
    icon: '🌿',
    title: 'Inflamación Intestinal',
    description:
      'Estrategias antiinflamatorias para reducir síntomas y mejorar tu calidad de vida. Alimentación, suplementación y hábitos.',
  },
];

export function SpecialtiesSection() {
  return (
    <section className={styles.specialtiesSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Especialidades</span>
        <h2 className={styles.sectionTitle}>¿En qué puedo ayudarte?</h2>
        <p className={styles.sectionSubtitle}>
          Me especializo en problemas digestivos complejos que requieren un enfoque
          personalizado e integral.
        </p>
      </motion.div>

      <div className={styles.specialtiesGrid}>
        {specialties.map((specialty, index) => (
          <motion.div
            key={specialty.title}
            className={styles.specialtyCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <span className={styles.specialtyIcon}>{specialty.icon}</span>
            <h3 className={styles.specialtyTitle}>{specialty.title}</h3>
            <p className={styles.specialtyDescription}>{specialty.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

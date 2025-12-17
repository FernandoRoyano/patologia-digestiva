'use client';

import styles from "../styles/home.module.css";
import { PlanCard } from "./PlanCard";
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

export function PlansSection() {
  const { ref, isInView } = useInView();

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  return (
    <section className={styles.plansSection}>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={titleVariants as any}
        className={styles.plansHeader}
      >
        <h2 className={styles.plansTitle}>
          Planes de acompañamiento digestivo
        </h2>
        <p className={styles.plansText}>
          Diferentes niveles de acompañamiento para adaptarnos a tu situación,
          al tiempo del que dispones y al grado de cambio que necesitas ahora.
        </p>
      </motion.div>

      <div className={styles.plansGrid}>
        <PlanCard
          label="Empezar"
          name="Plan Básico"
          description="Para una primera orientación clara sobre qué puede estar pasando y qué pasos dar a continuación."
          items={[
            "1 videollamada de valoración.",
            "Revisión de síntomas y antecedentes.",
            "Recomendaciones iniciales por escrito.",
          ]}
          href="/reservar"
          ctaText="Quiero empezar suave"
          index={0}
        />

        <PlanCard
          label="Recomendado"
          name="Plan Intermedio"
          description="Para quienes buscan un cambio real en su salud digestiva, con seguimiento cercano durante varias semanas."
          items={[
            "Videollamada inicial de valoración.",
            "Plan de alimentación y hábitos personalizado.",
            "Sesiones de seguimiento online.",
          ]}
          href="/reservar"
          ctaText="Hablar sobre este plan"
          variant="featured"
          index={1}
        />

        <PlanCard
          label="Intensivo"
          name="Plan Avanzado"
          description="Ideal si llevas tiempo arrastrando molestias digestivas y quieres un acompañamiento más completo y estructurado."
          items={[
            "Evaluación completa del caso.",
            "Plan detallado por fases.",
            "Seguimiento frecuente y ajustes.",
          ]}
          href="/reservar"
          ctaText="Ver si encaja conmigo"
          index={2}
        />
      </div>
    </section>
  );
}

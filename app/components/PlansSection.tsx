'use client';

import styles from '../styles/home.module.css';
import { PlanCard } from './PlanCard';
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
        animate={isInView ? 'visible' : 'hidden'}
        variants={titleVariants as any}
        className={styles.plansHeader}
      >
        <span className={styles.sectionBadge}>Planes</span>
        <h2 className={styles.plansTitle}>
          Planes de acompañamiento
        </h2>
        <p className={styles.plansText}>
          Diferentes niveles de acompañamiento para adaptarnos a tu situación.
          Todos los precios incluyen impuestos.
        </p>
      </motion.div>

      <div className={styles.plansGrid}>
        <PlanCard
          label="Empezar"
          name="Plan Básico"
          price="100€"
          pricePeriod="pago único"
          description="Primera sesión individual + pautas personalizadas + seguimiento básico por email."
          items={[
            'Primera videollamada de valoración',
            'Pautas personalizadas por email',
            'Seguimiento básico para dudas iniciales',
          ]}
          href="/reservar"
          ctaText="Dar el primer paso"
          index={0}
        />

        <PlanCard
          label="Recomendado"
          name="Plan Intermedio"
          price="249€"
          pricePeriod="3 meses"
          description="Acompañamiento continuado con sesiones de seguimiento y soporte por WhatsApp."
          items={[
            'Sesión inicial en profundidad',
            'Estudio detallado de tu caso',
            '4 sesiones de seguimiento (1/mes)',
            'Acompañamiento por email o WhatsApp',
          ]}
          href="/reservar"
          ctaText="Es para mí"
          variant="featured"
          index={1}
        />

        <PlanCard
          label="Intensivo"
          name="Plan Avanzado"
          price="450€"
          pricePeriod="6 meses"
          description="Acompañamiento completo para casos que requieren un seguimiento más cercano y prolongado."
          items={[
            'Sesión inicial exhaustiva',
            'Estudio completo y personalizado',
            '6 sesiones de seguimiento (1/mes)',
            'Acompañamiento continuo por WhatsApp',
            'Ajustes según tu evolución',
          ]}
          href="/reservar"
          ctaText="Quiero el plan completo"
          index={2}
        />
      </div>
    </section>
  );
}

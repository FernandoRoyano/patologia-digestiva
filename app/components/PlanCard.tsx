'use client';

import styles from "../styles/PlanCard.module.css";
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

type PlanCardProps = {
  label: string;
  name: string;
  description: string;
  items: string[];
  href: string;
  variant?: "normal" | "featured";
  ctaText: string;
  index?: number;
};

export function PlanCard({
  label,
  name,
  description,
  items,
  href,
  variant = "normal",
  ctaText,
  index = 0,
}: PlanCardProps) {
  const { ref, isInView } = useInView();

  const cardClass =
    variant === "featured"
      ? `${styles.card} ${styles.cardFeatured}`
      : styles.card;

  const ctaClass =
    variant === "featured" ? styles.ctaPrimary : styles.cta;

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
        ease: 'easeOut' as const,
      },
    }),
  };

  return (
    <motion.article
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={`${cardClass} hover-lift`}
      whileHover={{ y: -4 }}
    >
      <p className={styles.label}>{label}</p>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <motion.a
        href={href}
        className={ctaClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {ctaText}
      </motion.a>
    </motion.article>
  );
}

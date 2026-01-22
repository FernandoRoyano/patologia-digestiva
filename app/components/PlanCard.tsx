'use client';

import Link from 'next/link';
import styles from '../styles/PlanCard.module.css';
import { motion } from 'framer-motion';
import { useInView } from '@/app/hooks/useInView';

type PlanCardProps = {
  label: string;
  name: string;
  price: string;
  pricePeriod?: string;
  description: string;
  items: string[];
  href: string;
  variant?: 'normal' | 'featured';
  ctaText: string;
  index?: number;
};

export function PlanCard({
  label,
  name,
  price,
  pricePeriod,
  description,
  items,
  href,
  variant = 'normal',
  ctaText,
  index = 0,
}: PlanCardProps) {
  const { ref, isInView } = useInView();

  const cardClass =
    variant === 'featured'
      ? `${styles.card} ${styles.cardFeatured}`
      : styles.card;

  const ctaClass =
    variant === 'featured' ? styles.ctaPrimary : styles.cta;

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.15,
      },
    }),
  };

  return (
    <motion.article
      ref={ref}
      custom={index}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants as any}
      className={cardClass}
      whileHover={{ y: -4 }}
    >
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{price}</span>
          {pricePeriod && (
            <span className={styles.pricePeriod}>{pricePeriod}</span>
          )}
        </div>
      </div>

      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item}>
            <span className={styles.checkmark}>✓</span>
            {item}
          </li>
        ))}
      </ul>

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} className={ctaClass}>
          {ctaText}
        </Link>
      </motion.div>
    </motion.article>
  );
}

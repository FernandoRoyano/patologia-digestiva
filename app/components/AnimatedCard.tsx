'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from '@/app/hooks/useInView';

type AnimatedCardProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function AnimatedCard({ 
  children, 
  delay = 0, 
  className = '' 
}: AnimatedCardProps) {
  const { ref, isInView } = useInView();

  const variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

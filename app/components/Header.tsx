'use client';

import Link from 'next/link';
import styles from '../styles/Header.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.2 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/sobre-mi', label: 'Sobre mí' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logoLink} aria-label="DR Nutrición — Inicio">
          <motion.div
            className={styles.logo}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <span className={styles.logoCircle}>
              <span className={styles.logoMonogram}>DR</span>
            </span>
            <span className={styles.logoText}>
              DR NUTRICION
              <span className={styles.logoTag}>Patología digestiva</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navDesktop}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link href="/reservar" className={styles.cta}>
              Reservar <span aria-hidden>→</span>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile hamburger */}
        <motion.button
          className={styles.hamburger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.3 }} />
          <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3 }} />
        </motion.button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className={styles.navMobile}
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {links.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={link.href}
                  className={styles.navLinkMobile}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div custom={links.length} variants={linkVariants} initial="hidden" animate="visible">
              <Link
                href="/reservar"
                className={styles.ctaMobile}
                onClick={() => setIsOpen(false)}
              >
                Reservar videollamada
              </Link>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

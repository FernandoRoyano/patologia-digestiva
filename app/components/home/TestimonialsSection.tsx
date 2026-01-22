'use client';

import { motion } from 'framer-motion';
import styles from '@/app/styles/home.module.css';

const testimonials = [
  {
    id: 1,
    name: 'María G.',
    location: 'Madrid',
    text: 'Tras años con problemas digestivos y yendo de médico en médico, por fin encontré a alguien que entendía lo que me pasaba. Diego no solo me ayudó con la alimentación, sino que me enseñó a entender mi cuerpo.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Carlos R.',
    location: 'Barcelona',
    text: 'Llegué con un diagnóstico de SIBO y mucha confusión. En pocos meses, siguiendo el plan de Diego, mis síntomas mejoraron muchísimo. Lo mejor es que ahora sé qué hacer si vuelvo a tener molestias.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Laura M.',
    location: 'Valencia',
    text: 'Lo que más valoro es la cercanía y el acompañamiento. No es solo una consulta y ya, sino que realmente te sientes acompañado en todo el proceso. Muy agradecida.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <motion.div
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.sectionBadge}>Testimonios</span>
        <h2 className={styles.sectionTitle}>Lo que dicen quienes han trabajado conmigo</h2>
        <p className={styles.sectionSubtitle}>
          Experiencias reales de personas que decidieron tomar las riendas de su salud digestiva.
        </p>
      </motion.div>

      <div className={styles.testimonialsGrid}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className={styles.testimonialCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.testimonialRating}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className={styles.star}>★</span>
              ))}
            </div>
            <p className={styles.testimonialText}>"{testimonial.text}"</p>
            <div className={styles.testimonialAuthor}>
              <div className={styles.testimonialAvatar}>
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className={styles.testimonialName}>{testimonial.name}</p>
                <p className={styles.testimonialLocation}>{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

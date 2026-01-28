'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/sobre-mi.module.css';
import { motion } from 'framer-motion';

export default function SobreMiPage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.photoWrapper}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/diego.jpg"
            alt="Diego Royano - Especialista en patología digestiva"
            width={380}
            height={475}
            className={styles.profileImage}
            priority
          />
        </motion.div>

        <motion.div
          className={styles.textWrapper}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.badge}>Sobre mí</span>
          <h1 className={styles.title}>
            Soy Diego Royano, especialista en salud digestiva
          </h1>
          <p className={styles.lead}>
            No soy solo un profesional que te dice qué comer. Soy alguien que ha
            pasado por donde tú estás ahora y que decidió convertir esa experiencia
            en su propósito.
          </p>
          <ul className={styles.checkList}>
            <li>Dietista - Técnico Superior en Nutrición Humana y Dietética</li>
            <li>Grado en Psicología</li>
            <li>Máster en Nutrición Clínica</li>
            <li>Más de 6 años sin síntomas de colitis ulcerosa</li>
          </ul>
        </motion.div>
      </section>

      {/* MI HISTORIA */}
      <motion.section
        className={styles.storySection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.storyTitle}>Mi historia</h2>
        <div className={styles.storyContent}>
          <p>
            <strong>Mi camino en la salud comenzó desde la experiencia personal.</strong>
          </p>
          <p>
            A los 20 años fui diagnosticado de colitis ulcerosa y el mensaje que recibí
            fue claro y desalentador: no tenía solución, tendría que medicarme de por
            vida y la enfermedad iría a peor.
          </p>
          <p>
            Decidí no quedarme con esa única visión y empecé a estudiar en profundidad
            el sistema digestivo, la nutrición y la salud integral, buscando entender
            qué estaba ocurriendo realmente en mi cuerpo.
          </p>

          <div className={styles.highlight}>
            Tras aproximadamente 10-12 meses de aprendizaje y cambios, conseguí pasar
            de ir al baño 5-6 veces al día, con sangrado, a tener una evacuación diaria,
            correcta y estable, de forma consistente.
          </div>

          <p>
            Aunque esta primera etapa supuso un gran avance, el mayor reto llegó después
            con los síntomas extraintestinales, especialmente los dolores articulares,
            que limitaban de forma importante mi día a día. Fueron años de ensayo, error
            y comprensión profunda de los mecanismos que los provocaban, hasta que
            finalmente logré resolverlos.
          </p>
          <p>
            Tras adquirir todo este conocimiento y vivir el proceso en primera persona,
            decidí formarme en nutrición y psicología, con el objetivo de poder ayudar
            de la mejor manera posible, uniendo la base profesional con la experiencia
            real de haber pasado por el mismo camino.
          </p>
          <p>
            <strong>
              Hoy, gracias a un cambio radical en mi estilo de vida, llevo más de 6 años
              sin ningún síntoma, sin medicación, y con una salud digestiva y general
              mejor que nunca.
            </strong>{' '}
            Esta experiencia no solo transformó mi salud, sino también mi propósito.
          </p>
          <p>
            Actualmente acompaño a personas con problemas digestivos y de salud crónica,
            ayudándolas a entender su cuerpo, recuperar el control y construir una mejora
            real, sostenible y personalizada, desde un enfoque integral y humano.
          </p>
        </div>
      </motion.section>

      {/* FILOSOFÍA */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <motion.div
            className={styles.sectionHeader}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.sectionBadge}>Mi enfoque</span>
            <h2 className={styles.sectionTitle}>Filosofía de trabajo</h2>
            <p className={styles.sectionText}>
              No me gustan los charlatanes ni las falsas promesas. Prefiero hablar claro,
              basarme en la evidencia científica y construir contigo cambios que puedas
              mantener en el tiempo.
            </p>
          </motion.div>

          <div className={styles.grid}>
            {[
              {
                title: 'Educación nutricional',
                text: 'La educación nutricional es la base de mi trabajo. No se trata solo de decirte qué comer, sino de que entiendas el porqué y puedas decidir con criterio.',
              },
              {
                title: 'Enfoque global',
                text: 'Tu alimentación, tu descanso, tu actividad física y tu contexto emocional forman parte de la misma foto. Trabajamos todo en conjunto.',
              },
              {
                title: 'Calidad y mejora constante',
                text: 'Busco la calidad y la mejora constantes en lo que hago, revisando mi trabajo y actualizando mis conocimientos de forma continua.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMACIÓN */}
      <motion.section
        className={styles.formationSection}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Credenciales</span>
          <h2 className={styles.sectionTitle}>Formación y especialización</h2>
        </div>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3>
              <span className={styles.columnIcon}>🎓</span>
              Formación académica
            </h3>
            <ul className={styles.list}>
              <li>Técnico Superior en Nutrición Humana y Dietética</li>
              <li>Grado en Psicología</li>
              <li>Máster en Nutrición Clínica</li>
              <li>Máster en Recursos Humanos</li>
              <li>Máster en Nutrición Clínica Avanzada (ICNS)</li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3>
              <span className={styles.columnIcon}>🔬</span>
              Especialización
            </h3>
            <ul className={styles.list}>
              <li>Enfermedad Inflamatoria Intestinal (Colitis Ulcerosa, Crohn)</li>
              <li>SIBO y disbiosis intestinal</li>
              <li>Intolerancias alimentarias</li>
              <li>Nutrición vegana y vegetariana</li>
              <li>Poblaciones especiales</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className={styles.sectionCta}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>¿Damos el primer paso?</h2>
          <p>
            Incluso el viaje más largo comienza por un primer paso. Si quieres trabajar
            tu salud digestiva de forma seria y cercana, empezamos por una primera
            consulta de valoración gratuita.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/reservar" className={styles.ctaBtn}>
              Reservar consulta gratuita
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}

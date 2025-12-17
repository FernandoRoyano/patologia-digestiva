import styles from "../styles/servicios.module.css";

export default function ServiciosPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <p className={styles.badge}>Servicios</p>
        <h1 className={styles.title}>Acompañamiento especializado en salud digestiva</h1>
        <p className={styles.text}>
          Trabajo contigo de forma personalizada para abordar problemas como SIBO,
          intolerancias alimentarias, inflamación y otros trastornos digestivos,
          siempre desde un enfoque integrativo y realista.
        </p>
      </header>

      <section className={styles.grid}>
        <article className={styles.card}>
          <span className={styles.cardTag}>Primera toma de contacto</span>
          <h2 className={styles.cardTitle}>Primera valoración digestiva</h2>
          <p className={styles.cardText}>
            Una primera sesión online para revisar tus síntomas, historial y hábitos
            y definir el mejor enfoque para tu caso.
          </p>
          <ul className={styles.cardList}>
            <li>Revisión de síntomas y antecedentes.</li>
            <li>Orientación inicial sobre posibles causas.</li>
            <li>Propuesta de siguiente paso si encajamos.</li>
          </ul>
          <div className={styles.cardFooter}>
            <span className={styles.price}>Videollamada inicial</span>
            <a href="/reservar" className={styles.link}>
              Reservar videollamada →
            </a>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.cardTag}>SIBO e inflamación</span>
          <h2 className={styles.cardTitle}>Acompañamiento SIBO</h2>
          <p className={styles.cardText}>
            Plan de trabajo para personas con sospecha o diagnóstico de SIBO,
            combinando pautas nutricionales y hábitos de vida.
          </p>
          <ul className={styles.cardList}>
            <li>Revisión de pruebas y diagnóstico previo.</li>
            <li>Plan de alimentación adaptado a tus síntomas.</li>
            <li>Seguimiento periódico online.</li>
          </ul>
          <div className={styles.cardFooter}>
            <span className={styles.price}>Plan a medida</span>
            <a href="/reservar" className={styles.link}>
              Hablar sobre tu caso →
            </a>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.cardTag}>Intolerancias</span>
          <h2 className={styles.cardTitle}>Intolerancias alimentarias</h2>
          <p className={styles.cardText}>
            Acompañamiento para gestionar intolerancias y sensibilidad digestiva,
            minimizando síntomas sin perder calidad de vida.
          </p>
          <ul className={styles.cardList}>
            <li>Revisión de pruebas y síntomas.</li>
            <li>Diseño de pauta alimentaria adaptada.</li>
            <li>Educación nutricional para tu día a día.</li>
          </ul>
          <div className={styles.cardFooter}>
            <span className={styles.price}>Plan a medida</span>
            <a href="/reservar" className={styles.link}>
              Reservar videollamada →
            </a>
          </div>
        </article>

        <article className={styles.card}>
          <span className={styles.cardTag}>Seguimiento</span>
          <h2 className={styles.cardTitle}>Consulta de seguimiento</h2>
          <p className={styles.cardText}>
            Sesiones de seguimiento para ajustar el plan, resolver dudas y
            acompañarte en los cambios de hábitos.
          </p>
          <ul className={styles.cardList}>
            <li>Revisión de evolución y síntomas.</li>
            <li>Ajustes en pauta y recomendaciones.</li>
            <li>Soporte en la implementación de hábitos.</li>
          </ul>
          <div className={styles.cardFooter}>
            <span className={styles.price}>Sesión online</span>
            <a href="/reservar" className={styles.link}>
              Agendar seguimiento →
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

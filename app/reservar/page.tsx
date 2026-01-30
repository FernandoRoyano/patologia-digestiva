import styles from "../styles/reservar.module.css";

export default function ReservarPage() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <p className={styles.badge}>Reservar consulta</p>
        <h1 className={styles.title}>Agenda tu videollamada</h1>
        <p className={styles.text}>
          Selecciona el día y la hora que mejor te vengan. La primera consulta
          de valoración es gratuita.
        </p>
      </section>

      <div className={styles.calendarWrapper}>
        <iframe
          src="https://calendly.com/royanocabrerodiego/30min?hide_gdpr_banner=1"
          width="100%"
          height="700"
          frameBorder="0"
          title="Reservar videollamada"
        />
      </div>
    </div>
  );
}

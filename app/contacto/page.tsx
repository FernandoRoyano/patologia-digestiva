import styles from "../styles/contacto.module.css";

export default function ContactoPage() {
  return (
    <div className={styles.page}>
      <section className={styles.header}>
        <p className={styles.badge}>Contacto</p>
        <h1 className={styles.title}>Hablemos de tu salud digestiva</h1>
        <p className={styles.text}>
          Si tienes dudas sobre el acompañamiento, los planes o el proceso de
          reserva, cuéntamelo en este formulario. Te responderé personalmente
          lo antes posible.
        </p>
      </section>

      <section className={styles.layout}>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="nombre">Nombre completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="motivo">Motivo principal de consulta</label>
              <select id="motivo" name="motivo">
                <option value="">Selecciona una opción</option>
                <option value="sintomas">Tengo síntomas digestivos y quiero orientación</option>
                <option value="planes">Quiero saber qué plan es mejor para mí</option>
                <option value="agenda">Dudas sobre la reserva o horarios</option>
                <option value="otros">Otros motivos</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="mensaje">Cuéntame brevemente tu situación</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                placeholder="Escribe aquí lo que te preocupa o las dudas que tienes"
              />
            </div>

            <button type="submit" className={styles.submit}>
              Enviar mensaje
            </button>

            <p className={styles.disclaimer}>
              Este formulario no sustituye una valoración médica. No compartas
              datos especialmente sensibles como informes completos o resultados
              de pruebas en este primer contacto.
            </p>
          </form>
        </div>

        <aside className={styles.info}>
          <h2>O si lo prefieres…</h2>
          <p>
            También puedes contactar directamente por correo o teléfono si te
            resulta más cómodo.
          </p>
          <p className={styles.highlight}>email@ejemplo.com</p>
          <p className={styles.highlight}>+34 000 000 000</p>
          <p className={styles.small}>
            Horario de atención: Lunes a viernes de 9:00 a 18:00.
          </p>
          <p className={styles.small}>
            Si ya has reservado una videollamada por Calendly, puedes usar este
            correo para cambios o dudas puntuales.
          </p>
        </aside>
      </section>
    </div>
  );
}

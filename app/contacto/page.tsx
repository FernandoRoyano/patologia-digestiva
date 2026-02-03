'use client';

import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../styles/contacto.module.css";

export default function ContactoPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );
      setSent(true);
      form.reset();
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

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
          {sent ? (
            <div className={styles.successMessage}>
              <h2>Mensaje enviado</h2>
              <p>
                Gracias por escribirme. Te responderé lo antes posible.
              </p>
              <button
                className={styles.submit}
                onClick={() => setSent(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="tucorreo@ejemplo.com"
                  required
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="motivo">Motivo principal de consulta</label>
                <select id="motivo" name="motivo" required>
                  <option value="">Selecciona una opción</option>
                  <option value="Tengo síntomas digestivos y quiero orientación">Tengo síntomas digestivos y quiero orientación</option>
                  <option value="Quiero saber qué plan es mejor para mí">Quiero saber qué plan es mejor para mí</option>
                  <option value="Dudas sobre la reserva o horarios">Dudas sobre la reserva o horarios</option>
                  <option value="Otros motivos">Otros motivos</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="mensaje">Cuéntame brevemente tu situación</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={5}
                  placeholder="Escribe aquí lo que te preocupa o las dudas que tienes"
                  required
                />
              </div>

              <button type="submit" className={styles.submit} disabled={sending}>
                {sending ? 'Enviando...' : 'Enviar mensaje'}
              </button>

              {error && (
                <p className={styles.errorMessage}>
                  Hubo un error al enviar el mensaje. Inténtalo de nuevo o escríbeme directamente al correo.
                </p>
              )}

              <p className={styles.disclaimer}>
                Este formulario no sustituye una valoración médica. No compartas
                datos especialmente sensibles como informes completos o resultados
                de pruebas en este primer contacto.
              </p>
            </form>
          )}
        </div>

        <aside className={styles.info}>
          <h2>O si lo prefieres…</h2>
          <p>
            También puedes contactar directamente por correo o teléfono si te
            resulta más cómodo.
          </p>
          <p className={styles.highlight}>royanocabrerodiego@gmail.com</p>
          <p className={styles.small}>
            Horario de atención: Lunes a viernes de 9:00 a 18:00.
          </p>
          <p className={styles.small}>
            Si prefieres reservar directamente una videollamada,{' '}
            <a href="/reservar" style={{ color: 'var(--color-primary)', fontWeight: 600 }}>
              haz clic aquí para agendar tu cita
            </a>.
            También puedes usar este correo para cambios o dudas puntuales.
          </p>
        </aside>
      </section>
    </div>
  );
}

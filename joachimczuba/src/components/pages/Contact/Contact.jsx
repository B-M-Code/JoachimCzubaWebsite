import { useForm, ValidationError } from "@formspree/react";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgrgvwj");

  return (
    <div className={styles.page}>
      <section className={styles.hero}></section>

      <section className={styles.contactSection}>
        <div className={styles.heading}>
          <span className={styles.line} />
          <h2>KONTAKT</h2>
        </div>

        <div className={styles.content}>
          <div className={styles.formCol}>
            {state.succeeded ? (
              <p className={styles.intro}>
                Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.
              </p>
            ) : (
              <>
                <p className={styles.intro}>
                  Gotowy, żeby zacząć budować swoją formę życia? Napisz do mnie,
                  a wspólnie ułożymy plan działania i ruszymy do pracy.
                </p>
                <p className={styles.introSmall}>
                  Odezwę się do wszystkich zainteresowanych osób.
                </p>

                <form className={styles.form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Imię i nazwisko"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className={styles.errorMsg}
                  />

                  <textarea
                    name="message"
                    placeholder="Wiadomość"
                    rows={4}
                    required
                  />
                  <ValidationError
                    prefix="Wiadomość"
                    field="message"
                    errors={state.errors}
                    className={styles.errorMsg}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className={styles.submitBtn}
                  >
                    {state.submitting ? "Wysyłanie..." : "Wyślij"}
                  </button>
                  <ValidationError
                    errors={state.errors}
                    className={styles.errorMsg}
                  />
                </form>
              </>
            )}
          </div>

          <div className={styles.imageCol}>
            <div className={styles.contactImage} />
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>©2026 · Joachim Czuba</p>
        <div className={styles.footerLinks}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            INSTAGRAM
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            WHATSAPP
          </a>
          <a href="mailto:kontakt@joachimczuba.pl">E-MAIL</a>
        </div>
      </footer>

      <div className={styles.bigName}>CZUBA</div>
    </div>
  );
}

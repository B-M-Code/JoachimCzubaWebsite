import { useForm, ValidationError } from "@formspree/react";

import styles from "./Contact.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgrgvwj");

  if (state.succeeded) {
    return <p>Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.</p>;
  }

  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.gradient}></div>
          <div className={styles.img}></div>
        </div>
      </main>

      <SubPageHeaderBlock
        title={"Kontakt"}
        text={
          "Gotowy, żeby zacząć budować swoją formę? Napisz do mnie, a razem ustalimy najlepszy plan działania i ruszymy do pracy."
        }
        subtext={"Im szybciej zaczniesz, tym szybciej zobaczysz efekty."}
      />

      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Imie</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Wiadomość</label>
          <textarea name="message" required />
          <ValidationError
            prefix="Wiadomość"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? "Wysyłanie..." : "Wyślij"}
          </button>

          <ValidationError errors={state.errors} />
        </form>
        <div className={styles.bg_gradient}></div>
        <div className={styles.bg}></div>
      </section>
    </>
  );
}

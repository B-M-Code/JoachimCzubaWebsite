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

      {/* <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Imię i nazwisko" required />

        <input type="email" name="email" placeholder="Email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea name="message" placeholder="Wiadomość" rows={4} required />
        <ValidationError
          prefix="Wiadomość"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting}>
          {state.submitting ? "Wysyłanie..." : "Wyślij"}
        </button>

        <ValidationError errors={state.errors} />
      </form> */}
    </>
  );
}

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgrgvwj");

  if (state.succeeded) {
    return (
      <section className="page page-contact">
        <h1>Kontakt</h1>
        <p className="form-success">
          Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.
        </p>
      </section>
    );
  }

  return (
    <section className="page page-contact">
      <h1>Kontakt</h1>
      <p>Masz pytania? Napisz do mnie.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Imię i nazwisko</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Wiadomość</label>
        <textarea id="message" name="message" rows="6" required />
        <ValidationError
          prefix="Wiadomość"
          field="message"
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting} className="btn">
          {state.submitting ? "Wysyłanie..." : "Wyślij"}
        </button>

        <ValidationError errors={state.errors} />
      </form>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="page page-home">
      <h1>Witaj na stronie startowej</h1>
      <p>
        To jest podstrona <code>index</code> — domyślnie widoczna pod adresem{" "}
        <code>/</code>.
      </p>
      <div className="cta-row">
        <Link to="/oferta" className="btn">
          Zobacz ofertę
        </Link>
        <Link to="/kontakt" className="btn btn-outline">
          Skontaktuj się
        </Link>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="page page-404">
      <h1>404</h1>
      <p>Ups, nie znaleziono takiej strony.</p>
      <Link to="/" className="btn">
        Wróć na stronę startową
      </Link>
    </section>
  );
}

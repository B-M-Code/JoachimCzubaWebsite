import { Link } from "react-router-dom";

import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <div className={styles.bg}></div>
      <div className={styles.gradient}></div>
      <h1>
        40<strong>4</strong>
      </h1>
      <p>Ups, nie znaleziono takiej strony...</p>
      <Link to="/" className={styles.btn}>
        Wróć na stronę startową
      </Link>
    </section>
  );
}

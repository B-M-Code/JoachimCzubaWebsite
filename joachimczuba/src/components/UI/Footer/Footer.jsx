import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.top_content}>
        <div className={styles.copy}>
          <p>©{year} - Joachim Czuba </p>
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.instagram.com/joachim__sw/?utm_source=ig_web_button_share_sheet"
            target="_blank"
          >
            instagram
          </a>
          <a href="">Whatsapp</a>
          <a href="">E-mail</a>
        </div>
      </div>
      <div className={styles.bottom_content}>
        <h3>Czuba</h3>
      </div>
    </footer>
  );
}

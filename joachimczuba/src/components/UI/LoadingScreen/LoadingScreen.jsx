import styles from "./LoadingScreen.module.scss";

export default function LoadingScreen({ visible }) {
  return (
    <div
      className={`${styles.loading_screen} ${visible ? styles.visible : styles.hidden}`}
    >
      <div className={styles.loading_screen_content}>
        <p>Ładowanie</p>
        <div className={styles.wrapper}>
          <div className={styles.dots}></div>
        </div>
      </div>
    </div>
  );
}

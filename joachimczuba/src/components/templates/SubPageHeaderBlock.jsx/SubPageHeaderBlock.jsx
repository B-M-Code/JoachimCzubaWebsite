import styles from "./SubPageHeaderBlock.module.scss";

export default function TextBlock({ title, text, subtext }) {
  return (
    <div className={styles.container}>
      <div className={styles.title_wrapper}>
        <h1>{title}</h1>
      </div>
      <div className={styles.text_wrapper}>
        <div className={styles.wrapper}>
          <div>
            <p>{text}</p>
            <p className={styles.subtext}>{subtext}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

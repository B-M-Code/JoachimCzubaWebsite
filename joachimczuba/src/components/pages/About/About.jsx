import styles from "./About.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";
import SubPageSubHeadingBlock from "../../templates/SubPageSubHeadingBlock/SubPageSubHeadingBlock";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.gradient}></div>
          <div className={styles.img}></div>
        </div>
      </main>
      <SubPageHeaderBlock
        title={"o mnie"}
        text={
          "Gotowy, żeby zacząć budować swoją formę? Napisz do mnie, a razem ustalimy najlepszy plan działania i ruszymy do pracy."
        }
        subtext={"Im szybciej zaczniesz, tym szybciej zobaczysz efekty."}
      />
      <div className={styles.content_wrapper}>
        <div className={styles.banner}></div>
        <section className={`${styles.text_content} && ${styles.s}`}>
          <SubPageSubHeadingBlock
            title={"moje doświadczenie"}
            text={
              "Jako doświadczony trener personalny, pomagam klientom osiągać ich cele fitness, niezależnie od poziomu zaawansowania."
            }
            subtext={
              "Moje podejście jest spersonalizowane i skoncentrowane na wynikach, które naprawdę mają znaczenie dla Ciebie."
            }
          />
        </section>
        <section className={`${styles.first_section} && ${styles.s}`}>
          <div className={styles.text_wrapper}></div>
          <div className={styles.img_wrapper}></div>
        </section>
        <section className={`${styles.second_section} && ${styles.s}`}>
          <div className={styles.text_wrapper}></div>
          <div className={styles.img_wrapper}></div>
        </section>
        <section
          className={`${styles.bottom_section} && ${styles.s}`}
        ></section>
        <div className={styles.banner}></div>
      </div>
    </>
  );
}

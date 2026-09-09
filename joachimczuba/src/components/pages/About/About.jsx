import styles from "./About.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";
import SubPageSubHeadingBlock from "../../templates/SubPageSubHeadingBlock/SubPageSubHeadingBlock";
import SubPageSubHeadingBlockRev from "../../templates/SubPageSubHeadingBlockRev/SubPageSubHeadingBlockRev";

export default function About() {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
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
            title={"Technika i precyzja"}
            text={
              "Zwracam uwagę na detale i dokładność w technice – to podstawa skutecznego i bezpiecznego treningu."
            }
            subtext={
              "Trenuję głównie pull-a, co pozwala mi łączyć siłę z precyzją ruchu."
            }
          />
        </section>
        <section className={`${styles.text_content} && ${styles.s}`}>
          <SubPageSubHeadingBlockRev
            title={"Pasja i zaangażowanie"}
            text={
              "Łączę pasję do ruchu z dbałością o technikę i szczegóły. Jeśli szukasz kogoś zaangażowanego i konsekwentnego - chętnie nawiążę współpracę."
            }
            subtext={"Czekam na Twoją wiadomość!"}
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

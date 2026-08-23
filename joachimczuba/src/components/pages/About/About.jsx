import styles from "./About.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";

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
    </>
  );
}

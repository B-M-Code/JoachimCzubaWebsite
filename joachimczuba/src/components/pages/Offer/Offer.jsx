import styles from "./Offer.module.scss";

import SubPageHeaderBlock from "../../templates/SubPageHeaderBlock.jsx/SubPageHeaderBlock";

export default function Offer() {
  return (
    <>
      <main>
        <div className={styles.wrapper}>
          <div className={styles.gradient}></div>
          <div className={styles.img}></div>
        </div>
      </main>

      <SubPageHeaderBlock
        title={"Oferta"}
        text={
          "Wybierz plan dopasowany do swoich celów. Skuteczna kalistenika oparta na wiedzy i doświadczeniu."
        }
        subtext={"Teraz już bez wymówek, zrób to raz a dobrze."}
      />
    </>
  );
}

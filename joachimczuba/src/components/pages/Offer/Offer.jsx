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
        subtext={"Im szybciej zaczniesz, tym szybciej zobaczysz efekty."}
      />
      <div className={styles.offercards_container}>
        <section className={styles.offercard}>
          <div className={styles.offercard_wrapper}>
            <div className={styles.text_container}>
              <div className={styles.header}>
                <div className={styles.line}></div>
                <h2>start progresji</h2>
                <p>
                  Optymalny plan treningowy zapewniający prawidłową progresję i
                  samodzielne budowanie formy.
                </p>
              </div>
              <div className={styles.line}></div>
              <ol>
                <li>video instruktażowe</li>
                <li>plan treningowy</li>
              </ol>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.price_wrapper}>
            <p>99 zł</p>
            <button>Wybierz</button>
          </div>
        </section>
      </div>
    </>
  );
}

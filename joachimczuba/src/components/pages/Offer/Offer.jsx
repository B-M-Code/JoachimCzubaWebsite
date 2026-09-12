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
                <h2>start progresji</h2>
                <div className={styles.line}></div>
                <p>
                  Optymalny plan treningowy zapewniający prawidłową progresję i
                  samodzielne budowanie formy, dla osób, które chcą trenować
                  świadomie i skutecznie, bez stałej obecności trenera. Łączy
                  zaplanowaną progresję obciążeń ze wsparciem edukacyjnym,
                  dzięki czemu każdy trening przybliża Cię do celu.
                </p>
              </div>
              <div className={styles.line}></div>
              <ol>
                <li>Video instruktażowe</li>
                <li>Plan treningowy</li>
              </ol>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.price_wrapper}>
            <p>99 zł</p>
            <button>Wybierz</button>
          </div>
        </section>

        <section className={styles.offercard}>
          <div className={styles.offercard_wrapper}>
            <div className={styles.text_container}>
              <div className={styles.header}>
                <h2>pełne wsparcie</h2>
                <div className={styles.line}></div>
                <p>
                  Pełne wsparcie zapewniające kompleksową opiekę i stałą
                  kontrolę postępów krok po kroku – dla osób, które chcą
                  trenować skutecznie i mieć pewność, że idą w dobrym kierunku.
                  Łączy systematyczną analizę techniki ze stałym kontaktem z
                  trenerem, dzięki czemu każdy krok przybliża Cię do celu.
                </p>
              </div>
              <div className={styles.line}></div>
              <ol>
                <li>Video instruktażowe</li>
                <li>Plan treningowy</li>
                <li>Analiza błędów</li>
                <li>Stały kontakt</li>
              </ol>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.price_wrapper}>
            <p>349 zł</p>
            <button>Wybierz</button>
          </div>
        </section>

        <section className={styles.offercard}>
          <div className={styles.offercard_wrapper}>
            <div className={styles.text_container}>
              <div className={styles.header}>
                <h2>wspólny trening</h2>
                <div className={styles.line}></div>
                <p>
                  Wspólny trening zapewniający maksymalne skupienie na Twojej
                  technice i natychmiastowe efekty – dla osób, które chcą
                  trenować razem z trenerem i widzieć progres od pierwszej
                  sesji. Łączy korektę techniki na żywo ze wsparciem podczas
                  wspólnego treningu, dzięki czemu każde spotkanie przybliża Cię
                  do celu.
                </p>
              </div>
              <div className={styles.line}></div>
              <ol>
                <li>Korekta techniki na żywo</li>
                <li>Natychmiastowe efekty</li>
              </ol>
            </div>
            <div className={styles.img}></div>
          </div>
          <div className={styles.price_wrapper}>
            <p>49 zł</p>
            <button>Wybierz</button>
          </div>
        </section>
      </div>
    </>
  );
}

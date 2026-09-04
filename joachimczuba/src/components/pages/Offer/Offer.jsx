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

      <div className={styles.OfferCards_container}>
        <section></section>
      </div>
    </>
  );
}

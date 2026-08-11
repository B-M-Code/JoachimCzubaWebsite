import { Link } from "react-router-dom";

import H from "./Home.module.scss";

export default function Home() {
  return (
    <main>
      <div className={H.frame}>
        <div></div>
        <div className={H.bottom__content}>
          <div className={H.wrapper}>
            <p>Realizacja</p>
            <p>
              <a href="https://klemensowicz.pl/" target="_blank">
                Klemensowicz
              </a>
              &
              <a href="https://github.com/Czwartek123" target="_blank">
                Piatek
              </a>
            </p>
          </div>
          <div className={H.wrapper}>
            <p>Copyright © {new Date().getFullYear()} Joachim Czuba</p>
            <p>Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </div>
      <div className={H.bg}></div>
    </main>
  );
}

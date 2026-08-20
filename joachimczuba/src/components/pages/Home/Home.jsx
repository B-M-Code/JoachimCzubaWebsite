import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";

import H from "./Home.module.scss";

export default function Home() {
  const bgRef = useRef(null);
  const frameRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (!bgRef.current) return;

    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;

    bgRef.current.style.setProperty("--x", x.toFixed(3));
    bgRef.current.style.setProperty("--y", y.toFixed(3));
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!bgRef.current) return;
    bgRef.current.style.setProperty("--x", 0);
    bgRef.current.style.setProperty("--y", 0);
  }, []);

  return (
    <main onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <div className={H.frame} ref={frameRef}>
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
      <div className={H.bg_block}></div>
      <div className={H.bg_gradient_block}></div>
      <div className={H.bg}></div>
    </main>
  );
}

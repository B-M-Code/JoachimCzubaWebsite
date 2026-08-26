import { useState, useEffect, useRef } from "react";

/**
 * Publiczna funkcja (hook) odpowiedzialna WYŁĄCZNIE za animację
 * "zoom out od środka" contentu podstrony po zniknięciu loadera.
 *
 * @param {string} key - klucz zmieniający się przy każdej nawigacji (np. pathname)
 * @param {boolean} trigger - kiedy true, startuje animacja (np. gdy loader znika)
 * @returns {boolean} visible - użyj do przełączania klasy CSS (hidden/visible)
 */
export default function useZoomIn(key, trigger) {
  const [visible, setVisible] = useState(false);
  const rafIds = useRef([]);

  // reset przy każdej zmianie trasy
  useEffect(() => {
    setVisible(false);
  }, [key]);

  // start animacji, kiedy trigger staje się true
  useEffect(() => {
    if (!trigger) return;

    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        setVisible(true);
      });
      rafIds.current.push(raf2);
    });
    rafIds.current.push(raf1);

    return () => {
      rafIds.current.forEach(cancelAnimationFrame);
      rafIds.current = [];
    };
  }, [trigger, key]);

  return visible;
}

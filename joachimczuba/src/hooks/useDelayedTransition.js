import { useState, useRef, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useDelayedTransition({
  fadeIn = 300,
  hold = 150,
  fadeOut = 300,
} = {}) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const navigate = useNavigate();
  const timers = useRef([]);
  const rafIds = useRef([]);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    rafIds.current.forEach(cancelAnimationFrame);
    rafIds.current = [];
  };

  // pierwsze wejście na stronę — samo intro, bez nawigacji
  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      const h = setTimeout(() => setMounted(false), fadeOut);
      timers.current.push(h);
    }, fadeIn + hold);
    timers.current.push(t);

    return clearTimers;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const goTo = useCallback(
    (path, { onCovered } = {}) => {
      clearTimers();
      setMounted(true);
      setVisible(false);

      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(() => {
          setVisible(true); // start fade-in
          onCovered?.(); // np. zamknięcie menu — dokładnie w momencie startu fade-in

          const navTimer = setTimeout(() => {
            // loader w pełni zasłania ekran -> DOPIERO TERAZ realna zmiana trasy
            navigate(path);

            const holdTimer = setTimeout(() => {
              setVisible(false);
              const hideTimer = setTimeout(() => setMounted(false), fadeOut);
              timers.current.push(hideTimer);
            }, hold);
            timers.current.push(holdTimer);
          }, fadeIn);
          timers.current.push(navTimer);
        });
        rafIds.current.push(raf2);
      });
      rafIds.current.push(raf1);
    },
    [fadeIn, hold, fadeOut, navigate],
  );

  return { visible, mounted, goTo };
}

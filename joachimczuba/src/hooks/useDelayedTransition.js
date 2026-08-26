import { useState, useEffect, useRef } from "react";

export default function useDelayedTransition(
  location,
  { fadeIn = 300, hold = 150, fadeOut = 300 } = {},
) {
  const [displayedLocation, setDisplayedLocation] = useState(location);
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const isFirstLoad = useRef(true);

  // ref śledzi aktualnie wyświetlaną trasę BEZ wywoływania efektu ponownie
  const displayedPathRef = useRef(location.pathname);

  useEffect(() => {
    let rafId1, rafId2, swapTimer, holdTimer, hideTimer;

    if (isFirstLoad.current) {
      setMounted(true);
      setVisible(true);

      holdTimer = setTimeout(() => {
        setVisible(false);
        hideTimer = setTimeout(() => {
          setMounted(false);
          isFirstLoad.current = false;
        }, fadeOut);
      }, fadeIn + hold);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(hideTimer);
      };
    }

    // porównanie po ref, nie po state -> nie ma efektu "sam siebie przerywa"
    if (location.pathname === displayedPathRef.current) return;

    setMounted(true);
    setVisible(false);

    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        setVisible(true);

        swapTimer = setTimeout(() => {
          displayedPathRef.current = location.pathname;
          setDisplayedLocation(location);

          holdTimer = setTimeout(() => {
            setVisible(false);

            hideTimer = setTimeout(() => {
              setMounted(false);
            }, fadeOut);
          }, hold);
        }, fadeIn);
      });
    });

    return () => {
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
      clearTimeout(swapTimer);
      clearTimeout(holdTimer);
      clearTimeout(hideTimer);
    };
  }, [location, fadeIn, hold, fadeOut]); // <- displayedLocation.pathname USUNIĘTE z zależności

  return { displayedLocation, visible, mounted };
}

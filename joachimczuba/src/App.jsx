import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About/About.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Offer from "./components/pages/Offer/Offer.jsx";
import NotFound from "./components/pages/NotFound/NotFound.jsx";
import LoadingScreen from "./components/UI/LoadingScreen/LoadingScreen.jsx";
import useLenis from "./hooks/useLenis.js";
import useDelayedTransition from "./hooks/useDelayedTransition.js";

import "./styles/app.scss";

export default function App() {
  const location = useLocation();
  useLenis();

  const { displayedLocation, visible, mounted } = useDelayedTransition(
    location,
    {
      fadeIn: 300,
      hold: 150,
      fadeOut: 300,
    },
  );

  return (
    <>
      {mounted && <LoadingScreen visible={visible} />}

      <Routes location={displayedLocation}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="o-mnie" element={<About />} />
          <Route path="oferta" element={<Offer />} />
          <Route path="kontakt" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

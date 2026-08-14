import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./components/pages/Home/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import Offer from "./components/pages/Offer.jsx";
import NotFound from "./components/pages/NotFound.jsx";

import "./styles/app.scss";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="o-mnie" element={<About />} />
        <Route path="oferta" element={<Offer />} />
        <Route path="kontakt" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

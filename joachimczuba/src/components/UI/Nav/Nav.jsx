import { useState } from "react";
import { NavLink } from "react-router-dom";
import N from "./Nav.module.scss";

const links = [
  { to: "/", label: "Start", end: true },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className={`${N.nav} ${isOpen ? N.menuOnly : ""}`}>
        {!isOpen && (
          <NavLink to="/" className={N.logo}>
            <h1>Joachim Czuba</h1>
            <h2>Trener Kalisteniki</h2>
          </NavLink>
        )}

        <div className={N.menu} onClick={toggleMenu}>
          <span key={isOpen ? "close" : "open"} className={N.menuText}>
            {isOpen ? "Wróć" : "Menu"}
          </span>
        </div>
      </nav>

      <div className={`${N.overlay} ${isOpen ? N.open : ""}`}>
        <div className={N.bgLayer1} />
        <div className={N.bgLayer2} />

        <div className={N.borderFrame}>
          <ol className={N.list}>
            {links.map((link, i) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  style={{ "--i": `"(0${i + 1})"`, "--order": i }}
                  className={({ isActive }) =>
                    isActive ? N.active : undefined
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

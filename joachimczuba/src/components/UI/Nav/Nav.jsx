import { NavLink, Outlet } from "react-router-dom";
import N from "./Nav.module.scss";

const links = [
  { to: "/", label: "Start", end: true },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Layout() {
  return (
    <nav>
      <div className={N.logo}>
        <h1>Joachim Czuba</h1>
        <h2>Trener Kalisteniki</h2>
      </div>
      <div className={N.menu}>menu</div>
      {/* <ol>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ol> */}
    </nav>
  );
}

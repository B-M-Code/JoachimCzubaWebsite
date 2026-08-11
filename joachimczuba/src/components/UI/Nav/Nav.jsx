import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Start", end: true },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Layout() {
  return (
    <nav>
      <ol>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to} end={link.end}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ol>
    </nav>
  );
}

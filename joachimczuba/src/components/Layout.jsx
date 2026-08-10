import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Start", end: true },
  { to: "/o-mnie", label: "O mnie" },
  { to: "/oferta", label: "Oferta" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Layout() {
  return (
    <div className="app">
      <header className="topbar">
        <div className="logo">Moja Strona</div>
        <nav className="nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                "nav-link" + (isActive ? " active" : "")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Moja Strona. Wszelkie prawa
          zastrzeżone.
        </p>
      </footer>
    </div>
  );
}

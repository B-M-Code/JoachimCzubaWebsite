import { Outlet } from "react-router-dom";
import NavBar from "../components/UI/Nav/Nav.jsx";
import Footer from "../components/UI/Footer/Footer.jsx";

export default function Layout() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

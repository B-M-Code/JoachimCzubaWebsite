import { Outlet } from "react-router-dom";
import NavBar from "../components/UI/Nav/Nav.jsx";

export default function Layout() {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
    </div>
  );
}

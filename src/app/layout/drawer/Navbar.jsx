import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
import "./Navbar.css";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  return (
    <nav className="layoutNav">
      <ul className="navList">
        <li className="navItem">
          <button className="navItemBtn active">Publicaciones</button>
        </li>
        <li className="navItem">
          <button className="navItemBtn">Usuarios</button>
        </li>
        <li className="navItem">
          <button className="navItemBtn">Eventos</button>
        </li>
      </ul>
      <button className="navItemSettings" onClick={logout}>
        Logout
      </button>
    </nav>
  );
}

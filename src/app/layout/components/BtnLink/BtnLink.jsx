import { NavLink } from "react-router-dom";

import "./BtnLink.css";

export default function BtnLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "navItemLink active" : "navItemLink"
      }
    >
      <button className={`navItemBtn`}>{children}</button>
    </NavLink>
  );
}

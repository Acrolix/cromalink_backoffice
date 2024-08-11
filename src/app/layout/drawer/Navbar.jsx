import { useTranslation } from "react-i18next";
import BtnLink from "../components/BtnLink/BtnLink";
import BtnSettings from "../components/BtnSettings/BtnSettings";
import "./Navbar.css";

export default function Navbar() {
  const { t } = useTranslation("", { keyPrefix: "layout.navbar" });
  return (
    <nav className="layoutNav">
      <ul className="navList">
        <li className="navItem">
          <BtnLink to="/">{t("postslink")}</BtnLink>
        </li>
        <li className="navItem">
          <BtnLink to="/users">{t("userslink")}</BtnLink>
        </li>
        <li className="navItem">
          <BtnLink to="/events">{t("eventslink")}</BtnLink>
        </li>
      </ul>
      <BtnSettings />
    </nav>
  );
}

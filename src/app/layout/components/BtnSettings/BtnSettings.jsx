import { useContext, useState } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import { useTranslation } from "react-i18next";
import "./BtnSettings.css";

export default function BtnSettings() {
  const [showMenu, setShowMenu] = useState(false);
  const [lenguageText, setLenguageText] = useState("English");
  const { logout } = useContext(AuthContext);
  const { t, i18n } = useTranslation("", {
    keyPrefix: "layout.navbar.btnSettings",
  });

  const len = i18n.language;

  const handleChangeLanguage = () => {
    if (len === "es") {
      i18n.changeLanguage("en");
      setLenguageText("Español");
    } else {
      i18n.changeLanguage("es");
      setLenguageText("English");
    }
  };

  return (
    <div
      className="btnSettingsContainer"
      onMouseLeave={() => setShowMenu(false)}
    >
      {showMenu && (
        <div className="btnSettingsMenu">
          <button className="btnSettingsMenuItem" onClick={logout}>
            <span className="btnSettingsIconOpt">🔓</span>
            {t("logout")}
          </button>

          <button
            className="btnSettingsMenuItem"
            onClick={handleChangeLanguage}
          >
            <span className="btnSettingsIconOpt">🌐</span>
            Leng - {lenguageText}
          </button>
        </div>
      )}
      <button className="btnSettings" onClick={() => setShowMenu(!showMenu)}>
        <span className="btnSettingsIcon">⚙️</span>
      </button>
    </div>
  );
}

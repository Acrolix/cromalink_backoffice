import Eslogan from "../../assets/eslogan.svg";
import Logo from "../../assets/logo.svg";

import "./Layout.css";
import Navbar from "./drawer/Navbar";

export default function Layout() {
  return (
    <>
      <header className="layoutHeader">
        <img
          src={Eslogan}
          height="50"
          alt="Cromalink Slogan"
          className="headerEslogan"
        />
        <img
          src={Logo}
          height="35"
          alt="Cromalink Logo"
          className="headerLogo"
        />
      </header>
      <div className="layoutContainer">
        <Navbar />
        <main className="layoutMain">
          <h1>Hola Mundo</h1>
        </main>
      </div>
    </>
  );
}

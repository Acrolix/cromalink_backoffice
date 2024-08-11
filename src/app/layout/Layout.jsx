import { Route, Routes } from "react-router";
import Eslogan from "../../assets/eslogan.svg";
import Logo from "../../assets/logo.svg";
import Navbar from "./drawer/Navbar";
import "./Layout.css";
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
          <Routes>
            <Route path="/" element={<h1></h1>} />
            <Route path="/users" element={<h1>Usuarios</h1>} />
            <Route path="/events" element={<h1>Eventos</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

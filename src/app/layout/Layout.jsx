import { lazy } from "react";
import { Route, Routes } from "react-router";
import Eslogan from "../../assets/eslogan.svg";
import Logo from "../../assets/logo.svg";
import Navbar from "./drawer/Navbar";
import "./Layout.css";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const PostsList = lazy(() => import("../pages/posts/PostsList"));
const UsersList = lazy(() => import("../pages/users/UsersList"));
const EventsList = lazy(() => import("../pages/events/EventsList"));
const PostDetail = lazy(() => import("../pages/posts/PostDetail"));

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
            <Route
              path="/"
              element={<Dashboard />}
              hydrateFallbackElement={<h1>Dash</h1>}
            />
            <Route path="/posts" element={<PostsList />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/users" element={<UsersList />} />
            <Route path="/events" element={<EventsList />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

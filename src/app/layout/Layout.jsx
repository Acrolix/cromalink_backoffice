import { lazy } from "react";
import { Route, Routes } from "react-router";
import Eslogan from "../../assets/eslogan.svg";
import Navbar from "./drawer/Navbar";
import "./Layout.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Dashboard = lazy(() => import("../pages/dashboard/Dashboard"));
const PostsList = lazy(() => import("../pages/posts/PostsList"));
const UsersList = lazy(() => import("../pages/users/UsersList"));
const EventsList = lazy(() => import("../pages/events/EventsList"));
const PostDetail = lazy(() => import("../pages/posts/PostDetail"));

export default function Layout() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <header className="layoutHeader">
        <img
          src={Eslogan}
          height="50"
          alt="Cromalink Slogan"
          className="headerEslogan"
        />
        <div className="headerAvatarContainer">
          <img
            src={user?.avatar}
            height="35"
            alt="Cromalink Logo"
            className="headerAvatar"
          />
        </div>
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
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

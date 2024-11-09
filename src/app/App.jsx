import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import LoadingPage from "../commons/LoadingPage/LoadingPage.jsx";
import "./App.css";

const Login = lazy(() => import("./session/login/Login.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <title>Cromalink Backoffice</title>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />} />
      </Routes>
    </Suspense>
  );
}

export default App;

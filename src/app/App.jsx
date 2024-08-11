import { lazy, Suspense, useContext } from "react";
import "./App.css";
import { AuthContext } from "../context/AuthContext.jsx";
import LoadingPage from "../commons/LoadingPage/LoadingPage.jsx";
const Login = lazy(() => import("./session/login/Login.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));

function App() {
  const { isLogged, loading } = useContext(AuthContext);

  return (
    <Suspense fallback={<LoadingPage />}>
      <title>Cromalink Backoffice</title>
      {loading ? <LoadingPage /> : isLogged ? <Layout /> : <Login />}
    </Suspense>
  );
}

export default App;

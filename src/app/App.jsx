import { lazy, Suspense } from "react";
import "./App.css";

const Login = lazy(() => import("./session/login/Login.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));

function App() {
  const isLoggedIn = false;

  const LoadApp = () => {
    if (isLoggedIn) {
      return <Layout />;
    }
    return <Login />;
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <title>Cromalink Backoffice</title>
      <LoadApp />
    </Suspense>
  );
}

export default App;

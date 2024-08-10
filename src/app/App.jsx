import { createContext, lazy, Suspense, useContext } from "react";
import "./App.css";

const Login = lazy(() => import("./session/login/Login.jsx"));
const Layout = lazy(() => import("./layout/Layout.jsx"));

const AuthContext = createContext({ isLoggedIn: false });

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const LoadApp = () => {
    if (isLoggedIn) {
      return <Layout />;
    }
    return <Login />;
  };

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <Suspense fallback={<div>Loading...</div>}>
        <title>Cromalink Backoffice</title>
        <LoadApp />
      </Suspense>
    </AuthContext.Provider>
  );
}

export default App;

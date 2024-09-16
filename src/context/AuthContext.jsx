import { createContext, useEffect, useState } from "react";

import { loginService, logoutService } from "../services/auth/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isLogged =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken")
        ? true
        : false;

    if (isLogged) {
      setTimeout(() => {
        setLoading(false);
        setIsLogged(true);
      }, 2000);
    } else {
      setIsLogged(false);
      setLoading(false);
    }
  }, [isLogged]);

  const login = async ({ email, password, remember }) => {
    await loginService(email, password, remember)
      .then((data) => {
        const accessToken = data.data.access_token;
        remember
          ? localStorage.setItem("accessToken", accessToken)
          : sessionStorage.setItem("accessToken", accessToken);
        setIsLogged(true);
        return true;
      })
      .catch(() => {
        setIsLogged(false);
      });
  };

  const logout = () => {
    logoutService().finally(() => {
      localStorage.removeItem("accessToken");
      sessionStorage.removeItem("accessToken");
      location.reload();
    });
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

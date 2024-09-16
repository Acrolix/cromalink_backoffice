import { createContext, useEffect, useState } from "react";

import { loginService } from "../services/auth/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      setTimeout(() => {
        setLoading(false);
        setIsLogged(true);
      }, 2000);
    } else {
      setIsLogged(false);
      setLoading(false);
    }
  }, [isLogged]);

  const login = () => {
    loginService().then(() => {
      setIsLogged(true);
      localStorage.setItem("isLogged", true);
    });
  };

  const logout = () => {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
    location.reload();
  };

  return (
    <AuthContext.Provider value={{ isLogged, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

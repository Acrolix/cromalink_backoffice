import { useEffect, useState } from "react";

import { loginService, logoutService } from "../services/auth/authServices";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

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
      }, 1000);
    } else {
      setIsLogged(false);
      setLoading(false);
    }
  }, [isLogged]);

  const login = async ({ email, password, remember }) => {
    try {
      const data = await loginService(email, password, remember);
      if (!data.data.access_token) throw new Error("Invalid credentials");
      const accessToken = data.data.access_token;
      remember
        ? localStorage.setItem("accessToken", accessToken)
        : sessionStorage.setItem("accessToken", accessToken);
      setIsLogged(true);
      return await Promise.resolve(true);
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      setIsLogged(false);
      return await Promise.reject();
    }
  };

  const logout = async () => {
    let res;
    try {
      const response = await logoutService();
      if (response.status === 200) {
        res = Promise.resolve(true);
      }
    } catch (e) {
      res = Promise.reject(e);
    }
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
    location.reload();
    return res;
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, login, logout, loading, setLoading, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

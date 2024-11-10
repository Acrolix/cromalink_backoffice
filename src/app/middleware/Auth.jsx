import { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoadingPage from "../../commons/LoadingPage/LoadingPage";
import {
  getUserService,
  validateTokenService,
} from "../../services/auth/authServices";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, setLoading, setUser } = useContext(AuthContext);
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await validateTokenService();
        await getUserService().then((res) => setUser(res.data));
        if (
          location.pathname === "/login" ||
          location.pathname === "/register"
        ) {
          navigate("/");
        } else {
          setIsValidating(false);
        }
      } catch {
        localStorage.removeItem("accessToken");
        sessionStorage.removeItem("accessToken");
        if (
          location.pathname !== "/login" &&
          location.pathname !== "/register"
        ) {
          navigate("/login");
        } else {
          setIsValidating(false);
        }
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [location, navigate, setLoading, setUser]);

  if (isLoading || isValidating) {
    return <LoadingPage />;
  }

  return children;
};

export default Auth;

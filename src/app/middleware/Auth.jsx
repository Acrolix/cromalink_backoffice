import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingPage from "../../commons/LoadingPage/LoadingPage";
import { AuthContext } from "../../context/AuthContext";
import { avatarGeneric } from "../../helpers/avatarGeneric";
import {
  getUserService,
  validateTokenService,
} from "../../services/auth/authServices";
import { API_URL } from "../../config";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, setLoading, setUser } = useContext(AuthContext);
  const [isValidating, setIsValidating] = useState(true);

  useEffect(() => {
    const validateToken = async () => {
      try {
        await validateTokenService();
        await getUserService().then((res) => {
          const userData = res.data;
          userData.avatar
            ? (userData.avatar = `${API_URL}${userData.avatar}`)
            : (userData.avatar = avatarGeneric(userData));
          setUser(res.data);
        });
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

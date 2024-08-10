import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Slogan from "../../../assets/slogan.svg";
import "./Login.css";
import { AuthContext } from "../../../context/authContext";

export default function Login() {
  const { t } = useTranslation("", { keyPrefix: "login" });
  const { login } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.preventDefault;
    console.log(data);
    login();
  };

  return (
    <div className="loginContainer">
      <h1 className="formTitle">{t("formTitle")}</h1>
      <img src={Slogan} alt="Cromalink slogan" className="loginSlogan" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="loginForm"
        autoComplete="off"
        noValidate
      >
        <div className="fieldContainer">
          <input
            id="email"
            type="email"
            className="fieldInput"
            {...register("email", {
              required: t("error.email.required"),
              pattern: {
                value:
                  /^[A-Za-z0-9._%+-]+@(cromalink\.acrolix\.tech|acrolix\.tech)$/,
                message: t("error.email.invalidDomain"),
              },
            })}
            placeholder={t("emailPlaceholder")}
          />
          <span className={`fieldError ${errors.email ? "hasError" : ""}`}>
            {errors.email?.message && errors.email?.message}
          </span>
        </div>

        <div className="fieldContainer">
          <input
            id="password"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            className="fieldInput"
            {...register("password", {
              required: t("error.password.required"),
            })}
            placeholder={t("passwordPlaceholder")}
          />
          <span className={`fieldError ${errors.password ? "hasError" : ""}`}>
            {errors.password?.message && errors.password?.message}
          </span>
        </div>

        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
      <small className="loginFooter">
        © {new Date().getFullYear()} Acrolix Technologies
      </small>
    </div>
  );
}

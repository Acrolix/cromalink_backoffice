import { API, APIAuth } from "../../api";

async function loginService(email, password, remember_me) {
  return await API({}).post("/auth/login", {
    email,
    password,
    remember_me,
  });
}

async function logoutService() {
  return await APIAuth({}).post("/auth/logout");
}

async function validateTokenService() {
  return await APIAuth({}).get("/auth/validate");
}

async function getUserService() {
  return await APIAuth({}).get("/auth/me");
}

export { loginService, logoutService, validateTokenService, getUserService };

import { API, APIAuth } from "../api";

async function loginService(email, password, remember_me) {
  return await API({}).post("/auth/login", { email, password, remember_me });
}

async function logoutService() {
  return await APIAuth({}).post("/auth/logout");
}

export { loginService, logoutService };

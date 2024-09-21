import { API, APIAuth } from "../../api";
import { CLIENT_ID, SECRET } from "../../config";

async function loginService(email, password, remember_me) {
  return await API({}).post("/oauth/token", {
    username: email,
    password,
    remember_me,
    grant_type: "password",
    client_id: CLIENT_ID,
    client_secret: SECRET,
  });
}

async function logoutService() {
  return await APIAuth({}).post("/auth/logout");
}

export { loginService, logoutService };

import axios from "axios";
import { API_URL } from "../config";

const API = (headers = {}) => {
  return axios.create({
    baseURL: API_URL,
    headers: {
      accept: "application/json",
      ...headers,
    },
  });
};

const APIAuth = (headers = {}) => {
  const token =
    localStorage.getItem("accessToken") ||
    sessionStorage.getItem("accessToken");

  if (!token) return axios.reject("No token provided");
headers.Authorization = `Bearer ${token}`;

  return axios.create({
    baseURL: API_URL,
    headers: {
      accept: "application/json",
      ...headers,
    },
  });
};

export { API, APIAuth };

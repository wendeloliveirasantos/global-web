import axios from "axios";
import { getCookie } from "./cookieControl";
import { API_URL } from "@/constants";

const api = axios.create({
  baseURL: `${API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("@Global:token")}`,
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
    }
    if (error?.response?.status === 500) {
      window.location.href = `/500`;
    }
    return error.response;
  }
);

export default api;

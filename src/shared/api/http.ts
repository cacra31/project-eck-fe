import axios from "axios";
import { ENV } from "../lib/env";

export const http = axios.create({
  baseURL: ENV.API_BASE_URL,
  timeout: 10_000,
  withCredentials: true,
});

http.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject(error)
);

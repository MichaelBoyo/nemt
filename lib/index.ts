import axios from "axios";
export const baseUrl = "https://qwip.onrender.com";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});

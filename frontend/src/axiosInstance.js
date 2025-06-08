import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // only if you need cookies for sessions/auth
});

export default axiosInstance;

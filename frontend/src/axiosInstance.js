import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, // only if you need cookies for sessions/auth
});

export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // BE 주소
  withCredentials: true,
});

export default axiosInstance;

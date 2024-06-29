import axios from "axios";

const axiosBaseURL = axios.create({
  // baseURL: "http://localhost:3306/api",
  baseURL: "https://q-and-a-forum-backend.onrender.com/api",
});

export default axiosBaseURL;

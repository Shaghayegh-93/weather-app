axios.defaults.baseURL = "http://localhost:5000/api";
import axios from "axios";
defaults.baseURL = "https://api.openweathermap.org/data/3.0";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
export default http;

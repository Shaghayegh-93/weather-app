import axios from "axios";
// BASE_URL = "https://api.openweathermap.org/data/3.0";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};
export default http;

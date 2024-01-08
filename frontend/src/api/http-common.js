import axios from "axios";
const API_BASE_URL = "http://localhost:8000";
console.log('API base url: ' + API_BASE_URL);
export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json"
  }
});
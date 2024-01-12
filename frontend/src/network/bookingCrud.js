import axios from "axios";
import { auth } from "../config/firebase";

const baseUrl = `${import.meta.env.BACKEND_BASE_URL || "http://localhost:8000"}/booking`;

export const getByCust = async () => {
  try {
    const response = await axios.get(`${baseUrl}/customer`);
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
}

import axios from "axios";

const baseUrl = `${import.meta.env.BACKEND_BASE_URL || "http://localhost:8000"}/stylist`;

export const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

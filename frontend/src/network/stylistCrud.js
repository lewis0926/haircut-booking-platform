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

export const signUpStylist = async (body) => {
  try {
    const response = await axios.post(`${baseUrl}/signup`, body);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

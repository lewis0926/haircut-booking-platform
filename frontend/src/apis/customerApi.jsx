import axios from "axios";
import {auth} from "../config/firebase";

const baseURL = "http://localhost:8000";

const getUserToken = async () => {
  const user = auth.currentUser;
  const token = user && (await user.getIdToken());
  return token;
};

const createHeader = async () => {
  const token = await getUserToken();
    console.log("CREATE HEADER: " + token);
  const payloadHeader = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  return payloadHeader;
};

export const getCustomer = async (userId) => {
  const header = await createHeader();

  try {
    console.log(`${baseURL}/customer/${userId}`);
    const res = await axios.get(`${baseURL}/customer/${userId}`, header);
    return res.data;
  } catch (e) {
    console.error(e);
  }
};

export const register = async (data) => {
    const headers = {
      "Content-Type": "application/json",
        // "Authorization": `test`,
    }
    try {
      console.log(`${baseURL}/customer/signUp`);
      console.log(`Customer sign up info: ${JSON.stringify(data)}`);
      const res = await axios.post(`${baseURL}/customer/signUp`, data, {
        headers: headers
      });
      return res.data;
    } catch (e) {
      console.error(e);
    }
  };
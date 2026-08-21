import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (mobile: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      mobile,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Login error:", error.response?.data || error.message);
    }
    throw error;
  }
};

export const register = async (mobile: string, password: string) => {
  try {
    const response = await api.post("/auth", {
      mobile,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Register error:", error.response?.data || error.message);
    }
    throw error;
  }
};
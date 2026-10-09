import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_API_URL || "http://localhost:3000";
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

export interface Book {
  id: string | number;
  title: string;
  author?: string;
  price?: number;
  discount?: number;
  image?: string;
  cover?: string;
  description?: string;
}

export const fetchBooks = async (page = 1, limit = 20): Promise<Book[]> => {
  const response = await api.get("/books", { params: { page, limit } });
  const data = response.data;
  return Array.isArray(data) ? data : data?.items || data?.books || [];
};

export const fetchBook = async (id: string): Promise<Book> => {
  const response = await api.get(`/books/${encodeURIComponent(id)}`);
  return response.data;
};

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await api.post("/books/search", { query });
  const data = response.data;
  return Array.isArray(data) ? data : data?.items || data?.books || [];
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

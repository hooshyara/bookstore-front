import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// -----------------------Auth API-----------------------
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

// -----------------------Book API-----------------------
export interface Book {
  id: string | number;
  title: string;
  author?: string;
  price?: number | string;
  imageUrl?: string | null;
  description?: string;
  public_year?: number;
  genre?: unknown;
  discount?: number | string | null;
  discountPrice?: number | string | null;
  discountPercent?: number | string | null;
  rating?: number | string | null;
  ratingCount?: number | string | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Book {
  id: string | number;
  title: string;
  author?: string;
  price?: number | string;
  public_year?: number;
  description?: string;
  imageUrl?: string | null;
  isValid?: boolean;
  genre?: Genre | undefined | null;
  genre_id?: number;
  rating?: number | string | null;
  ratingCount?: number | string | null;
  discount?: number | string | null;
  discountPrice?: number | string | null;
  discountPercent?: number | string | null;
}

const API_BASE =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_API_BASE_URL) ||
  "http://127.0.0.1:3000";

export const buildImageUrl = (raw?: string | null): string | undefined => {
  if (!raw) return undefined;
  if (/^https?:\/\//i.test(raw)) return raw;
  return `${API_BASE}/${raw.replace(/^\/+/, "")}`;
};

export const fetchBooks = async (page = 1, limit = 200): Promise<Book[]> => {
  const response = await api.get("/books", { params: { page, limit } });
  const data = response.data;

  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.data)) return data.data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.books)) return data.books;
  if (Array.isArray(data?.data?.items)) return data.data.items;

  console.warn("Unexpected /books response shape:", data);
  return [];
};

export const fetchBook = async (id: string | number): Promise<Book> => {
  const response = await api.get(`/books/${encodeURIComponent(String(id))}`);
  const payload = response.data;
  return (payload?.data ?? payload) as Book;
};

export const searchBooks = async (query: string): Promise<Book[]> => {
  const response = await api.post("/books/search", { query });
  const data = response.data;
  return Array.isArray(data) ? data : data?.items || data?.books || [];
};

// -----------------------Contact API-----------------------
export const sendContactMessage = async (name: string, mobile: string, description: string) => {
  try {
    const response = await api.post("/contactus", { name, mobile, description });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Contact error:", error.response?.data || error.message);
    }
    throw error;
  }
};

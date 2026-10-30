import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// -----------------------Auth Token Interceptor-----------------------
const readToken = (): string | null => {
  const direct =
    localStorage.getItem("authToken") ||
    localStorage.getItem("token") ||
    localStorage.getItem("access_token") ||
    localStorage.getItem("accessToken") ||
    localStorage.getItem("jwt");
  if (direct) return direct;

  const userJson = localStorage.getItem("user");
  if (userJson) {
    try {
      const u = JSON.parse(userJson);
      return u?.token ?? u?.access_token ?? u?.accessToken ?? null;
    } catch {
      return null;
    }
  }
  return null;
};

api.interceptors.request.use((config) => {
  const token = readToken();
  if (token) {
    config.headers = config.headers ?? {};
    (config.headers as any).Authorization = `Bearer ${token}`;
  }
  return config;
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
export const sendContactMessage = async (
  name: string,
  mobile: string,
  description: string,
) => {
  try {
    const response = await api.post("/contactus", {
      name,
      mobile,
      description,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Contact error:", error.response?.data || error.message);
    }
    throw error;
  }
};

// -----------------------Cart API-----------------------
export interface AddItemDto {
  bookId: number;
  quantity: number;
}

export interface CartItem {
  id: number;
  quantity: number;
  book?: Book | null;
  bookId?: number;
}

export interface Cart {
  id?: number;
  userId?: number;
  items: CartItem[];
}

export const addToCart = async (dto: AddItemDto) => {
  const res = await api.post("/carts", dto);
  return res.data;
};

export const getCart = async (userId: string | number): Promise<Cart> => {
  const res = await api.get(`/carts/${encodeURIComponent(String(userId))}`);
  const payload = res.data?.data ?? res.data;

  const items: CartItem[] =
    payload?.items ??
    payload?.cart?.items ??
    payload?.data?.items ??
    (Array.isArray(payload) ? payload : []);

  return {
    id: payload?.id ?? payload?.cart?.id,
    userId: payload?.userId ?? payload?.cart?.userId,
    items: Array.isArray(items) ? items : [],
  };
};

export const removeCartItem = async (itemId: number | string) => {
  const res = await api.delete(
    `/carts/item/${encodeURIComponent(String(itemId))}`,
  );
  return res.data;
};

export const clearCart = async () => {
  const res = await api.delete(`/carts/item`);
  return res.data;
};

const readUserIdFromStorage = (): string | null => {
  for (const key of ["userId", "user_id"]) {
    const v = localStorage.getItem(key);
    if (v) return v;
  }
  const json = localStorage.getItem("user");
  if (json) {
    try {
      const u = JSON.parse(json);
      if (u?.id != null) return String(u.id);
      if (u?.userId != null) return String(u.userId);
    } catch {
      // ignore
    }
  }
  return null;
};

export const getCurrentUserId = (): string | null => readUserIdFromStorage();
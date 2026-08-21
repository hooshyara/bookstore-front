/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef, useEffect } from "react";
import styles from "./AuthModal.module.css";
import { login, register } from "../../Utils/api";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (token: string) => void; // اضافه کردن callback
}

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setError("");
      setLoading(false);
    } else {
      document.body.style.overflow = "unset";
      setMobile("");
      setPassword("");
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    try {
      if (isLogin) {
        const response = await login(mobile, password);
        const token = response.accessToken?.accessToken || response.token;
        if (token) {
          localStorage.setItem("authToken", token);
          
          const user = response.data?.user || { 
            name: response.data?.name || "کاربر",
            mobile: mobile 
          };
          
          onLoginSuccess(token, user);
          onClose();
        } else {
          throw new Error("کاربر یافت نشد");
        }
      } else {
        const response = await register(mobile, password);
        setIsLogin(true);
        setPassword("");
        setMobile("");
        setError("ثبت‌نام با موفقیت انجام شد. لطفاً وارد شوید.");
      }
    } catch (err: unknown) {
      setError((err as Error).message || "خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay}>
      <div ref={modalRef} className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${isLogin ? styles.activeTab : ""}`}
            onClick={() => {
              setIsLogin(true);
              setError("");
            }}
          >
            ورود
          </button>
          <button
            className={`${styles.tab} ${!isLogin ? styles.activeTab : ""}`}
            onClick={() => {
              setIsLogin(false);
              setError("");
            }}
          >
            ثبت‌نام
          </button>
        </div>

        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className={styles.formGroup}>
                <label htmlFor="fullName">نام و نام خانوادگی</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="نام و نام خانوادگی"
                  required
                />
              </div>
            )}

            <div className={styles.formGroup}>
              <label htmlFor="mobile">شماره موبایل</label>
              <input
                type="tel"
                id="mobile"
                placeholder="09123456789"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
                minLength={11}
                maxLength={11}
                disabled={loading}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                required
                minLength={3}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {error && <div className={styles.errorMessage}>{error}</div>}

            {isLogin && (
              <div className={styles.forgotPassword}>
                <a href="/forgot-password">رمز عبور را فراموش کرده‌اید؟</a>
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? (
                <span className={styles.spinner}>در حال پردازش...</span>
              ) : isLogin ? (
                "ورود"
              ) : (
                "ثبت‌نام"
              )}
            </button>

            <div className={styles.divider}>
              <span>یا</span>
            </div>

            <button
              type="button"
              className={styles.googleBtn}
              disabled={loading}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                />
                <path
                  fill="#FF3D00"
                  d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                />
                <path
                  fill="#4CAF50"
                  d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                />
                <path
                  fill="#1976D2"
                  d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                />
              </svg>
              ادامه با گوگل
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

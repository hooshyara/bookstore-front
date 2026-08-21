import React, { useState, useRef, useEffect } from "react";
import styles from "./AuthModal.module.css";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);
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
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isLogin ? "ورود" : "ثبت‌نام");
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
            onClick={() => setIsLogin(true)}
          >
            ورود
          </button>
          <button
            className={`${styles.tab} ${!isLogin ? styles.activeTab : ""}`}
            onClick={() => setIsLogin(false)}
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
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                id="password"
                placeholder="********"
                required
                minLength={6}
              />
            </div>

            {isLogin && (
              <div className={styles.forgotPassword}>
                <a href="/forgot-password">رمز عبور را فراموش کرده‌اید؟</a>
              </div>
            )}

            <button type="submit" className={styles.submitBtn}>
              {isLogin ? "ورود" : "ثبت‌نام"}
            </button>

            <div className={styles.divider}>
              <span>یا</span>
            </div>

            <button type="button" className={styles.googleBtn}>
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

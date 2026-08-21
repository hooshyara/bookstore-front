/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import styles from "./nav.module.css";
import AuthModal from "../auth/AuthModal";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<{
    name?: string;
    mobile?: string;
  } | null>(null);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // بررسی توکن در localStorage هنگام بارگذاری
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
      const user = localStorage.getItem("userData");
      if (user) {
        try {
          setUserData(JSON.parse(user));
        } catch (e) {
          console.error("Error parsing user data:", e);
        }
      }
    }
  }, []);

  // مدیریت کلیک خارج از منوی پروفایل
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showProfileDropdown &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowProfileDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showProfileDropdown]);

  const handleLoginSuccess = (
    token: string,
    user?: { name?: string; mobile?: string },
  ) => {
    setIsLoggedIn(true);
    if (user) {
      setUserData(user);
      localStorage.setItem("userData", JSON.stringify(user));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setIsLoggedIn(false);
    setUserData(null);
    setShowProfileDropdown(false);
    // می‌توانید به صفحه اصلی ریدایرکت کنید
    // window.location.href = "/";
  };

  const toggleModal = () => {
    setIsAuthModalOpen(!isAuthModalOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // کلیک خارج از منوی همبرگر
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // جلوگیری از اسکرول در حالت باز بودن منو
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navContainer}>
      <div className="container d-flex align-items-center justify-content-between py-3">
        <div className="d-flex align-items-center gap-3">
          {isLoggedIn ? (
            // دکمه پروفایل برای کاربر لاگین شده
            <div className={styles.profileContainer} ref={profileRef}>
              <button
                className={styles.profileBtn}
                onClick={toggleProfileDropdown}
                aria-label="پروفایل کاربر"
              >
                <div className={styles.avatar}>
                  {userData?.name ? (
                    <span>{userData.name.charAt(0).toUpperCase()}</span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                      />
                    </svg>
                  )}
                </div>
                <span className={styles.profileName}>
                  {userData?.name || "کاربر"}
                </span>
                <svg
                  className={`${styles.dropdownIcon} ${showProfileDropdown ? styles.rotated : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m6 9l6 6l6-6"
                  />
                </svg>
              </button>

              {/* منوی کشویی پروفایل */}
              {showProfileDropdown && (
                <div className={styles.profileDropdown}>
                  <div className={styles.dropdownHeader}>
                    <div className={styles.dropdownAvatar}>
                      {userData?.name ? (
                        <span>{userData.name.charAt(0).toUpperCase()}</span>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                          />
                        </svg>
                      )}
                    </div>
                    <div className={styles.dropdownUserInfo}>
                      <div className={styles.dropdownUserName}>
                        {userData?.name || "کاربر"}
                      </div>
                      <div className={styles.dropdownUserMobile}>
                        {userData?.mobile || ""}
                      </div>
                    </div>
                  </div>

                  <div className={styles.dropdownDivider}></div>

                  <button
                    className={styles.dropdownItem}
                    onClick={() => {
                      setShowProfileDropdown(false);
                      // رفتن به صفحه پروفایل
                      // window.location.href = "/profile";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                      />
                    </svg>
                    پروفایل
                  </button>

                  <button
                    className={styles.dropdownItem}
                    onClick={() => {
                      setShowProfileDropdown(false);
                      // رفتن به صفحه سفارشات
                      // window.location.href = "/orders";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                      />
                    </svg>
                    سفارشات
                  </button>

                  <button
                    className={styles.dropdownItem}
                    onClick={() => {
                      setShowProfileDropdown(false);
                      // رفتن به صفحه علاقه‌مندی‌ها
                      // window.location.href = "/wishlist";
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                      />
                    </svg>
                    علاقه‌مندی‌ها
                  </button>

                  <div className={styles.dropdownDivider}></div>

                  <button
                    className={`${styles.dropdownItem} ${styles.dropdownLogout}`}
                    onClick={handleLogout}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
                      />
                    </svg>
                    خروج
                  </button>
                </div>
              )}
            </div>
          ) : (
            // دکمه ورود/ثبت‌نام برای کاربر مهمان
            <button
              className={`${styles.authBtn} d-none d-md-flex`}
              onClick={toggleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 24 24"
                className={styles.icon}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
                />
              </svg>
              <span>ورود / ثبت‌نام</span>
            </button>
          )}

          <button className={styles.cartBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 256 256"
            >
              <path
                fill="#7f699b"
                d="M96 216a12 12 0 1 1-12-12a12 12 0 0 1 12 12m96-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m14.34-111.36l-14 62.91A20 20 0 0 1 172.76 172H88.22a20 20 0 0 1-19.53-15.6l-26-116.48l-12.33-3.08a4 4 0 1 1 1.94-7.76l14.1 3.53a4 4 0 0 1 3.06 3.06l26 116.48A12 12 0 0 0 88.22 164h84.54a12 12 0 0 0 11.83-9.37l14-62.91a4 4 0 1 1 7.75 1.72M212 80a4 4 0 0 1-4 4H78.41a4 4 0 0 1 0-8H208a4 4 0 0 1 4 4"
              />
            </svg>
          </button>
        </div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="جستجوی کتاب، نویسنده، ناشر..."
            className={styles.searchInput}
          />
          <svg
            className={styles.searchIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
            />
          </svg>
        </div>

        <div className={styles.logo}>
          <span className={styles.logoText}>گُنج</span>
          <svg
            className={styles.logoIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#7f699b"
              d="M12 3v13.5c1.42-.4 2.85-.5 4.3-.5c1.45 0 2.88.1 4.3.5V3c-1.42-.4-2.85-.5-4.3-.5c-1.45 0-2.88.1-4.3.5m0 0V3c-1.42-.4-2.85-.5-4.3-.5C6.25 2.5 4.82 2.6 3.4 3v13.5c1.42-.4 2.85-.5 4.3-.5c1.45 0 2.88.1 4.3.5m0 2.5c2 0 4 1 6 2v13c-2-1-4-2-6-2s-4 1-6 2V7.5c2-1 4-2 6-2"
            />
          </svg>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          ref={hamburgerRef}
          className={`${styles.hamburgerBtn} d-md-none`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ""}`}
          ></div>
          <div
            className={`${styles.hamburgerLine} ${isMenuOpen ? styles.active : ""}`}
          ></div>
        </button>
      </div>

      {/* Menu Bar - Desktop */}
      <div className={`${styles.menuBar} d-none d-md-block`}>
        <div className="container">
          <ul className={styles.menuList}>
            <li>
              <a href="/">صفحه اصلی</a>
            </li>
            <li>
              <a href="/books">محصولات</a>
            </li>
            <li>
              <a href="/about">درباره ما</a>
            </li>
            <li>
              <a href="/contact">ارتباط با ما</a>
            </li>
            <li>
              <a href="/rules">قوانین</a>
            </li>
            <li>
              <a href="/faq">سوالات متداول</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu - Overlay */}
      <div
        ref={menuRef}
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        {/* Close button inside menu */}
        <button
          className={styles.closeBtn}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>

        <div className={styles.mobileMenuContent}>
          <ul className={styles.mobileMenuList}>
            <li>
              <a href="/" onClick={closeMenu}>
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="/books" onClick={closeMenu}>
                محصولات
              </a>
            </li>
            <li>
              <a href="/about" onClick={closeMenu}>
                درباره ما
              </a>
            </li>
            <li>
              <a href="/contact" onClick={closeMenu}>
                ارتباط با ما
              </a>
            </li>
            <li>
              <a href="/rules" onClick={closeMenu}>
                قوانین
              </a>
            </li>
            <li>
              <a href="/faq" onClick={closeMenu}>
                سوالات متداول
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay backdrop */}
      {isMenuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </nav>
  );
}

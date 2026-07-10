/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import styles from "./nav.module.css";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
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

  // Prevent body scroll when menu is open
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
          <button className={`${styles.authBtn} d-none d-md-flex`}>
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
    </nav>
  );
}

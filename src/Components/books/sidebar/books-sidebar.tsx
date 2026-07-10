import React, { useState } from "react";
import style from "./book-sidebar.module.css";

const CATEGORIES = [
  "داستان و رمان",
  "داستان و رمان خارجی",
  "درام",
  "فانتزی",
  "داستان کوتاه",
  "جنایی و پلیسی",
  "عاشقانه",
  "معمایی",
  "تاریخی",
  "طنز",
];

const CONTENT_TYPES = ["کتاب متنی", "کتاب صوتی", "مجله"];

const AUTHORS = [
  "John Lewis",
  "Anna Sewell",
  "Anna Katherin Green",
  "Sydney Waterlow",
];

const PUBLISHERS = [
  "انتشارات ۳۶۰ درجه",
  "انتشارات جنگل",
  "نشر چشمه",
  "دنیای اقتصاد",
  "انتشارات ایران",
  "نشر افق",
];

interface FilterSearchGroupProps {
  title: string;
  items: string[];
}

function FilterSearchGroup({ title, items }: FilterSearchGroupProps) {
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="mb-3">
      <h6 className="fw-bold mb-2" style={{ color: "#2D3748" }}>
        {title}
      </h6>
      <div className="input-group input-group-sm mb-2">
        <span className="input-group-text bg-white border-end-0">
          <i className="bi bi-search" style={{ color: "#9CA3AF" }} />
        </span>
        <input
          type="text"
          className="form-control border-start-0"
          placeholder="جستجو"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ borderRadius: "0 8px 8px 0" }}
        />
      </div>
      <ul className="list-unstyled small">
        {filtered.map((item) => (
          <li key={item} className="form-check mb-1">
            <input
              className="form-check-input"
              type="checkbox"
              id={item}
              style={{ borderColor: "#7f699b" }}
            />
            <label className="form-check-label" htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SideBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className={`${style.mobileFilterBtn} d-lg-none`}>
        <button
          className="btn w-100 py-2"
          onClick={toggleMobileSidebar}
          style={{
            backgroundColor: "#7f699b",
            color: "white",
            borderRadius: "12px",
            border: "none",
            fontWeight: "500",
          }}
        >
          <i className="bi bi-funnel me-2"></i>
          فیلترها
        </button>
      </div>

      {/* Sidebar */}
      <div
        dir="rtl"
        className={`${style.sidebar} ${isMobileOpen ? style.mobileOpen : ""}`}
      >
        {/* Close button for mobile */}
        <button
          className={`${style.closeBtn} d-lg-none`}
          onClick={toggleMobileSidebar}
        >
          ✕
        </button>

        <div className="mb-4">
          <h6
            className="fw-bold mb-3"
            style={{ color: "#2D3748", fontSize: "1rem" }}
          >
            همه‌ی دسته‌های موضوعی
          </h6>
          <ul className="list-unstyled small">
            {CATEGORIES.map((cat) => (
              <li key={cat} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={cat}
                  style={{ borderColor: "#7f699b" }}
                />
                <label className="form-check-label" htmlFor={cat}>
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-3" style={{ borderColor: "#E8E0ED" }} />

        <div className="mb-4">
          <h6
            className="fw-bold mb-3"
            style={{ color: "#2D3748", fontSize: "1rem" }}
          >
            نوع محتوا
          </h6>
          <ul className="list-unstyled small">
            {CONTENT_TYPES.map((type) => (
              <li key={type} className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={type}
                  style={{ borderColor: "#7f699b" }}
                />
                <label className="form-check-label" htmlFor={type}>
                  {type}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-3" style={{ borderColor: "#E8E0ED" }} />

        <FilterSearchGroup title="نویسنده، مترجم یا راوی" items={AUTHORS} />

        <hr className="my-3" style={{ borderColor: "#E8E0ED" }} />

        <FilterSearchGroup title="ناشر" items={PUBLISHERS} />

        {/* Apply filters button for mobile */}
        <div className="d-lg-none mt-4">
          <button
            className="btn w-100 py-2"
            onClick={toggleMobileSidebar}
            style={{
              backgroundColor: "#7f699b",
              color: "white",
              borderRadius: "12px",
              border: "none",
              fontWeight: "500",
            }}
          >
            اعمال فیلترها
          </button>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div className={style.overlay} onClick={toggleMobileSidebar}></div>
      )}
    </>
  );
}

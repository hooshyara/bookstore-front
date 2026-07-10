import React from "react";

const NotFound = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100 position-relative"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      {/* Purple bottom bar */}
      <div
        className="position-absolute"
        style={{
          bottom: 0,
          left: 0,
          right: 0,
          height: "6px",
          backgroundColor: "#4A1A5E",
        }}
      ></div>

      {/* Main Content */}
      <div className="container text-center px-4">
        {/* 404 SVG Illustration */}
        <div className="mb-4 d-flex justify-content-center">
         <img src="src/assets/404/404.svg" alt="" />
        </div>

        {/* Main Title */}
        <h1
          className="display-6 fw-bold mb-3"
          style={{ color: "#2D3748", fontSize: "1.8rem" }}
        >
          متاسفانه صفحه مورد نظر شما پیدا نشد!
        </h1>

        {/* Subtitle with Home link */}
        <p className="text-secondary fs-5">
          برای بازگشت به صفحه اصلی{" "}
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "#007BFF", fontWeight: "500" }}
          >
            خانه
          </a>{" "}
          کلیک کنید
        </p>
      </div>
    </div>
  );
};

export default NotFound;

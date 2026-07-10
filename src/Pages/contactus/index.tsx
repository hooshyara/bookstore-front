import React from "react";

const ContactUs: React.FC = () => {
  return (
    <div
      dir="rtl"
      className="bg-light"
      style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}
    >
      <div className="container py-5">
        {/* Breadcrumb */}
        

        {/* Page Title */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h1 className="display-5 fw-bold" style={{ color: "#2D3748" }}>
              ارتباط با ما
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="row g-4">
          {/* Contact Form */}
          <div className="col-12 col-lg-7">
            <div
              className="card shadow-sm rounded-3 p-4"
              style={{ borderRadius: "16px" }}
            >
              <div className="card-body">
                <h5 className="fw-semibold mb-4" style={{ color: "#2D3748" }}>
                  سوالات، نظرات وانتقادات خودتون رو با ما در میون بزارید
                </h5>

                <form>
                  <div className="row g-3 mb-3">
                    <div className="col-12 col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="علی لایق"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="0930 000 000"
                        style={{ borderRadius: "8px" }}
                      />
                    </div>
                  </div>

                  <div className="mb-2">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="سلام ، من توی پرداخت مشکل دارم لطفا راهنماییم کنید :("
                      style={{ borderRadius: "8px", resize: "none" }}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted small">51/500</span>
                  </div>

                  <div className="d-flex justify-content-start">
                    <button
                      type="submit"
                      className="btn px-5 py-2 fw-semibold"
                      style={{
                        backgroundColor: "#744F82",
                        color: "white",
                        borderRadius: "8px",
                        border: "none",
                      }}
                    >
                      ارسال پیام
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-lg-5">
            <div
              className="card shadow-sm rounded-3"
              style={{ borderRadius: "16px" }}
            >
              <div className="card-body p-4">
                {/* FAQ Section */}
                <div className="pb-4">
                  <p className="text-muted mb-2">
                    اگه سوالی دارید شاید بتونید پاسخ آن را در پرسش های متداول
                    بیابید.
                  </p>
                  <a
                    href="#"
                    className="text-decoration-none fw-semibold d-inline-flex align-items-center"
                    style={{ color: "#744F82" }}
                  >
                    پرسش های متداول
                    <i className="bi bi-chevron-left ms-1"></i>
                  </a>
                </div>

                {/* Divider */}
                <hr className="my-3" style={{ borderColor: "#EDEDED" }} />

                {/* Phone Section */}
                <div className="d-flex align-items-start py-2">
                  <i
                    className="bi bi-telephone fs-4 mt-1"
                    style={{ color: "#744F82" }}
                  ></i>
                  <div className="me-3">
                    <div className="fw-semibold" style={{ color: "#2D3748" }}>
                      تلفن ما:
                    </div>
                    <div className="text-muted">2929 000 021</div>
                    <div className="text-muted">0999 000 000</div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-3" style={{ borderColor: "#EDEDED" }} />

                {/* Email Section */}
                <div className="d-flex align-items-start py-2">
                  <i
                    className="bi bi-envelope fs-4 mt-1"
                    style={{ color: "#744F82" }}
                  ></i>
                  <div className="me-3">
                    <div className="fw-semibold" style={{ color: "#2D3748" }}>
                      ایمیل ما:
                    </div>
                    <div className="text-muted">Info@konjbooks.com</div>
                  </div>
                </div>

                {/* Divider */}
                <hr className="my-3" style={{ borderColor: "#EDEDED" }} />

                {/* Address Section */}
                <div className="d-flex align-items-start py-2">
                  <i
                    className="bi bi-geo-alt fs-4 mt-1"
                    style={{ color: "#744F82" }}
                  ></i>
                  <div className="me-3">
                    <div className="fw-semibold" style={{ color: "#2D3748" }}>
                      دفتر ما:
                    </div>
                    <div className="text-muted">
                      تهران ، اختیاریه ، کوچه شفق پلاک 14
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

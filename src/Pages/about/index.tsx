import React from "react";

const About: React.FC = () => {
  const stats = [
    { number: "۵۰+ هزار", label: "جلد — کتاب متنی" },
    { number: "۱۰+ هزار", label: "نسخه — کتاب صوتی" },
    { number: "۵۰۰+", label: "ناشر همکار" },
    { number: "۲۰+ هزار", label: "نویسنده و مترجم" },
    { number: "۱۰۰+ هزار", label: "کاربر فعال روزانه" },
    { number: "۱۰۰۰+", label: "دانلود روزانه" },
  ];

  const teamMembers = [
    {
      name: "محمد راستگو",
      role: "مدیر عامل و بنیان‌گذار",
      image: "1.png",
      isMain: true,
    },
    {
      name: "مریم محمدی",
      role: "مدیر محتوا",
      image: "2.png",
      isMain: false,
    },
    {
      name: "نیلوفر اکبری",
      role: "طراح رابط کاربری",
      image: "3.png",
      isMain: false,
    },
    {
      name: "علی امینی",
      role: "توسعه‌دهنده ارشد",
      image: "4.png",
      isMain: false,
    },
    {
      name: "سامان صادقی",
      role: "بازاریابی و فروش",
      image: "5.png",
      isMain: false,
    },
  ];

  const publishers = [
    { name: "نشر قطره", fullName: "نشر قطره" },
    { name: "نشر نگاه", fullName: "نشر نگاه" },
    { name: "نشر چشمه", fullName: "نشر چشمه" },
    { name: "نشر نی", fullName: "نشر نی" },
    { name: "گویا", fullName: "گویا" },
  ];

  return (
    <div dir="rtl" className="bg-white">
      {/* Header */}
      <div className="container py-5 my-4">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="display-5 fw-bold text-dark mb-3">درباره ما</h1>
            <div className="d-flex justify-content-center">
              <span
                className="border-bottom border-3"
                style={{ borderColor: "#7f699b", width: "60px" }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1 - Intro with Image */}
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-circle position-absolute"
                style={{
                  backgroundColor: "#f3e8ff",
                  width: "90%",
                  height: "90%",
                  top: "5%",
                  right: "5%",
                  zIndex: 0,
                }}
              ></div>
              <img
                src="src/assets/about/6.png"
                alt="لپ‌تاپ"
                className="img-fluid position-relative z-1"
                style={{ position: "relative", zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <h2 className="display-6 fw-bold text-dark mb-3">
              دنیای الکترونیک‌تان را کتابخانه کردیم
            </h2>
            <p className="text-secondary fs-5 lh-lg">
              با اپلیکیشن ما، به هزاران کتاب متنی و صوتی، مجلات و روزنامه‌های
              روز دنیا دسترسی داشته باشید. مطالعه را به تجربه‌ای لذت‌بخش و
              هوشمند تبدیل کرده‌ایم.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Stats */}
      <div className="container py-5 my-4">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-bold text-dark mb-3">
              بخشی از افتخارات ما
            </h2>
            <div className="d-flex justify-content-center">
              <span
                className="border-bottom border-3"
                style={{ borderColor: "#7f699b", width: "60px" }}
              ></span>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-3">
                <div className="card-body text-center p-2">
                  <div
                    className="display-6 fw-bold"
                    style={{ color: "#7f699b" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-secondary small">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 - Second Intro with Image */}
      <div className="container py-4">
        <div className="row align-items-center g-4">
          <div className="col-12 col-md-6">
            <h2 className="display-6 fw-bold text-dark mb-3">هستیم تا...</h2>
            <p className="text-secondary fs-5 lh-lg">
              تجربه مطالعه دیجیتال را برای شما متحول کنیم. با امکانات پیشرفته‌ای
              مثل تغییر فونت، حالت شب، جستجوی هوشمند و یادداشت‌نویسی، مطالعه را
              لذت‌بخش‌تر از همیشه کرده‌ایم.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="position-relative d-inline-block">
              <div
                className="rounded-circle position-absolute"
                style={{
                  backgroundColor: "#f3e8ff",
                  width: "90%",
                  height: "90%",
                  top: "5%",
                  right: "5%",
                  zIndex: 0,
                }}
              ></div>
              <img
                src="src/assets/about/7.png"
                alt="موبایل"
                className="img-fluid position-relative z-1"
                style={{ position: "relative", zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Section 4 - Team */}
      <div className="container py-5 my-4">
        <div className="row justify-content-center mb-5">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-bold text-dark mb-3">تیم ما</h2>
            <div className="d-flex justify-content-center">
              <span
                className="border-bottom border-3"
                style={{ borderColor: "#7f699b", width: "60px" }}
              ></span>
            </div>
          </div>
        </div>

        {/* Main Team Member */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card border-0 shadow-sm rounded-4 p-4 text-center">
              <img
                src={`src/assets/about/${teamMembers[0].image}`}
                alt={teamMembers[0].name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <h4 className="fw-bold text-dark">{teamMembers[0].name}</h4>
              <p className="text-secondary">{teamMembers[0].role}</p>
              <div className="d-flex justify-content-center gap-3 mt-2">
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#7f699b" }}
                >
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#7f699b" }}
                >
                  <i className="bi bi-envelope-fill fs-5"></i>
                </a>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#7f699b" }}
                >
                  <i className="bi bi-send-fill fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Team Members */}
        <div className="row g-4">
          {teamMembers.slice(1).map((member, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="card border-0 shadow-sm rounded-4 p-3 text-center h-100">
                <img
                  src={`src/assets/about/${member.image}`}
                  alt={member.name}
                  className="rounded-circle mx-auto mb-2"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
                <h6 className="fw-bold text-dark mb-1">{member.name}</h6>
                <p className="text-secondary small mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 - Publishers */}
      <div className="container py-4">
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h2 className="display-6 fw-bold text-dark mb-3">
              برخی از ناشران همکار با ما
            </h2>
            <div className="d-flex justify-content-center">
              <span
                className="border-bottom border-3"
                style={{ borderColor: "#7f699b", width: "60px" }}
              ></span>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          {publishers.map((publisher, index) => (
            <div key={index} className="col-6 col-md-2 text-center">
              <div
                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 shadow-sm"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: [
                    "#f3e8ff",
                    "#e8d5f5",
                    "#dcc4f0",
                    "#f0e6ff",
                    "#e6d9f5",
                  ][index % 5],
                }}
              >
                <span
                  className="fw-bold"
                  style={{ color: "#7f699b", fontSize: "0.9rem" }}
                >
                  {publisher.name}
                </span>
              </div>
              <p className="text-secondary small mb-0">{publisher.fullName}</p>
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-12">
            <hr className="border-1" style={{ borderColor: "#e8e0ed" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

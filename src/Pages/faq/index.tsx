import React, { useState } from "react";
import styles from "./faq.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer?: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "سفارش نهایی نشده چه اقدامی انجام بدم؟",
      answer:
        "در صورتی که سفارش شما نهایی نشده است، می‌توانید با مراجعه به بخش سبد خرید، فرآیند ثبت سفارش را تکمیل کنید. در صورت بروز هرگونه مشکل، با پشتیبانی تماس بگیرید.",
    },
    {
      id: 2,
      question: "میتوان از خارج از ایران پرداخت ارزی داشت؟",
      answer:
        "بله، کاربران خارج از ایران می‌توانند از طریق درگاه‌های پرداخت بین‌المللی و با استفاده از کارت‌های اعتباری معتبر، پرداخت ارزی انجام دهند.",
    },
    {
      id: 3,
      question: "میتوانم کتابم را پرینت بگیرم یا دانلود کنم؟",
      answer:
        "خیر، برای رعایت حقوق ناشران و مؤلفان، کتاب‌های عرضه‌شده در کنج را فقط می‌توان در کنج مطالعه کرد و ذخیره‌کردن متن یا چاپ‌کردن متن به هر شکلی ناممکن و ممنوع است.",
    },
    {
      id: 4,
      question: "موقع پرداخت در صفحه بانک خطا نمایش داده میشود",
      answer:
        "در صورت مشاهده خطا در صفحه بانک، ابتدا اتصال اینترنت خود را بررسی کنید. در صورت ادامه مشکل، با پشتیبانی بانک مربوطه تماس بگیرید یا از روش پرداخت دیگری استفاده کنید.",
    },
    {
      id: 5,
      question: "میتوان نسخه چاپی کتاب را از کنج تهیه کرد؟",
      answer:
        "در حال حاضر کنج فقط به ارائه نسخه‌های دیجیتال کتاب‌ها می‌پردازد و امکان تهیه نسخه چاپی از طریق ما وجود ندارد.",
    },
    {
      id: 6,
      question: "همکاری با کنج به چه صورت است؟",
      answer:
        "برای همکاری با کنج، می‌توانید رزومه خود را به آدرس ایمیل ما ارسال کنید. ما در حوزه‌های مختلف از جمله تولید محتوا، برنامه‌نویسی، طراحی و بازاریابی با همکاران جدید همکاری می‌کنیم.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className={`${styles.faq}  bg-light`}
      style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}
    >
      <div className="container py-5">
       

        {/* Page Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h1 className="display-5 fw-bold" style={{ color: "#2D3748" }}>
              سوالات متداول
            </h1>
          </div>
        </div>

        {/* Search Section */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-8 text-center">
            <h5 className="fw-bold mb-2" style={{ color: "#2D3748" }}>
              موضوع پرسش شما چیست؟
            </h5>
            <p className="text-muted small mb-4">
              لطفا جستجو کنید یا از دسته بندی های زیر انتخاب کنید
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8">
            <div className="position-relative">
              <input
                type="text"
                className="form-control form-control-lg rounded-3"
                placeholder="جستجوی موضوع"
                style={{
                  paddingRight: "1rem",
                  paddingLeft: "3rem",
                  backgroundColor: "white",
                  borderColor: "#E2E8F0",
                  boxShadow: "none",
                }}
              />
              <i
                className="bi bi-search position-absolute"
                style={{
                  left: "1rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#9CA3AF",
                  fontSize: "1.2rem",
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            {faqData.map((item, index) => (
              <div
                key={item.id}
                className="card shadow-sm rounded-3 border-0 mb-3 overflow-hidden"
                style={{ borderRadius: "12px" }}
              >
                {/* Question Header - Clickable */}
                <div
                  className="card-body p-3 p-md-4"
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer", userSelect: "none" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-semibold" style={{ color: "#2D3748" }}>
                      {item.question}
                    </span>
                    <i
                      className={`bi bi-chevron-${activeIndex === index ? "up" : "down"}`}
                      style={{
                        color: "#744F82",
                        fontSize: "1.3rem",
                        transition: "transform 0.3s ease",
                        transform:
                          activeIndex === index
                            ? "rotate(0deg)"
                            : "rotate(0deg)",
                      }}
                    ></i>
                  </div>
                </div>

                {/* Answer Section - Toggle with animation */}
                {activeIndex === index && item.answer && (
                  <div
                    className="px-3 px-md-4 pb-3 pb-md-4"
                    style={{
                      animation: "fadeIn 0.3s ease-in-out",
                    }}
                  >
                    <hr
                      className="mt-0 mb-3"
                      style={{ borderColor: "#EDEDED" }}
                    />
                    <p
                      className="text-secondary lh-lg mb-0"
                      style={{ fontSize: "0.95rem" }}
                    >
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Simple fade-in animation style */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default FAQ;

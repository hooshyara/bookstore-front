import React from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface LinkItem {
  label: string;
  href: string;
}

interface DownloadBtn {
  label: string;
  from: string;
  href: string;
  icon: React.ReactNode;
}

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const brandLinks: LinkItem[] = [
  { label: "تماس با ما", href: "#" },
  { label: "پشتیبانی و سوالات متداول", href: "#" },
  { label: "درباره‌ی ما", href: "#" },
  { label: "حریم خصوصی", href: "#" },
  { label: "قوانین استفاده", href: "#" },
];

const categoryLinks: LinkItem[] = [
  { label: "کتاب رایگان", href: "#" },
  { label: "کتاب صوتی", href: "#" },
  { label: "کتاب کودک", href: "#" },
  { label: "کتاب تاریخ", href: "#" },
  { label: "کتاب شعر", href: "#" },
  { label: "کتاب داستان", href: "#" },
  { label: "کتاب فلسفه", href: "#" },
  { label: "رمان عاشقانه", href: "#" },
  { label: "تاریخ ایران", href: "#" },
];

const bookLinks: LinkItem[] = [
  { label: "وقتی نیچه گریست", href: "#" },
  { label: "مابت عشق", href: "#" },
  { label: "اثر مرکب", href: "#" },
  { label: "نیمه تاریک وجود", href: "#" },
  { label: "صد سال تنهایی", href: "#" },
  { label: "پیشوری", href: "#" },
  { label: "صد سال تنهایی", href: "#" },
  { label: "نیمه تاریک وجود", href: "#" },
  { label: "پیشوری", href: "#" },
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const BookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M9 7h7M9 10.5h5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="#000" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M3.18 23.76c.35.2.76.2 1.12 0L15.56 12 3.3.24C3.11.34 3 .56 3 .82v22.36c0 .26.07.48.18.58z" fill="#EA4335" />
    <path d="M19.84 9.29L17.05 7.7 13.72 12l3.33 4.3 2.79-1.59c.8-.46.8-1.66 0-2.12l-2.79-1.59z" fill="#FBBC05" />
    <path d="M4.3.24L15.56 12 4.3 23.76l11.26-6.45L4.3.24z" fill="#34A853" />
    <path d="M4.3.24l11.26 6.45L4.3 12.01 4.3.24z" fill="#4285F4" opacity="0.8" />
  </svg>
);

const MacOSIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path d="M20.8 8.5c-.8-3.7-4-6.5-7.8-6.5S5 4.8 4.2 8.5C2 9 0 11 0 13.5 0 16.5 2.5 19 5.5 19H19c2.8 0 5-2.2 5-5 0-2.5-1.5-4.5-3.2-5.5z" fill="#6B7280" />
    <path d="M12 11l-3 3h2v4h2v-4h2l-3-3z" fill="#fff" />
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <rect x="2" y="2" width="9" height="9" fill="#F25022" />
    <rect x="13" y="2" width="9" height="9" fill="#7FBA00" />
    <rect x="2" y="13" width="9" height="9" fill="#00A4EF" />
    <rect x="13" y="13" width="9" height="9" fill="#FFB900" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="15" height="15">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
  </svg>
);

// ─── Sub-components ──────────────────────────────────────────────────────────
const DownloadButton: React.FC<DownloadBtn> = ({ label, from, href, icon }) => (
  <a
    href={href}
    style={{
      flex: 1,
      background: "#fff",
      borderRadius: 8,
      padding: "6px 8px",
      display: "flex",
      alignItems: "center",
      gap: 6,
      textDecoration: "none",
      transition: "opacity .15s, transform .15s",
    }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.opacity = "0.9";
      (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.opacity = "1";
      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
    }}
  >
    {icon}
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <span style={{ fontSize: 9, color: "#555", lineHeight: 1 }}>{from}</span>
      <span style={{ fontSize: 11, color: "#111", fontWeight: 600, lineHeight: 1.2, whiteSpace: "nowrap" }}>{label}</span>
    </div>
  </a>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
    { label: "Instagram", href: "#", icon: <InstagramIcon /> },
    { label: "Telegram", href: "#", icon: <TelegramIcon /> },
  ];

  return (
    <footer
      dir="rtl"
      style={{
        background: "#2D2640",
        color: "#E8E4F0",
        padding: "48px 0 0",
        fontFamily: "'Vazirmatn', sans-serif",
        fontSize: 14,
        lineHeight: 1.7,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
        {/* ── TOP GRID ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div
                style={{
                  width: 36, height: 36,
                  background: "#7C3AED",
                  borderRadius: 8,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <div style={{ width: 20, height: 20 }}><BookIcon /></div>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff" }}>
                گُنج
              </span>
            </div>
            <ul style={{ listStyle: "none" }}>
              {brandLinks.map((l) => (
                <li key={l.label} style={{ padding: "3px 0" }}>
                  <a
                    href={l.href}
                    style={{ color: "#A89EC4", textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontSize: 13.5, transition: "color .15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A78BFA")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A89EC4")}
                  >
                    <span style={{ color: "#7C6FA0", fontSize: 16 }}>›</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <ColTitle>دسته‌بندی پیشنهادی</ColTitle>
            <ColLinks items={categoryLinks} />
          </div>

          {/* Books */}
          <div>
            <ColTitle>کتاب‌های پیشنهادی</ColTitle>
            <ColLinks items={bookLinks} />
          </div>

          {/* App Card */}
          <div
            style={{
              background: "#3A3252",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 20,
              minWidth: 220,
            }}
          >
            {/* Card header */}
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                marginBottom: 16, paddingBottom: 12,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span style={{ fontSize: 12, color: "#A89EC4", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#A78BFA", fontSize: 15, fontWeight: 600 }}>‹</span>
                دانلود اپلیکیشن
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>
                <div style={{ width: 24, height: 24, background: "#7C3AED", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: 13, height: 13 }}><BookIcon /></div>
                </div>
                گُنج
              </div>
            </div>

            {/* Mobile */}
            <div style={{ marginBottom: 14 }}>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#E8E4F0", marginBottom: 8 }}>دانلود نسخه‌ی موبایل :</p>
              <div style={{ display: "flex", gap: 8 }}>
                <DownloadButton label="App Store" from="دریافت از" href="#" icon={<AppleIcon />} />
                <DownloadButton label="Google Play" from="دریافت از" href="#" icon={<GooglePlayIcon />} />
              </div>
            </div>

            {/* Desktop */}
            <div>
              <p style={{ fontSize: 12, fontWeight: 600, color: "#E8E4F0", marginBottom: 8 }}>دانلود نسخه‌ی دسکتاپ :</p>
              <div style={{ display: "flex", gap: 8 }}>
                <DownloadButton label="macOS" from="دریافت نسخه" href="#" icon={<MacOSIcon />} />
                <DownloadButton label="Windows" from="دریافت نسخه" href="#" icon={<WindowsIcon />} />
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px 0",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 32, height: 32,
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 8,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#A89EC4",
                    textDecoration: "none",
                    transition: "border-color .15s, color .15s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#A78BFA";
                    (e.currentTarget as HTMLElement).style.color = "#A78BFA";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.color = "#A89EC4";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#A89EC4", whiteSpace: "nowrap" }}>
              گُنج در شبکه‌های اجتماعی :
            </span>
          </div>

          <div style={{ fontSize: 12.5, color: "#A89EC4", lineHeight: 1.8 }}>
            <strong style={{ color: "#E8E4F0", fontWeight: 600, fontSize: 13 }}>تلفن پشتیبانی :</strong>
            <br />
            پشتیبانی ۲۴ ساعته &nbsp;|&nbsp; ۰۲۱-۴۵۶۱۲۰۹۵
          </div>
        </div>
      </div>
    </footer>
  );
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
const ColTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p
    style={{
      fontSize: 13, fontWeight: 600,
      letterSpacing: "0.12em",
      color: "#A78BFA",
      marginBottom: 16,
      paddingBottom: 10,
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      position: "relative",
    }}
  >
    {children}
    <span
      style={{
        position: "absolute", bottom: -1, right: 0,
        width: 32, height: 2,
        background: "#A78BFA",
        borderRadius: 2,
        display: "block",
      }}
    />
  </p>
);

const ColLinks: React.FC<{ items: LinkItem[] }> = ({ items }) => (
  <ul style={{ listStyle: "none" }}>
    {items.map((item) => (
      <li key={item.label} style={{ padding: "2.5px 0" }}>
        <a
          href={item.href}
          style={{
            color: "#A89EC4", textDecoration: "none",
            display: "flex", alignItems: "center", gap: 6,
            fontSize: 13, transition: "color .15s, paddingRight .15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8E4F0")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#A89EC4")}
        >
          <span style={{ color: "#7C6FA0", fontSize: 10, flexShrink: 0 }}>•</span>
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export default Footer;

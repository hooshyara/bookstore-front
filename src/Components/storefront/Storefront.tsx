import { useEffect, useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchBook, fetchBooks, searchBooks, type Book } from "../../Utils/api";

type Theme = "light" | "dark";

const fallbackBooks: Book[] = [];

function formatPrice(value?: number) {
  if (!value) return "رایگان";
  return `${new Intl.NumberFormat("fa-IR").format(value)} تومان`;
}

function Cover({ book }: { book: Book }) {
  return book.image || book.cover ? <img className="book-cover" src={book.image || book.cover} alt={`جلد ${book.title}`} /> : <div className="book-cover book-cover-empty"><span>کتاب</span></div>;
}

function BookCard({ book }: { book: Book }) {
  return <Link className="book-card" to={`/books/${book.id}`}>
    <div className="book-card-cover"><Cover book={book} />{book.discount && <span className="discount-badge">{book.discount}%</span>}</div>
    <div className="book-card-copy"><h3>{book.title}</h3><p>{book.author || "نویسنده نامشخص"}</p><strong>{formatPrice(book.price)}</strong></div>
  </Link>;
}

function Header({ theme, onTheme }: { theme: Theme; onTheme: () => void }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const submit = (event: FormEvent) => { event.preventDefault(); if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`); };
  return <header className="site-header"><div className="header-inner">
    <Link to="/" className="brand"><span className="brand-mark">ک</span><span><b>کُنْج</b><small>کتاب، برای هر لحظه</small></span></Link>
    <nav className="desktop-nav"><Link to="/">خانه</Link><Link to="/books">کتاب‌ها</Link><Link to="/about">درباره ما</Link><Link to="/contact">تماس با ما</Link></nav>
    <div className="header-actions"><form className="search-box" onSubmit={submit}><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="جست‌وجوی کتاب، نویسنده..." aria-label="جست‌وجو" /><button aria-label="جست‌وجو">⌕</button></form><button className="icon-button" onClick={onTheme} aria-label="تغییر پوسته">{theme === "dark" ? "☼" : "☾"}</button><Link className="profile-link" to="/profile">ورود</Link></div>
  </div></header>;
}

function Loading() { return <div className="state-card"><span className="spinner" /><p>در حال دریافت کتاب‌ها...</p></div>; }
function ErrorState() { return <div className="state-card"><div className="state-icon">!</div><h2>ارتباط با فروشگاه برقرار نشد</h2><p>لطفاً آدرس سرویس را در فایل محیطی بررسی کنید و دوباره تلاش کنید.</p><Link className="button primary" to="/books">تلاش دوباره</Link></div>; }
function EmptyState() { return <div className="state-card"><div className="state-icon">ک</div><h2>هنوز کتابی پیدا نشد</h2><p>جست‌وجوی دیگری را امتحان کنید یا به فهرست کتاب‌ها سر بزنید.</p><Link className="button secondary" to="/books">مشاهده کتاب‌ها</Link></div>; }

function Home() {
  const [books, setBooks] = useState<Book[]>(fallbackBooks); const [loading, setLoading] = useState(true); const [error, setError] = useState(false);
  useEffect(() => { fetchBooks(1, 8).then(setBooks).catch(() => setError(true)).finally(() => setLoading(false)); }, []);
  return <><section className="hero"><div className="hero-copy"><span className="eyebrow">قصه‌ای تازه برای شما</span><h1>هر کتاب،<br /><em>یک جهان تازه</em></h1><p>در کُنج، داستان‌ها و دانسته‌هایی را پیدا کنید که نگاهتان را به جهان عوض می‌کنند.</p><div className="hero-actions"><Link className="button primary" to="/books">کشف کتاب‌ها <span>←</span></Link><Link className="text-link" to="/about">درباره کُنج</Link></div></div><div className="hero-art"><div className="arch-shape"><div className="floating-book">ک</div></div><span className="art-note note-one">خواندن، سفر است</span><span className="art-note note-two">هر روز یک صفحه</span></div></section><section className="section featured"><div className="section-heading"><div><span className="eyebrow">انتخاب سردبیر</span><h2>کتاب‌های پیشنهادی</h2></div><Link to="/books" className="text-link">مشاهده همه ←</Link></div>{loading ? <Loading /> : error ? <ErrorState /> : books.length ? <div className="book-grid">{books.slice(0, 4).map((book) => <BookCard key={book.id} book={book} />)}</div> : <EmptyState />}</section><section className="quote-section"><span>"</span><p>کتاب‌ها آینه‌ای هستند که ما را به دیدن جهان‌های دیگر دعوت می‌کنند.</p><small>— کُنج، خانه‌ی قصه‌ها</small></section></>;
}

function Books() {
  const [books, setBooks] = useState<Book[]>([]); const [query, setQuery] = useState(""); const [loading, setLoading] = useState(true); const [error, setError] = useState(false);
  const load = (value = "") => { setLoading(true); setError(false); const request = value ? searchBooks(value) : fetchBooks(1, 30); request.then(setBooks).catch(() => setError(true)).finally(() => setLoading(false)); };
  useEffect(() => { load(); }, []);
  const filtered = useMemo(() => books, [books]);
  return <section className="catalog section"><div className="catalog-top"><div><span className="eyebrow">کتابخانه کُنج</span><h1>کتاب‌ها</h1><p>فهرست کتاب‌های منتخب ما را ورق بزنید.</p></div><form className="catalog-search" onSubmit={(event) => { event.preventDefault(); load(query); }}><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="نام کتاب یا نویسنده" /><button className="button primary">جست‌وجو</button></form></div>{loading ? <Loading /> : error ? <ErrorState /> : filtered.length ? <div className="book-grid">{filtered.map((book) => <BookCard key={book.id} book={book} />)}</div> : <EmptyState />}</section>;
}

function Detail() { const { id } = useParams(); const [book, setBook] = useState<Book | null>(null); const [loading, setLoading] = useState(true); useEffect(() => { if (id) fetchBook(id).then(setBook).finally(() => setLoading(false)); }, [id]); if (loading) return <section className="section"><Loading /></section>; if (!book) return <section className="section"><EmptyState /></section>; return <section className="detail section"><Link className="back-link" to="/books">→ بازگشت به کتاب‌ها</Link><div className="detail-layout"><div className="detail-cover"><Cover book={book} /></div><div className="detail-copy"><span className="eyebrow">معرفی کتاب</span><h1>{book.title}</h1><p className="detail-author">نوشته‌ی {book.author || "نویسنده نامشخص"}</p><div className="detail-meta"><span>نسخه چاپی و دیجیتال</span><span>امتیاز کاربران</span></div><p className="detail-description">{book.description || "این کتاب با دقت انتخاب شده تا تجربه‌ای ماندگار از خواندن را برای شما رقم بزند."}</p><div className="purchase"><strong>{formatPrice(book.price)}</strong><button className="button primary">افزودن به سبد</button></div></div></div></section>; }

function Search() { const params = new URLSearchParams(window.location.search); return <Books key={params.get("q") || "search"} />; }
function Profile() { return <section className="section simple-page"><span className="eyebrow">حساب کاربری</span><h1>کتابخانه من</h1><p>برای دسترسی به کتاب‌های خریداری‌شده و سفارش‌ها وارد حساب خود شوید.</p><Link className="button primary" to="/">بازگشت به خانه</Link></section>; }

export default function Storefront() { const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("konj-theme") as Theme) || "light"); useEffect(() => { document.documentElement.className = theme; localStorage.setItem("konj-theme", theme); }, [theme]); return <div className="app-shell"><Header theme={theme} onTheme={() => setTheme(theme === "dark" ? "light" : "dark")} /><main><Routes /></main><footer className="site-footer"><div className="footer-inner"><Link to="/" className="brand"><span className="brand-mark">ک</span><span><b>کُنْج</b><small>کتاب، برای هر لحظه</small></span></Link><p>جایی برای پیدا کردن قصه‌هایی که می‌مانند.</p><div className="footer-links"><Link to="/faq">پرسش‌های متداول</Link><Link to="/rules">قوانین</Link><Link to="/contact">تماس با ما</Link></div></div></footer></div> }

export { Home, Books, Detail, Search, Profile };

function Routes() { return <RoutesImpl />; }
function RoutesImpl() { return <>{window.location.pathname === "/" ? <Home /> : window.location.pathname === "/books" ? <Books /> : window.location.pathname.startsWith("/books/") ? <Detail /> : window.location.pathname === "/search" ? <Search /> : window.location.pathname === "/profile" ? <Profile /> : <Home />}</>; }

import { Routes as RouterRoutes } from "react-router-dom";
export { RouterRoutes };

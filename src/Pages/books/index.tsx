import { useEffect, useState } from "react";
import BookCard from "../../Components/home/newest/bookCard/bookCard";
import SideBar from "../../Components/books/sidebar/books-sidebar";
import { fetchBooks, type Book } from "../../Utils/api";

type CatalogBook = Book & {
  discountPrice?: number | null;
  discountPercent?: number | null;
  rating?: number;
  ratingCount?: number;
};

export default function Books() {
  const [books, setBooks] = useState<CatalogBook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchBooks(1, 100)
      .then((items) => setBooks(items as CatalogBook[]))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-light min-vh-100" dir="rtl">
      <div className="container py-5">
        <div className="row g-4">
          <aside className="col-12 col-lg-3">
            <SideBar />
          </aside>
          <main className="col-12 col-lg-9">
            <div className="mb-4">
              <h1 className="fw-bold">کتاب‌ها</h1>
              <p className="text-secondary mb-0">فهرست کتاب‌های موجود در فروشگاه</p>
            </div>
            {loading && <p className="text-center py-5">در حال دریافت کتاب‌ها...</p>}
            {error && <p className="alert alert-danger">دریافت کتاب‌ها از سرور انجام نشد. اتصال بک‌اند و آدرس API را بررسی کنید.</p>}
            {!loading && !error && books.length === 0 && <p className="text-center py-5">کتابی برای نمایش وجود ندارد.</p>}
            {!loading && !error && books.length > 0 && (
              <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center">
                {books.map((book) => (
                  <BookCard
                    key={book.id}
                    title={book.title}
                    author={book.author || "نویسنده نامشخص"}
                    price={book.price || 0}
                    discountPrice={book.discountPrice}
                    discountPercent={book.discountPercent || book.discount}
                    rating={book.rating || 0}
                    ratingCount={book.ratingCount || 0}
                    image={book.image || book.cover || ""}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

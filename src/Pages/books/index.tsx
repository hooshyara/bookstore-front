import React, { useEffect, useState } from "react";
import BookCard from "../../Components/home/newest/bookCard/bookCard";
import SideBar from "../../Components/books/sidebar/books-sidebar";
import { fetchBooks, type Book } from "../../Utils/api";

const mapBookToCard = (book: Book) => {
  const b = book as Book;

  return {
    id: b.id,
    title: b.title,
    author: b.author,
    price: b.price,
    discountPercent: b.discountPercent ?? b.discount ?? null,
    discountPrice: b.discountPrice ?? null,
    rating: b.rating ?? null,
    ratingCount: b.ratingCount ?? null,
    image: b.imageUrl ?? undefined,
  };
};

export default function Books() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    const load = async () => {
      try {
        setLoading(true);
        const data = await fetchBooks(1, 200);
        if (active) {
          setBooks(data);
          setError(null);
        }
      } catch (e) {
        console.log('error: ', e);
        if (active) setError("خطا در دریافت لیست کتاب‌ها");
      } finally {
        if (active) setLoading(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, []);

  return (
    <div
      className="bg-light"
      style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}
    >
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-9 order-2 order-lg-1">
            <div className="mt-3 mt-lg-0">
              <div
                className="p-3 p-md-4 mb-4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  border: "1px solid #F0EBF5",
                }}
              >
                <p className="fs-2 fw-bold mb-0" style={{ color: "#2D3748" }}>
                  دسته ی داستان و رمان های خارجی
                </p>
              </div>

              {loading && (
                <div className="text-center py-5" style={{ color: "#2D3748" }}>
                  در حال بارگذاری...
                </div>
              )}

              {!loading && error && (
                <div className="text-center py-5 text-danger">{error}</div>
              )}

              {!loading && !error && (
                <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center">
                  {books.map((book) => (
                    <BookCard key={book.id} {...mapBookToCard(book)} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="col-12 col-lg-3 order-1 order-lg-2">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

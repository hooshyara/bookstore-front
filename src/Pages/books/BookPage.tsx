import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "../../Components/books/sidebar/books-sidebar";
import { fetchBook, type Book, buildImageUrl } from "../../Utils/api";
import styles from "./bookPage.module.css";

const toNumber = (v: number | string | null | undefined): number | null => {
  if (v == null || v === "") return null;
  const n = Number(v);
  return Number.isNaN(n) ? null : n;
};

export default function BookPage() {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!id) return;

    (async () => {
      try {
        setLoading(true);
        const data = await fetchBook(id);
        if (active) {
          setBook(data);
          setError(null);
        }
      } catch {
        if (active) setError("خطا در دریافت اطلاعات کتاب");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, [id]);

  const price = toNumber(book?.price);
  const discountPrice = toNumber(book?.discountPrice);
  const hasDiscount =
    discountPrice != null && price != null && discountPrice < price;
  const finalPrice = hasDiscount ? discountPrice : price;
  const image = buildImageUrl(book?.imageUrl);

  return (
    <div style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}>
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-9 order-2 order-lg-1">
            {loading && (
              <div className="text-center py-5">در حال بارگذاری...</div>
            )}

            {!loading && error && (
              <div className="text-center py-5 text-danger">{error}</div>
            )}

            {!loading && book && (
              <>
                <div className={styles.card}>
                  <nav className={styles.breadcrumb}>
                    <Link to="/" className={styles.crumbLink}>
                      خانه
                    </Link>
                    <span className={styles.crumbSep}>/</span>
                    <Link to="/books" className={styles.crumbLink}>
                      کتاب‌ها
                    </Link>
                    <span className={styles.crumbSep}>/</span>
                    <span className={styles.crumbCurrent}>{book.title}</span>
                  </nav>

                  <div className="row g-4 align-items-start">
                    <div className="col-12 col-md-5 col-lg-4">
                      <div className={styles.imageWrap}>
                        {image ? (
                          <img
                            src={image}
                            alt={book.title}
                            className={styles.image}
                            onError={(e) => {
                              (
                                e.currentTarget as HTMLImageElement
                              ).style.display = "none";
                            }}
                          />
                        ) : (
                          <div className={styles.imagePlaceholder}>
                            بدون تصویر
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-12 col-md-7 col-lg-8">
                      <h1 className={styles.title}>{book.title}</h1>

                      {book.author && (
                        <p className={styles.author}>
                          نویسنده: <span>{book.author}</span>
                        </p>
                      )}

                      <div className={styles.metaRow}>
                        {book.genre?.name && (
                          <span className={styles.badge}>
                            {book.genre.name}
                          </span>
                        )}
                        {book.public_year && (
                          <span className={styles.metaItem}>
                            سال انتشار: {book.public_year}
                          </span>
                        )}
                        <span
                          className={`${styles.metaItem} ${
                            book.isValid ? styles.inStock : styles.outOfStock
                          }`}
                        >
                          {book.isValid ? "موجود در انبار" : "ناموجود"}
                        </span>
                      </div>

                      <div className={styles.divider} />

                      <div className={styles.priceRow}>
                        {finalPrice != null ? (
                          <div className={styles.price}>
                            <span className={styles.amount}>
                              {finalPrice.toLocaleString("fa-IR")}
                            </span>
                            <span className={styles.currency}>تومان</span>
                          </div>
                        ) : (
                          <span className={styles.amount}>ناموجود</span>
                        )}
                        {hasDiscount && price != null && (
                          <span className={styles.oldPrice}>
                            {price.toLocaleString("fa-IR")}
                          </span>
                        )}
                      </div>

                      <div className={styles.actions}>
                        <button
                          className={styles.buyBtn}
                          disabled={!book.isValid}
                        >
                          افزودن به سبد خرید
                        </button>
                        <button
                          className={styles.iconBtn}
                          aria-label="علاقه‌مندی"
                        >
                          ♡
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {book.description && (
                  <div className={styles.card} style={{ marginTop: 16 }}>
                    <h2 className={styles.sectionTitle}>توضیحات کتاب</h2>
                    <p className={styles.description}>{book.description}</p>
                  </div>
                )}

                <div className={styles.card} style={{ marginTop: 16 }}>
                  <h2 className={styles.sectionTitle}>مشخصات</h2>
                  <div className={styles.specGrid}>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>عنوان</span>
                      <span className={styles.specValue}>{book.title}</span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>نویسنده</span>
                      <span className={styles.specValue}>
                        {book.author ?? "—"}
                      </span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>ژانر</span>
                      <span className={styles.specValue}>
                        {book.genre?.name ?? "—"}
                      </span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>سال انتشار</span>
                      <span className={styles.specValue}>
                        {book.public_year ?? "—"}
                      </span>
                    </div>
                    <div className={styles.specItem}>
                      <span className={styles.specLabel}>وضعیت</span>
                      <span className={styles.specValue}>
                        {book.isValid ? "موجود" : "ناموجود"}
                      </span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="col-12 col-lg-3 order-1 order-lg-2">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

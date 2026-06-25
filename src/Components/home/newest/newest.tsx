import React from "react";
import styles from "./newwest.module.css";
import BookCard from "./bookCard/bookCard";

export default function Newest() {
  const newestBooks = [
    {
      id: 1,
      title: "تاریخ هنر جهان",
      author: "محمد نقی فرامرزی",
      price: 283000,
      discountPrice: 198000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/newest/Book5.png",
    },
    {
      id: 2,
      title: "سه شنبه ها باموری",
      author: "میج البوم",
      price: 198000,
      discountPrice: 120000,
      discountPercent: 30,
      rating: 4.8,
      ratingCount: 150,
      image: "src/assets/home/newest/Book6.png",
    },
    {
      id: 3,
      title: "وقتی بدن نه میگوید",
      author: "گابور میت",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book3.png",
    },
    {
      id: 4,
      title: "ملت عشق",
      author: "الیف شافاک",
      price: 150000,
      discountPrice: 120000,
      discountPercent: 30,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book4.png",
    },
    {
      id: 5,
      title: "وقتی نیچه گریست",
      author: "اروین د. یالوم",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book.png",
    },
    {
      id: 6,
      title: "جادوی باور ذهن",
      author: "دارن هاردی",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book2.png",
    },
  ];

  return (
    <section className={`${styles.container} mt-5`}>
      <div className={`d-flex flex-column ${styles.box}`}>
        <div className="d-flex flex-row align-items-center justify-content-between mb-4">
          <div className="d-flex flex-row align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                fill="#d1a8ff"
                d="m10.8 12l3.9 3.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.212-.325T8.425 12t.063-.375t.212-.325l4.6-4.6q.275-.275.7-.275t.7.275t.275.7t-.275.7z"
              />
            </svg>
            <a className={`d-none d-md-inline  ${styles.more}`} href="#">
              مشاهده بیشتر
            </a>
          </div>
          <h2 className={styles.sectionTitle}>جدیدترین کتاب‌ها</h2>
        </div>

        <div
          className={`d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-between gap-4 ${styles.booksWrapper}`}
        >
          {newestBooks.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              price={book.price}
              discountPrice={book.discountPrice}
              discountPercent={book.discountPercent}
              rating={book.rating}
              ratingCount={book.ratingCount}
              image={book.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

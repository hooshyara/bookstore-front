import React from "react";
import BookCard from "../newest/bookCard/bookCard";
import styles from "../newest/newwest.module.css";

interface sectionsProps {
  title: string;
}

export default function HaveDiscount({ title }: sectionsProps) {
  const haveDiscountBooks = [
    {
      id: 1,
      title: "قهرمان عصر ما",
      author: "ماریو بارگاس بوسا",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book1.png",
    },
    {
      id: 2,
      title: "رویای نیمه شب",
      author: "مظفر سالاری",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book3.png",
    },
    {
      id: 3,
      title: "هلن",
      author: "اروین د. یالوم",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book2.png",
    },
    {
      id: 4,
      title: "ابر شهر",
      author: "محمد رودگر",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book6.png",
    },
    {
      id: 5,
      title: "دیابت شیرین",
      author: "فارما کوتراپی",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book5.png",
    },
    {
      id: 6,
      title: "سردرسته ها",
      author: "ماریو بارگاس یوسا",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book4.png",
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
          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>

        <div
          className={`d-flex flex-column flex-md-row flex-wrap align-items-center justify-content-md-between gap-4 ${styles.booksWrapper}`}
        >
          {haveDiscountBooks.map((book) => (
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

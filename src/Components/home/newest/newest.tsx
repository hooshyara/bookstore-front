import React from "react";
import styles from "./newwest.module.css";
import BookCard from "./bookCard/bookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  rating: number;
  ratingCount: number;
  image: string;
}

interface SectionsProps {
  title: string;
  books: Book[];
}

export default function Newest({ title, books }: SectionsProps) {
  

  return (
    <section className={`${styles.container} container mt-5`}>
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

            <a className={`d-none d-md-inline ${styles.more}`} href="#">
              مشاهده بیشتر
            </a>
          </div>

          <h2 className={styles.sectionTitle}>{title}</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          className={styles.booksSlider}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          speed={700}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {books.map((book) => (
            <SwiperSlide key={book.id} className={styles.bookSlide}>
              <BookCard
                title={book.title}
                author={book.author}
                price={book.price}
                discountPrice={book.discountPrice}
                discountPercent={book.discountPercent}
                rating={book.rating}
                ratingCount={book.ratingCount}
                image={book.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

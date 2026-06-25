import React from "react";
import styles from "./bookCard.module.css";

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  discountPrice?: number;
  discountPercent?: number;
  rating: number;
  ratingCount: number;
  image: string;
}

export default function BookCard({
  title,
  author,
  price,
  discountPrice,
  discountPercent,
  rating,
  ratingCount,
  image,
}: BookCardProps) {
  return (
    <a className={styles.card} href="#">
      <div className={styles.imageContainer}>
        {discountPercent && (
          <span className={styles.discountBadge}>%{discountPercent}</span>
        )}
        <img src={image} alt={title} className={styles.bookImage} />
        <div className={styles.bookTypeIcon}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
        </div>
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>{author}</p>

        <div className={styles.ratingRow}>
          <span className={styles.ratingCount}>({ratingCount})</span>
          <span className={styles.ratingValue}>{rating}</span>
          <span className={styles.starIcon}>★</span>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.priceRow}>
           <div className={styles.finalPrice}>
             <span className={styles.currency}>تومان</span>
             <span className={styles.amount}>{discountPrice?.toLocaleString() || price.toLocaleString()}</span>
           </div>
           {discountPrice && (
             <span className={styles.oldPrice}>{price.toLocaleString()}</span>
           )}
        </div>
      </div>
    </a>
  );
}

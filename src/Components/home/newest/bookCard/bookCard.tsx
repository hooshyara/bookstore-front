import React from "react";
import styles from "./bookCard.module.css";

interface BookCardProps {
  id?: string | number;
  title: string;
  author?: string;
  price?: number | string | null;
  discountPrice?: number | string | null;
  discountPercent?: number | string | null;
  rating?: number | string | null;
  ratingCount?: number | string | null;
  image?: string;
}

const toNumber = (value: number | string | null | undefined): number | null => {
  if (value == null || value === "") return null;
  const n = Number(value);
  return Number.isNaN(n) ? null : n;
};

export default function BookCard({
  id,
  title,
  author,
  price,
  discountPrice,
  discountPercent,
  rating,
  ratingCount,
  image,
}: BookCardProps) {
  const href = id != null ? `/books/${encodeURIComponent(String(id))}` : "#";

  const numericPrice = toNumber(price);
  const numericDiscountPrice = toNumber(discountPrice);
  const numericPercent = toNumber(discountPercent);
  const numericRating = toNumber(rating);
  const numericRatingCount = toNumber(ratingCount);

  const hasDiscount =
    numericDiscountPrice != null &&
    numericPrice != null &&
    numericDiscountPrice < numericPrice;

  const finalPrice = hasDiscount ? numericDiscountPrice : numericPrice;

  const showPercentBadge = numericPercent != null && numericPercent > 0;
  const showRating = numericRating != null;

  return (
    <a className={styles.card} href={href}>
      <div className={styles.imageContainer}>
        {showPercentBadge && (
          <span className={styles.discountBadge}>%{numericPercent}</span>
        )}
        {image ? (
          <img
            src={image}
            alt={title}
            className={styles.bookImage}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className={styles.bookImage} aria-hidden="true" />
        )}
        <div className={styles.bookTypeIcon}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
        </div>
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        {author ? <p className={styles.author}>{author}</p> : null}

        {showRating && (
          <div className={styles.ratingRow}>
            <span className={styles.ratingCount}>
              ({numericRatingCount ?? 0})
            </span>
            <span className={styles.ratingValue}>
              {numericRating.toFixed(1)}
            </span>
            <span className={styles.starIcon}>★</span>
          </div>
        )}

        <div className={styles.divider}></div>

        <div className={styles.priceRow}>
          {finalPrice != null ? (
            <div className={styles.finalPrice}>
              <span className={styles.currency}>تومان</span>
              <span className={styles.amount}>
                {finalPrice.toLocaleString("fa-IR")}
              </span>
            </div>
          ) : (
            <span className={styles.amount}>ناموجود</span>
          )}
          {hasDiscount && numericPrice != null && (
            <span className={styles.oldPrice}>
              {numericPrice.toLocaleString("fa-IR")}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}
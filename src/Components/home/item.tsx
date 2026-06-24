import React from "react";
import styles from "./item.module.css";

interface ItemProps {
  title: string;
  link: string;
}

export default function Item({ title, link }: ItemProps) {
  return (
    <div className={styles.itemContainer}>
      <a href={link} className={styles.cat}>
        <p className={styles.title}>{title}</p>

        <div className={styles.imageWrapper}>
          <img
            src={link || "src/assets/home/category/desktop-catrgory icone.png"}
            alt={title}
            className={styles.categoryImg}
          />
        </div>
      </a>
    </div>
  );
}

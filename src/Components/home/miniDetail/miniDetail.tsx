import React from "react";
import styles from "./miniDetail.module.css";

interface Detail {
  title: string;
  content: string;
  image: string;
}
export default function MiniDetail({ title, content, image }: Detail) {
  return (
    <>
      <div className={`${styles.card} d-flex flex-md-row flex-column`}>
        <img src={image} alt="" />
        <div className="d-flex flex-column">
          <p className="fs-2">{title}</p>
          <p className="fs-5 text-wrap opacity-50">
            {" "}
            {content}
          </p>
          <a className={`${styles.readMore} py-2`} href="#">
            مطالعه کتاب
          </a>
        </div>
      </div>
    </>
  );
}

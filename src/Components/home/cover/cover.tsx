import React from "react";
import styles from "./banner.module.css";

interface image {
  imageUrl: string;
}

export default function Banner({ imageUrl }: image) {
  return (
    <>
      <div className="d-flex flex-column align-items-center mt-4">
        <img className={styles.bannerImage} src={imageUrl} alt="" />
      </div>
    </>
  );
}

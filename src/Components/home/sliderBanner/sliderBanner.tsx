import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./sliderBanner.module.css";

export default function SliderBanner() {
  const authorBanner = [
    "src/assets/home/sliderBanner/Banner1.png",
    "src/assets/home/sliderBanner/‌Banner2.png",
  ];

  return (
    <div className="d-flex  justify-content-center">
      <section className={styles.sliderBanner}>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          speed={700}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          pagination={{
            clickable: true,
          }}
          className={styles.swiper}
        >
          {authorBanner.map((banner, index) => (
            <SwiperSlide key={banner}>
              <img
                src={banner}
                alt={`بنر ${index + 1}`}
                className={styles.bannerImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

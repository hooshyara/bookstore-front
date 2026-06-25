import React from "react";
import Header from "./header/header";
import Item from "../../Components/home/item";
import Newest from "../../Components/home/newest/newest";
import HaveDiscount from "../../Components/home/haveDiscount/haveDiscount";
import Banner from "../../Components/home/cover/cover";



export default function Home() {
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
    <>
      <div className="d-flex flex-column gap-4">
        <Header />
        <div className="d-flex gap-3 align-items-center justify-content-around flex-wrap">
          <Item title="کتاب صوتی" link="src/assets/home/category/1.png" />
          <Item title="کتاب متنی" link="src/assets/home/category/2.png" />
          <Item title="کتاب تاریخی" link="src/assets/home/category/3.png" />
          <Item title="رمان خارجی" link="src/assets/home/category/4.jpg" />
          <Item title="روانشناسی" link="src/assets/home/category/5.png" />
        </div>
        <Newest title="جدیدترین کتاب‌ها" books={newestBooks}/>
        <Newest title="تا 30 درصد تخفیف " books={haveDiscountBooks}/>
        {/* <HaveDiscount title="تا 30 درصد تخفیف "/> */}
        <Banner imageUrl="src/assets/home/banner/Banner1.png"/>
      </div>
    </>
  );
}

import React from "react";
import Header from "./header/header";
import Item from "../../Components/home/item";
import Newest from "../../Components/home/newest/newest";
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

  const voiceBooks = [
    {
      id: 1,
      title: "تاریخ هنر جهان",
      author: "محمد نقی فرامرزی",
      price: 283000,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/newest/Book5.png",
    },
    {
      id: 2,
      title: "سه شنبه ها باموری",
      author: "میج البوم",
      price: 198000,
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
    {
      id: 7,
      title: "ربکا",
      author: "دافنه دو موریه",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book7.png",
    },
  ]

  const discountVoiceBooks = [
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
    {
      id: 7,
      title: "مسئله ی اسپینوزا",
      author: "اروین د. یالوم",
      price: 85000,
      discountPrice: 125000,
      discountPercent: 30,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/haveDiscount/Book2.png",
    },
  ]

  const forinNewest = [
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
      id: 4,
      title: "همه چیز به فنا رفته",
      author: "مارک منسون",
      price: 150000,
      discountPrice: 120000,
      discountPercent: 30,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/forinNewwest/Book2.png",
    },
    {
      id: 6,
      title: "ملت عشق",
      author: "الیف شافاک",
      price: 150000,
      discountPrice: 120000,
      discountPercent: 30,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/forinNewwest/Book.png",
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
  ] 

  const psychologyBooks = [
    {
      id: 1,
      title: "عادت های اتمی",
      author: "عادت های اتمی",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book1.png",
    },
    {
      id: 2,
      title: "جادوی باور ذهن",
      author: "دارن هاردی",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book2.png",
    },
    {
      id: 3,
      title: "وقتی نیچه گریست",
      author: "اروین د. یالوم",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book3.png",
    },
    {
      id: 4,
      title: "درمان شوپنهاور",
      author: "اروین د. یالوم",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book4.png",
    },
    {
      id: 5,
      title: "مسئله ی اسپینوزا",
      author: "اروین د. یالوم",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book5.png",
    },
    {
      id: 6,
      title: "هنر درمان",
      author: "اروین د. یالوم",
      price: 110000,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/Psychology/Book6.png",
    },
  ]

  const BigDiscount = [
    {
      id: 1,
      title: "تاریخ هنر جهان",
      author: "محمد نقی فرامرزی",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.3,
      ratingCount: 98,
      image: "src/assets/home/newest/Book5.png",
    },
    {
      id: 2,
      title: "سه شنبه ها باموری",
      author: "میج البوم",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.8,
      ratingCount: 150,
      image: "src/assets/home/newest/Book6.png",
    },
    {
      id: 3,
      title: "وقتی بدن نه میگوید",
      author: "گابور میت",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book3.png",
    },
    {
      id: 4,
      title: "ملت عشق",
      author: "الیف شافاک",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book4.png",
    },
    {
      id: 5,
      title: "وقتی نیچه گریست",
      author: "اروین د. یالوم",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book.png",
    },
    {
      id: 6,
      title: "جادوی باور ذهن",
      author: "دارن هاردی",
      price: 150000,
      discountPrice: 15000,
      discountPercent: 90,
      rating: 4.9,
      ratingCount: 320,
      image: "src/assets/home/newest/Book2.png",
    },
  ]

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
        <Banner imageUrl="src/assets/home/banner/Banner1.png"/>
        <Newest title="جدید ترین کتاب های صوتی" books={voiceBooks}/>
        <Newest title="تا 30 درصد تخفیف کتاب های صوتی:" books={discountVoiceBooks}/>
        <Banner imageUrl="src/assets/home/banner/Banner2.png"/>
        <Newest title="تازه های رمان خارجی " books={forinNewest}/>
        <Newest title="پرفروش ترین کتاب های روانشناسی" books={psychologyBooks}/>
        <Banner imageUrl="src/assets/home/banner/Banner3.png"/>
        <Newest title="تا 90 درصد تخفیف " books={BigDiscount}/>





      </div>
    </>
  );
}

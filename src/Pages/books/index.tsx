import React from "react";
import BookCard from "../../Components/home/newest/bookCard/bookCard";
import SideBar from "../../Components/books/sidebar/books-sidebar";

export default function Books() {
  const books = [
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
  ];
  return (
    <div
      className="bg-light"
      style={{ backgroundColor: "#F7F8FA", minHeight: "100vh" }}
    >
      <div className="container py-4">
        <div className="row g-4">
          {/* Main Content */}
          <div className="col-12 col-lg-9 order-2 order-lg-1">
            <div className="mt-3 mt-lg-0">
              <div
                className="p-3 p-md-4 mb-4"
                style={{
                  backgroundColor: "white",
                  borderRadius: "16px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  border: "1px solid #F0EBF5",
                }}
              >
                <p className="fs-2 fw-bold mb-0" style={{ color: "#2D3748" }}>
                  دسته ی داستان و رمان های خارجی
                </p>
              </div>

              <div className="d-flex flex-wrap gap-3 gap-md-4 justify-content-center">
                {books.map((book, index) => (
                  <BookCard
                    key={index}
                    title={book.title}
                    author={book.author}
                    price={book.price}
                    discountPercent={book.discountPercent ?? null}
                    discountPrice={book.discountPrice ?? null}
                    rating={book.rating}
                    ratingCount={book.ratingCount}
                    image={book.image}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-12 col-lg-3 order-1 order-lg-2">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

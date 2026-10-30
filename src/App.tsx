import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Nav from "./Components/nav";
import Home from "./Pages/home";
import Books from "./Pages/books";
import About from "./Pages/about";
import ContactUs from "./Pages/contactus";
import Rules from "./Pages/rules";
import FAQ from "./Pages/faq";
import NotFound from "./Pages/404";
import BookPage from "./Pages/books/BookPage";
import CartPage from "./Pages/cart/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

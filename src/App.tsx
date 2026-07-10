import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Nav from "./Components/nav";
import Home from "./Pages/home";
import Books from "./Pages/books";
import About from "./Pages/about";
import ContactUs from "./Pages/contactus";
import Rules from "./Pages/rules";

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

          <Route path="*" element={<h1>404 | صفحه پیدا نشد</h1>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import Nav from "./Components/nav";
import Home from "./Pages/home";
import Books from "./Pages/books";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <main className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />

          <Route path="*" element={<h1>404 | صفحه پیدا نشد</h1>} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

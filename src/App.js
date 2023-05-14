import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Header from "./components/header/header";
import Footer from "./components/Footer/Footer";
import Home from "./components/home/Home";
import FullMenu from "./components/fullMenu/FullMenu";
import Contact from "./components/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/menu" element={<FullMenu />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

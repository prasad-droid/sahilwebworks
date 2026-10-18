import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp/FloatingWhatsApp";
import BackToTop from "./components/BackToTop/BackToTop";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import DynamicCategory from "./pages/DynamicCategory";

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:slug" element={<DynamicCategory />} />
      <Route path="*" element={<Home />} />
    </Routes>
    <Footer />
    <FloatingWhatsApp />
    <BackToTop />
  </BrowserRouter>
);

export default App;

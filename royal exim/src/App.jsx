import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import GlobalTrade from "./components/GlobalTrade";
import ExportMarkets from "./components/ExportMarkets";
import Certifications from "./components/Certifications";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleEnquire = useCallback((product) => {
    setSelectedProduct(product ? product.name : null);
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Products onEnquire={handleEnquire} />
        <GlobalTrade />
        <ExportMarkets />
        <Certifications />
        <Gallery />
        <Testimonials />
        <Contact initialProduct={selectedProduct} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
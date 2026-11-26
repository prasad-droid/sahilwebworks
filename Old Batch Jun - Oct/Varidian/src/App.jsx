import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVision from "./components/MissionVision";
import Products from "./components/Products";
import ExportProcess from "./components/ExportProcess";
import WhyChooseUs from "./components/WhyChooseUs";
import GlobalReach from "./components/GlobalReach";
import TargetCustomers from "./components/TargetCustomers";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const requestQuote = useCallback((product = null) => {
    if (product) setSelectedProduct(product);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleEnquire = useCallback(
    (product) => requestQuote(product),
    [requestQuote]
  );

  return (
    <>
      <Navbar onRequestQuote={() => requestQuote()} />
      <main>
        <Hero onRequestQuote={() => requestQuote()} />
        <About />
        <MissionVision />
        <Products onEnquire={handleEnquire} />
        <ExportProcess onRequestQuote={() => requestQuote()} />
        <WhyChooseUs onRequestQuote={() => requestQuote()} />
        <GlobalReach onRequestQuote={() => requestQuote()} />
        <TargetCustomers onRequestQuote={() => requestQuote()} />
        <Testimonials />
        <Contact selectedProduct={selectedProduct} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
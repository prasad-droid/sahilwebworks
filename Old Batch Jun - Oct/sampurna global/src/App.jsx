import React, { useCallback, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ProductCategories from "./components/ProductCategories.jsx";
import ProductPortfolio from "./components/ProductPortfolio.jsx";
import ExportSolutions from "./components/ExportSolutions.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Gallery from "./components/Gallery.jsx";
import GlobalVision from "./components/GlobalVision.jsx";
import Testimonials from "./components/Testimonials.jsx";
import EnquiryForm from "./components/EnquiryForm.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  const [prefill, setPrefill] = useState(null);

  /**
   * Called by product cards, categories, export blocks and contact buttons.
   * Populates the enquiry form and smoothly scrolls to it.
   */
  const handleEnquire = useCallback((product, enquiryType) => {
    setPrefill({
      product: product || "",
      enquiryType: enquiryType || "",
      nonce: Date.now(),
    });
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <AboutUs />
        <ProductCategories onEnquire={handleEnquire} />
        <ProductPortfolio onEnquire={handleEnquire} />
        <ExportSolutions onEnquire={handleEnquire} />
        <WhyChooseUs />
        <Gallery />
        <GlobalVision onEnquire={handleEnquire} />
        <Testimonials />
        <EnquiryForm prefill={prefill} />
        <ContactUs onEnquire={handleEnquire} />
      </main>

      <Footer onEnquire={handleEnquire} />
      <WhatsAppButton />
    </>
  );
}

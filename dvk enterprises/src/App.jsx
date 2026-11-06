import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandHighlights from "./components/BrandHighlights";
import AboutUs from "./components/AboutUs";
import ProductCategories from "./components/ProductCategories";
import WhyChooseUs from "./components/WhyChooseUs";
import ExportProcess from "./components/ExportProcess";
import Testimonials from "./components/Testimonials";
import InquiryForm from "./components/InquiryForm";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";

export default function App() {
  const [inquiryRequest, setInquiryRequest] = useState({
    product: "",
    key: 0,
  });

  const handleEnquire = useCallback((product) => {
    setInquiryRequest((previous) => ({
      product,
      key: previous.key + 1,
    }));

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.requestAnimationFrame(() => {
      document.getElementById("inquiry")?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <BrandHighlights />
        <AboutUs />
        <ProductCategories onInquire={handleEnquire} />
        <WhyChooseUs />
        <ExportProcess />
        <Testimonials />
        <InquiryForm
          selectedProduct={inquiryRequest.product}
          requestKey={inquiryRequest.key}
        />
        <ContactUs />
      </main>

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

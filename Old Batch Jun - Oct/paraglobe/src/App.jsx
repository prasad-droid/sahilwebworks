import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import ValueStrip from "./components/ValueStrip.jsx";
import About from "./components/About.jsx";
import MissionVision from "./components/MissionVision.jsx";
import Products from "./components/Products.jsx";
import Sustainability from "./components/Sustainability.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Gallery from "./components/Gallery.jsx";
import VideoShowcase from "./components/VideoShowcase.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import CatalogButton from "./components/CatalogButton.jsx";
import ProductCatalog from "./components/ProductCatalog.jsx";

const getRoute = () =>
  window.location.hash.startsWith("#/catalog") ? "catalog" : "home";

export default function App() {
  const [route, setRoute] = useState(getRoute);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const onHash = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (route === "catalog") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const hash = window.location.hash;
    if (hash.length > 1 && !hash.startsWith("#/")) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) {
        requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
      }
    }
  }, [route]);

  const handleEnquire = useCallback((product) => {
    setSelectedProduct(product);
    requestAnimationFrame(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-visual");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [route]);

  return (
    <>
      <Navbar page={route} />
      {route === "catalog" ? (
        <ProductCatalog />
      ) : (
        <main id="main">
          <Hero />
          <ValueStrip />
          <About />
          <MissionVision />
          <Products onEnquire={handleEnquire} />
          <Sustainability />
          <WhyChooseUs />
          <Gallery />
          <VideoShowcase />
          <Contact selectedProduct={selectedProduct} />
        </main>
      )}
      <Footer />
      <WhatsAppButton />
      <CatalogButton />
    </>
  );
}
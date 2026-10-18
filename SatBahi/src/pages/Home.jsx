import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import Customization from "../components/Customization/Customization";
import Services from "../components/Services/Services";
import Industries from "../components/Industries/Industries";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";
import Contact from "../components/Contact/Contact";

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    document.title = "SATBHAI EXIM | Premium Tote Bag Exporter from India";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Products />
        <ProductCategories />
        <Customization />
        <Services />
        <Industries />
        <WhyChooseUs />
        <ExportProcess />
        <Testimonials />
        <Gallery />
        <RequestAQuote />
        <Contact />
      </main>
    </>
  );
}

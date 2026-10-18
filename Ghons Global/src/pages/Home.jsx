import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Products from "../components/Products/Products";
import Services from "../components/Services/Services";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Gallery from "../components/Gallery/Gallery";
import Testimonials from "../components/Testimonials/Testimonials";
import OrderSection from "../components/OrderSection/OrderSection";
import Contact from "../components/Contact/Contact";
import { useSEO } from "../hooks/useSEO";

const Home = () => {
  useSEO({
    title:
      "GHONS Global Impex | Wholesale Imitation Jewellery Exporter & Merchant Trader",
    description:
      "GHONS Global Impex supplies premium imitation jewellery for wholesalers, distributors, boutiques, and international buyers. Explore our collection and send bulk inquiries.",
    keywords:
      "Imitation Jewellery Exporter, Fashion Jewellery Supplier, Wholesale Jewellery India, Merchant Trader, Artificial Jewellery Export, Jewellery Wholesaler, Boutique Supplier, Bulk Jewellery Supplier, Export Company India",
  });

  return (
    <main>
      <Hero />
      <About />
      <Products />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <OrderSection />
      <Contact />
    </main>
  );
};

export default Home;

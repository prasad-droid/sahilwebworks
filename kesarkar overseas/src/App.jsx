import { Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Industries from "./components/Industries/Industries";
import Inquiry from "./components/Inquiry/Inquiry";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { buildWhatsAppLink, COMPANY } from "./utils/config";

const Home = () => (
  <>
    <Hero />
    <About />
    <Products />
    <Services />
    <WhyChooseUs />
    <Industries />
    <Inquiry />
    <Contact />
  </>
);

const App = () => (
  <div className="app">
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />

    <a
      href={buildWhatsAppLink("Hello Kesarkar Overseas, I would like to know more about your products.")}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with Kesarkar Overseas on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  </div>
);

export default App;

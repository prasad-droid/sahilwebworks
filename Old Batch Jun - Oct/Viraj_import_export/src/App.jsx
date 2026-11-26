import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import VisionMission from "./components/VisionMission";
import Products from "./components/Products";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Industries from "./components/Industries";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import ExportProcess from "./components/ExportProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const App = () => {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Products />
        <Services />
        <WhyChooseUs />
        <Industries />
        <Gallery />
        <Testimonials />
        <ExportProcess />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
};

export default App;

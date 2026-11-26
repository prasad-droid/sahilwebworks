import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import VisionMission from "./components/VisionMission/VisionMission";
import Products from "./components/Products/Products";
import WhyNilipar from "./components/WhyNilipar/WhyNilipar";
import Gallery from "./components/Gallery/Gallery";
import VideoSection from "./components/VideoSection/VideoSection";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat/WhatsAppFloat";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Products />
        <WhyNilipar />
        <Gallery />
        <VideoSection />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

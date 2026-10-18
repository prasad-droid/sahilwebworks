import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductSection from './components/ProductSection';
import WhyChooseUs from './components/WhyChooseUs';
import ExportSection from './components/ExportSection';
import Certifications from './components/Certifications';
import TargetCustomers from './components/TargetCustomers';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductSection />
        <WhyChooseUs />
        <ExportSection />
        <Certifications />
        <TargetCustomers />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
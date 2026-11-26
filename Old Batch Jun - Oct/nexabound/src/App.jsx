import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import About from './components/About';
import Products from './components/Products';
import Customization from './components/Customization';
import BulkOrder from './components/BulkOrder';
import ExportProcess from './components/ExportProcess';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalReach from './components/GlobalReach';
import TargetBuyers from './components/TargetBuyers';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import InquirySection from './components/InquirySection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Products />
        <Customization />
        <BulkOrder />
        <ExportProcess />
        <WhyChooseUs />
        <GlobalReach />
        <TargetBuyers />
        <Gallery />
        <Testimonials />
        <InquirySection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
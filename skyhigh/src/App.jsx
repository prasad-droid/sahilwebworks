import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustHighlights from './components/TrustHighlights';
import About from './components/About';
import Products from './components/Products';
import ExportProcess from './components/ExportProcess';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import InquiryCTA from './components/InquiryCTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/sections.css';
import './styles/products.css';
import './styles/inquiry.css';
import './styles/contact.css';
import './styles/footer.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustHighlights />
      <About />
      <Products />
      <ExportProcess />
      <WhyChooseUs />
      <Testimonials />
      <InquiryCTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}

export default App;

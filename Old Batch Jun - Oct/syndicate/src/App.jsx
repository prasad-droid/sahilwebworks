import useReveal from './hooks/useReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ProductOverview from './components/ProductOverview';
import AgriculturalProducts from './components/AgriculturalProducts';
import TextileProducts from './components/TextileProducts';
import QualityControl from './components/QualityControl';
import Packaging from './components/Packaging';
import Compliance from './components/Compliance';
import Certificates from './components/Certificates';
import Portfolio from './components/Portfolio';
import ExportProcess from './components/ExportProcess';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <ProductOverview />
        <AgriculturalProducts />
        <TextileProducts />
        <QualityControl />
        <Packaging />
        <Compliance />
        <Certificates />
        <Portfolio />
        <ExportProcess />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

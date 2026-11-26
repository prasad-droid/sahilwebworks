import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProductCategories from './components/ProductCategories.jsx';
import AgriculturalProducts from './components/AgriculturalProducts.jsx';
import TechnicalTextiles from './components/TechnicalTextiles.jsx';
import QualityStandards from './components/QualityStandards.jsx';
import ExportProcess from './components/ExportProcess.jsx';
import Compliance from './components/Compliance.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductCategories />
        <AgriculturalProducts />
        <TechnicalTextiles />
        <QualityStandards />
        <ExportProcess />
        <Compliance />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

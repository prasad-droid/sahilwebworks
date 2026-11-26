import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import ExportMarkets from './components/ExportMarkets';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/Logo.css';

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Products />
        <ExportMarkets />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;

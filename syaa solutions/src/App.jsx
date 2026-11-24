import { useCallback, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import PackagingSolutions from './components/PackagingSolutions.jsx';
import BananaLeaves from './components/BananaLeaves.jsx';
import Industries from './components/Industries.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { useScrollReveal } from './hooks/useScrollReveal.js';

export default function App() {
  useScrollReveal();

  // Product enquiry buttons pre-select the product in the contact form.
  const [presetProduct, setPresetProduct] = useState('');

  const scrollTo = useCallback((id) => {
    setPresetProduct('');
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [setPresetProduct]);

  const enquireAbout = useCallback((product) => {
    setPresetProduct(product);
    requestAnimationFrame(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [setPresetProduct]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar onQuote={() => scrollTo('contact')} />
      <main id="main">
        <Hero onExplore={() => scrollTo('packaging')} onQuote={() => scrollTo('contact')} />
        <About />
        <PackagingSolutions onEnquire={enquireAbout} />
        <BananaLeaves onEnquire={enquireAbout} />
        <Industries />
        <WhyChooseUs />
        <Portfolio />
        <Testimonials />
        <Contact presetProduct={presetProduct} onPresetConsumed={() => setPresetProduct('')} />
      </main>
      <Footer onEnquire={enquireAbout} />
    </>
  );
}

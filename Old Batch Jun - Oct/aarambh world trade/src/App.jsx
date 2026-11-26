import { useSeo } from './hooks/useSeo.js';
import { EnquiryProvider } from './context/EnquiryContext.jsx';
import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { TrustStrip } from './components/TrustStrip.jsx';
import { About } from './components/About.jsx';
import { Products } from './components/Products.jsx';
import { Services } from './components/Services.jsx';
import { SourcingProcess } from './components/SourcingProcess.jsx';
import { WhyChooseUs } from './components/WhyChooseUs.jsx';
import { GlobalMarkets } from './components/GlobalMarkets.jsx';
import { Gallery } from './components/Gallery.jsx';
import { FAQ } from './components/FAQ.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';
import { WhatsAppButton } from './components/WhatsAppButton.jsx';

/**
 * AARAMBH WORLDTRADE - single page export site.
 *
 * Section order is intentional:
 *   Hero -> trust -> about -> products -> services -> process -> why us ->
 *   global reach -> gallery -> faq -> contact (channels, address, map and the
 *   quote form) -> footer
 *
 * The quote form lives inside the contact section and keeps the "bulk-order"
 * id, which is the single scroll target used by every "Request a Quote" button.
 */
export function App() {
  useSeo();

  return (
    <EnquiryProvider>
      <div className="page">
        <a className="skip-link" href="#main">
          Skip to main content
        </a>

        <Navbar />

        <main className="main" id="main">
          <Hero />
          <TrustStrip />
          <About />
          <Products />
          <Services />
          <SourcingProcess />
          <WhyChooseUs />
          <GlobalMarkets />
          <Gallery />
          <FAQ />
          <Contact />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </EnquiryProvider>
  );
}

export default App;

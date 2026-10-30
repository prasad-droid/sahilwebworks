import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { About } from './components/About.jsx'
import { Products } from './components/Products.jsx'
import { WhyChooseUs } from './components/WhyChooseUs.jsx'
import { Gallery } from './components/Gallery.jsx'
import { InquiryCTA } from './components/InquiryCTA.jsx'
import { Contact } from './components/Contact.jsx'
import { Footer } from './components/Footer.jsx'
import { WhatsAppButton } from './components/WhatsAppButton.jsx'
import { BackToTop } from './components/BackToTop.jsx'

export default function App() {
  return (
    <div className="page">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <main id="main" className="main">
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Gallery />
        <InquiryCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

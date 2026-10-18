import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Services from './components/Services/Services'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Industries from './components/Industries/Industries'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Reveal from './components/Reveal'
import ctaBg from './assets/images/cta-bg.svg'
import './App.css'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])
  return null
}

const CTA = () => (
  <section className="cta-banner">
    <img src={ctaBg} alt="" aria-hidden="true" className="cta-banner-bg" loading="lazy" />
    <div className="container cta-banner-inner">
      <Reveal className="cta-banner-content">
        <h2>
          Ready to Source <span>Premium Textiles</span>?
        </h2>
        <p>
          Request our catalogue, share your specifications, and get a competitive export quote — response within 24
          hours.
        </p>
        <div className="cta-banner-actions">
          <a
            className="btn btn-accent btn-lg"
            href="https://wa.me/919175809636?text=Hello%20TRIVEDA%20EXPORTS%2C%20please%20send%20me%20your%20product%20catalogue."
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> Request Catalogue
          </a>
          <a className="btn btn-outline-light btn-lg" href="#contact">
            Get a Quote <FaArrowRight />
          </a>
        </div>
      </Reveal>
    </div>
  </section>
)

const WhatsAppButton = () => (
  <a
    className="whatsapp-float"
    href="https://wa.me/919175809636?text=Hello%20TRIVEDA%20EXPORTS%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with TRIVEDA EXPORTS on WhatsApp"
  >
    <FaWhatsapp />
  </a>
)

const Home = () => (
  <>
    <Hero />
    <About />
    <Products />
    <Services />
    <WhyChooseUs />
    <Industries />
    <Testimonials />
    <CTA />
    <Contact />
  </>
)

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Navbar />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
    <Footer />
    <WhatsAppButton />
  </BrowserRouter>
)

export default App

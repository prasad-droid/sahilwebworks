import { useCallback, useRef, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustStrip from './components/TrustStrip.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import Applications from './components/Applications.jsx'
import Services from './components/Services.jsx'
import PrivateLabel from './components/PrivateLabel.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import GlobalReach from './components/GlobalReach.jsx'
import SupplyProcess from './components/SupplyProcess.jsx'
import Packaging from './components/Packaging.jsx'
import EnquiryForm from './components/EnquiryForm.jsx'
import FAQ from './components/FAQ.jsx'
import BuyerConfidence from './components/BuyerConfidence.jsx'
import Contact from './components/Contact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  const enquiryRef = useRef(null)
  const [activeProduct, setActiveProduct] = useState('')

  const handleEnquire = useCallback((product = '') => {
    setActiveProduct(product)
    requestAnimationFrame(() => {
      enquiryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  const handleNavigate = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) {
      const reduce =
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar onRequestQuote={() => handleEnquire('')} />

      <main id="main">
        <Hero onRequestQuote={() => handleEnquire('')} />
        <TrustStrip />
        <About />
        <Products onEnquire={handleEnquire} />
        <Applications />
        <Services onEnquire={() => handleEnquire('')} />
        <PrivateLabel onDiscuss={() => handleEnquire('Customized Natural Product')} />
        <WhyChooseUs />
        <GlobalReach />
        <SupplyProcess />
        <Packaging />
        <EnquiryForm
          ref={enquiryRef}
          activeProduct={activeProduct}
          onProductSelect={() => setActiveProduct('')}
        />
        <FAQ />
        <BuyerConfidence />
        <Contact onRequestQuote={() => handleEnquire('')} />
        <FinalCTA onRequestQuote={() => handleEnquire('')} />
      </main>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </>
  )
}
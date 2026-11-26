import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Industries from './components/Industries'
import WhyChooseUs from './components/WhyChooseUs'
import MarketReach from './components/MarketReach'
import TradeProcess from './components/TradeProcess'
import Affirmations from './components/Affirmations'
import Testimonials from './components/Testimonials'
import QuoteSection from './components/QuoteSection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  const [enquiryProduct, setEnquiryProduct] = useState('')
  const [counter, setCounter] = useState(0)

  useScrollReveal([enquiryProduct, counter])

  const handleEnquire = (product) => {
    setEnquiryProduct(product)
    setCounter((c) => c + 1)
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products onEnquire={handleEnquire} />
        <Industries />
        <WhyChooseUs />
        <MarketReach />
        <TradeProcess />
        <Affirmations />
        <Testimonials />
        <QuoteSection defaultProduct={enquiryProduct} />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
import { useCallback, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import BusinessOverview from './components/BusinessOverview'
import WhyChooseUs from './components/WhyChooseUs'
import GlobalTrade from './components/GlobalTrade'
import BusinessPartnership from './components/BusinessPartnership'
import Testimonials from './components/Testimonials'
import InquirySection from './components/InquirySection'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { useScrollReveal } from './hooks/useScrollReveal'
import { scrollToSection } from './utils/scroll'

export default function App() {
  const [inquiryDraft, setInquiryDraft] = useState(null)
  useScrollReveal()

  const startInquiry = useCallback((product = null, inquiryType = 'Product Inquiry') => {
    setInquiryDraft({
      inquiryType,
      productOfInterest: product?.name || '',
    })
    scrollToSection('contact')
  }, [])

  const handleQuote = useCallback(() => startInquiry(null, 'General Inquiry'), [startInquiry])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar onQuote={handleQuote} />
      <main id="main-content">
        <Hero />
        <AboutUs />
        <BusinessOverview onRequestQuote={startInquiry} />
        <WhyChooseUs />
        <GlobalTrade />
        <BusinessPartnership onQuote={handleQuote} />
        <Testimonials />
        <InquirySection onQuote={handleQuote} />
        <Contact inquiryDraft={inquiryDraft} onDraftHandled={() => setInquiryDraft(null)} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import WhyChooseUs from './components/WhyChooseUs'
import IndustriesServed from './components/IndustriesServed'
import GlobalReach from './components/GlobalReach'
import OurValues from './components/OurValues'
import Testimonials from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Icon from './components/Icons'
import { useRevealObserver } from './hooks/useReveal'

export default function App() {
  useRevealObserver()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <AboutUs />
        <ProductCategories />
        <FeaturedProducts />
        <WhyChooseUs />
        <IndustriesServed />
        <GlobalReach />
        <OurValues />
        <Testimonials />
        <EnquiryForm />
        <ContactUs />
      </main>

      <Footer />

      <button
        type="button"
        className={`to-top ${showTop ? 'is-visible' : ''}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <Icon name="arrowUp" size={22} />
      </button>
    </>
  )
}

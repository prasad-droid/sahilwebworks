import { useCallback, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import ProductHighlights from './components/ProductHighlights.jsx'
import About from './components/About.jsx'
import Products from './components/Products.jsx'
import MakingProcess from './components/MakingProcess.jsx'
import TraditionSection from './components/TraditionSection.jsx'
import Packaging from './components/Packaging.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import AudienceSection from './components/AudienceSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import ProductDetailModal from './components/ProductDetailModal.jsx'

export default function App() {
  const [activeProduct, setActiveProduct] = useState(null)
  const [activeCategoryId, setActiveCategoryId] = useState(null)

  const openProduct = useCallback((product) => setActiveProduct(product), [])
  const closeProduct = useCallback(() => setActiveProduct(null), [])

  /** Jumps from the highlights band to a specific product category. */
  const selectCategory = useCallback((categoryId) => {
    setActiveCategoryId(categoryId)
    document
      .getElementById(`category-${categoryId}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#category-${categoryId}`)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <ProductHighlights onSelectCategory={selectCategory} />
        <About />
        <Products onViewProduct={openProduct} activeCategoryId={activeCategoryId} />
        <TraditionSection />
        <MakingProcess />
        <Packaging />
        <WhyChooseUs />
        <AudienceSection />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />

      <ProductDetailModal product={activeProduct} onClose={closeProduct} />
    </>
  )
}

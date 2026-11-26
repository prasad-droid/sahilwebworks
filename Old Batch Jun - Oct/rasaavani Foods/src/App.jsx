import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import BrandStory from './components/BrandStory.jsx'
import Philosophy from './components/Philosophy.jsx'
import SignatureProduct from './components/SignatureProduct.jsx'
import Products from './components/Products.jsx'
import FoodHeritage from './components/FoodHeritage.jsx'
import Ingredients from './components/Ingredients.jsx'
import BrandPromise from './components/BrandPromise.jsx'
import GlobalVision from './components/GlobalVision.jsx'
import Community from './components/Community.jsx'
import Journey from './components/Journey.jsx'
import PartnerSection from './components/PartnerSection.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import useScrollReveal from './hooks/useScrollReveal.js'

export default function App() {
  useScrollReveal()

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to main content
      </a>

      <Navbar />

      <main id="content">
        <Hero />
        <BrandStory />
        <Philosophy />
        <SignatureProduct />
        <Products />
        <FoodHeritage />
        <Ingredients />
        <BrandPromise />
        <GlobalVision />
        <Community />
        <Journey />
        <PartnerSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

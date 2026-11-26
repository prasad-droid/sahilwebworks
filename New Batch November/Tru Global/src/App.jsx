import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import ProductCategories from './components/ProductCategories'
import WhyChooseUs from './components/WhyChooseUs'
import SourcingProcess from './components/SourcingProcess'
import PrivateLabel from './components/PrivateLabel'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <ProductCategories />
        <WhyChooseUs />
        <SourcingProcess />
        <PrivateLabel />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

import { useReveal } from './hooks/useReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import WhyChooseUs from './components/WhyChooseUs'
import InternationalTrade from './components/InternationalTrade'
import Inquiry from './components/Inquiry'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <InternationalTrade />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

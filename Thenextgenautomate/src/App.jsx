import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import Inquiry from './components/Inquiry'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'
import './styles/global.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyChooseUs />
        <Testimonials />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

export default App

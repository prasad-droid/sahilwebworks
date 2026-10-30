import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Punchlines from './components/Punchlines'
import About from './components/About'
import Services from './components/Services'
import Workflows from './components/Workflows'
import Process from './components/Process'
import Stack from './components/Stack'
import WhyChooseUs from './components/WhyChooseUs'
import OurPromise from './components/OurPromise'
import Inquiry from './components/Inquiry'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <a className="skip-link" href="#home">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <Punchlines />
        <About />
        <Services />
        <Workflows />
        <Process />
        <Stack />
        <WhyChooseUs />
        <OurPromise />
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

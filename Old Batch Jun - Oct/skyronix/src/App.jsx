import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Stats from './components/Stats.jsx'
import About from './components/About.jsx'
import VisionMission from './components/VisionMission.jsx'
import ProductCategories from './components/ProductCategories.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import GlobalReach from './components/GlobalReach.jsx'
import ExportProcess from './components/ExportProcess.jsx'
import OEMSection from './components/OEMSection.jsx'
import Partnership from './components/Partnership.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <VisionMission />
        <ProductCategories />
        <WhyChooseUs />
        <GlobalReach />
        <ExportProcess />
        <OEMSection />
        <Partnership />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import Turmeric from './components/Turmeric'
import ProductSpecifications from './components/ProductSpecifications'
import ProductCategories from './components/ProductCategories'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import ExportMarkets from './components/ExportMarkets'
import ExportProcess from './components/ExportProcess'
import VideoSection from './components/VideoSection'
import Testimonials from './components/Testimonials'
import EnquiryForm from './components/EnquiryForm'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <AboutUs />
        <Products />
        <Turmeric />
        <ProductSpecifications />
        <ProductCategories />
        <Services />
        <WhyChooseUs />
        <ExportMarkets />
        <ExportProcess />
        <VideoSection />
        <Testimonials />
        <EnquiryForm />
        <ContactUs />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}

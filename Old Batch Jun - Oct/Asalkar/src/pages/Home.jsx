import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import MissionVision from "../components/MissionVision.jsx";
import Products from "../components/Products.jsx";
import ProductFeatures from "../components/ProductFeatures.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Testimonials from "../components/Testimonials.jsx";
import InquiryForm from "../components/InquiryForm.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import { WhatsAppIcon } from "../components/icons.jsx";

const Home = () => (
  <main>
    <Header />
    <Hero />
    <About />
    <MissionVision />
    <Products />
    <ProductFeatures />
    <WhyChooseUs />
    <Testimonials />
    <InquiryForm />
    <Contact />
    <Footer />

    <a
      href="https://wa.me/917796319511?text=Hello%20Asalkaar%20Global%20Exim%2C%20I%20am%20interested%20in%20your%20Cotton%20Terry%20Towels."
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  </main>
);

export default Home;

import { MessageCircle } from "lucide-react";
import Header from "@/components/Header.jsx";
import Hero from "@/components/Hero.jsx";
import About from "@/components/About.jsx";
import MissionVision from "@/components/MissionVision.jsx";
import Services from "@/components/Services.jsx";
import Products from "@/components/Products.jsx";
import WhyChooseUs from "@/components/WhyChooseUs.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import InquiryForm from "@/components/InquiryForm.jsx";
import Contact from "@/components/Contact.jsx";
import Footer from "@/components/Footer.jsx";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Services />
      <Products />
      <WhyChooseUs />
      <Testimonials />
      <InquiryForm />
      <Contact />
    </main>
    <Footer />

    <a
      href="https://wa.me/917058020057"
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat with PRIKAL GLOBAL on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  </>
);

export default Home;

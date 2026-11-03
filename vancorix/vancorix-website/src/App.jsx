import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandHighlights from './components/BrandHighlights';
import AboutUs from './components/AboutUs';
import BusinessPortfolio from './components/BusinessPortfolio';
import SourcingCapabilities from './components/SourcingCapabilities';
import WhyChooseUs from './components/WhyChooseUs';
import GlobalTrade from './components/GlobalTrade';
import InquirySection from './components/InquirySection';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import './styles/global.css';

const App = () => {
  return (
    <div>
      {/* WhatsApp Button - fixed position */}
      <WhatsAppButton />

      {/* Back to Top button - fixed position */}
      <BackToTop />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Brand Highlights */}
      <BrandHighlights />

      {/* About Us */}
      <AboutUs />

      {/* Business Portfolio */}
      <BusinessPortfolio />

      {/* Sourcing Capabilities */}
      <SourcingCapabilities />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Global Trade */}
      <GlobalTrade />

      {/* Inquiry Section */}
      <InquirySection />

      {/* Contact Us */}
      <ContactUs />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
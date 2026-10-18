import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustIndicators from './components/TrustIndicators';
import AboutUs from './components/AboutUs';
import ProductsShowcase from './components/ProductsShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import ExportProcess from './components/ExportProcess';
import Testimonials from './components/Testimonials';
import InquiryForm from './components/InquiryForm';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main style={{ marginTop: '80px' }}>
        {/* Hero Banner Area */}
        <Hero />

        {/* trust indicators grid */}
        <TrustIndicators />

        {/* Corporate Profile / About Us */}
        <AboutUs />

        {/* Dynamic Products Catalog */}
        <ProductsShowcase />

        {/* Core Value Pillars */}
        <WhyChooseUs />

        {/* Export Workflow Journey Map */}
        <ExportProcess />

        {/* Client Testimonial Endorsements */}
        <Testimonials />

        {/* quotation Request Contact Portal */}
        <InquiryForm />

        {/* Location Map & Channels */}
        <Contact />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Fixed WhatsApp Support Access */}
      <FloatingWhatsApp />
    </>
  );
}

export default App;

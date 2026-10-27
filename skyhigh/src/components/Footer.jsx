import { Phone, Mail, MapPin } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img 
                src="/src/assets/logo.png" 
                alt="SkyHigh RP Global EXIM Enterprises Logo" 
                className="footer-logo-img"
                onError={(e) => {
                  e.target.src = '/src/assets/logo.jpeg';
                }}
              />
              <div className="footer-logo-text">
                <span className="footer-logo-name">SkyHigh RP Global</span>
                <span className="footer-logo-subtitle">EXIM Enterprises</span>
              </div>
            </div>
            <p className="footer-tagline">India's Quality. Your Global Source</p>
            <p className="footer-description">
              Sourcing from India for global business requirements. 
              Premium 100% cotton terry towels for international markets.
            </p>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')}>About Us</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Products</a></li>
              <li><a href="#process" onClick={(e) => handleNavClick(e, '#process')}>Export Process</a></li>
              <li><a href="#testimonials" onClick={(e) => handleNavClick(e, '#testimonials')}>Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Products</h3>
            <ul className="footer-links">
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Bath Towel</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Bath Sheet</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Bath Mat</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Face Towel</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Hand Towel</a></li>
              <li><a href="#products" onClick={(e) => handleNavClick(e, '#products')}>Kitchen Towel</a></li>
              <li><a href="#inquiry" onClick={(e) => handleNavClick(e, '#inquiry')}>Request a Quote</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Info</h3>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={16} />
                <a href="tel:+918177974851">+91 8177974851</a>
              </div>
              <div className="footer-contact-item">
                <Mail size={16} />
                <a href="mailto:salesexim@skyhighrp.com">salesexim@skyhighrp.com</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={16} />
                <span>G1204, Gulmohar Society, Dabhade Chowk, Charholi BK, Pune 412105, Maharashtra, India</span>
              </div>
            </div>
            <div style={{ marginTop: '1rem', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.123!2d73.858!3d18.605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM2JzE4LjAiTiA3M8KwNTEnMjguOCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%" 
                height="150" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="SkyHigh RP Global EXIM Enterprises Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} SkyHigh RP Global EXIM Enterprises. All rights reserved. | <a href="https://www.sahilwebworks.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>designed By SahilWebWorks</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

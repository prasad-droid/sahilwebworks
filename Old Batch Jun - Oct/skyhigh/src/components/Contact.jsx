import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import '../styles/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <h2>Contact SkyHigh RP Global EXIM Enterprises</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <Phone className="contact-icon" size={24} />
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+918177974851">+91 8177974851</a>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" size={24} />
              <div className="contact-details">
                <h3>Email</h3>
                <a href="mailto:salesexim@skyhighrp.com">salesexim@skyhighrp.com</a>
              </div>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" size={24} />
              <div className="contact-details">
                <h3>Office</h3>
                <p>
                  G1204, Gulmohar Society, Dabhade Chowk,<br />
                  Charholi BK, Pune 412105,<br />
                  Maharashtra, India.
                </p>
              </div>
            </div>
            <div className="contact-item">
              <MessageCircle className="contact-icon" size={24} />
              <div className="contact-details">
                <h3>Global Export Markets</h3>
                <p>Worldwide, Mauritius</p>
                <a 
                  href="https://wa.me/918177974851" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-whatsapp"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <p style={{ fontSize: '0.75rem', marginTop: '0.5rem', color: '#666' }}>
                  *WhatsApp number to be verified with business owner
                </p>
              </div>
            </div>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps?q=G1204%2C%20Gulmohar%20Society%2C%20Dabhade%20Chowk%2C%20Charholi%20BK%2C%20Pune%20412105%2C%20Maharashtra%2C%20India&output=embed"
              title="SkyHigh RP Global EXIM Enterprises Office Location - Pune, Maharashtra, India"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

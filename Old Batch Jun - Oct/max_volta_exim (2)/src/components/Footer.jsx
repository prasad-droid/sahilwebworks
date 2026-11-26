import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <div className="footer-brand">
              <img src="/logo/logo_2.png" alt="Max Volta Exim Logo" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">
              {t('footer.tagline')}
            </p>
            <div className="footer-social-wrapper">
              <span className="footer-social-label">{t('footer.followUs')}</span>
              <div className="footer-social-links">
                <a 
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=l312hdw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn instagram"
                  aria-label="Max Volta Exim on Instagram"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://www.linkedin.com/company/max-volta-exim/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn linkedin"
                  aria-label="Max Volta Exim on LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
                <a 
                  href="https://www.facebook.com/share/1CDDKgqSJK/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="footer-social-btn facebook"
                  aria-label="Max Volta Exim on Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t('footer.quickLinks')}</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>{t('nav.home')}</a>
              </li>
              <li className="footer-link-item">
                <a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>{t('nav.about')}</a>
              </li>
              <li className="footer-link-item">
                <a href="#products" onClick={(e) => handleScrollTo(e, 'products')}>{t('nav.products')}</a>
              </li>
              <li className="footer-link-item">
                <a href="#testimonials" onClick={(e) => handleScrollTo(e, 'testimonials')}>{t('nav.testimonials')}</a>
              </li>
              <li className="footer-link-item">
                <a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>{t('nav.contact')}</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>{t('footer.contactDetails')}</h3>
            <div className="footer-contact-details">
              <div className="footer-contact-row">
                <FaMapMarkerAlt />
                <span>{t('footer.address')}</span>
              </div>
              <div className="footer-contact-row">
                <FaPhoneAlt />
                <a href="tel:+918850272125" style={{ color: 'inherit', textDecoration: 'none' }}>+91 88502 72125</a>
              </div>
              <div className="footer-contact-row">
                <FaEnvelope />
                <a href="mailto:info@maxvoltaexim.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@maxvoltaexim.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <p>{t('footer.copyright')}</p>
          <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            {t('footer.designedBy')} <a href="https://sahilwebworks.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600 }}>SahilWebWorks</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

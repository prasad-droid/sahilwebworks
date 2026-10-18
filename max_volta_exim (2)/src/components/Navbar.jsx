import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { t } = useLanguage();

  // Handle scroll effect for navbar height and shadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'products', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
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
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, 'home')}>
          <img src="/logo/logo_2.png" alt="Max Volta Exim Logo" className="nav-logo-img" />
        </a>

        {/* Mobile controls: language selector + toggle button */}
        <div className="nav-mobile-controls mobile-only">
          <LanguageSelector isMobile={true} />
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle Navigation">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <a 
              href="#home" 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'home')}
            >
              {t('nav.home')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'about')}
            >
              {t('nav.about')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#products" 
              className={`nav-link ${activeSection === 'products' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'products')}
            >
              {t('nav.products')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#testimonials" 
              className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'testimonials')}
            >
              {t('nav.testimonials')}
            </a>
          </li>
          <li className="nav-item">
            <a 
              href="#contact" 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, 'contact')}
            >
              {t('nav.contact')}
            </a>
          </li>
          <li className="nav-item mobile-only" style={{ marginTop: '0.5rem', width: '100%' }}>
            <a 
              href="#inquiry" 
              className="btn btn-primary" 
              style={{ width: '100%', display: 'flex' }}
              onClick={(e) => handleNavClick(e, 'inquiry')}
            >
              {t('nav.getQuote')}
            </a>
          </li>
          <li className="nav-item mobile-only" style={{ width: '100%', marginTop: '0.8rem' }}>
            <div className="nav-mobile-socials">
              <a 
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=l312hdw" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-social-btn instagram"
                aria-label="Max Volta Exim on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://www.linkedin.com/company/max-volta-exim/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-social-btn linkedin"
                aria-label="Max Volta Exim on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a 
                href="https://www.facebook.com/share/1CDDKgqSJK/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-social-btn facebook"
                aria-label="Max Volta Exim on Facebook"
              >
                <FaFacebookF />
              </a>
            </div>
          </li>
        </ul>

        <div className="nav-cta desktop-only">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <LanguageSelector isMobile={false} />
            <a 
              href="#inquiry" 
              className="btn btn-primary"
              onClick={(e) => handleNavClick(e, 'inquiry')}
            >
              {t('nav.getQuote')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

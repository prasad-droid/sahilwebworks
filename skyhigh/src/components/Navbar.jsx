import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Export Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={(e) => handleNavClick(e, '#home')}>
          <img 
            src="/src/assets/logo.png" 
            alt="SkyHigh RP Global EXIM Enterprises Logo" 
            className="navbar-logo-img"
            onError={(e) => {
              e.target.src = '/src/assets/logo.jpeg';
            }}
          />
          <div className="navbar-logo-text">
            <span>SkyHigh RP Global</span>
            <span className="navbar-logo-subtitle">EXIM Enterprises</span>
          </div>
        </a>

        <div className="navbar-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#inquiry"
            className="navbar-cta"
            onClick={(e) => handleNavClick(e, '#inquiry')}
          >
            Request a Quote
          </a>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="navbar-mobile-link"
            onClick={(e) => handleNavClick(e, link.href)}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#inquiry"
          className="navbar-mobile-cta"
          onClick={(e) => handleNavClick(e, '#inquiry')}
        >
          Request a Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

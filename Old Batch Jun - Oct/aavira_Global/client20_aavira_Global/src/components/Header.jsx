export default function Header({ isScrolled, activeSection, isMenuOpen, setIsMenuOpen, lang, setLang, t, handleNavClick }) {
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
      <div className="header-top-bar">
        <div className="container">
          <div className="top-bar-left">
            <span className="top-bar-link">
              <i className="fa-solid fa-location-dot"></i> {t('topBar.location')}
            </span>
            <a href="tel:+917304066350" className="top-bar-link">
              <i className="fa-solid fa-phone"></i> +91 7304066350
            </a>
            <a href="mailto:info@aaviraglobalaxis.com" className="top-bar-link">
              <i className="fa-solid fa-envelope"></i> info@aaviraglobalaxis.com
            </a>
          </div>
          <div className="top-bar-right">
            <div className="lang-switcher">
              <i className="fa-solid fa-globe" style={{ color: 'var(--accent-green)' }}></i>
              <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>ENG</button>
              <span className="lang-divider">|</span>
              <button className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>हिन्दी</button>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main-nav">
        <div className="container">
          <a href="#home" className="logo-container" id="logo-link" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
            <div className="logo-icon">
              <img src="/logo.jpg" alt="Aavira Global Axis Logo" className="logo-img-file" />
            </div>
            <div className="logo-text">
              <span className="logo-brand">Aavira Global Axis<sup>TM</sup> </span>
              <span className='green' style={{ color: "green" }}>{t('topBar.tagline')}</span>
            </div>
          </a>

          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="nav-menu">
            <a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>{t('nav.home')}</a>
            <a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>{t('nav.about')}</a>
            <a href="#products" className={`nav-link ${activeSection === 'products' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}>{t('nav.products')}</a>
            <a href="#quality" className={`nav-link ${activeSection === 'quality' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('quality'); }}>{t('nav.certifications')}</a>
            <a href="#why-choose-us" className={`nav-link ${activeSection === 'why-choose-us' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('why-choose-us'); }}>{t('nav.whyChooseUs')}</a>
            <a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>{t('nav.contact')}</a>
            <a href="#faq" className={`nav-link ${activeSection === 'faq' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); handleNavClick('faq'); }}>{t('nav.faq')}</a>
            <a href="#contact" className="btn btn-accent nav-cta-mobile" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>{t('nav.requestQuote')}</a>
          </nav>

          <button className="hamburger" id="hamburger-menu" aria-label="Toggle navigation menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span style={{ transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none', transition: 'var(--transition-normal)' }}></span>
            <span style={{ opacity: isMenuOpen ? '0' : '1', transition: 'var(--transition-normal)' }}></span>
            <span style={{ transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none', transition: 'var(--transition-normal)' }}></span>
          </button>
        </div>
      </div>
    </header>
  );
}

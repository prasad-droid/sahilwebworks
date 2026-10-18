import React from 'react';
import { FaWhatsapp, FaArrowRight, FaEnvelope } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
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

  const whatsappMessage = encodeURIComponent(t('whatsappMsg'));

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content reveal slide-up">
            <span className="hero-subtitle">{t('hero.subtitle')}</span>
            <h1>{t('hero.title')}</h1>
            <p className="hero-description">
              {t('hero.description')}
            </p>
            <div className="hero-ctas">
              <a 
                href="#inquiry" 
                className="btn btn-primary" 
                onClick={(e) => handleScrollTo(e, 'inquiry')}
              >
                {t('hero.getQuote')} <FaArrowRight />
              </a>
              <a 
                href="#inquiry" 
                className="btn btn-secondary"
                onClick={(e) => handleScrollTo(e, 'inquiry')}
              >
                {t('hero.sendEnquiry')} <FaEnvelope />
              </a>
              <a 
                href={`https://wa.me/918850272125?text=${whatsappMessage}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <FaWhatsapp /> {t('hero.whatsappUs')}
              </a>
            </div>
          </div>
          <div className="hero-image-wrapper reveal slide-left">
            <div className="hero-image-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=600&q=80" 
              alt="Global Export Logistics Shipping Containers" 
              className="hero-img"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

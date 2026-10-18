import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="section section-light">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('testimonials.badge')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </div>

        <div className="testimonial-container reveal slide-up">
          <div className="testimonial-card">
            <FaQuoteLeft className="testimonial-quote-icon" />
            <p className="testimonial-text">
              {t('testimonials.quote')}
            </p>
            <div className="testimonial-author">
              <span className="testimonial-name">{t('testimonials.company')}</span>
              <span className="testimonial-role">{t('testimonials.role')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

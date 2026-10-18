import React from 'react';
import { FaEye, FaBullseye } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section section-light">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('about.badge')}</h2>
          <p>{t('about.subtitle')}</p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal slide-up">
            <h3>{t('about.companyName')}</h3>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>

            <div className="about-highlights">
              <div className="highlight-box">
                <h4>
                  <FaEye className="highlight-icon" /> {t('about.visionTitle')}
                </h4>
                <p>{t('about.visionDesc')}</p>
              </div>

              <div className="highlight-box">
                <h4>
                  <FaBullseye className="highlight-icon" /> {t('about.missionTitle')}
                </h4>
                <p>{t('about.missionDesc')}</p>
              </div>
            </div>
          </div>

          <div className="about-image-column reveal slide-left">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80" 
              alt="Max Volta Exim Logistics Warehouse Operations" 
              className="about-img-frame"
              loading="lazy"
            />
            <div className="about-stats">
              <div className="stat-num">{t('about.statNum')}</div>
              <div className="stat-desc">{t('about.statDesc')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

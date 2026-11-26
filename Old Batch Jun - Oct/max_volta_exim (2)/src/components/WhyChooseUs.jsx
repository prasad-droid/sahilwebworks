import React from 'react';
import { FaBriefcase, FaShieldAlt, FaDollarSign, FaTruckMoving, FaUserCheck, FaChartLine } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const icons = [
    <FaBriefcase />,
    <FaShieldAlt />,
    <FaDollarSign />,
    <FaTruckMoving />,
    <FaUserCheck />,
    <FaChartLine />
  ];

  const items = t('whyChooseUs.items') || [];

  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('whyChooseUs.badge')}</h2>
          <p>{t('whyChooseUs.subtitle')}</p>
        </div>

        <div className="why-grid">
          {Array.isArray(items) && items.map((point, index) => (
            <div 
              key={index} 
              className="why-card reveal slide-up"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="why-icon-box">
                {icons[index % icons.length]}
              </div>
              <h3>{point.title}</h3>
              <p>{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

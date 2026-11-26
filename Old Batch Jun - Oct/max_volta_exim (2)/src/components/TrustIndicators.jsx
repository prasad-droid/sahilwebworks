import React from 'react';
import { FaGlobe, FaAward, FaShip, FaHandshake } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const TrustIndicators = () => {
  const { t } = useLanguage();

  const indicators = [
    {
      icon: <FaGlobe />,
      title: t('trust.reachTitle'),
      description: t('trust.reachDesc')
    },
    {
      icon: <FaAward />,
      title: t('trust.qualityTitle'),
      description: t('trust.qualityDesc')
    },
    {
      icon: <FaShip />,
      title: t('trust.logisticsTitle'),
      description: t('trust.logisticsDesc')
    },
    {
      icon: <FaHandshake />,
      title: t('trust.satisfactionTitle'),
      description: t('trust.satisfactionDesc')
    }
  ];

  return (
    <section className="section" style={{ paddingBottom: '40px' }}>
      <div className="container">
        <div className="trust-grid">
          {indicators.map((item, index) => (
            <div 
              key={index} 
              className={`trust-card reveal slide-up delay-${(index + 1) * 100}`}
            >
              <div className="trust-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;

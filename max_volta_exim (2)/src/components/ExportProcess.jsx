import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ExportProcess = () => {
  const { t } = useLanguage();
  const steps = t('exportProcess.steps') || [];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('exportProcess.badge')}</h2>
          <p>{t('exportProcess.subtitle')}</p>
        </div>

        <div className="timeline-container">
          {Array.isArray(steps) && steps.map((step, index) => (
            <div 
              key={index} 
              className={`timeline-item reveal ${index % 2 === 0 ? 'slide-right' : 'slide-left'}`}
            >
              <div className="timeline-badge">
                {step.stepNum}
              </div>
              <div className="timeline-content-box">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;

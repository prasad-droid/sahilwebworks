import { CERTIFICATIONS } from '../data/siteData';

export default function QualitySection({ t }) {
  return (
    <section className="section quality-section" id="quality" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('quality.badge')}</span>
          <h2 className="section-title">
            {t('quality.title').split('&')[0].trim()} {localStorage['lang'] == 'hi' ? '' : <span>& </span>}{t('quality.title').split('&')[1]?.trim()}
            </h2>
          <p className="section-desc">{t('quality.desc')}</p>
        </div>

        <div className="quality-checklist">
          {t('quality.items').map((item, idx) => (
            <div key={idx} className="quality-check-item">
              <i className="fa-solid fa-circle-check"></i>
              <div>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications-marquee-wrapper">
          <div className="marquee-container">
            <div className="marquee-track">
              {[...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, idx) => (
                <div key={idx} className="cert-logo-card">
                  <div className="cert-logo-img-wrapper">
                    <img src={cert.logo} alt={cert.title} className="cert-logo-img" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

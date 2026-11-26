export default function WhyChooseUsSection({ t }) {
  return (
    <section className="section" id="why-choose-us" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('whyChooseUs.badge')}</span>
          <h2 className="section-title">{t('whyChooseUs.title').split(' ').slice(0, -2).join(' ')} <span>{t('whyChooseUs.title').split(' ').slice(-2).join(' ')}</span></h2>
          <p className="section-desc">{t('whyChooseUs.desc')}</p>
        </div>

        <div className="features-grid">
          {t('whyChooseUs.features').map((feature, idx) => (
            <div key={idx} className="feature-card glass-card">
              <div className="feature-icon-wrapper"><i className={`fa-solid ${['fa-medal', 'fa-handshake', 'fa-tags', 'fa-cubes', 'fa-box-open', 'fa-globe', 'fa-headset', 'fa-clock', 'fa-network-wired'][idx]}`}></i></div>
              <h4>{feature.title}</h4>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

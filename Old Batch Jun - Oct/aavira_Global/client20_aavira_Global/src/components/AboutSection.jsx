export default function AboutSection({ t }) {
  return (
    <section className="section" id="about" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('about.badge')}</span>
          <h2 className="section-title">{t('about.title').split(',').slice(0, -1).join(',') + ','} <span>{t('about.title').split(',').pop()}</span></h2>
          <p className="section-desc">{t('about.desc')}</p>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <h3>{t('about.whoWeAre')}</h3>
            <p>{t('about.whoWeAreP1')}</p>
            <p>{t('about.whoWeAreP2')}</p>
            <a href="#contact" className="btn btn-primary">{t('about.connectWithUs')}</a>
          </div>

          <div className="about-cards">
            <div className="about-card mission glass-card">
              <div className="about-card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h4>{t('about.mission')}</h4>
              <p>{t('about.missionDesc')}</p>
            </div>

            <div className="about-card vision glass-card">
              <div className="about-card-icon"><i className="fa-solid fa-eye"></i></div>
              <h4>{t('about.vision')}</h4>
              <p>{t('about.visionDesc')}</p>
            </div>
          </div>
        </div>

        <div className="values-container">
          <h3 className="values-title">{t('about.coreValues')}</h3>
          <div className="values-grid">
            <div className="value-card glass-card">
              <div className="value-icon"><i className="fa-solid fa-handshake-angle"></i></div>
              <h5>{t('about.integrity')}</h5>
              <p>{t('about.integrityDesc')}</p>
            </div>
            <div className="value-card glass-card">
              <div className="value-icon"><i className="fa-solid fa-award"></i></div>
              <h5>{t('about.qualityCommitment')}</h5>
              <p>{t('about.qualityCommitmentDesc')}</p>
            </div>
            <div className="value-card glass-card">
              <div className="value-icon"><i className="fa-solid fa-user-tie"></i></div>
              <h5>{t('about.customerFirst')}</h5>
              <p>{t('about.customerFirstDesc')}</p>
            </div>
            <div className="value-card glass-card">
              <div className="value-icon"><i className="fa-solid fa-hourglass-half"></i></div>
              <h5>{t('about.longTermRelations')}</h5>
              <p>{t('about.longTermRelationsDesc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

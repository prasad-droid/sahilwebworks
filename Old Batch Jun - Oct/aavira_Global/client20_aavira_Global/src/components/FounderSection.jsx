export default function FounderSection({ t, lang }) {
  return (
    <section className="section founder-section" id="founder" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="founder-container-centered">
          <span className="section-badge">{t('founder.badge')}</span>
          <h2 className="section-title">{t('founder.title').split(' ').slice(0, -1).join(' ')} <span>{t('founder.title').split(' ').pop()}</span></h2>
          <p className="section-desc"><b>{t('founder.subtitle')} </b></p>

          <div className="founder-quote-card align-center">
            <span className="founder-quote"></span> &nbsp;
              <span style={{textAlign:"center",fontSize:"1.4rem"}}>{t('founder.quote')}</span>
            <span className="founder-quote"></span>
            <div className="founder-signature">
              <h4>Mahesh Mangaonkar</h4>
              <p>Founder</p>
            </div>
          </div>

          <div className="founder-story-text">
            <div>
              <p className="founder-story-p" style={{color : "var(--primary-blue)"}}><strong>{t('founder.greeting')}</strong></p>
              <p className="founder-story-p">{t('founder.p1')}</p>
              <p className="founder-story-p">{t('founder.p2')}</p>
            </div>
            <div>
              <p className="founder-story-p">{t('founder.p3')}</p>
              <p className="founder-story-p">{t('founder.p4')}</p>
              <p className="founder-story-p">{t('founder.p5')}</p>
            </div>
          </div>

          <div className="founder-promise-section" style={{ marginTop: '50px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-blue)', fontFamily: 'Outfit', marginBottom: '30px' }}>{t('founder.promiseTitle')}</h3>
            <div className="founder-promise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
              {t('founder.promiseItems').map((item, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <i className="fa-solid fa-circle-check" style={{ color: 'var(--accent-green)', fontSize: '1.2rem', flexShrink: 0 }}></i>
                  <span style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-dark)' }}>{item}</span>
                </div>
              ))}
            </div>
            <div className="founder-association">
              <i className="fa-solid fa-globe"></i>
              {lang === 'hi' ? (
                <p style={{fontSize:"18px",fontWeight:600,color:"var(--primary-blue)"}}>{t('founder.promiseClosing')}</p>
              ) : (
                <p style={{fontSize:"18px",fontWeight:600}}>{t('founder.promiseClosing')} <span style={{color:"var(--primary-blue)"}}>We Deliver Trust Worldwide.</span></p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

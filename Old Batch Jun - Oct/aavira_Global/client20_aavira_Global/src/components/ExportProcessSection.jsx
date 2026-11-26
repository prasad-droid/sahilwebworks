export default function ExportProcessSection({ activeSteps, timelineHeight, t }) {
  return (
    <section className="section" id="export-process" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('exportProcess.badge')}</span>
          <h2 className="section-title">{t('exportProcess.title').split(' ').slice(0, -2).join(' ')} <span>{t('exportProcess.title').split(' ').slice(-2).join(' ')}</span></h2>
          <p className="section-desc">{t('exportProcess.desc')}</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-progress" style={{ height: `${timelineHeight}%` }}></div>

          <div className={`timeline-step ${activeSteps[0] ? 'active' : ''}`}>
            <div className="timeline-node">1</div>
            <div className="timeline-content-box glass-card">
              <span className="timeline-step-num">{t('exportProcess.steps.0.num')}</span>
              <h4>{t('exportProcess.steps.0.title')}</h4>
              <p>{t('exportProcess.steps.0.desc')}</p>
            </div>
          </div>

          <div className={`timeline-step ${activeSteps[1] ? 'active' : ''}`}>
            <div className="timeline-node">2</div>
            <div className="timeline-content-box glass-card">
              <span className="timeline-step-num">{t('exportProcess.steps.1.num')}</span>
              <h4>{t('exportProcess.steps.1.title')}</h4>
              <p>{t('exportProcess.steps.1.desc')}</p>
            </div>
          </div>

          <div className={`timeline-step ${activeSteps[2] ? 'active' : ''}`}>
            <div className="timeline-node">3</div>
            <div className="timeline-content-box glass-card">
              <span className="timeline-step-num">{t('exportProcess.steps.2.num')}</span>
              <h4>{t('exportProcess.steps.2.title')}</h4>
              <p>{t('exportProcess.steps.2.desc')}</p>
            </div>
          </div>

          <div className={`timeline-step ${activeSteps[3] ? 'active' : ''}`}>
            <div className="timeline-node">4</div>
            <div className="timeline-content-box glass-card">
              <span className="timeline-step-num">{t('exportProcess.steps.3.num')}</span>
              <h4>{t('exportProcess.steps.3.title')}</h4>
              <p>{t('exportProcess.steps.3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

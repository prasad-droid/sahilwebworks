export default function FAQSection({ translatedFaqItems, openFaq, setOpenFaq, t }) {
  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <span style={{ fontSize: "38px" }}>{t('nav.faq')}</span>
          </span>
          <p className="section-desc">{t('faq.desc')}</p>
        </div>

        <div className="faq-container">
          {translatedFaqItems.map((item, idx) => (
            <div key={idx} className={`faq-item ${openFaq === idx ? 'active' : ''}`}>
              <button className="faq-header" onClick={() => setOpenFaq(prev => prev === idx ? null : idx)}>
                <span className="faq-question">{item.q}</span>
                <span className="faq-icon"><i className={`fa-solid ${openFaq === idx ? 'fa-xmark' : 'fa-plus'}`}></i></span>
              </button>
              <div className="faq-body" style={{ maxHeight: openFaq === idx ? '200px' : '0px' }}>
                <div className="faq-content">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

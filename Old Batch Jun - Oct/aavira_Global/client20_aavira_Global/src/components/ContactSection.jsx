import { forwardRef } from 'react';

const ContactSection = forwardRef(function ContactSection({
  formProduct, setFormProduct,
  formName, setFormName,
  formCompany, setFormCompany,
  formCountry, setFormCountry,
  formEmail, setFormEmail,
  formPhone, setFormPhone,
  formQty, setFormQty,
  formMessage, setFormMessage,
  handleFormSubmit,
  t
}, ref) {
  return (
    <section className="section quote-section" id="contact" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('contact.badge')}</span>
          <h2 className="section-title">
            {localStorage['lang'] === 'hi' ? (
              t('contact.title')
            ) : (
              <>
                {t('contact.title').split(' with ')[0]} <span> with {t('contact.title').split(' with ')[1]}</span>
              </>
            )}
          </h2>
          <p className="section-desc">{t('contact.desc')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-container">
            <div className="quote-info">
              <span className="section-badge">{t('quote.badge')}</span>
              <h3 className="section-title" style={{ textAlign: 'left', marginBottom: '24px' }}>{t('quote.title').split(' ').slice(0, -1).join(' ')} <span>{t('quote.title').split(' ').pop()}</span></h3>
              <p>{t('quote.desc')}</p>

              <div className="quote-benefits">
                <div className="q-benefit-item">
                  <div className="q-benefit-icon"><i className="fa-solid fa-bolt"></i></div>
                  <div>
                    <h5>{t('quote.benefits.0.title')}</h5>
                    <p>{t('quote.benefits.0.desc')}</p>
                  </div>
                </div>
                <div className="q-benefit-item">
                  <div className="q-benefit-icon"><i className="fa-solid fa-box-open"></i></div>
                  <div>
                    <h5>{t('quote.benefits.1.title')}</h5>
                    <p>{t('quote.benefits.1.desc')}</p>
                  </div>
                </div>
                <div className="q-benefit-item">
                  <div className="q-benefit-icon"><i className="fa-solid fa-globe"></i></div>
                  <div>
                    <h5>{t('quote.benefits.2.title')}</h5>
                    <p>{t('quote.benefits.2.desc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quote-form-card glass-card">
            <h4>{t('quote.formTitle')}</h4>
            <form id="commercial-quote-form" onSubmit={handleFormSubmit} noValidate>
              <div className="form-group">
                <input type="text" id="form-name" className="form-input" placeholder=" " value={formName} onChange={(e) => setFormName(e.target.value)} required />
                <label htmlFor="form-name" className="form-label">{t('quote.fields.name')}</label>
              </div>

              <div className="form-group">
                <input type="text" id="form-company" className="form-input" placeholder=" " value={formCompany} onChange={(e) => setFormCompany(e.target.value)} required />
                <label htmlFor="form-company" className="form-label">{t('quote.fields.company')}</label>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <input type="text" id="form-country" className="form-input" placeholder=" " value={formCountry} onChange={(e) => setFormCountry(e.target.value)} required />
                  <label htmlFor="form-country" className="form-label">{t('quote.fields.country')}</label>
                </div>
                <div className="form-group">
                  <input type="email" id="form-email" className="form-input" placeholder=" " value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />
                  <label htmlFor="form-email" className="form-label">{t('quote.fields.email')}</label>
                </div>
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <input type="tel" id="form-phone" className="form-input" placeholder=" " value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required />
                  <label htmlFor="form-phone" className="form-label">{t('quote.fields.phone')}</label>
                </div>
                <div className="form-group">
                  <select id="form-product" className={`form-input ${formProduct !== '' ? 'has-value' : ''}`} value={formProduct} onChange={(e) => setFormProduct(e.target.value)} required>
                    <option value="" disabled hidden></option>
                    <option value="Turmeric Fingers (Double Polished)">{t('quote.productOptions.turmeric')}</option>
                    <option value="Dry Fruits (Raisins, Almonds & Cashews)">{t('quote.productOptions.dryFruits')}</option>
                    <option value="Vermicompost (Organic Fertilizer)">{t('quote.productOptions.vermicompost')}</option>
                    <option value="Multiple Products / General Trade">{t('quote.productOptions.multiple')}</option>
                  </select>
                  <label htmlFor="form-product" className="form-label">{t('quote.fields.product')}</label>
                </div>
              </div>

              <div className="form-group">
                <input type="text" id="form-qty" className="form-input" placeholder=" " value={formQty} onChange={(e) => setFormQty(e.target.value)} required />
                <label htmlFor="form-qty" className="form-label">{t('quote.fields.qty')}</label>
              </div>

              <div className="form-group">
                <textarea id="form-message" className="form-input" placeholder=" " value={formMessage} onChange={(e) => setFormMessage(e.target.value)} required></textarea>
                <label htmlFor="form-message" className="form-label">{t('quote.fields.message')}</label>
              </div>

              <button type="submit" className="btn btn-accent form-submit-btn" id="submit-quote-btn">
                <span>{t('quote.submitBtn')}</span> <i className="fa-solid fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        <div className="contact-cards-stack">
          <div className="contact-detail-card glass-card">
            <div className="contact-detail-icon"><i className="fa-solid fa-phone"></i></div>
            <div className="contact-detail-content">
              <h5>{t('contact.phone')}</h5>
              <a href="tel:+917304066350">+91 7304066350</a>
            </div>
          </div>

          <div className="contact-detail-card glass-card">
            <div className="contact-detail-icon"><i className="fa-solid fa-envelope"></i></div>
            <div className="contact-detail-content">
              <h5>{t('contact.email')}</h5>
              <a href="mailto:info@aaviraglobalaxis.com">info@aaviraglobalaxis.com</a>
            </div>
          </div>

          <div className="contact-detail-card glass-card">
            <div className="contact-detail-icon"><i className="fa-solid fa-location-dot"></i></div>
            <div className="contact-detail-content">
              <h5>{t('contact.location')}</h5>
              <p>{t('topBar.location')}</p>
            </div>
          </div>
        </div>

        <div className="contact-btn-group">
          <a href="https://wa.me/917304066350?text=Hi%20Aavira%20Global%20Axis,%20I%20am%20interested%20in%20your%20agro%20export%20products." target="_blank" rel="noopener noreferrer" className="btn btn-accent"><i className="fa-brands fa-whatsapp"></i> {t('contact.whatsapp')}</a>
          <a href="mailto:info@aaviraglobalaxis.com?subject=Export Inquiry" className="btn btn-primary"><i className="fa-solid fa-envelope"></i> {t('contact.emailInquiry')}</a>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;

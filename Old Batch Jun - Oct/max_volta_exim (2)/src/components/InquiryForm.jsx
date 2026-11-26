import React, { useState } from 'react';
import { FaCheckCircle, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const InquiryForm = () => {
  const { t, products } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    country: '',
    email: '',
    phone: '',
    whatsapp: '',
    product: '',
    quantity: '',
    destination: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const messageText = `*New Quotation Request - Max Volta Exim*

*Name:* ${formData.name}
*Company:* ${formData.companyName}
*Country:* ${formData.country}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*WhatsApp:* ${formData.whatsapp || 'N/A'}
*Product:* ${formData.product}
*Quantity:* ${formData.quantity}
*Destination Port:* ${formData.destination}
*Requirements:* ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/918850272125?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
    
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        companyName: '',
        country: '',
        email: '',
        phone: '',
        whatsapp: '',
        product: '',
        quantity: '',
        destination: '',
        notes: ''
      });
    }, 4000);
  };

  const bullets = t('inquiry.bullets') || [];

  return (
    <section id="inquiry" className="section">
      <div className="container">
        <div className="inquiry-grid">
          <div className="inquiry-text-column reveal slide-up">
            <h3>{t('inquiry.title')}</h3>
            <p>{t('inquiry.subtitle')}</p>
            
            <ul className="inquiry-bullets">
              {Array.isArray(bullets) && bullets.map((bullet, idx) => (
                <li key={idx}>
                  <FaCheckCircle className="inquiry-bullet-icon" /> {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="inquiry-card reveal slide-left">
            {submitted ? (
              <div className="form-success-message">
                <FaCheckCircle style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--accent)' }} />
                <h3>{t('inquiry.successTitle')}</h3>
                <p style={{ margin: '1rem 0 0 0', color: 'inherit' }}>
                  {t('inquiry.successDesc')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="inquiry-form">
                <div className="form-group">
                  <label htmlFor="name">{t('inquiry.labels.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="companyName">{t('inquiry.labels.company')}</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="form-input"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">{t('inquiry.labels.country')}</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="form-input"
                    value={formData.country}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">{t('inquiry.labels.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('inquiry.labels.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="whatsapp">{t('inquiry.labels.whatsapp')}</label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="form-input"
                    placeholder={t('inquiry.labels.whatsappPlaceholder')}
                    value={formData.whatsapp}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="product">{t('inquiry.labels.product')}</label>
                  <select
                    id="product"
                    name="product"
                    className="form-input"
                    value={formData.product}
                    onChange={handleChange}
                    required
                  >
                    <option value="">{t('inquiry.labels.selectProduct')}</option>
                    {products.map(p => (
                      <option key={p.id} value={p.name}>{p.name}</option>
                    ))}
                    <option value="Other Sourcing Request">{t('inquiry.labels.otherProduct')}</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">{t('inquiry.labels.quantity')}</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="form-input"
                    placeholder={t('inquiry.labels.quantityPlaceholder')}
                    value={formData.quantity}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="destination">{t('inquiry.labels.destination')}</label>
                  <input
                    type="text"
                    id="destination"
                    name="destination"
                    className="form-input"
                    placeholder={t('inquiry.labels.destinationPlaceholder')}
                    value={formData.destination}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group form-group-full">
                  <label htmlFor="notes">{t('inquiry.labels.notes')}</label>
                  <textarea
                    id="notes"
                    name="notes"
                    className="form-input"
                    rows="4"
                    placeholder={t('inquiry.labels.notesPlaceholder')}
                    value={formData.notes}
                    onChange={handleChange}
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit-btn">
                  {t('inquiry.labels.submitBtn')} <FaPaperPlane />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;

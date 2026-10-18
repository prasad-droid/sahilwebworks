import React, { useState, useEffect } from 'react';
import { FaTimes, FaGlobe, FaBox, FaShoppingBag, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const ProductModal = ({ product, onClose }) => {
  const { t } = useLanguage();
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    quantity: ''
  });

  // Lock body scroll when modal is open, and unlock when closed
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  if (!product) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const messageText = `*Product Inquiry - Max Volta Exim*

*Product:* ${product.name}
*Category:* ${product.category}
*Buyer Name:* ${formData.name}
*Email:* ${formData.email}
*Quantity Required:* ${formData.quantity}`;

    const whatsappUrl = `https://wa.me/918850272125?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp chat in a new tab
    window.open(whatsappUrl, '_blank');
    
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setFormData({ name: '', email: '', quantity: '' });
      onClose();
    }, 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label={t('productModal.closeModal')}>
          <FaTimes />
        </button>
        
        <div className="modal-body-grid">
          <div className="modal-img-column">
            <div className="modal-img-container">
              <img src={product.image} alt={product.name} className="modal-img" />
            </div>
            <div className="modal-img-badge">
              <span>{product.category}</span>
            </div>
          </div>
          
          <div className="modal-info-column">
            <div className="modal-header-area">
              <span className="modal-tag">{product.category}</span>
              <h2>{product.name}</h2>
              <p className="modal-desc">{product.description}</p>
            </div>
            
            <div className="modal-specs-section">
              <div className="modal-specs-header">
                <h3 className="modal-specs-title">
                  <FaBox className="specs-header-icon" /> {t('productModal.specsTitle')}
                </h3>
              </div>
              <div className="modal-specs-table">
                {product.specifications && Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="modal-spec-row">
                    <span className="modal-spec-label">{key}</span>
                    <div className="modal-spec-value">
                      {typeof val === 'string' && val.includes('\n') ? (
                        <div className="modal-spec-items-list">
                          {val.split('\n').map((line, idx) => (
                            <span key={idx} className="modal-spec-pill">
                              {line}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span>{val}</span>
                      )}
                    </div>
                  </div>
                ))}
                {product.sizes && (
                  <div className="modal-spec-row">
                    <span className="modal-spec-label">{t('productModal.sizesLabel')}</span>
                    <div className="modal-spec-value">
                      <span>{product.sizes}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="modal-trade-grid">
              <div className="modal-trade-card">
                <div className="trade-icon-wrapper">
                  <FaShoppingBag className="trade-icon" />
                </div>
                <div className="trade-info">
                  <h4>{t('productModal.moqLabel')}</h4>
                  <p>{product.moq}</p>
                </div>
              </div>
              
              <div className="modal-trade-card">
                <div className="trade-icon-wrapper">
                  <FaBox className="trade-icon" />
                </div>
                <div className="trade-info">
                  <h4>{t('productModal.packagingLabel')}</h4>
                  <p>{product.packaging}</p>
                </div>
              </div>

              <div className="modal-trade-card modal-trade-card-full">
                <div className="trade-icon-wrapper">
                  <FaGlobe className="trade-icon" />
                </div>
                <div className="trade-info">
                  <h4>{t('productModal.marketsLabel')}</h4>
                  <p>{Array.isArray(product.markets) ? product.markets.join(', ') : product.markets}</p>
                </div>
              </div>
            </div>
            
            <div className="modal-quick-quote-form">
              <div className="quote-form-header">
                <h4>{t('productModal.customPricingTitle')}</h4>
              </div>

              {inquirySent ? (
                <div className="form-success-message" style={{ margin: 0, padding: '1rem' }}>
                  {t('productModal.successMsg')}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="modal-quote-form">
                  <div className="modal-form-inputs">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder={t('productModal.namePlaceholder')} 
                      value={formData.name} 
                      onChange={handleChange}
                      required 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder={t('productModal.emailPlaceholder')} 
                      value={formData.email} 
                      onChange={handleChange}
                      required 
                    />
                    <input 
                      type="text" 
                      name="quantity" 
                      placeholder={t('productModal.qtyPlaceholder')} 
                      value={formData.quantity} 
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <button type="submit" className="btn btn-primary modal-quote-btn">
                    <span>{t('hero.sendEnquiry')}</span> <FaPaperPlane />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const whatsappMessage = encodeURIComponent(t('whatsappMsg'));

  return (
    <section id="contact" className="section section-light">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('contact.badge')}</h2>
          <p>{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-column reveal slide-up">
            <h3>{t('contact.title')}</h3>
            <p>{t('contact.desc')}</p>

            <div className="contact-details-list">
              <div className="contact-detail-item">
                <FaMapMarkerAlt className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h4>{t('contact.addressTitle')}</h4>
                  <p>{t('contact.addressVal')}</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaPhoneAlt className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h4>{t('contact.phoneTitle')}</h4>
                  <p>
                    <a href="tel:+918850272125">+91 88502 72125</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaWhatsapp className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h4>{t('contact.whatsappTitle')}</h4>
                  <p>
                    <a href={`https://wa.me/918850272125?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">+91 88502 72125</a>
                  </p>
                </div>
              </div>

              <div className="contact-detail-item">
                <FaEnvelope className="contact-detail-icon" />
                <div className="contact-detail-content">
                  <h4>{t('contact.emailTitle')}</h4>
                  <p>
                    <a href="mailto:info@maxvoltaexim.com">info@maxvoltaexim.com</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-actions-grid">
              <a href="tel:+918850272125" className="btn btn-primary">
                <FaPhoneAlt /> {t('contact.callNow')}
              </a>
              <a 
                href={`https://wa.me/918850272125?text=${whatsappMessage}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <FaWhatsapp /> {t('contact.whatsapp')}
              </a>
              <a href="mailto:info@maxvoltaexim.com" className="btn btn-secondary">
                <FaEnvelope /> {t('contact.sendEmail')}
              </a>
            </div>

            <div className="contact-social-section">
              <h4>{t('contact.followTitle')}</h4>
              <div className="contact-social-buttons">
                <a 
                  href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=l312hdw" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-card instagram"
                  aria-label="Max Volta Exim on Instagram"
                >
                  <div className="social-card-icon">
                    <FaInstagram />
                  </div>
                  <div className="social-card-text">
                    <span className="social-card-name">Instagram</span>
                    <span className="social-card-handle">@maxvoltaexim</span>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/company/max-volta-exim/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-card linkedin"
                  aria-label="Max Volta Exim on LinkedIn"
                >
                  <div className="social-card-icon">
                    <FaLinkedinIn />
                  </div>
                  <div className="social-card-text">
                    <span className="social-card-name">LinkedIn</span>
                    <span className="social-card-handle">Max Volta Exim</span>
                  </div>
                </a>
                <a 
                  href="https://www.facebook.com/share/1CDDKgqSJK/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-social-card facebook"
                  aria-label="Max Volta Exim on Facebook"
                >
                  <div className="social-card-icon">
                    <FaFacebookF />
                  </div>
                  <div className="social-card-text">
                    <span className="social-card-name">Facebook</span>
                    <span className="social-card-handle">Max Volta Exim</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="contact-map-column reveal slide-left">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.520587625126!2d73.10260408544485!3d18.443729906660604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be85e13d11b3bcf%3A0x6b4458f2762a4d33!2sRoha%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="contact-map-iframe" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Max Volta Exim Location in Roha, Raigad"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

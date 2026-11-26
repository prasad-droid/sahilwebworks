import { useLanguage } from '../LanguageContext.jsx';

export default function Footer({ t, openPolicyModal }) {
  const { lang } = useLanguage();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-logo-col">
            <div className="logo-container">
              <div className="logo-icon">
                <img src="/logo.jpg" alt="Aavira Global Axis Logo" className="logo-img-file" />
              </div>
              <div className="logo-text">
                <span className="logo-brand">Aavira Global Axis <sup>TM</sup> </span>
                <span className='green'>{t('topBar.tagline')}</span>
              </div>
            </div>
            <p>{t('footer.brandDesc')}</p>
            <div className="social-links">
              <a target="_blank" href="https://www.linkedin.com/in/mahesh-mangaonkar-3052147b/" className="social-icon" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a target="_blank" href="https://www.facebook.com/profile.php?id=61588970401445" className="social-icon" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a target="_blank" href="https://www.instagram.com/mahesh.mango008/" className="social-icon" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>

          <div className="footer-col">
            <h3>{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><a href="#home">{t('nav.home')}</a></li>
              <li><a href="#about">{t('nav.about')}</a></li>
              <li><a href="#products">{t('nav.products')}</a></li>
              <li><a href="#quality">{t('nav.certifications')}</a></li>
              <li><a href="#why-choose-us">{t('nav.whyChooseUs')}</a></li>
              <li><a href="#contact">{t('nav.contact')}</a></li>
              <li><a href="#faq">{t('nav.faq')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.ourProducts')}</h3>
            <ul className="footer-links">
              <li><a href="#products">{t('footer.productLinks.turmeric')}</a></li>
              <li><a href="#products">{t('footer.productLinks.fruits')}</a></li>
              <li><a href="#products">{t('footer.productLinks.dryFruits')}</a></li>
              <li><a href="#products">{t('footer.productLinks.vermicompost')}</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>{t('footer.contactInfo')}</h3>
            <ul className="footer-contact-info">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <a href="https://maps.google.com/?q=Mumbai,Maharashtra,India" target="_blank" rel="noopener noreferrer">{t('topBar.location')}</a>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+917304066350">+91 7304066350</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@aaviraglobalaxis.com">info@aaviraglobalaxis.com</a>
              </li>
              <li>
                <i className="fa-solid fa-globe"></i>
                <a href="https://aaviraglobalaxis.com" target="_blank" rel="noopener noreferrer">aaviraglobalaxis.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}{lang === 'en' && <span> <a href="https://www.sahilwebworks.com/">Sahil Web Works</a>.</span>}</p>
          <div className="footer-bottom-links">
            <a href="#" onClick={(e) => { e.preventDefault(); openPolicyModal('privacy'); }}>{t('footer.privacy')}</a>
            <a href="#" onClick={(e) => { e.preventDefault(); openPolicyModal('terms'); }}>{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

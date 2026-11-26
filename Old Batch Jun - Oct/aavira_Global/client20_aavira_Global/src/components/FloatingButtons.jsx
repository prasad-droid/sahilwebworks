export default function FloatingButtons({ t, handleNavClick }) {
  return (
    <div className="floating-actions">
      <a href="https://wa.me/917304066350?text=Hi%20Aavira%20Global%20Axis,%20I%20am%20interested%20in%20your%20agro%20export%20products." className="float-btn float-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <i className="fa-brands fa-whatsapp"></i>
        <span className="float-tooltip float-tooltip-whatsapp">{t('floating.whatsapp')}</span>
      </a>
      <a href="#contact" className="float-btn float-quote" aria-label="Request Quote" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
        <i className="fa-solid fa-file-invoice"></i>
        <span className="float-tooltip float-tooltip-quote">{t('floating.requestForm')}</span>
      </a>
    </div>
  );
}

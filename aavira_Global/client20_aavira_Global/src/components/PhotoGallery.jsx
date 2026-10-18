import { FRUIT_IMAGES, VEGETABLE_IMAGES, DRY_FRUIT_IMAGES, TURMERIC_IMAGES, VERMICOMPOST_IMAGES } from '../data/siteData.js';

export default function PhotoGallery({ activeGallery, setActiveGallery, setLightboxIndex, lang, setLang, t }) {
  const imagesList = activeGallery === 'fruits' ? [...FRUIT_IMAGES, ...VEGETABLE_IMAGES] : activeGallery === 'vegetables' ? VEGETABLE_IMAGES : activeGallery === 'raisins' ? DRY_FRUIT_IMAGES : activeGallery === 'turmeric' ? TURMERIC_IMAGES : VERMICOMPOST_IMAGES;

  return (
    <div className="fruits-gallery-page animate-fade-in">
      <header className="gallery-header">
        <div className="header-top-bar">
          <div className="container">
            <div className="top-bar-left">
              <span className="top-bar-link">
                <i className="fa-solid fa-location-dot"></i> {t('topBar.location')}
              </span>
              <a href="tel:+917304066350" className="top-bar-link">
                <i className="fa-solid fa-phone"></i> +91 7304066350
              </a>
              <a href="mailto:info@aaviraglobalaxis.com" className="top-bar-link">
                <i className="fa-solid fa-envelope"></i> info@aaviraglobalaxis.com
              </a>
            </div>
            <div className="top-bar-right">
              <div className="lang-switcher">
                <i className="fa-solid fa-globe" style={{ color: 'var(--accent-green)' }}></i>
                <button className={`lang-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>ENG</button>
                <span className="lang-divider">|</span>
                <button className={`lang-btn ${lang === 'hi' ? 'active' : ''}`} onClick={() => setLang('hi')}>हिन्दी</button>
              </div>
            </div>
          </div>
        </div>

        <div className="gallery-header-nav">
          <div className="container gallery-header-container">
            <button className="gallery-back-btn" onClick={() => setActiveGallery(null)}>
              <i className="fa-solid fa-arrow-left"></i> {t('gallery.backToProducts')}
            </button>
            <div className="logo-container">
              <div className="logo-icon">
                <img src="/logo.jpg" alt="Aavira Global Axis Logo" className="logo-img-file" />
              </div>
              <div className="logo-text">
                <span className="logo-brand">Aavira Global Axis</span>
              </div>
            </div>
            <button className="btn btn-accent gallery-header-cta" onClick={() => { setActiveGallery(null); }}>
              {t('gallery.requestQuote')}
            </button>
          </div>
        </div>
      </header>

      <main className="gallery-main">
        <section className="section gallery-hero-section">
          <div className="container">
            <span className="section-badge">{t('gallery.photoGallery')}</span>
            <h1 className="section-title">
              {t(`gallery.galleryTitles.${activeGallery}`)}
              <span> {t('gallery.galleryWord')}</span>
            </h1>
            <p className="section-desc">
              {t(`gallery.descriptions.${activeGallery}`)}
            </p>

            <div className="gallery-grid">
              {imagesList.map((img, idx) => {
                const translatedTitle = t(`imageTitles.${activeGallery}.${img.title}`);
                const displayTitle = typeof translatedTitle === 'string' && !translatedTitle.startsWith('imageTitles.') ? translatedTitle : img.title;

                return (
                  <div
                    key={idx}
                    className="gallery-card glass-card"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <div className="gallery-img-box">
                      {img.isVideo ? (
                        <div className="video-thumbnail-container" style={{ position: 'relative', width: '100%', height: '100%', display: 'block' }}>
                          <video src={img.src} className="gallery-img" muted playsInline style={{ objectFit: 'cover', width: '100%', height: '100%', display: 'block' }} />
                          <div className="video-play-badge" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', pointerEvents: 'none' }}>
                            <i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
                          </div>
                        </div>
                      ) : (
                        <img src={img.src} alt={displayTitle} className="gallery-img" />
                      )}
                      <div className="gallery-card-hover">
                        <i className="fa-solid fa-magnifying-glass-plus"></i>
                        <span>{img.isVideo ? t('gallery.playVideo') : t('gallery.viewPhoto')}</span>
                      </div>
                    </div>
                    <div className="gallery-card-info">
                      <h4>{displayTitle}</h4>
                      <p>{img.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ marginTop: 'auto' }}>
        <div className="container">
          <div className="footer-bottom" style={{ borderTop: 'none', paddingTop: 0 }}>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

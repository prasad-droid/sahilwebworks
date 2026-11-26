import { getProductGalleryImages } from '../data/siteData.js';

export default function ProductDetailModal({ activeDetailProduct, setActiveDetailProduct, setActiveGallery, handleInquireClick, t }) {
  if (!activeDetailProduct) return null;

  const modalGalleryList = activeDetailProduct ? getProductGalleryImages(activeDetailProduct.id) : [];
  const modalActiveImgSrc = (activeDetailProduct && activeDetailProduct.activeGalleryIndex !== undefined && modalGalleryList[activeDetailProduct.activeGalleryIndex])
    ? modalGalleryList[activeDetailProduct.activeGalleryIndex].src
    : (activeDetailProduct ? activeDetailProduct.image : '');

  return (
    <div className="modal active" onClick={(e) => e.target.classList.contains('modal') && setActiveDetailProduct(null)}>
      <div className="modal-content product-detail-modal-content">

        <div className="modal-top-contact-bar">
          <div className="modal-contact-item">
            <i className="fa-solid fa-phone"></i>
            <a href="tel:+917304066350">+91 7304066350</a>
          </div>
          <div className="modal-contact-item">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:info@aaviraglobalaxis.com">info@aaviraglobalaxis.com</a>
          </div>
          <button
            className="btn btn-accent btn-sm modal-inquiry-btn"
            onClick={() => {
              const prodName = activeDetailProduct.title;
              setActiveDetailProduct(null);
              handleInquireClick(prodName);
            }}
          >
            <i className="fa-solid fa-paper-plane"></i> {t('modal.quickInquiry')}
          </button>
          <button className="modal-close" onClick={() => setActiveDetailProduct(null)} aria-label="Close modal">{"\u00D7"}</button>
        </div>

        <div className="modal-product-grid">
          <div className="modal-product-media">
            <div className="modal-main-image-container">
              <img src={modalActiveImgSrc} alt={activeDetailProduct.title} className="modal-product-img" />
              {activeDetailProduct.tag && <span className="modal-product-tag">{activeDetailProduct.tag}</span>}
            </div>

            {modalGalleryList.length > 0 && (
              <div className="modal-gallery-btn-container">
                <button
                  className="modal-gallery-btn"
                  onClick={() => {
                    setActiveGallery(activeDetailProduct.id);
                    setActiveDetailProduct(null);
                  }}
                  type="button"
                >
                  <i className="fa-solid fa-images"></i> {t('modal.viewGallery')}
                </button>
              </div>
            )}
          </div>

          <div className="modal-product-info">
            <h2 className="modal-product-title">{activeDetailProduct.title}</h2>
            <p className="modal-product-tagline">{activeDetailProduct.tagline}</p>

            <div className="modal-tabs-container">
              <div className="modal-tabs-nav">
                <button
                  className={`modal-tab-btn ${activeDetailProduct.activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveDetailProduct(prev => ({ ...prev, activeTab: 'specs' }))}
                >
                  {t('modal.tabs.specs')}
                </button>
                <button
                  className={`modal-tab-btn ${activeDetailProduct.activeTab === 'packaging' ? 'active' : ''}`}
                  onClick={() => setActiveDetailProduct(prev => ({ ...prev, activeTab: 'packaging' }))}
                >
                  {t('modal.tabs.packaging')}
                </button>
                <button
                  className={`modal-tab-btn ${activeDetailProduct.activeTab === 'apps' ? 'active' : ''}`}
                  onClick={() => setActiveDetailProduct(prev => ({ ...prev, activeTab: 'apps' }))}
                >
                  {t('modal.tabs.apps')}
                </button>
                <button
                  className={`modal-tab-btn ${activeDetailProduct.activeTab === 'extra' ? 'active' : ''}`}
                  onClick={() => setActiveDetailProduct(prev => ({ ...prev, activeTab: 'extra' }))}
                >
                  {t('modal.tabs.extra')}
                </button>
              </div>

              <div className="modal-tab-pane">
                {activeDetailProduct.activeTab === 'specs' && (
                  <ul className="spec-list modal-spec-list">
                    {activeDetailProduct.specs.map((spec, i) => (
                      <li key={i} className="spec-item"><i className="fa-solid fa-circle-check"></i> {spec}</li>
                    ))}
                  </ul>
                )}
                {activeDetailProduct.activeTab === 'packaging' && (
                  <div className="product-packaging modal-packaging">
                    <p>{t('modal.packagingLabel')} </p>
                    <div className="packaging-badges">
                      {activeDetailProduct.packaging.map((pack, i) => (
                        <span key={i} className="pack-badge">{pack}</span>
                      ))}
                    </div>
                    {activeDetailProduct.packagingImages && activeDetailProduct.packagingImages.length > 0 && (
                      <div className="packaging-images-grid">
                        {activeDetailProduct.packagingImages.map((img, i) => (
                          <div key={i} className="packaging-image-card">
                            <img src={img.src} alt={img.title} className="packaging-img" />
                            <span className="packaging-img-label">{img.title}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {activeDetailProduct.activeTab === 'apps' && (
                  <ul className="app-list modal-app-list">
                    {activeDetailProduct.applications.map((app, i) => (
                      <li key={i} className="app-item"><i className="fa-solid fa-circle-check"></i> {app}</li>
                    ))}
                  </ul>
                )}
                {activeDetailProduct.activeTab === 'extra' && (
                  <div className="modal-extra-info">
                    <p>{activeDetailProduct.extraInfo}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

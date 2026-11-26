export default function ProductsSection({
  translatedProducts,
  sliderIndex,
  setSliderIndex,
  isProductPaused,
  setIsProductPaused,
  maxProductIndex,
  visibleCards,
  setActiveDetailProduct,
  t
}) {
  return (
    <section className="section" id="products" style={{ backgroundColor: 'var(--bg-light)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-badge">{t('products.badge')}</span>
          <h2 className="section-title">{t('products.title').split(' ').slice(0, -1).join(' ')} <span>{t('products.title').split(' ').pop()}</span></h2>
          <p className="section-desc">{t('products.desc')}</p>
        </div>
        <div
          className="products-slider-container"
          onMouseEnter={() => setIsProductPaused(true)}
          onMouseLeave={() => setIsProductPaused(false)}
        >
          <button
            className="products-slider-btn prev-btn"
            onClick={() => setSliderIndex(prev => prev === 0 ? maxProductIndex : prev - 1)}
            aria-label="Previous Products"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <div className="products-slider-clip">
            <div
              className="products-slider-track"
              style={{
                transform: `translate3d(-${sliderIndex * (100 / translatedProducts.length)}%, 0, 0)`,
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                display: 'flex',
                width: `${(translatedProducts.length / visibleCards) * 100}%`
              }}
            >
              {translatedProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="products-slider-item"
                  style={{
                    width: `${100 / translatedProducts.length}%`,
                    padding: '0 15px',
                    flexShrink: 0
                  }}
                >
                  <article
                    className="catalog-product-card"
                    onClick={() => setActiveDetailProduct({ ...prod, activeTab: 'specs', activeGalleryIndex: 0 })}
                    style={{ margin: '0 auto', width: '100%' }}
                  >
                    <div className="catalog-product-img-wrapper">
                      <img src={prod.image} alt={prod.title} className="catalog-product-img" />
                      <div className="catalog-product-overlay">
                        <h3 className="catalog-product-title">{prod.title}</h3>
                        <div className="catalog-product-action">
                          <span>{t('products.viewDetails')}</span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className="products-slider-btn next-btn"
            onClick={() => setSliderIndex(prev => prev >= maxProductIndex ? 0 : prev + 1)}
            aria-label="Next Products"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <div className="products-slider-dots">
            {[...Array(maxProductIndex + 1)].map((_, idx) => (
              <button
                key={idx}
                className={`products-slider-dot ${sliderIndex === idx ? 'active' : ''}`}
                onClick={() => setSliderIndex(idx)}
                aria-label={`Go to product slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

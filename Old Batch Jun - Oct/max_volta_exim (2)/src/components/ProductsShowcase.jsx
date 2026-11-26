import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProductModal from './ProductModal';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProductsShowcase = () => {
  const { t, products, currentLanguage } = useLanguage();
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categoryDefinitions = useMemo(() => [
    { key: 'all', label: t('products.categories.all'), matchCat: null },
    { key: 'homeTextiles', label: t('products.categories.homeTextiles'), id: 1 },
    { key: 'bambooTowels', label: t('products.categories.bambooTowels'), id: 6 },
    { key: 'solarPumps', label: t('products.categories.solarPumps'), id: 8 },
    // { key: 'safetyEquipment', label: t('products.categories.safetyEquipment'), id: 2 },
    // { key: 'machineryEquipment', label: t('products.categories.machineryEquipment'), id: 4 },
    // { key: 'garmentsApparel', label: t('products.categories.garmentsApparel'), id: 5 },
    { key: 'paperHygiene', label: t('products.categories.paperHygiene'), id: 7 }
  ], [t, currentLanguage]);

  const filteredProducts = useMemo(() => {
    if (activeCategoryKey === 'all') return products;
    const catDef = categoryDefinitions.find(c => c.key === activeCategoryKey);
    if (!catDef) return products;
    return products.filter(p => p.id === catDef.id);
  }, [activeCategoryKey, products, categoryDefinitions]);

  // Set up IntersectionObserver to observe product cards and add 'animated' class when they enter viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: "0px 0px -40px 0px"
    });

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, [filteredProducts]);

  const handleOpenDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  // If a modal is open when the language changes, update the selectedProduct with the newly localized version
  useEffect(() => {
    if (selectedProduct) {
      const updated = products.find(p => p.id === selectedProduct.id);
      if (updated) setSelectedProduct(updated);
    }
  }, [products]);

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header reveal slide-up">
          <h2>{t('products.badge')}</h2>
          <p>{t('products.subtitle')}</p>
        </div>

        {/* Category Filter Bar */}
        <div className="products-filter-container reveal fade-in">
          {categoryDefinitions.map((cat) => (
            <button
              key={cat.key}
              className={`filter-btn ${activeCategoryKey === cat.key ? 'active' : ''}`}
              onClick={() => setActiveCategoryKey(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card reveal slide-up"
              style={{ transitionDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="product-img-wrapper">
                <span className="product-tag">{product.category}</span>
                <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.description}</p>
                
                <div className="product-meta-details">
                  <div className="meta-row">
                    <span className="meta-label">{t('products.moqLabel')}</span>
                    <span className="meta-val">{product.moq}</span>
                  </div>
                  <div className="meta-row">
                    <span className="meta-label">{t('products.marketsLabel')}</span>
                    <span className="meta-val">{product.markets.slice(0, 3).join(', ')}...</span>
                  </div>
                </div>

                <button 
                  onClick={() => handleOpenDetails(product)}
                  className="btn btn-secondary product-cta"
                >
                  {t('products.requestDetails')} <FaExternalLinkAlt style={{ fontSize: '0.85rem' }} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={handleCloseDetails} 
        />
      )}
    </section>
  );
};

export default ProductsShowcase;

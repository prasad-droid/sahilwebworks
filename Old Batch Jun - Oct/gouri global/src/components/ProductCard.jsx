import { useState } from 'react';
import { waLink } from '../utils/whatsapp';

const FALLBACK_IMAGE = '/images/products-collage.jpeg';

// Product card with editable image fallback.
export default function ProductCard({ product, onEnquire }) {
  const [imgSrc, setImgSrc] = useState(product.image);

  const handleEnquire = () => {
    if (onEnquire) {
      onEnquire(product.name);
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello GOURI GLOBAL TRADE, I am interested in ${product.name}. Please share product details, pricing and export information.`;
    window.open(waLink(message), '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          src={imgSrc}
          alt={product.imageAlt || `${product.name} — GOURI GLOBAL TRADE`}
          className="product-card__image"
          loading="lazy"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
        />
      </div>

      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <dl className="product-card__meta">
          <div className="product-card__meta-row">
            <dt>HS Code</dt>
            <dd>{product.hsCode}</dd>
          </div>
          <div className="product-card__meta-row">
            <dt>Pack Sizes</dt>
            <dd>{product.sizes}</dd>
          </div>
          <div className="product-card__meta-row">
            <dt>Packaging</dt>
            <dd>{product.packaging}</dd>
          </div>
          <div className="product-card__meta-row">
            <dt>MOQ</dt>
            <dd>{product.moq}</dd>
          </div>
        </dl>

        <div className="product-card__actions">
          <button className="btn btn--primary product-card__btn" onClick={handleEnquire}>
            Enquire About This Product
          </button>
          <button className="btn btn--outline product-card__btn" onClick={handleWhatsApp}>
            WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}
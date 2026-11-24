import { ArrowUpRight, Ruler } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { packagingProducts } from '../data/site.js';

export default function PackagingProducts({ onEnquire }) {
  return (
    <div className="product-grid">
      {packagingProducts.map((product) => (
        <article className="product-card" key={product.id} data-reveal>
          <div className="product-media">
            <ImageWithFallback
              src={product.image}
              alt={product.imageAlt}
              width="800"
              height="620"
            />
            <span className="product-index">{product.index}</span>
          </div>
          <div className="product-body">
            <h3>{product.name}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-spec">
              <Ruler size={14} aria-hidden="true" />
              {product.specifications}
            </p>
            <button
              type="button"
              className="text-link"
              onClick={() => onEnquire(product.name)}
              aria-label={`${product.cta} — opens the inquiry form`}
            >
              {product.cta} <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}

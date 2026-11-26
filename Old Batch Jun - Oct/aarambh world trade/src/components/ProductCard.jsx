import { Icon } from './Icons.jsx';
import { asList, ON_REQUEST } from '../data/products.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

/**
 * Reusable product card.
 *
 * Image labelling: the card carries no photo-provenance badge. Whether an image
 * is a real AARAMBH WORLDTRADE photograph (`imageKind === 'company'`) or stock
 * imagery representing the product CATEGORY is conveyed by `imageAlt` and by
 * the detail view, which labels stock images "Product category visual".
 */
export function ProductCard({ product, index = 0, onOpenDetails }) {
  const { startEnquiry } = useEnquiry();

  const forms = asList(product.forms);
  const packaging = asList(product.packaging);
  const bulkNote = product.bulkNote || ON_REQUEST;

  return (
    <article
      className={`product-card ${product.available === false ? 'is-unavailable' : ''}`}
      style={{ '--i': index }}
    >
      <div className="product-card__media media media--zoom">
        <img
          src={product.image}
          alt={product.imageAlt}
          width="1200"
          height="900"
          loading={index < 3 ? 'eager' : 'lazy'}
          decoding="async"
        />

        <span className="product-card__num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="product-card__overlay">
          <button
            type="button"
            className="btn btn--white btn--sm product-card__peek"
            onClick={() => onOpenDetails?.(product)}
          >
            <Icon name="search" size={16} />
            View Details
          </button>
        </div>
      </div>

      <div className="product-card__body">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__description">{product.description}</p>

        <dl className="product-card__specs">
          <div className="product-card__spec">
            <dt>Forms</dt>
            <dd>{forms.length ? forms.join(' · ') : ON_REQUEST}</dd>
          </div>
          <div className="product-card__spec">
            <dt>Packaging</dt>
            <dd>{packaging.length ? packaging.join(' · ') : ON_REQUEST}</dd>
          </div>
        </dl>

        <p className="product-card__bulk">
          <Icon name="layers" size={16} />
          {bulkNote}
        </p>
      </div>

      <div className="product-card__footer">
        <button
          type="button"
          className="btn btn--primary btn--sm product-card__cta"
          onClick={() => startEnquiry(product.name)}
        >
          Request a Quote
          <Icon name="arrowRight" size={16} />
        </button>
        <button
          type="button"
          className="product-card__more"
          onClick={() => onOpenDetails?.(product)}
          aria-label={`See full details for ${product.name}`}
        >
          Details
          <Icon name="arrowUpRight" size={15} />
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

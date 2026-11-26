import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { whatsappLink, SITE } from "../../data/site";
import { getProductById } from "../../data/products";

export default function ProductCard({ product }) {
  const details = getProductById(product.id);

  return (
    <article className="product-card" aria-label={product.name}>
      <div className="product-card__media">
        <img
          src={product.image}
          alt={`${product.name} — tote bag supplied by ${SITE.name}`}
          loading="lazy"
        />
        <span className="product-card__badge">{product.material} Tote Bag</span>
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__desc">{product.description}</p>

        <div className="product-card__meta">
          <span>{product.material}</span>
          <span>{product.sizes}</span>
          <span>{product.colors}</span>
        </div>

        <span className="product-card__custom">
          <FiArrowRight aria-hidden="true" /> Customization available
        </span>

        <div className="product-card__actions">
          <Link className="btn btn--primary btn--sm" to="/contact">
            Request a Quote
          </Link>
          <a
            className="btn btn--whatsapp btn--sm"
            href={whatsappLink(
              `Hello SATBHAI EXIM, I am interested in the ${product.name}. Please share details and pricing.`
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </article>
  );
}

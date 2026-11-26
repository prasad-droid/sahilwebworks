import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { whatsappLink } from "../../data/siteConfig";

/**
 * Individual product card with inquiry + WhatsApp actions.
 */
export default function ProductCard({ product, ctaLabel = "Request Details" }) {
  const quoteUrl = `/request-quote?product=${product.id}`;

  return (
    <article className="product-card">
      <div className="product-card__media">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          style={{ objectPosition: product.imagePosition || "center" }}
        />
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-card__actions">
          <Link to={quoteUrl} className="btn btn--primary btn--sm">
            {ctaLabel} <FiArrowRight size={15} aria-hidden="true" />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card__whatsapp"
            aria-label={`Inquire about ${product.name} on WhatsApp`}
          >
            <FaWhatsapp size={19} aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

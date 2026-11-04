import { ArrowUpRight, Check } from "lucide-react";

/**
 * Reusable product showcase block.
 * Every category supplies its own images, theme and inquiry product value.
 */
export default function ProductCard({
  id,
  index,
  theme,
  eyebrow,
  title,
  description,
  highlights,
  images,
  ctaLabel,
  product,
  note,
  badge,
  reverse = false,
  onInquire,
}) {
  return (
    <section
      id={id}
      className={`product-block product-block--${theme}${reverse ? " is-reversed" : ""}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="container product-block__grid">
        <div className="product-block__media">
          <span className="product-block__number" aria-hidden="true">
            {index}
          </span>

          <figure className="product-block__primary">
            <img
              src={images[0].src}
              alt={images[0].alt}
              width={images[0].width}
              height={images[0].height}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="product-block__secondary">
            {images.slice(1).map((image) => (
              <figure key={image.src} className="product-block__thumb">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>

          {badge && <span className="product-block__badge">{badge}</span>}
        </div>

        <div className="product-block__body">
          <p className="eyebrow">
            <span>{eyebrow}</span>
          </p>
          <h3 id={`${id}-title`} className="product-block__title">
            {title}
          </h3>
          <p className="product-block__desc">{description}</p>

          <ul className="product-block__highlights">
            {highlights.map((highlight) => (
              <li key={highlight}>
                <span aria-hidden="true">
                  <Check size={12} strokeWidth={2.6} />
                </span>
                {highlight}
              </li>
            ))}
          </ul>

          <div className="product-block__actions">
            <button
              type="button"
              className="btn btn--on-theme"
              onClick={() => onInquire(product)}
            >
              {ctaLabel}
              <ArrowUpRight size={18} strokeWidth={2.1} aria-hidden="true" />
            </button>
            {note && <p className="product-block__note">{note}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

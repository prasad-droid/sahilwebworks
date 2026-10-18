import { useEffect, useState, useCallback } from "react";
import {
  FaWhatsapp,
  FaXmark,
  FaChevronLeft,
  FaChevronRight,
  FaMagnifyingGlassPlus,
} from "react-icons/fa6";
import { waLink } from "../../config/site";

const ProductCard = ({ product, index = 0 }) => {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const gallery =
    product.gallery && product.gallery.length ? product.gallery : [product.image];

  const close = useCallback(() => setOpen(false), []);
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % gallery.length),
    [gallery.length]
  );
  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + gallery.length) % gallery.length),
    [gallery.length]
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  useEffect(() => setCurrent(0), [open]);

  return (
    <>
      <article
        className="product-card reveal"
        style={{ transitionDelay: `${index * 70}ms` }}
      >
        <button
          type="button"
          className="product-card__media"
          onClick={() => setOpen(true)}
          aria-label={`Open gallery for ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width="800"
            height="1000"
          />
          {product.tag && <span className="product-card__tag">{product.tag}</span>}
          <span className="product-card__zoom">
            <FaMagnifyingGlassPlus aria-hidden="true" /> View Gallery
          </span>
        </button>
        <div className="product-card__body">
          <button
            type="button"
            className="product-card__name-btn"
            onClick={() => setOpen(true)}
          >
            {product.name}
          </button>
          <p className="product-card__desc">{product.description}</p>
          <div className="product-card__actions">
            <a
              className="product-card__btn product-card__btn--enquiry"
              href="#order"
              aria-label={`Send an enquiry for ${product.name}`}
            >
              Enquiry
            </a>
            <a
              className="product-card__btn product-card__btn--wa"
              href={waLink(
                `Hello GHONS Global Impex, I am interested in "${product.name}" for wholesale supply.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Enquire about ${product.name} on WhatsApp`}
            >
              <FaWhatsapp aria-hidden="true" /> WhatsApp
            </a>
          </div>
        </div>
      </article>

      {open && (
        <div
          className="product-modal"
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} gallery`}
          onClick={close}
        >
          <div
            className="product-modal__box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="product-modal__media">
              <img
                src={gallery[current]}
                alt={`${product.name} view ${current + 1}`}
              />
              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    className="product-modal__nav product-modal__nav--prev"
                    onClick={prev}
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    type="button"
                    className="product-modal__nav product-modal__nav--next"
                    onClick={next}
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                  <div className="product-modal__thumbs">
                    {gallery.map((src, i) => (
                      <button
                        type="button"
                        key={src}
                        className={`product-modal__thumb ${
                          i === current ? "is-active" : ""
                        }`}
                        onClick={() => setCurrent(i)}
                        aria-label={`View image ${i + 1}`}
                      >
                        <img src={src} alt="" width="80" height="100" />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="product-modal__info">
              {product.tag && <span className="product-card__tag">{product.tag}</span>}
              <h3 className="product-modal__name">{product.name}</h3>
              <p className="product-modal__desc">{product.description}</p>
              <p className="product-modal__note">
                Available for wholesale and bulk supply. Send an enquiry for
                pricing, samples, and dispatch timelines.
              </p>
              <div className="product-modal__actions">
                <a
                  className="btn btn-primary"
                  href="#order"
                  onClick={close}
                >
                  Enquiry
                </a>
                <a
                  className="btn btn-whatsapp"
                  href={waLink(
                    `Hello GHONS Global Impex, I am interested in "${product.name}" for wholesale supply.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  <FaWhatsapp aria-hidden="true" /> WhatsApp
                </a>
              </div>
            </div>
            <button
              type="button"
              className="product-modal__close"
              onClick={close}
              aria-label="Close gallery"
            >
              <FaXmark />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;

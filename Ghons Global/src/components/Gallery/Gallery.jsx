import { useEffect, useState, useCallback } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight, FaMagnifyingGlassPlus } from "react-icons/fa6";
import { useReveal } from "../../hooks/useReveal";
import { products } from "../../data/products";

const items = products.slice(0, 8).map((product, i) => ({
  src: product.image,
  label: product.name,
  tall: i === 1 || i === 5,
}));

const Gallery = () => {
  const ref = useReveal();
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () => setActive((v) => (v === null ? null : (v + 1) % items.length)),
    []
  );
  const prev = useCallback(
    () => setActive((v) => (v === null ? null : (v - 1 + items.length) % items.length)),
    []
  );

  useEffect(() => {
    if (active === null) return undefined;
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
  }, [active, close, next, prev]);

  return (
    <section className="section section-alt" id="gallery" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Gallery</span>
          <h2 className="section-title">Collections &amp; Displays</h2>
          <p className="section-subtitle">
            A glimpse of our signature necklace sets and choker collections.
          </p>
        </div>
        <div className="gallery__grid">
          {items.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className={`gallery__item reveal ${item.tall ? "gallery__item--tall" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
              onClick={() => setActive(i)}
              aria-label={`Open image: ${item.label}`}
            >
              <img
                src={item.src}
                alt={item.label}
                loading="lazy"
              />
              <span className="gallery__item-overlay">
                <span className="gallery__item-label">
                  <FaMagnifyingGlassPlus aria-hidden="true" /> {item.label}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous image"
          >
            <FaChevronLeft />
          </button>
          <img
            src={items[active].src}
            alt={items[active].label}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next image"
          >
            <FaChevronRight />
          </button>
          <span className="lightbox__caption">{items[active].label}</span>
          <button className="lightbox__close" onClick={close} aria-label="Close lightbox">
            <FaXmark />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

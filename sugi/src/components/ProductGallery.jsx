import { useState, useEffect, useRef } from "react";
import "../styles/productGallery.css";

// ==========================================================================
// PRODUCT GALLERY — manually slidable row of real product photos.
// Falls back to a branded placeholder when no photos have been supplied yet.
// ==========================================================================

function Placeholder({ label }) {
  return (
    <div className="product-gallery__placeholder" role="img" aria-label={`${label} — product image coming soon`}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="12" fill="rgba(247,244,236,0.06)" />
        <circle cx="32" cy="24" r="8" fill="none" stroke="#b9975b" strokeWidth="2" />
        <path d="M28 32c1.5 7 3 11 4 13" fill="none" stroke="#d8c7a3" strokeWidth="2" strokeLinecap="round" />
        <path d="M36 32c-1.5 7-3 11-4 13" fill="none" stroke="#d8c7a3" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 31c-2 3-3 5-3 7M38 31c2 3 3 5 3 7" fill="none" stroke="#b9975b" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span>Image coming soon</span>
    </div>
  );
}

export default function ProductGallery({ images = [], name, compact = false, limit }) {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  // The Products page cards are designed for up to 10 photos per product.
  const slides = typeof limit === "number" ? images.slice(0, limit) : images;
  const multiple = slides.length > 1;

  const update = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [slides.length]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  if (!slides.length) {
    return (
      <div className={`product-gallery product-gallery--empty ${compact ? "is-compact" : ""}`}>
        <Placeholder label={name} />
      </div>
    );
  }

  return (
    <div className={`product-gallery ${compact ? "is-compact" : ""}`}>
      <div className="product-gallery__track" ref={trackRef} onScroll={update}>
        {slides.map((src, i) => (
          <figure className="product-gallery__slide" key={`${src}-${i}`}>
            <img src={src} alt={`${name} — image ${i + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>

      {multiple && canPrev && (
        <button
          type="button"
          className="product-gallery__nav product-gallery__nav--prev"
          onClick={() => scrollBy(-1)}
          aria-label={`Previous images of ${name}`}
        >
          <span aria-hidden="true">‹</span>
        </button>
      )}
      {multiple && canNext && (
        <button
          type="button"
          className="product-gallery__nav product-gallery__nav--next"
          onClick={() => scrollBy(1)}
          aria-label={`Next images of ${name}`}
        >
          <span aria-hidden="true">›</span>
        </button>
      )}

      {multiple && (
        <span className="product-gallery__hint" aria-hidden="true">
          Drag to view
        </span>
      )}
    </div>
  );
}

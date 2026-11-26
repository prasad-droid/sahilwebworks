import React, { useCallback, useEffect, useState } from "react";
import { galleryImages } from "../data/products.js";
import { useReveal, useLockBodyScroll } from "../hooks/useReveal.js";
import { IconClose } from "./Icons.jsx";
import "../styles/Gallery.css";

/**
 * Apparel Gallery with an accessible lightbox.
 * All images are clearly labelled sample stock photographs and are NOT
 * presented as actual Sampurnm Global inventory. Replace with real product
 * photography when available.
 */
export default function Gallery() {
  const [ref, visible] = useReveal();
  const [index, setIndex] = useState(null);
  const open = index !== null;

  useLockBodyScroll(open);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryImages.length)),
    []
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryImages.length) % galleryImages.length
      ),
    []
  );

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, next, prev]);

  const current = open ? galleryImages[index] : null;

  return (
    <section
      id="gallery"
      className="gallery section section--beige"
      aria-labelledby="gallery-heading"
    >
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow">Gallery</p>
          <h2 id="gallery-heading">A Closer Look at Our Collection</h2>
          <p>
            An editorial look at T-shirt styles, apparel close-ups and fashion
            imagery. Sample stock photographs — company product photos will
            replace these later.
          </p>
        </div>

        <div
          ref={ref}
          className={`gallery__grid ${visible ? "is-visible" : ""}`}
        >
          {galleryImages.map((img, i) => (
            <button
              type="button"
              key={img.id}
              className={`gallery__item gallery__item--${
                (i % 6) + 1
              } reveal ${visible ? "is-visible" : ""} reveal--delay-${
                (i % 4) + 1
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <span className="gallery__overlay">
                <span className="gallery__zoom" aria-hidden="true">
                  +
                </span>
              </span>
            </button>
          ))}
        </div>

        <p className="gallery__note">
          All gallery images are licensed sample stock photographs used as
          placeholders and are not photographs of actual Sampurnm Global
          inventory.
        </p>
      </div>

      {open && current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={close}
        >
          <button
            type="button"
            className="lightbox__close"
            aria-label="Close image viewer"
            onClick={close}
          >
            <IconClose />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            &#8249;
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={current.src} alt={current.alt} />
            <figcaption>
              {current.alt}
              <span className="lightbox__tag">{current.caption}</span>
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
}

import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";
import { IconChevronLeft, IconChevronRight, IconClose } from "./Icons";
import "../styles/gallery.css";

const GALLERY = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Modern commercial office building",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Business team collaborating during a meeting",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Export coordination and planning at the office",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Air freight and global cargo operations",
  },
  {
    src: "/images/gallery-5.jpg",
    alt: "Digital tools powering global trade operations",
  },
  {
    src: "/images/gallery-6.jpg",
    alt: "Import and export cargo at an international port",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const hasActive = typeof activeIndex === "number";

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) => (i > 0 ? i - 1 : GALLERY.length - 1)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i < GALLERY.length - 1 ? i + 1 : 0)),
    []
  );

  useEffect(() => {
    if (!hasActive) return;

    const onKey = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [hasActive, close, showPrev, showNext]);

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <Reveal className="gallery__header">
          <p className="section-label">Gallery</p>
          <h2 className="section-title">Our Gallery</h2>
          <p className="section-subtitle">
            A glimpse of the world we connect — Indian products heading to
            international markets.
          </p>
        </Reveal>

        <Reveal className="gallery__masonry">
          {GALLERY.map((image, index) => (
            <figure className="gallery__item" key={image.src}>
              <button
                type="button"
                className="gallery__launch"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger: ${image.alt}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </button>
            </figure>
          ))}
        </Reveal>
      </div>

      {hasActive && (
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
            onClick={close}
            aria-label="Close image viewer"
            ref={(node) => node?.focus()}
          >
            <IconClose />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous image"
          >
            <IconChevronLeft />
          </button>

          <figure
            className="lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY[activeIndex].src}
              alt={GALLERY[activeIndex].alt}
            />
            <figcaption>{GALLERY[activeIndex].alt}</figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <IconChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}
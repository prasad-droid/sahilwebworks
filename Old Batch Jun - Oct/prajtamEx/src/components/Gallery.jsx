import { useEffect, useMemo, useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { galleryItems, galleryCategories } from "../data/gallery";
import { lockScroll } from "../lib/scroll";

export default function Gallery() {
  const [category, setCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState(null);

  const visible = useMemo(
    () =>
      category === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === category),
    [category]
  );

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((index) => (index + 1) % visible.length);
  const prev = () => setActiveIndex((index) => (index - 1 + visible.length) % visible.length);

  useEffect(() => {
    if (activeIndex === null) return undefined;
    lockScroll(true);
    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lockScroll(false);
    };
  }, [activeIndex, visible.length]);

  const active = activeIndex === null ? null : visible[activeIndex];

  return (
    <section className="gallery section section--surface" aria-labelledby="gallery-title">
      <div className="container">
        <SectionHeading
          id="gallery"
          label="BUSINESS SHOWCASE"
          title="A Closer Look at Our Business"
          subtitle="Product photographs supplied by PrajtamEx alongside representative imagery from the agriculture and trade sectors."
        />

        <div className="gallery__filters" role="group" aria-label="Filter gallery by category">
          {galleryCategories.map((item) => (
            <button
              key={item}
              type="button"
              className={`filter-chip ${category === item ? "is-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => {
                setCategory(item);
                setActiveIndex(null);
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {visible.map((item, index) => (
            <figure className="gallery__item" key={item.id} data-reveal>
              <button
                type="button"
                className="gallery__trigger"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image: ${item.alt}`}
              >
                <span className="gallery__media">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading={index < 3 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </span>
                <span className="gallery__overlay">
                  <span className="gallery__meta">
                    <span className="gallery__category">{item.category}</span>
                    <span className="gallery__source">
                      {item.stock ? "Representative imagery" : "Supplied by PrajtamEx"}
                    </span>
                  </span>
                  <span className="gallery__expand" aria-hidden="true">
                    <Icon name="expand" size={18} />
                  </span>
                </span>
              </button>
            </figure>
          ))}
        </div>

        <p className="gallery__note" data-reveal>
          Images labelled as supplied are company product photographs. Other visuals are
          representative industry imagery and are not PrajtamEx products or facilities.
        </p>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onMouseDown={(event) => event.target === event.currentTarget && close()}
        >
          <button
            type="button"
            className="lightbox__close"
            onClick={close}
            aria-label="Close image viewer"
            autoFocus
          >
            <Icon name="close" size={22} />
          </button>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <Icon name="arrowRight" size={22} />
          </button>

          <figure className="lightbox__figure">
            <img src={active.src} alt={active.alt} loading="eager" decoding="async" />
            <figcaption>
              <span className="lightbox__category">{active.category}</span>
              <span className="lightbox__caption">{active.alt}</span>
              <span className="lightbox__source">
                {active.stock ? "Representative industry imagery" : "Photograph supplied by PrajtamEx"}
              </span>
              <span className="lightbox__count">
                {activeIndex + 1} / {visible.length}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={next}
            aria-label="Next image"
          >
            <Icon name="arrowRight" size={22} />
          </button>
        </div>
      )}
    </section>
  );
}

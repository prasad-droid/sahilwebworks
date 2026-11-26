import { useCallback, useEffect, useMemo, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiX, FiZoomIn } from "react-icons/fi";
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from "../../data/galleryData";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./Gallery.css";

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const items = useMemo(
    () => (active === "all" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((i) => i.category === active)),
    [active]
  );

  const next = useCallback(() => {
    setLightbox((current) => (current === null ? null : items[(items.findIndex((i) => i.id === current) + 1) % items.length].id));
  }, [items]);

  const prev = useCallback(() => {
    setLightbox((current) =>
      current === null
        ? null
        : items[(items.findIndex((i) => i.id === current) - 1 + items.length) % items.length].id
    );
  }, [items]);

  useEffect(() => {
    if (lightbox === null) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, next, prev]);

  const openItem = items.find((i) => i.id === lightbox);

  return (
    <section id="gallery" className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Gallery"
            title="Our Products in the Spotlight"
            description="A look inside the Nilipar Enterprises range — jute bags, bagasse tableware, sustainable packaging, and our export operation."
          />
        </Reveal>

        <Reveal>
          <div className="gallery__tabs" role="tablist" aria-label="Gallery categories">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active === cat.id}
                className={`gallery__tab${active === cat.id ? " gallery__tab--active" : ""}`}
                onClick={() => {
                  setActive(cat.id);
                  setLightbox(null);
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="gallery__grid">
          {items.map((item, index) => (
            <Reveal key={item.id} direction="up" delay={(index % 4) * 60} className="gallery__item">
              <button className="gallery__tile" onClick={() => setLightbox(item.id)} aria-label={`Open image: ${item.alt}`}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <span className="gallery__zoom" aria-hidden="true">
                  <FiZoomIn />
                </span>
                <span className="gallery__label">{item.alt}</span>
              </button>
            </Reveal>
          ))}
        </div>

        {openItem && (
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Product image viewer"
            onClick={() => setLightbox(null)}
          >
            <button className="lightbox__close" onClick={() => setLightbox(null)} aria-label="Close viewer">
              <FiX size={28} />
            </button>
            <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous image">
              <FiChevronLeft size={30} />
            </button>
            <figure className="lightbox__body" onClick={(e) => e.stopPropagation()}>
              <img src={openItem.src} alt={openItem.alt} />
              <figcaption>{openItem.alt}</figcaption>
            </figure>
            <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next image">
              <FiChevronRight size={30} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

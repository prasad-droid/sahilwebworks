import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";
import g1 from "../../assets/gallery/product-1.jpg";
import g2 from "../../assets/gallery/product-2.jpg";
import g3 from "../../assets/gallery/product-3.jpg";
import g4 from "../../assets/gallery/product-4.jpg";
import g5 from "../../assets/gallery/product-5.jpg";
import g6 from "../../assets/gallery/product-6.jpg";
import g7 from "../../assets/gallery/business.jpg";

const items = [
  { src: g1, alt: "Canvas tote bag product detail", label: "Tote Bags", tall: false },
  { src: g2, alt: "Cotton tote bag product detail", label: "Product Details", tall: false },
  { src: g3, alt: "Jute tote bag product detail", label: "Tote Bags", tall: false },
  { src: g4, alt: "Non-woven tote bag product detail", label: "Product Details", tall: false },
  { src: g5, alt: "Custom printed tote bag", label: "Custom Designs", tall: false },
  { src: g6, alt: "Private label tote bag", label: "Custom Designs", tall: false },
  { src: g7, alt: "SATBHAI EXIM premium tote bag for export", label: "Business / Export", tall: true },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  return (
    <section className="section section--cream" id="gallery" aria-label="Product gallery">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Gallery</span>
          <h2 className="section__title">Our Tote Bags in Focus</h2>
          <p className="section__subtitle">
            A closer look at the quality and finish of our tote bag range.
          </p>
        </Reveal>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={`gallery__item reveal ${item.tall ? "gallery__item--tall" : ""} reveal--delay-${(i % 3) + 1}`}
              aria-label={`View larger image: ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[active].alt}>
          <button
            className="lightbox__close"
            onClick={() => setActive(null)}
            aria-label="Close image"
          >
            <FiX />
          </button>
          <img className="lightbox__img" src={items[active].src} alt={items[active].alt} />
        </div>
      )}
    </section>
  );
}

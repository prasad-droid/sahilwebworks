import { useCallback, useEffect, useState } from "react";

const images = [
  { src: "/images/product-1.jpg", alt: "Biodegradable tableware product range", ratio: "a" },
  { src: "/images/product-2.png", alt: "Takeaway biodegradable food packaging", ratio: "b" },
  { src: "/images/product-5.jpg", alt: "Eco-friendly party and event tableware", ratio: "c" },
  { src: "/images/product-3.png", alt: "Biodegradable food containers", ratio: "b" },
  { src: "/images/product-4.jpg", alt: "Eco bowls and cups collection", ratio: "a" },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (active === null) return undefined;
    const onKey = (e) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close]);

  return (
    <section className="section section--alt" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <div className="section-head">
          <span className="section-eyebrow">Gallery</span>
          <h2 className="section-title is-centered" id="gallery-heading">
            A Look at Our Products
          </h2>
          <p className="section-subtitle is-centered">
            Biodegradable tableware and packaging, presented for global buyers.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, i) => (
            <button
              type="button"
              key={`${img.src}-${i}`}
              className={`gallery-item reveal reveal-visual reveal-delay-${i % 4} gallery-item--${img.ratio}`}
              onClick={() => setActive(img)}
              aria-label={`Open image: ${img.alt}`}
            >
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.alt} onClick={close}>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.alt} />
            <p className="lightbox__caption">{active.alt}</p>
            <button type="button" className="lightbox__close" onClick={close} aria-label="Close image">
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
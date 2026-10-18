import { useState, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IMAGES } from "@/assets/images";
import "@/styles/gallery.css";

const GALLERY = [
  { src: IMAGES.product1, alt: "Medical disposable product packaging" },
  { src: IMAGES.product5, alt: "Disposable healthcare products" },
  { src: IMAGES.product6, alt: "Medical consumables product range" },
  { src: IMAGES.product7, alt: "Medical supplies ready for shipment" },
  { src: IMAGES.alcoholSwabs, alt: "Alcohol swabs medical disposable product" },
  { src: IMAGES.infusionSet, alt: "Infusion set medical product" },
  { src: IMAGES.nitrileGloves, alt: "Nitrile examination gloves" },
  { src: IMAGES.packing, alt: "Medical products securely packed for export" },
  { src: IMAGES.packing2, alt: "Packaged medical disposable supplies" },
  { src: IMAGES.packing3, alt: "Cartons being packed for export shipment" },
  { src: IMAGES.packing4, alt: "Packed boxes ready for dispatch" },
  { src: IMAGES.packing5, alt: "Shipment cartons being loaded" },
  { src: IMAGES.packing6, alt: "Packing and dispatch operations" },
];

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  const close = useCallback(() => setSelected(null), []);

  const navigate = useCallback(
    (dir) => {
      setSelected((prev) => {
        if (prev === null) return prev;
        const idx = GALLERY.findIndex((g) => g.src === prev.src);
        const next = (idx + dir + GALLERY.length) % GALLERY.length;
        return GALLERY[next];
      });
    },
    []
  );

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close, navigate]);

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-head reveal" data-animation="fade-up">
          <span className="section-tag">Gallery</span>
          <h2>
            Our Products, <span>Packaging &amp; Shipments</span>
          </h2>
          <p>
            A look at the medical disposables we supply, the way we pack them, and the standards we uphold.
          </p>
        </div>

        <div className="gallery__grid">
          {GALLERY.map((g, i) => (
            <figure
              className={`gallery__item reveal gallery__item--${(i % 3) + 1}`}
              data-animation="scale"
              key={i}
              onClick={() => setSelected(g)}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>
                <span>View</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
          <button className="lightbox__close" aria-label="Close lightbox" onClick={close}>
            <FiX />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
          >
            <FiChevronLeft />
          </button>
          <figure className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.src} alt={selected.alt} />
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

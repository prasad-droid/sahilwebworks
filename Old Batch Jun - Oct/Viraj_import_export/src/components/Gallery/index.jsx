import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { galleryItems } from "../../data/data";

const categories = ["All", "Carpets", "Terry Towels", "Wooden Handicrafts"];
const IMAGE_POOLS = ["Carpets", "Terry Towels", "Wooden Handicrafts"];
const INITIAL_PER_CATEGORY = 5;

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useRef(null);

  const matches = useMemo(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter]
  );

  const items = useMemo(() => {
    if (filter === "All") {
      const limit = expanded ? Infinity : INITIAL_PER_CATEGORY;
      return IMAGE_POOLS.flatMap((cat) => galleryItems.filter((g) => g.category === cat).slice(0, limit));
    }
    return matches.slice(0, expanded ? Infinity : INITIAL_PER_CATEGORY);
  }, [filter, matches, expanded]);

  const changeFilter = (c) => {
    setFilter(c);
    setExpanded(false);
  };

  const toggleMore = () => {
    setExpanded((v) => {
      const next = !v;
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
      return next;
    });
  };

  const close = useCallback(() => setLightbox(null), []);
  const navigate = useCallback(
    (dir) => {
      setLightbox((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, navigate]);

  return (
    <section id="gallery" className="gallery section" ref={sectionRef}>
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">Gallery</span>
          <h2 className="section__title">A Glimpse of Our Craft</h2>
          <p className="section__sub">
            Our full collection of handmade carpets, premium terry towels, and wooden handicrafts.
          </p>
        </div>

        <div className="gallery__filters" data-reveal role="tablist" aria-label="Gallery categories">
          {categories.map((c) => (
            <button
              key={c}
              className={`gallery__filter ${filter === c ? "is-active" : ""}`}
              onClick={() => changeFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery__grid">
          {items.map((g, i) => (
            <figure
              className="gallery__item"
              key={`${g.category}-${i}`}
              onClick={() => setLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setLightbox(i)}
            >
              <img src={g.src} alt={g.alt} loading="lazy" />
              <figcaption>
                <span className="gallery__item-title">{g.title}</span>
                <span className="gallery__item-cat">{g.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {matches.length > INITIAL_PER_CATEGORY && (
          <div className="gallery__more">
            <button className="btn btn--ghost btn--lg" onClick={toggleMore}>
              {expanded ? (
                <>
                  Show Less <FiChevronUp />
                </>
              ) : (
                <>
                  Show More <FiChevronDown />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={close} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button className="lightbox__close" onClick={close} aria-label="Close">
            <FiX />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              navigate(-1);
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img src={items[lightbox].src} alt={items[lightbox].alt} />
            <figcaption>
              {items[lightbox].title} — {items[lightbox].category}
            </figcaption>
          </figure>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              navigate(1);
            }}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;

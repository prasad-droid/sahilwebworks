import { useEffect, useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';
import ImageWithFallback from './ImageWithFallback.jsx';
import { portfolio } from '../data/site.js';

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!activeItem) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveItem(null);
    };
    document.body.classList.add('lightbox-open');
    closeButtonRef.current?.focus();
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('lightbox-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeItem]);

  return (
    <section id="portfolio" className="section portfolio-section" aria-labelledby="portfolio-title">
      <div className="container">
        <div className="section-heading section-heading-center" data-reveal>
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            Product Portfolio
          </p>
          <h2 id="portfolio-title">Explore Our Product Portfolio.</h2>
          <p className="section-lead">
            A clear view of our packaging range and our fresh banana leaf export offering. Select an
            image to view it more closely.
          </p>
        </div>

        {portfolio.map((group) => (
          <div className="portfolio-group" key={group.categoryId} data-reveal>
            <div className="portfolio-group-heading">
              <h3 id={group.categoryId}>{group.category}</h3>
              <span>{group.items.length} {group.items.length === 1 ? 'product' : 'products'}</span>
            </div>
            <div className={`portfolio-grid${group.items.length === 1 ? ' portfolio-grid-single' : ''}`}>
              {group.items.map((item) => (
                <button
                  type="button"
                  className="portfolio-card"
                  key={item.title}
                  onClick={() => setActiveItem(item)}
                  aria-label={`View ${item.title} image`}
                >
                  <span className="portfolio-media">
                    <ImageWithFallback src={item.image} alt={item.imageAlt} width="800" height="640" />
                    <span className="portfolio-expand" aria-hidden="true">
                      <Expand size={17} />
                    </span>
                  </span>
                  <span className="portfolio-caption">
                    <strong>{item.title}</strong>
                    <small>{item.caption}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {activeItem && (
        <div
          className="lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveItem(null);
          }}
        >
          <div className="lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="lightbox-title">
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close image viewer"
              onClick={() => setActiveItem(null)}
              ref={closeButtonRef}
            >
              <X size={22} />
            </button>
            <ImageWithFallback src={activeItem.image} alt={activeItem.imageAlt} width="1200" height="900" />
            <div className="lightbox-caption">
              <h3 id="lightbox-title">{activeItem.title}</h3>
              <p>{activeItem.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

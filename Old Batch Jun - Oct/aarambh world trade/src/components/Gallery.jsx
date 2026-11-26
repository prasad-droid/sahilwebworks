import { useCallback, useState } from 'react';
import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { galleryItems } from '../data/gallery.js';
import { Lightbox } from './Lightbox.jsx';
import { useEnquiry } from '../context/EnquiryContext.jsx';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'company', label: 'Our Products' },
  { id: 'stock', label: 'Category & Industry' },
];

export function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const { startEnquiry } = useEnquiry();

  const visible = galleryItems.filter(
    (item) => filter === 'all' || item.source === filter
  );

  const close = useCallback(() => setLightboxIndex(-1), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + visible.length) % visible.length),
    [visible.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i + 1) % visible.length),
    [visible.length]
  );

  return (
    <section className="gallery section" aria-labelledby="gallery-heading">
      <div className="container container--wide">
        <SectionHeading
          eyebrow="Products in focus"
          title="Product Gallery"
          titleId="gallery-heading"
          description="A visual look at the products and categories we trade. Select any image to view it larger."
          align="center"
        />

        <Reveal className="gallery__filters" delay={40}>
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              className={`gallery__filter${filter === f.id ? ' is-active' : ''}`}
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <ul className="gallery__grid">
          {visible.map((item, i) => (
            <Reveal
              as="li"
              key={item.id}
              className={`gallery__cell gallery__cell--${item.span}`}
              delay={Math.min(i, 8) * 45}
            >
              <button
                type="button"
                className="gallery__item"
                onClick={() => setLightboxIndex(i)}
                aria-label={`View larger image: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="gallery__overlay" aria-hidden="true">
                  <span className="gallery__zoom">
                    <Icon name="expand" size={18} />
                  </span>
                </span>
                <span className="gallery__caption">
                  <strong>{item.caption}</strong>
                  <span>{item.credit}</span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>

        <Reveal className="gallery__foot" delay={60}>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => startEnquiry('', { anchor: '#bulk-order' })}
          >
            Discuss a Product
            <Icon name="arrowRight" size={18} />
          </button>
        </Reveal>
      </div>

      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}

export default Gallery;

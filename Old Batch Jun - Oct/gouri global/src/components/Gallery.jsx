import { useState } from 'react';
import { gallery } from '../data/data';
import Reveal from './Reveal';
import '../styles/gallery.css';

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = () => setLightbox(null);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <span className="section-eyebrow">Gallery</span>
            <h2 className="section-title">Our Products at a Glance</h2>
            <p className="section-subtitle">
              Authentic Indian products crafted with care for markets at home and abroad.
            </p>
          </Reveal>
        </div>

        <div className="gallery__grid">
          {gallery.map((item, i) => (
            <Reveal key={item.id} delay={i * 80} className={`gallery__cell gallery__cell--${item.id}`}>
              <button
                className="gallery__item"
                onClick={() => setLightbox(item)}
                aria-label={`View larger: ${item.caption}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="gallery__image"
                />
                <span className="gallery__overlay">
                  <span className="gallery__zoom" aria-hidden="true">+</span>
                </span>
                <span className="gallery__caption">{item.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightbox.caption} onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close image viewer">
            &times;
          </button>
          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="lightbox__image"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="lightbox__caption">{lightbox.caption}</p>
        </div>
      )}
    </section>
  );
}
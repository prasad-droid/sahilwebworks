import { useEffect, useRef, useState } from 'react';
import '../styles/gallery.css';

const galleryImages = [
  { src: '/images/stock-corrugated-boxes.jpg', alt: 'Stacked corrugated boxes ready for shipping and storage' },
  { src: '/images/stock-spices.jpg', alt: 'Assorted Indian spices displayed for export' },
  { src: '/images/stock-heavy-duty.jpg', alt: 'Heavy-duty corrugated boxes on warehouse shelving' },
  { src: '/images/stock-green-chillies.jpg', alt: 'Fresh green chillies prepared for wholesale supply' },
  { src: '/images/stock-hero.jpg', alt: 'Colourful shipping containers at a global trade port' },
  { src: '/images/stock-custom-boxes.jpg', alt: 'Custom corrugated boxes stacked and ready for dispatch' }
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current ? sectionRef.current.querySelectorAll('.fade-up') : [];
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  const openLightbox = (index) => { setLightboxIndex(index); document.body.style.overflow = 'hidden'; };
  const closeLightbox = () => { setLightboxIndex(null); document.body.style.overflow = ''; };

  return (
    <section className="gallery section" id="gallery" ref={sectionRef}>
      <div className="container">
        <div className="gallery-header fade-up">
          <span className="section-label">Gallery</span>
          <h2 className="section-heading">Our Products in Action</h2>
          <p className="section-subheading">
            A selection of products and packaging solutions we source and coordinate for export.
          </p>
        </div>

        <div className="gallery-grid fade-up fade-up-delay-1">
          {galleryImages.map((image, index) => (
            <div
              key={image.src + index}
              className="gallery-item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex="0"
              aria-label={`View ${image.alt}`}
              onKeyDown={(e) => { if (e.key === 'Enter') openLightbox(index); }}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
              <div className="gallery-item-overlay">
                <span className="gallery-item-text">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox open" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image viewer">
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close image viewer">✕</button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length); }}
            aria-label="Previous image"
          >←</button>
          <img
            className="lightbox-img"
            src={galleryImages[lightboxIndex].src}
            alt={galleryImages[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((prev) => (prev + 1) % galleryImages.length); }}
            aria-label="Next image"
          >→</button>
        </div>
      )}
    </section>
  );
}
import { useEffect, useState } from 'react'
import { GALLERY } from '../data/business.js'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)
  const isOpen = activeIndex !== null
  const activePhoto = isOpen ? GALLERY[activeIndex] : null

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowLeft') {
        setActiveIndex((index) => (index === null ? index : (index - 1 + GALLERY.length) % GALLERY.length))
      }
      if (event.key === 'ArrowRight') {
        setActiveIndex((index) => (index === null ? index : (index + 1) % GALLERY.length))
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const showPrevious = () => {
    setActiveIndex((index) => (index === null ? index : (index - 1 + GALLERY.length) % GALLERY.length))
  }

  const showNext = () => {
    setActiveIndex((index) => (index === null ? index : (index + 1) % GALLERY.length))
  }

  return (
    <section className="section section--ivory" id="gallery">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">Our Work</p>
          <h2 className="section__title">Packaging in Focus</h2>
          <p className="section__subtitle">
            A closer look at the kraft paper bags and corrugated packaging we source for retail, e-commerce and export buyers.
          </p>
        </header>
        <ul className="gallery__grid">
          {GALLERY.map((photo, index) => (
            <li key={photo.src} className="gallery__cell">
              <button
                type="button"
                className="gallery__item"
                onClick={() => setActiveIndex(index)}
                aria-label={`View larger image: ${photo.alt}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isOpen ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setActiveIndex(null)}>
          <button
            type="button"
            className="lightbox__close"
            onClick={() => setActiveIndex(null)}
            aria-label="Close image preview"
            autoFocus
          >
            &times;
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(event) => {
              event.stopPropagation()
              showPrevious()
            }}
            aria-label="Previous image"
          >
            &#8249;
          </button>
          <figure className="lightbox__figure" onClick={(event) => event.stopPropagation()}>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <figcaption className="lightbox__caption">
              <span>{activeIndex + 1} / {GALLERY.length}</span>
              {activePhoto.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(event) => {
              event.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      ) : null}
    </section>
  )
}

export default Gallery

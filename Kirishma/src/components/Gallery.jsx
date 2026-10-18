import { useCallback, useEffect, useRef, useState } from 'react'
import { galleryContent, galleryImages } from '../data/gallery.js'
import useLockBodyScroll from '../hooks/useLockBodyScroll.js'
import useReveal from '../hooks/useReveal.js'
import SectionHeading from './SectionHeading.jsx'
import '../styles/gallery.css'

export default function Gallery() {
  const [ref, isVisible] = useReveal()
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const closeButtonRef = useRef(null)
  const lastTriggerRef = useRef(null)
  const isOpen = lightboxIndex !== null

  useLockBodyScroll(isOpen)

  const close = useCallback(() => setLightboxIndex(null), [])

  const step = useCallback(
    (direction) => {
      setLightboxIndex((current) => {
        if (current === null) return current
        return (current + direction + galleryImages.length) % galleryImages.length
      })
    },
    [],
  )

  useEffect(() => {
    if (!isOpen) return

    lastTriggerRef.current = document.activeElement
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowRight') step(1)
      if (event.key === 'ArrowLeft') step(-1)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      if (lastTriggerRef.current instanceof HTMLElement) lastTriggerRef.current.focus()
    }
  }, [isOpen, close, step])

  const activeImage = isOpen ? galleryImages[lightboxIndex] : null

  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-heading">
      <div className="container">
        <SectionHeading
          label={galleryContent.label}
          heading={galleryContent.heading}
          text={galleryContent.text}
          id="gallery-heading"
        />

        <ul className={`gallery__grid reveal ${isVisible ? 'is-visible' : ''}`.trim()} ref={ref}>
          {galleryImages.map((image, index) => (
            <li
              className={`gallery__item ${image.tall ? 'gallery__item--tall' : ''}`.trim()}
              key={image.id}
              style={{ '--i': index, '--reveal-delay': `${(index % 6) * 70}ms` }}
            >
              <button
                type="button"
                className="gallery__btn"
                onClick={() => setLightboxIndex(index)}
                aria-haspopup="dialog"
              >
                <span className="gallery__media">
                  <img
                    className="gallery__image"
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                </span>
                <span className="gallery__caption">
                  <span className="gallery__caption-text">{image.caption}</span>
                  <span className="gallery__caption-icon" aria-hidden="true" />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="gallery__note">{galleryContent.note}</p>
      </div>

      {isOpen ? (
        <div
          className="lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close()
          }}
        >
          <div
            className="lightbox__dialog"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.caption}
          >
            <button
              type="button"
              className="lightbox__close"
              onClick={close}
              ref={closeButtonRef}
              aria-label="Close image"
            >
              <span aria-hidden="true">&times;</span>
            </button>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous image"
            >
              <span aria-hidden="true">&#8249;</span>
            </button>

            <figure className="lightbox__figure">
              <img className="lightbox__image" src={activeImage.src} alt={activeImage.alt} />
              <figcaption className="lightbox__caption">
                <span>{activeImage.caption}</span>
                <span className="lightbox__counter">
                  {lightboxIndex + 1} / {galleryImages.length}
                </span>
              </figcaption>
            </figure>

            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={() => step(1)}
              aria-label="Next image"
            >
              <span aria-hidden="true">&#8250;</span>
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}

import { useCallback, useEffect, useRef } from 'react'
import { productWhatsappMessage, site, whatsappLink } from '../data/site.js'
import useLockBodyScroll from '../hooks/useLockBodyScroll.js'
import SmartImage from './SmartImage.jsx'
import '../styles/products.css'

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

/**
 * Product detail modal.
 * Shows only information held in the product data — nothing is invented, and
 * optional blocks (specs) disappear when empty.
 */
export default function ProductDetailModal({ product, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const previouslyFocused = useRef(null)

  useLockBodyScroll(Boolean(product))

  const handleKeyDown = useCallback(
    (event) => {
      if (!product) return

      if (event.key === 'Escape') {
        event.preventDefault()
        onClose?.()
        return
      }

      if (event.key !== 'Tab') return

      // Keep keyboard focus inside the dialog.
      const nodes = dialogRef.current?.querySelectorAll(FOCUSABLE)
      if (!nodes || nodes.length === 0) return

      const first = nodes[0]
      const last = nodes[nodes.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    },
    [product, onClose],
  )

  useEffect(() => {
    if (!product) return

    previouslyFocused.current = document.activeElement
    closeRef.current?.focus()
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (previouslyFocused.current instanceof HTMLElement) {
        previouslyFocused.current.focus()
      }
    }
  }, [product, handleKeyDown])

  if (!product) return null

  const specs = product.specs ?? []
  const hasDescription = Boolean(product.description || product.longDescription)

  return (
    <div
      className="modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose?.()
      }}
    >
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close product details"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <div className="modal__media">
          <SmartImage
            className="modal__image"
            src={product.image}
            alt={product.imageAlt}
            label={product.name}
            width="900"
            height="600"
          />
        </div>

        <div className="modal__content">
          <p className="modal__category">{product.category}</p>
          <h3 className="modal__title" id="product-modal-title">
            {product.name}
          </h3>

          {hasDescription ? (
            <div className="modal__text">
              {product.description ? <p className="modal__lead">{product.description}</p> : null}
              {product.longDescription ? <p>{product.longDescription}</p> : null}
            </div>
          ) : null}

          <div className="modal__section">
            <h4 className="modal__section-title">Packaging Options</h4>
            <ul className="modal__packs">
              {product.packaging.map((size) => (
                <li className="pack-chip pack-chip--lg" key={size}>
                  {size}
                </li>
              ))}
            </ul>
          </div>

          {specs.length ? (
            <div className="modal__section">
              <h4 className="modal__section-title">Product Information</h4>
              <dl className="modal__specs">
                {specs.map((spec) => (
                  <div className="modal__spec" key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
                <div className="modal__spec">
                  <dt>Pack sizes</dt>
                  <dd>{product.packaging.join(' · ')}</dd>
                </div>
              </dl>
            </div>
          ) : null}

          <div className="modal__actions">
            <a
              className="btn btn--primary"
              href={whatsappLink(productWhatsappMessage(product.name))}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire on WhatsApp
            </a>
            <a className="btn btn--outline" href={`mailto:${site.email}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`}>
              Email Enquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

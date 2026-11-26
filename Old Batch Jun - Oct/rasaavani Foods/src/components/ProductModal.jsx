import { useEffect, useRef } from 'react'
import { availabilityLabel } from '../data/products.js'
import { requestEnquiry } from '../utils/enquiry.js'
import useBodyScrollLock from '../hooks/useBodyScrollLock.js'
import { IconClose, IconArrow } from './Icons.jsx'

export default function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const isOpen = Boolean(product)

  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return undefined
    const previouslyFocused = document.activeElement
    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const { name, category, status, image, alt, description, shortDescription, servingSuggestions } =
    product

  return (
    <div
      className="product-modal"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div
        className="product-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        ref={dialogRef}
      >
        <button
          type="button"
          className="product-modal__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close product details"
        >
          <IconClose />
        </button>

        <div className="product-modal__media">
          <img src={image} alt={alt || name} />
        </div>

        <div className="product-modal__content">
          <span className="product-modal__category">{category}</span>
          <h3 id="product-modal-title" className="product-modal__title">
            {name}
          </h3>
          <span
            className={`product-modal__status product-modal__status--${status}`}
          >
            {availabilityLabel[status]}
          </span>

          <p className="product-modal__desc">{description || shortDescription}</p>

          {servingSuggestions?.length > 0 && (
            <div className="product-modal__serve">
              <h4>Best enjoyed with</h4>
              <ul>
                {servingSuggestions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <p className="product-modal__note">
            Detailed product information&mdash;including packaging and
            availability&mdash;is available on request.
          </p>

          <div className="btn-group product-modal__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                onClose()
                requestEnquiry({
                  enquiryType: 'Product Enquiry',
                  product: name,
                })
              }}
            >
              Enquire About This Product
              <IconArrow className="btn__icon" />
            </button>
            <button type="button" className="btn btn--outline" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

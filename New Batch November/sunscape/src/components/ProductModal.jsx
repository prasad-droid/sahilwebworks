import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import '../styles/modal.css'

export default function ProductModal({ product, onClose, onInquire }) {
  const [visible, setVisible] = useState(false)
  const closeButtonRef = useRef(null)
  const timerRef = useRef(null)

  function handleClose() {
    setVisible(false)
    timerRef.current = window.setTimeout(onClose, 240)
  }

  useEffect(() => {
    if (!product) return

    const frame = window.requestAnimationFrame(() => setVisible(true))
    document.body.classList.add('modal-is-open')
    closeButtonRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(timerRef.current)
      document.body.classList.remove('modal-is-open')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [product])

  if (!product) return null

  return (
    <div
      className={`modal${visible ? ' is-open' : ''}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) handleClose()
      }}
    >
      <div className="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
        <button
          ref={closeButtonRef}
          type="button"
          className="modal__close"
          aria-label="Close product details"
          onClick={handleClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="modal__media">
          <img
            src={product.image}
            alt={product.imageAlt || product.name}
            width="800"
            height="600"
          />
        </div>

        <div className="modal__content">
          {product.category && <span className="eyebrow">{product.category}</span>}
          <h3 id="product-modal-title">{product.name}</h3>
          {product.description && <p>{product.description}</p>}

          {product.specifications?.length > 0 && (
            <div className="modal__block">
              <h4>Specifications</h4>
              <dl className="spec-list">
                {product.specifications.map((spec) => (
                  <div key={spec.label}>
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {product.packaging && (
            <div className="modal__block">
              <h4>Packaging Details</h4>
              <p>{product.packaging}</p>
            </div>
          )}

          <button type="button" className="btn btn--gold modal__cta" onClick={() => onInquire(product)}>
            Request Quote <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

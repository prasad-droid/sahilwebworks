import { useEffect, useRef } from 'react';
import { Icon } from './Icons.jsx';
import { asList, ON_REQUEST } from '../data/products.js';
import { whatsappLink } from '../data/business.js';
import { useEnquiry } from '../context/EnquiryContext.jsx';

/**
 * Full product detail panel.
 *
 * Every field that the business has not supplied renders "Available on
 * request" rather than an invented value, and the panel stays editable purely
 * through src/data/products.js.
 *
 * Accessibility: rendered as a modal dialog - focus is moved in on open,
 * trapped while open, and restored on close. Escape and backdrop click close it.
 */
export function ProductDetails({ product, onClose }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const lastFocused = useRef(null);
  const { startEnquiry } = useEnquiry();

  const open = Boolean(product);

  /* Save / restore focus. */
  useEffect(() => {
    if (open) {
      lastFocused.current = document.activeElement;
      const t = window.setTimeout(() => closeRef.current?.focus(), 60);
      return () => window.clearTimeout(t);
    }
    lastFocused.current?.focus?.();
    return undefined;
  }, [open]);

  /* Lock scroll + Escape handler + focus trap. */
  useEffect(() => {
    if (!open) return undefined;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== 'Tab') return;

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables?.length) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!product) return null;

  const isCompany = product.imageKind === 'company';
  const forms = asList(product.forms);
  const varieties = asList(product.varieties);
  const packaging = asList(product.packaging);
  const specs = Array.isArray(product.specifications) ? product.specifications : [];

  const Row = ({ label, value }) => (
    <div className="pd-row">
      <dt>{label}</dt>
      <dd>
        {Array.isArray(value) && value.length ? (
          <ul className="pd-tags">
            {value.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        ) : (
          <span className="pd-onrequest">{value || ON_REQUEST}</span>
        )}
      </dd>
    </div>
  );

  return (
    <div className="pd" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="pd__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pd-title"
        ref={panelRef}
      >
        <button
          type="button"
          className="pd__close"
          onClick={onClose}
          ref={closeRef}
          aria-label="Close product details"
        >
          <Icon name="close" size={20} />
        </button>

        <div className="pd__media">
          <img src={product.image} alt={product.imageAlt} width="1200" height="900" />
          <span className={`badge ${isCompany ? 'badge--company' : 'badge--stock'} pd__kind`}>
            {isCompany ? 'Photograph supplied by AARAMBH WORLDTRADE' : 'Product category visual'}
          </span>
        </div>

        <div className="pd__body">
          <p className="pd__category">{product.category}</p>
          <h2 className="pd__title" id="pd-title">
            {product.name}
          </h2>
          <p className="pd__description">{product.details || product.description}</p>

          <dl className="pd__rows">
            <Row label="Specifications" value={specs.length ? specs.map((s) => `${s.label}: ${s.value}`) : []} />
            <Row label="Available Forms" value={forms} />
            <Row label="Varieties" value={varieties} />
            <Row label="Packaging Options" value={packaging} />
            <Row label="MOQ" value={product.moq || ''} />
            <Row label="Bulk Availability" value={product.bulkNote || ''} />
          </dl>

          <p className="pd__note">
            <Icon name="info" size={17} />
            Specifications, forms, varieties, packaging and MOQ are shared against your requirement.
            Anything marked &ldquo;{ON_REQUEST}&rdquo; is confirmed on enquiry - nothing is listed that
            has not been verified.
          </p>

          <div className="pd__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                onClose();
                startEnquiry(product.name);
              }}
            >
              Request a Quote
              <Icon name="arrowRight" size={18} />
            </button>
            <a
              className="btn btn--ghost"
              href={whatsappLink(product.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" size={18} />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

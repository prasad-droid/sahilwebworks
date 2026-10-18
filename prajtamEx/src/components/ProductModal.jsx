import { useEffect, useRef } from "react";
import Icon from "./Icon";
import AssetImage from "./AssetImage";
import { lockScroll } from "../lib/scroll";
import { whatsappLink, whatsappMessages } from "../data/assets";

function DetailList({ title, items, fallback = "Details available on request" }) {
  const hasItems = Array.isArray(items) && items.length > 0;
  return (
    <div className="product-modal__detail">
      <h4>{title}</h4>
      {hasItems ? (
        <ul>
          {items.map((item) => (
            <li key={item}>
              <Icon name="check" size={14} />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p>{fallback}</p>
      )}
    </div>
  );
}

export default function ProductModal({ product, onClose, onRequestQuote }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    lockScroll(true);
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      lockScroll(false);
      if (previouslyFocused && typeof previouslyFocused.focus === "function") {
        previouslyFocused.focus();
      }
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div className="modal" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        ref={dialogRef}
      >
        <button type="button" className="modal__close" onClick={onClose} ref={closeRef} aria-label="Close product details">
          <Icon name="close" size={20} />
        </button>

        <div className="modal__media">
          {product.image ? (
            <AssetImage src={product.image} alt={product.name || "Product image"} label="PrajtamEx" />
          ) : (
            <div className="modal__placeholder" aria-hidden="true">
              <Icon name="image" size={38} />
            </div>
          )}
        </div>

        <div className="modal__body">
          {product.category && <span className="product-card__category">{product.category}</span>}
          <h3 id="product-modal-title">{product.name}</h3>

          {product.description ? (
            <p className="modal__text">{product.description}</p>
          ) : (
            <p className="modal__text modal__muted">Details available on request</p>
          )}

          <div className="modal__details">
            <DetailList title="Specifications" items={product.specifications} />
            <DetailList title="Packaging" items={product.packaging} />
          </div>

          <div className="modal__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => onRequestQuote(product)}
            >
              Send Enquiry
              <Icon name="arrowRight" size={16} />
            </button>
            <a
              className="btn btn--whatsapp"
              href={whatsappLink(whatsappMessages.product)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="chat" size={17} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

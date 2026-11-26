import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Banknote,
  MessageCircle,
  Minus,
  Plus,
  ShoppingBag,
  X,
} from 'lucide-react';
import { MAX_ORDER_QUANTITY, buildOrderMessage, whatsappLink } from '../data/site';

const initialForm = { name: '', phone: '', location: '', notes: '' };

const CheckoutDrawer = ({ item, onClose, onQuantityChange, onRemove }) => {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const drawerRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
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

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [onClose]);

  const handleRemoveClick = () => {
    setForm(initialForm);
    setError('');
    setIsReady(false);
    setWhatsappUrl('');
    onRemove();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!item || isReady) return;

    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
      setError('Enter a valid phone number with 10 to 15 digits.');
      return;
    }

    const message = buildOrderMessage({
      product: item.product,
      quantity: item.quantity,
      name: form.name.trim(),
      phone: form.phone.trim(),
      location: form.location.trim(),
      notes: form.notes.trim(),
    });
    const url = whatsappLink(message);

    setWhatsappUrl(url);
    setIsReady(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="drawer-layer">
      <div className="drawer-backdrop" onClick={onClose} aria-hidden="true" />

      <aside
        className="checkout-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        ref={drawerRef}
      >
        <header className="checkout-header">
          <div>
            <p className="eyebrow"><span className="eyebrow-dot" /> Direct order · COD</p>
            <h2 id="checkout-title">Checkout</h2>
          </div>
          <button
            className="drawer-close"
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close checkout"
          >
            <X size={21} strokeWidth={2} />
          </button>
        </header>

        <div className="checkout-scroll">
          {!item ? (
            <div className="checkout-empty">
              <span className="empty-icon"><ShoppingBag size={28} strokeWidth={1.6} /></span>
              <h3>Your cart is empty</h3>
              <p>Moringa Powder is the only product available for direct orders right now.</p>
              <a className="btn btn-gold" href="#products" onClick={onClose}>
                Browse products <ArrowRight size={16} strokeWidth={2} />
              </a>
            </div>
          ) : isReady ? (
            <div className="checkout-ready" role="status">
              <span className="ready-icon"><MessageCircle size={30} strokeWidth={1.7} /></span>
              <h3>Your order request is ready</h3>
              <p>
                A WhatsApp chat has opened with your COD request filled in. Send the message
                there to complete your request — no order has been placed until our team
                confirms it.
              </p>
              <div className="ready-summary">
                <span>{item.product.name} · {item.product.retail.pack}</span>
                <strong>{item.quantity} pouch{item.quantity === 1 ? '' : 'es'}</strong>
              </div>
              <a
                className="btn btn-gold checkout-submit"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} strokeWidth={2} /> Open WhatsApp again
              </a>
              <button
                className="text-button"
                type="button"
                onClick={() => setIsReady(false)}
              >
                Edit details
              </button>
            </div>
          ) : (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <div className="cart-item">
                <img src={item.product.image} alt={item.product.imageAlt} />
                <div className="cart-item-info">
                  <strong>{item.product.name}</strong>
                  <span>{item.product.retail.pack} · {item.product.retail.fineness} · {item.product.retail.drying}</span>
                  <span className="cart-item-price">{item.product.retail.price}</span>
                </div>
                <button
                  className="remove-item"
                  type="button"
                  onClick={handleRemoveClick}
                  aria-label={`Remove ${item.product.name} from cart`}
                >
                  <X size={17} strokeWidth={2} />
                </button>
              </div>

              <div className="checkout-quantity">
                <div>
                  <span className="checkout-label">Quantity</span>
                  <span className="checkout-hint">200 g pouches</span>
                </div>
                <div className="quantity-stepper">
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={16} strokeWidth={2} />
                  </button>
                  <output aria-live="polite">{item.quantity}</output>
                  <button
                    type="button"
                    onClick={() => onQuantityChange(item.quantity + 1)}
                    disabled={item.quantity >= MAX_ORDER_QUANTITY}
                    aria-label="Increase quantity"
                  >
                    <Plus size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="checkout-payment">
                <div className="payment-option">
                  <input type="radio" name="payment" value="cod" checked readOnly />
                  <span className="payment-icon"><Banknote size={20} strokeWidth={1.8} /></span>
                  <div>
                    <strong>Cash on Delivery (COD)</strong>
                    <span>Pay in cash when your order arrives.</span>
                  </div>
                  <span className="payment-tag">Active</span>
                </div>
                <p className="checkout-note">
                  Price and delivery charges are confirmed on WhatsApp before dispatch.
                </p>
              </div>

              <div className="checkout-fields">
                <label>
                  <span>Your name *</span>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label>
                  <span>Phone number *</span>
                  <input
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="e.g. 9225354180"
                    autoComplete="tel"
                    required
                  />
                </label>
                <label>
                  <span>Delivery location *</span>
                  <input
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="City, state and address"
                    autoComplete="street-address"
                    required
                  />
                </label>
                <label>
                  <span>Notes (optional)</span>
                  <textarea
                    name="notes"
                    rows="3"
                    value={form.notes}
                    onChange={handleChange}
                    placeholder="Delivery timing or other requests"
                  />
                </label>
              </div>

              {error && <p className="checkout-error" role="alert">{error}</p>}

              <button className="btn btn-gold checkout-submit" type="submit">
                Continue on WhatsApp <ArrowRight size={17} strokeWidth={2} />
              </button>
              <p className="checkout-disclaimer">
                This opens WhatsApp with your order details filled in. You send the message
                there to request the order; nothing is placed on this website.
              </p>
            </form>
          )}
        </div>
      </aside>
    </div>
  );
};

export default CheckoutDrawer;

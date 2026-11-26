import { useEffect, useState } from 'react';
import { Icon, WhatsAppGlyph } from './Icons.jsx';
import { PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '../data/business.js';

/**
 * Sticky WhatsApp + call actions.
 *
 * - Appears after the hero is scrolled past so it never covers the first
 *   screenful of content.
 * - The call button hides on very small screens to avoid crowding, and
 *   disappears entirely where WhatsApp is not supported.
 */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`floating${visible ? ' is-visible' : ''}`}>
      <a
        className="floating__btn floating__btn--call"
        href={`tel:${PHONE_TEL}`}
        aria-label={`Call ${PHONE_DISPLAY}`}
      >
        <Icon name="phone" size={20} />
        <span className="floating__label">Call now</span>
      </a>

      <a
        className="floating__btn floating__btn--wa"
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="floating__pulse" aria-hidden="true" />
        <WhatsAppGlyph size={24} />
        <span className="floating__label">WhatsApp us</span>
      </a>
    </div>
  );
}

export default WhatsAppButton;

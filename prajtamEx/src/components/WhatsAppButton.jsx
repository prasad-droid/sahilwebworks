import Icon from "./Icon";
import { contact, whatsappLink, whatsappMessages } from "../data/assets";

/**
 * Persistent conversion actions:
 *  - desktop: stacked floating WhatsApp + call buttons
 *  - mobile: full-width bottom action bar
 */
export default function WhatsAppButton() {
  return (
    <div className="float-actions">
      <a
        className="float-actions__btn float-actions__btn--call"
        href={`tel:${contact.phoneDial}`}
        aria-label={`Call Us — PrajtamEx on ${contact.phoneLabel}`}
      >
        <Icon name="phone" size={19} />
        <span className="float-actions__label">Call Us</span>
      </a>

      <a
        className="float-actions__btn float-actions__btn--wa"
        href={whatsappLink(whatsappMessages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with PrajtamEx on WhatsApp"
      >
        <Icon name="chat" size={21} />
        <span className="float-actions__label">WhatsApp</span>
      </a>
    </div>
  );
}

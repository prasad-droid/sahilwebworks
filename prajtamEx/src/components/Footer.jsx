import Logo from "./Logo";
import Icon from "./Icon";
import { navLinks, trustStrip } from "../data/site";
import { company, contact, whatsappLink, whatsappMessages, mailtoLink } from "../data/assets";
import { scrollToSection } from "../lib/scroll";

const focusLinks = [
  "Agriculture",
  "Recycling",
  "Import",
  "Export",
  "Product Portfolio",
  "Services",
];

export default function Footer() {
  const go = (id) => (event) => {
    event.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="footer" id="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__tagline">{company.tagline}</p>
          <p className="footer__text">{company.description}</p>
          <div className="footer__social">
            <a
              className="footer__social-btn footer__social-btn--wa"
              href={whatsappLink(whatsappMessages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with PrajtamEx on WhatsApp"
            >
              <Icon name="chat" size={18} />
            </a>
            <a
              className="footer__social-btn"
              href={`tel:${contact.phoneDial}`}
              aria-label={`Call PrajtamEx on ${contact.phoneLabel}`}
            >
              <Icon name="phone" size={18} />
            </a>
            <a
              className="footer__social-btn"
              href={mailtoLink({ subject: "Enquiry – PrajtamEx" })}
              aria-label={`Email PrajtamEx at ${contact.email}`}
            >
              <Icon name="mail" size={18} />
            </a>
          </div>
        </div>

        <nav className="footer__col" aria-label="Footer navigation">
          <h2 className="footer__heading">Navigation</h2>
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={go(link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col">
          <h2 className="footer__heading">Business Focus</h2>
          <ul>
            {focusLinks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col footer__col--contact">
          <h2 className="footer__heading">Contact</h2>
          <ul>
            <li>
              <Icon name="users" size={16} />
              <span>
                <strong>{contact.person}</strong>
              </span>
            </li>
            <li>
              <Icon name="phone" size={16} />
              <a href={`tel:${contact.phoneDial}`}>{contact.phoneLabel}</a>
            </li>
            <li>
              <Icon name="chat" size={16} />
              <a
                href={whatsappLink(whatsappMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contact.whatsappLabel}
              </a>
            </li>
            <li>
              <Icon name="mail" size={16} />
              <a href={mailtoLink({ subject: "Enquiry – PrajtamEx" })}>{contact.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>{company.copyright}</p>
          <ul className="footer__mini" aria-label="Areas of focus">
            {trustStrip.slice(0, 4).map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

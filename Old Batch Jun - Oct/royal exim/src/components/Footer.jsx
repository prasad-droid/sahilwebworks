import { navLinks, site } from "../data/site";
import { IconPhone, IconWhatsApp, IconMail, IconLocation } from "./Icons";
import "../styles/footer.css";

const CONTACT_LINKS = [
  {
    id: "f-phone",
    icon: IconPhone,
    label: site.phone,
    href: `tel:+${site.phoneRaw}`,
  },
  {
    id: "f-whatsapp",
    icon: IconWhatsApp,
    label: site.phone,
    href: `https://wa.me/${site.whatsappRaw}?text=${encodeURIComponent(site.whatsappMessage)}`,
  },
  {
    id: "f-email",
    icon: IconMail,
    label: site.email,
    href: `mailto:${site.email}`,
  },
  {
    id: "f-location",
    icon: IconLocation,
    label: site.location,
    href: null,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <img src="/images/logo.jpeg" alt="A1 Royal Exim logo" width="42" height="42" />
            <span>
              A1 Royal Exim
              <small>{site.tagline}</small>
            </span>
          </a>
          <p>{site.description}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3>Navigate</h3>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3>Contact</h3>
          <ul>
            {CONTACT_LINKS.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon /> <span>{item.label}</span>
                </>
              );
              return (
                <li key={item.id}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {content}
                    </a>
                  ) : (
                    <span>{content}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {site.year} A1 Royal Exim. All Rights Reserved.</p>
          <p>{site.location}</p>
        </div>
        <div className="container footer__credit">
          <p>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.sahilwebworks.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sahilwebworks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
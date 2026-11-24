import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import { socialLinks as socialFromSettings } from "../store/social";
import SocialIcon from "./SocialIcon";
import {
  NAV_LINKS,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS,
  COMPANY,
} from "../data/site";
import "../styles/footer.css";

// ==========================================================================
// FOOTER — navigation, contact details, social links, Google Map, legal.
// ==========================================================================

export default function Footer() {
  const { settings, content } = useSite();
  const contact = settings?.contact || {};
  const footer = content?.footer || {};
  const navLinks = (content?.header?.nav?.length ? content.header.nav : NAV_LINKS).filter(
    (link) => link && link.to
  );
  const companyName = settings?.siteName || COMPANY;
  const phoneDisplay = contact.phone || PHONE_DISPLAY;
  const phoneTel = `tel:${String(phoneDisplay).replace(/[^\d+]/g, "")}`;
  const email = contact.email || EMAIL;
  const address = contact.address || contact.city
    ? [contact.address, contact.city, contact.country].filter(Boolean).join(", ")
    : ADDRESS;
  const socialLinks = socialFromSettings(settings?.social);
  const description = footer.description || settings?.footerNote || "";

  const mapQuery = encodeURIComponent(`${companyName}, ${address === "India" ? "" : address}`.trim());

  const copyright = (footer.copyright || "© {year} {company}. All rights reserved.")
    .replaceAll("{year}", String(new Date().getFullYear()))
    .replaceAll("{company}", companyName);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__brand-name">{companyName}</span>
            <span className="footer__brand-sub">{footer.brandSub || "EXPORT · IMPORT · DISTRIBUTION"}</span>
            <p className="footer__desc">
              {description ||
                "Exporter of Indian origin fresh fruits, vegetables, spices and agricultural products, and importer of premium dry fruits processed and distributed across India and worldwide."}
            </p>

            <ul className="footer__social" aria-label="Social media">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <SocialIcon label={s.label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav className="footer__col" aria-label="Footer">
            <h3 className="footer__heading">{footer.navigationHeading || "Navigation"}</h3>
            <ul>
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="footer__link">{footer.privacyLabel || "Privacy Policy"}</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">{footer.contactHeading || "Contact"}</h3>
            <ul className="footer__contact">
              <li>
                <a href={`mailto:${email}`} className="footer__link">{email}</a>
              </li>
              <li>
                <a href={phoneTel} className="footer__link">{phoneDisplay}</a>
              </li>
              <li>
                <span className="footer__link footer__link--static">{address}</span>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__col--map">
            <h3 className="footer__heading">{footer.findUsHeading || "Find Us"}</h3>
            <div className="footer__map">
              <iframe
                title="Map showing our location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

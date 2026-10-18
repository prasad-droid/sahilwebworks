import { Link } from "../router";
import { useSite } from "../store/SiteContext";
import {
  NAV_LINKS,
  EMAIL,
  PHONE_DISPLAY,
  ADDRESS,
  SOCIAL_LINKS,
  COMPANY,
} from "../data/site";
import "../styles/footer.css";

// ==========================================================================
// FOOTER — navigation, contact details, social links, Google Map, legal.
// ==========================================================================

function SocialIcon({ label }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true };
  if (label === "LinkedIn")
    return <svg {...common}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21H9z" /></svg>;
  if (label === "Facebook")
    return <svg {...common}><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46H17V3.96c-.3-.04-1.3-.13-2.47-.13-2.45 0-4.13 1.5-4.13 4.24V10H7.7v3h2.7v8z" /></svg>;
  if (label === "Instagram")
    return <svg {...common}><path d="M12 7.4A4.6 4.6 0 1 0 16.6 12 4.6 4.6 0 0 0 12 7.4zm0 7.6A3 3 0 1 1 15 12a3 3 0 0 1-3 3zm5.8-7.8a1.07 1.07 0 1 1-1.07-1.07A1.07 1.07 0 0 1 17.8 7.2zM21.4 8.3a5.3 5.3 0 0 0-1.45-3.75A5.34 5.34 0 0 0 16.2 3.1c-1.48-.08-5.92-.08-7.4 0a5.33 5.33 0 0 0-3.75 1.44A5.32 5.32 0 0 0 3.6 8.3c-.08 1.48-.08 5.92 0 7.4a5.3 5.3 0 0 0 1.45 3.75 5.35 5.35 0 0 0 3.75 1.45c1.48.08 5.92.08 7.4 0a5.3 5.3 0 0 0 3.75-1.45 5.34 5.34 0 0 0 1.45-3.75c.08-1.48.08-5.91 0-7.4zm-1.93 8.97a3.04 3.04 0 0 1-1.71 1.71c-1.18.47-3.99.36-5.3.36s-4.13.1-5.3-.36a3.04 3.04 0 0 1-1.71-1.71c-.47-1.18-.36-3.99-.36-5.3s-.1-4.13.36-5.3A3.04 3.04 0 0 1 7.16 4.9c1.18-.47 3.99-.36 5.3-.36s4.13-.1 5.3.36a3.04 3.04 0 0 1 1.71 1.71c.47 1.18.36 3.99.36 5.3s.11 4.13-.36 5.3z" /></svg>;
  return <svg {...common}><path d="M17.5 3h3.2l-7 8 8.3 10h-6.5l-5-6.1L4.6 21H1.4l7.5-8.6L1 3h6.7l4.6 5.6zm-1.1 16.1h1.8L7.7 4.8H5.8z" /></svg>;
}

function socialFromSettings(settingsSocial, fallback) {
  const map = {
    LinkedIn: settingsSocial?.linkedin,
    Facebook: settingsSocial?.facebook,
    Instagram: settingsSocial?.instagram,
    X: settingsSocial?.twitter,
  };
  const configured = fallback
    .map((s) => (map[s.label] ? { label: s.label, href: map[s.label] } : s))
    .filter((s) => s.href);
  return configured;
}

export default function Footer() {
  const { settings } = useSite();
  const contact = settings?.contact || {};
  const companyName = settings?.siteName || COMPANY;
  const phoneDisplay = contact.phone || PHONE_DISPLAY;
  const phoneTel = `tel:${String(phoneDisplay).replace(/[^\d+]/g, "")}`;
  const email = contact.email || EMAIL;
  const address = contact.address || contact.city
    ? [contact.address, contact.city, contact.country].filter(Boolean).join(", ")
    : ADDRESS;
  const socialLinks = socialFromSettings(settings?.social, SOCIAL_LINKS);

  const mapQuery = encodeURIComponent(`${companyName}, ${address === "India" ? "" : address}`.trim());

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="footer__brand-name">{companyName}</span>
            <span className="footer__brand-sub">EXPORT · IMPORT · DISTRIBUTION</span>
            <p className="footer__desc">
              Exporter of Indian origin fresh fruits, vegetables, spices and
              agricultural products, and importer of premium dry fruits
              processed and distributed across India and worldwide.
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
            <h3 className="footer__heading">Navigation</h3>
            <ul>
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="footer__link">{l.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="footer__link">Privacy Policy</Link>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
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
            <h3 className="footer__heading">Find Us</h3>
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
          <p>© 2026 {companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

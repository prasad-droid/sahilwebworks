import business, { navLinks, buildWhatsAppLink } from "../data/business.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo-row" aria-label="Paraglobe Exims — Home">
            <img src="/images/logo.jpg" alt="Paraglobe Exims logo" className="footer__logo" />
            <div>
              <span className="footer__brand-name">Paraglobe Exims</span>
              <span className="footer__tagline">{business.tagline}</span>
            </div>
          </a>
          <p className="footer__desc">{business.description}</p>
          <div className="footer__social">
            {business.social?.linkedin && (
              <a href={business.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Paraglobe Exims on LinkedIn" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003zM7.391 20.813H3.828V9.238h3.563v11.575zM5.609 7.777a2.066 2.066 0 110-4.132 2.066 2.066 0 010 4.132zm15.204 13.036h-3.562v-5.651c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.749H9.701V9.238h3.414v1.561h.049c.476-.9 1.637-1.852 3.367-1.852 3.604 0 4.27 2.372 4.27 5.456v6.41z" />
                </svg>
              </a>
            )}
            {business.social?.facebook && (
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Paraglobe Exims on Facebook" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            )}
            {business.social?.instagram && (
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Paraglobe Exims on Instagram" className="footer__social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
                  <path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.332.013 7.052.072 5.775.131 4.602.392 3.635 1.359S.131 5.775.072 7.052C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.32 2.45 1.287 3.417.967.967 2.14 1.228 3.417 1.287C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.059 2.45-.32 3.417-1.287.967-.967 1.228-2.14 1.287-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.277-.32-2.45-1.287-3.417-.967-.967-2.14-1.228-3.417-1.287C15.668.013 15.259 0 12 0z" />
                  <path fill="currentColor" d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
                  <circle fill="currentColor" cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
            )}
          </div>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__heading">Navigate</h3>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#/catalog">Full Catalog</a>
            </li>
            <li>
              <a href={business.catalogPdf} download>
                Download Catalogue (PDF)
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Contact</h3>
          <ul className="footer__links">
            <li>
              <a href={`tel:+${business.phone}`}>{business.phoneDisplay}</a>
            </li>
            <li>
              <a href={`tel:+${business.phone2}`}>{business.phone2Display}</a>
            </li>
            <li>
              <a href={`mailto:${business.emailSales}`}>{business.emailSales}</a>
            </li>
            <li>
              <a href={`mailto:${business.emailExport}`}>{business.emailExport}</a>
            </li>
            <li>
              <a href={business.websiteUrl} target="_blank" rel="noopener noreferrer">
                {business.website}
              </a>
            </li>
            <li>
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__office">
          <h3 className="footer__heading">Office</h3>
          <p className="footer__address">{business.address}</p>
          <a href="#contact" className="btn btn-accent footer__cta">
            Request a Quote
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2026 Paraglobe Exims. All Rights Reserved.</p>
          <p className="footer__credit">
            Designed by{" "}
            <a href="https://www.sahilwebworks.com/" target="_blank" rel="noopener noreferrer">
              Sahil WebWorks
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
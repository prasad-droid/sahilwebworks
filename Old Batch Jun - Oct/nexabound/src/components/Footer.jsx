import '../styles/footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Customization', href: '#customization' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' }
];

const categories = [
  { label: 'Corrugated Packaging', href: '#products' },
  { label: 'Agri & Food Products', href: '#products' }
];

export default function Footer() {
  const scrollTo = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-logo">
              <img src="/images/logo-sm.jpg" alt="Nexabound Global Logo" loading="lazy" />
              <div>
                <div className="footer-brand-name">Nexabound Global</div>
                <div className="footer-brand-tagline">Connecting Markets. Delivering Trust.</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              An India-based merchant export company connecting quality Indian products with international B2B buyers.
            </p>
          </div>

          <div>
            <h4 className="footer-column-title">Navigation</h4>
            <div className="footer-links">
              {navLinks.map(link => (
                <a key={link.href} href={link.href} className="footer-link" onClick={(e) => scrollTo(e, link.href)}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-column-title">Products</h4>
            <div className="footer-links">
              {categories.map(cat => (
                <a key={cat.label} href={cat.href} className="footer-link" onClick={(e) => scrollTo(e, cat.href)}>
                  {cat.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-column-title">Contact</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">✉</span>
              <span className="footer-contact-text">
                <a href="mailto:nexaboundglobal@gmail.com">nexaboundglobal@gmail.com</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">☎</span>
              <span className="footer-contact-text">
                <a href="tel:+919665895667">+91 96658 95667</a>
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">✆</span>
              <span className="footer-contact-text">
                <a href="https://wa.me/919665895667" target="_blank" rel="noopener noreferrer">WhatsApp: +91 96658 95667</a>
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Nexabound Global. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
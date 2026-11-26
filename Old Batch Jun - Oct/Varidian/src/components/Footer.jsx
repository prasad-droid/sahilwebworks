import "../styles/footer.css";

const footerNav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Products", id: "products" },
  { label: "Our Process", id: "process" },
  { label: "Why Us", id: "why-us" },
  { label: "Contact", id: "contact" },
];

const footerContact = [
  {
    label: "Phone",
    value: "+91 7406103339",
    href: "tel:+917406103339",
  },
  {
    label: "WhatsApp",
    value: "+91 7406103339",
    href: "https://wa.me/917406103339",
  },
  {
    label: "Email",
    value: "varidianexim@gmail.com",
    href: "mailto:varidianexim@gmail.com",
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleClick = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <div className="footer__logo">
            <img
              src="/images/logo.jpg"
              alt="Varidian Exim logo"
              width="56"
              height="56"
              loading="lazy"
            />
            <div>
              <span className="footer__brand-name">Varidian Exim</span>
              <span className="footer__brand-tagline">Quality. Reliability. Global Reach.</span>
            </div>
          </div>
          <p className="footer__desc">
            Connecting India&rsquo;s agricultural products with international markets
            through reliable sourcing and professional export coordination.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <h3 className="footer__heading">Quick Links</h3>
          <ul>
            {footerNav.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={(e) => handleClick(e, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Get in Touch</h3>
          <ul>
            {footerContact.map((item) => (
              <li key={item.label}>
                <span className="footer__contact-label">{item.label}:</span>{" "}
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {item.value}
                </a>
              </li>
            ))}
            <li className="footer__contact-address">
              <span className="footer__contact-label">Office:</span>{" "}
              <span>
                Ground Floor, R S No.20/D/2, VPC No. 2824, Peerwadi Khadhaklat,
                Belgavi, Karnataka - 591228
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {currentYear} Varidian Exim. All Rights Reserved.</p>
          <a
            className="footer__credit"
            href="https://www.sahilwebworks.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Designed By SahilWebWorks
          </a>
          <p className="footer__bottom-tagline">Quality. Reliability. Global Reach.</p>
        </div>
      </div>
    </footer>
  );
}
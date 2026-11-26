import { Link } from "react-router-dom";
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "../Logo/Logo";
import { contact, whatsappLink, social, site } from "../../data/siteConfig";

const companyLinks = [
  { to: "/about", label: "About Us" },
  { to: "/affiliations", label: "Affiliations" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact" },
];

const productLinks = [
  { to: "/products#rice-dal", label: "Cereals and Pulses" },
  { to: "/products#spices", label: "Spices" },
  { to: "/products#cattle-foods", label: "Cattle Foods" },
  { to: "/products#engineering-products", label: "Engineering Products" },
];

const serviceLinks = [
  { to: "/services", label: "Product Sourcing" },
  { to: "/services", label: "Engineering Services" },
  { to: "/services", label: "Export Support" },
];

const resourceLinks = [
  { to: "/request-quote", label: "Product Catalogue" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
];

const socialItems = [
  { key: "linkedin", label: "LinkedIn", icon: <FaLinkedinIn size={16} aria-hidden="true" /> },
  { key: "facebook", label: "Facebook", icon: <FaFacebookF size={16} aria-hidden="true" /> },
  { key: "instagram", label: "Instagram", icon: <FaInstagram size={16} aria-hidden="true" /> },
  { key: "twitter", label: "Twitter", icon: <FaTwitter size={16} aria-hidden="true" /> },
  { key: "youtube", label: "YouTube", icon: <FaYoutube size={16} aria-hidden="true" /> },
];

const FooterColumn = ({ title, children }) => (
  <div>
    <h4>{title}</h4>
    <div className="footer__links">{children}</div>
  </div>
);

export default function Footer() {
  const activeSocial = socialItems.filter((s) => social[s.key]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Logo footer />
            <p>
              An India-based merchant exporter and global sourcing partner for agricultural
              products, engineering products and engineering services.
            </p>
            {activeSocial.length > 0 && (
              <div className="footer__social">
                {activeSocial.map((s) => (
                  <a key={s.key} href={social[s.key]} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          <FooterColumn title="Company">
            {companyLinks.map((l) => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Products">
            {productLinks.map((l) => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {serviceLinks.map((l) => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Resources">
            {resourceLinks.map((l) => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </FooterColumn>

          <div>
            <h4>Contact</h4>
            <ul className="footer__contact">
              <li>
                <FaPhone size={15} aria-hidden="true" />
                <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>
              </li>
              <li>
                <FaWhatsapp size={15} aria-hidden="true" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {contact.whatsapp}
                </a>
              </li>
              <li>
                <FaEnvelope size={15} aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <FaMapMarkerAlt size={15} aria-hidden="true" />
                <span>
                  {contact.addressLines.join(", ")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__tagline">{site.tagline}</span>
          <span className="footer__copy">
            © 2026 {site.name}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

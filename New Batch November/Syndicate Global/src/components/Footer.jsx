import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Products', href: '#products' },
  { label: 'Our Process', href: '#process' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact Us', href: '#contact' },
];

const productLinks = [
  { label: 'Perishable Agro-Produce', href: '#agriculture' },
  { label: 'Non-Perishable Commodities', href: '#contact' },
  { label: 'Narrow Fabric Woven Tapes', href: '#textiles' },
  { label: 'Polymer Granules', href: '#contact' },
  { label: 'Industrial Metals', href: '#contact' },
  { label: 'Quality Standards', href: '#quality' },
];

const whatsappHref = `https://wa.me/917517331951?text=${encodeURIComponent(
  'Hello Syndicate Global EXIM, I would like to discuss a bulk export requirement. Please share product availability and export details.',
)}`;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/images/syndicate-logo.webp" alt="Syndicate Global EXIM logo" width="695" height="485" loading="lazy" />
            <p className="footer__company">Syndicate Global EXIM</p>
            <p className="footer__tagline">Trust, Progress, Prosperity</p>
            <p className="footer__desc">
              A trusted Indian export partner for Perishable Agro-Produce,
              Non-Perishable Commodities, Narrow Fabric Tapes, Polymer Granules &amp;
              Industrial Metals, built on quality, compliance and lasting B2B
              relationships.
            </p>
          </div>

          <nav className="footer__column" aria-label="Quick navigation">
            <p className="footer__column-title">Quick Navigation</p>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <nav className="footer__column" aria-label="Product links">
            <p className="footer__column-title">Products</p>
            <ul>
              {productLinks.map((link) => (
                <li key={link.label}><a href={link.href}>{link.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer__column">
            <p className="footer__column-title">Get in Touch</p>
            <ul className="footer__contact">
              <li><Phone aria-hidden="true" /><span><small>Phone</small><a href="tel:+917517331951">+91 7517331951</a></span></li>
              <li><MessageCircle aria-hidden="true" /><span><small>WhatsApp</small><a href={whatsappHref} target="_blank" rel="noreferrer">+91 7517331951</a></span></li>
              <li><Mail aria-hidden="true" /><span><small>Email</small><a href="mailto:rahul@syndicateglobalexim.com">rahul@syndicateglobalexim.com</a></span></li>
              <li><MapPin aria-hidden="true" /><span><small>Address</small>Chikalthana, Chh. Sambhajinagar – 431003, Maharashtra, India.</span></li>
            </ul>
            <a className="footer__cta" href="#contact">
              Send an Inquiry <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Syndicate Global EXIM. All Rights Reserved.</p>
          <p>Trust, Progress, Prosperity</p>
        </div>
      </div>
    </footer>
  );
}

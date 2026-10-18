import { products } from '../data/products.js'
import { Mail, Phone, MapPin, ArrowUpRight } from './Icons.jsx'
import logo from '../logo.png'

const QUICK_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#products', label: 'Our Products' },
  { href: '#why-us', label: 'Why Choose Us' },
  { href: '#global-reach', label: 'Global Reach' },
  { href: '#oem', label: 'OEM & Private Label' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-wide">
        <div className="footer__grid">
          <div className="footer__brand">
            <a className="brand" href="#home" aria-label="Skyronix Overseas Pvt. Ltd.">
              <img src={logo} alt="Skyronix Overseas" className="brand__logo" />
              <div>
              <span className="brand__name">
                SKY<span>RONIX</span>
              </span>
              <p className="brand__sub">Overseas Pvt. Ltd.</p>
              </div>
            </a>
            <p className="footer__tagline">
              India&apos;s export &amp; sourcing partner for toys — from factory floor to shelves
              across 25+ countries.
            </p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    {link.label}
                    <ArrowUpRight size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Product Range</h4>
            <ul>
              {products.slice(0, 8).map((p) => (
                <li key={p.id}>
                  <a href="#products">{p.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Reach Us</h4>
            <ul className="footer__contact">
              <li>
                <Mail size={18} />
                <a href="mailto:info@skyronixoverseas.com">info@skyronixoverseas.com</a>
              </li>
              <li>
                <Phone size={18} />
                <a href="tel:+919309187314">+91 93091 87314</a>
              </li>
              <li>
                <MapPin size={18} />
                Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Skyronix Overseas Pvt. Ltd. All rights reserved.</span>
          <span>Made in India, shipped worldwide.</span>
        </div>
      </div>
    </footer>
  )
}
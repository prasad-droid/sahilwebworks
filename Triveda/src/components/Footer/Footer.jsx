import {
  FaChevronRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
} from 'react-icons/fa'
import Logo from '../Logo'
import './Footer.css'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Why Choose Us', href: '#why' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const PRODUCT_LINKS = [
  'Bath Towels',
  'Hand Towels',
  'Face Towels',
  'Pool Towels',
  'Spa Towels',
  'Hotel Towels',
  'Hospital Linen',
]

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo variant="dark" />
          <p>
            TRIVEDA EXPORTS is a trusted Indian exporter of premium terry towels and hospitality linen — crafting
            comfort for hotels, hospitals, and homes across the world.
          </p>
          <p className="footer-tagline">Crafting Comfort for the World</p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>
                  <FaChevronRight /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Product Categories</h3>
          <ul>
            {PRODUCT_LINKS.map((link) => (
              <li key={link}>
                <a href="#products">
                  <FaChevronRight /> {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact Information</h3>
          <div className="footer-contact">
            <a href="tel:+919175809636">
              <FaPhoneAlt /> +91 91758 09636
            </a>
            <a href="https://wa.me/919175809636" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> +91 91758 09636
            </a>
            <a href="mailto:trivedaexports@gmail.com">
              <FaEnvelope /> trivedaexports@gmail.com
            </a>
            <span>
              <FaMapMarkerAlt /> 401, Pushpak Heights, Jai Jalaram Nagar, Vijapur Road, Solapur, Maharashtra, India
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 TRIVEDA EXPORTS. All Rights Reserved.</p>
        <p className="footer-made">
          Made with <FaHeart /> in Solapur, India
        </p>
      </div>
    </div>
  </footer>
)

export default Footer

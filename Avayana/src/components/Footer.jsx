import { company, navLinks } from '../data/company.js'
import { products } from '../data/products.js'
import { images } from '../data/images.js'
import { Icon } from './Icons.jsx'

export default function Footer({ onNavigate }) {
  const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <p className="footer__brand">
              <span className="footer__mark" aria-hidden="true">
                <img src={images.logo.src} alt="" />
              </span>
              <span className="footer__wordmark">
                <span className="footer__name">AVIYANA ENTERPRISES</span>
                <span className="footer__tagline">Rooted in Quality, Growing Globally</span>
              </span>
            </p>
            <p className="footer__desc">
              Supplier of premium dehydrated and natural Indian agricultural
              products for B2B and global markets.
            </p>
          </div>

          <nav className="footer__col" aria-label="Footer — quick links">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate(link.id)
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Footer — products">
            <h3 className="footer__heading">Products</h3>
            <ul className="footer__list">
              {products.map((product) => (
                <li key={product.id}>
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault()
                      onNavigate('products')
                    }}
                  >
                    {product.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate('products')
                  }}
                >
                  Customized Products
                </a>
              </li>
            </ul>
          </nav>

          <div className="footer__col">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__list footer__list--contact">
              <li>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
              <li>
                <a href={waLink} target="_blank" rel="noreferrer">
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={company.mapsUrl} target="_blank" rel="noreferrer" className="footer__address">
                  {company.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </a>
              </li>
            </ul>
            <a
              href={`mailto:${company.email}`}
              className="btn btn--gold btn--sm footer__cta"
            >
              <Icon name="mail" size={16} />
              Email Us
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Aviyana Enterprises. All Rights Reserved.</p>
          <p className="footer__bottom-sub">Dehydrated · Natural · Indian Agricultural Products</p>
          <p className="footer__credit">
            Designed by{' '}
            <a href="https://www.sahilwebworks.com/" target="_blank" rel="noopener noreferrer">
              Sahil Web Works
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
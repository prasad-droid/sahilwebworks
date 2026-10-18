import { footerContent } from '../data/content.js'
import { categories } from '../data/products.js'
import { navLinks, site } from '../data/site.js'
import '../styles/footer.css'

export default function Footer() {
  const scrollTo = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img className="footer__logo" src={site.logo} alt={`${site.name} logo`} width="150" height="50" />
          <p className="footer__name">{site.name}</p>
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__about">{footerContent.about}</p>
        </div>

        <nav className="footer__col" aria-labelledby="footer-quick-links">
          <h2 className="footer__col-title" id="footer-quick-links">
            {footerContent.quickLinksTitle}
          </h2>
          <ul className="footer__links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a className="footer__link" href={`#${link.id}`} onClick={(event) => scrollTo(event, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-labelledby="footer-categories">
          <h2 className="footer__col-title" id="footer-categories">
            {footerContent.categoriesTitle}
          </h2>
          <ul className="footer__links">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  className="footer__link"
                  href={`#category-${category.id}`}
                  onClick={(event) => scrollTo(event, `category-${category.id}`)}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__col" aria-labelledby="footer-contact">
          <h2 className="footer__col-title" id="footer-contact">
            {footerContent.contactTitle}
          </h2>
          <ul className="footer__links footer__links--contact">
            <li>
              <a className="footer__link" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="footer__link" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href={site.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.website}
              </a>
            </li>
            <li>
              <address className="footer__address">
                {site.address.line1}
                <br />
                {site.address.city}, {site.address.region}
                <br />
                PIN {site.address.pin}
              </address>
            </li>
            <li>
              <a
                className="footer__link"
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.mapsLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copyright">{footerContent.copyright}</p>
          <p className="footer__business-type">{site.businessType}</p>
        </div>
      </div>
    </footer>
  )
}

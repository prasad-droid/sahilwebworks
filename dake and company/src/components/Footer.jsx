import { BUSINESS_NAME, LOGO_PRIMARY, CONTACT, TAGLINE } from '../data/business.js'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__brand-row">
              <img className="footer__logo" src={LOGO_PRIMARY} alt={`${BUSINESS_NAME} logo`} />
              <div>
                <p className="footer__name">{BUSINESS_NAME}</p>
                <p className="footer__tagline">{TAGLINE} | Packaging That Builds Your Brand.</p>
              </div>
            </div>
            <p>
              Merchant-export and trading company specializing in kraft paper bags and corrugated packaging solutions for domestic and international markets.
            </p>
          </div>
          <div className="footer__grid">
            <div>
              <p className="footer__heading">Quick Links</p>
              <ul className="footer__list">
                <li><a className="footer__link" href="#home">Home</a></li>
                <li><a className="footer__link" href="#about">About Us</a></li>
                <li><a className="footer__link" href="#products">Products</a></li>
                <li><a className="footer__link" href="#why-choose-us">Why Choose Us</a></li>
                <li><a className="footer__link" href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <p className="footer__heading">Products</p>
              <ul className="footer__list">
                <li><span className="footer__link">Kraft Paper Bags</span></li>
                <li><span className="footer__link">Corrugated Packaging Boxes</span></li>
                <li><span className="footer__link">Custom Packaging Solutions</span></li>
                <li><span className="footer__link">B2B Bulk Supply</span></li>
              </ul>
            </div>
            <div>
              <p className="footer__heading">Contact</p>
              <ul className="footer__list">
                <li><a className="footer__link" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a></li>
                <li><a className="footer__link" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
                <li><span className="footer__link">{CONTACT.address}</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {year} {BUSINESS_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

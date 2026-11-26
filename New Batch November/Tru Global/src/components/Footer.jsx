import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import Logo from './Logo'
import { company, navLinks, productCategories } from '../data/siteData'
import '../styles/Footer.css'

const categoryLinks = productCategories.map((category) => ({
  label: category.title,
  href: `#products-${category.id}`,
}))

const waLink = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(company.whatsappMessage)}`

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo inverse />
            <p className="footer__tagline">{company.tagline}</p>
            <p className="footer__about">
              India-based import-export and global sourcing company connecting reliable Indian
              suppliers with international buyers across agricultural commodities, spices and
              food products.
            </p>
            <a className="footer__cta" href="#contact">
              Request a Quote <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="footer__column">
            <h3>Quick Links</h3>
            <ul>
              {navLinks.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </div>

          <div className="footer__column">
            <h3>Product Categories</h3>
            <ul>
              {categoryLinks.map((link) => <li key={link.label}><a href={link.href}>{link.label}</a></li>)}
            </ul>
          </div>

          <div className="footer__column footer__column--contact">
            <h3>Contact</h3>
            <ul className="footer__contact-list">
              <li><a href={`mailto:${company.email}`}><Mail size={16} aria-hidden="true" /> {company.email}</a></li>
              <li><a href={waLink} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} aria-hidden="true" /> {company.phone}</a></li>
              <li><span><MapPin size={16} aria-hidden="true" /> {company.location}</span></li>
              <li><a href={`tel:${company.phone.replace(/\s/g, '')}`}><Phone size={16} aria-hidden="true" /> Call us</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 Tru Source Global. All Rights Reserved.</p>
          <span>Quality Sourced. Trust Delivered.</span>
        </div>
      </div>
    </footer>
  )
}

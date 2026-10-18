import { ArrowRight, Boxes, FlaskConical, FlaskRound, Package, Ship, SlidersHorizontal } from 'lucide-react'
import { productImages } from '../data/images'
import SmartImage from './SmartImage'
import '../styles/Products.css'

const products = [
  {
    title: 'Industrial Chemicals',
    blurb:
      'Sourcing support for industrial buyers seeking suitable chemical products from Indian suppliers. Product specifications and availability can be discussed based on your requirements.',
    icon: FlaskConical,
    image: productImages.industrialChemicals
  },
  {
    title: 'Specialty Chemical Sourcing',
    blurb:
      'Coordination for buyers with specialised chemical requirements, linking your specifications with appropriate Indian supply sources.',
    icon: FlaskRound,
    image: productImages.specialtyChemicals
  },
  {
    title: 'Bulk Product Sourcing',
    blurb:
      'Support for volume-based procurement with clear requirement gathering and dependable coordination with Indian suppliers.',
    icon: Package,
    image: productImages.bulkSourcing
  },
  {
    title: 'Selected Commercial Products',
    blurb:
      'Sourcing coordination for selected commercial products for distribution, wholesale and B2B trade — discussed on a requirement basis.',
    icon: Boxes,
    image: productImages.commercialProducts
  },
  {
    title: 'Customized B2B Procurement',
    blurb:
      'We help buyers communicate their product requirements and coordinate with suitable Indian supply sources for tailored procurement.',
    icon: SlidersHorizontal,
    image: productImages.customizedProcurement
  },
  {
    title: 'Export Supply Coordination',
    blurb:
      'Support with export documentation coordination and shipment arrangements as part of the sourcing process.',
    icon: Ship,
    image: productImages.exportCoordination
  }
]

export default function Products({ onEnquire }) {
  return (
    <section id="products" className="section section--soft products">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Services &amp; Products</p>
          <h2 className="section-title">Our Products &amp; Sourcing Solutions</h2>
          <p className="section-sub">
            Quality-focused sourcing and export coordination for international B2B buyers.
          </p>
        </div>

        <div className="products__grid">
          {products.map(({ title, blurb, icon: Icon, image }, i) => (
            <article className="products__card reveal" style={{ '--reveal-delay': `${(i % 3) * 0.1}s` }} key={title}>
              <div className="products__media">
                <SmartImage src={image.src} alt={image.alt} className="products__card-img" />
                <span className="products__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
              </div>
              <div className="products__body">
                <h3>{title}</h3>
                <p>{blurb}</p>
                <button
                  type="button"
                  className="products__cta"
                  onClick={() => onEnquire(title)}
                >
                  Enquire Now
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <p className="products__note reveal">
          The categories above describe sourcing capabilities. Specific product lists, grades and
          specifications are confirmed during the enquiry process.
        </p>
      </div>
    </section>
  )
}
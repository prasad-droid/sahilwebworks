import { ArrowUpRight, MessageCircle, Package, Search, Sprout } from "lucide-react"
import Reveal from "./Reveal"
import SectionHeading from "./SectionHeading"
import { whatsappMessages } from "../data/siteData"
import { getWhatsAppUrl, requestProduct } from "../utils/links"
import "../styles/Products.css"

const productFacts = [
  { label: "Form", value: "On enquiry", icon: Sprout },
  { label: "Grade/Variety", value: "On enquiry", icon: Search },
  { label: "Packing", value: "On enquiry", icon: Package },
]

const gallery = [
  {
    src: "/images/turmeric-1.jpg",
    alt: "Turmeric product presentation by Shakti Global Exim",
  },
  {
    src: "/images/turmeric-2.jpeg",
    alt: "Turmeric product presentation by Shakti Global Exim",
  },
  {
    src: "/images/turmeric-packaging.jpeg",
    alt: "Turmeric packaging by Shakti Global Exim",
  },
]

export default function Turmeric() {
  return (
    <section
      className="section products"
      id="turmeric"
      aria-labelledby="turmeric-title"
    >
      <div className="container">
        <div className="products__top">
          <Reveal>
            <SectionHeading
              id="turmeric-title"
              eyebrow="Product"
              title="Turmeric, offered for export sourcing."
              description="Indian turmeric available for discussion with importers, distributors and food businesses based on buyer requirements."
            />
          </Reveal>

          <Reveal className="products__top-note" delay={80}>
            <span className="products__top-number">EXIM</span>
            <span className="products__top-label">Export offering</span>
            <p>
              Specifications, grade, packing and quantity confirmed on enquiry.
            </p>
          </Reveal>
        </div>

        <Reveal className="products__spotlight" delay={60}>
          <div className="products__media">
            <figure className="products__main-image">
              <img
                src="/images/turmeric-2.jpeg"
                alt="Representative image of turmeric offered for export"
                width="1600"
                height="1067"
                loading="lazy"
                decoding="async"
              />
              <span className="products__image-badge">Export offering</span>
            </figure>

            <div className="products__gallery" aria-label="Turmeric product images">
              {gallery.map((image) => (
                <figure className="products__thumb" key={image.src}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    width="1536"
                    height="1024"
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ))}
            </div>
            <p className="products__media-note">
              Product imagery supplied by Shakti Global Exim.
            </p>
          </div>

          <div className="products__content">
            <p className="products__badge">
              <Sprout size={13} aria-hidden="true" />
              Spices / Agricultural Products
            </p>

            <h3 className="products__name">Turmeric</h3>

            <p className="products__description">
              We offer turmeric for export discussions. Final form, grade/variety,
              packing, moisture/shelf-life details and availability are confirmed
              based on your specific requirement and destination.
            </p>

            <dl className="products__facts">
              {productFacts.map((fact) => {
                const Icon = fact.icon
                return (
                  <div key={fact.label}>
                    <dt>
                      <Icon size={13} aria-hidden="true" />
                      {fact.label}
                    </dt>
                    <dd>{fact.value}</dd>
                  </div>
                )
              })}
            </dl>

            <div className="products__suited">
              <p>Suitable for</p>
              <ul>
                <li>Spice importers</li>
                <li>Food manufacturers</li>
                <li>Distributors & wholesalers</li>
                <li>Retailers</li>
                <li>Food processors</li>
              </ul>
            </div>

            <div className="products__actions">
              <button
                type="button"
                className="btn btn--dark"
                onClick={() => requestProduct("Turmeric")}
              >
                Request a Quote
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
              <a
                href={getWhatsAppUrl(whatsappMessages.quote)}
                className="btn btn--outline"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} aria-hidden="true" />
                WhatsApp Enquiry
              </a>
            </div>

            <p className="products__spec-link">
              Tell us your grade, packing and quantity in the{" "}
              <a href="#quote">enquiry form</a>.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

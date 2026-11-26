import { images } from '../data/images.js'
import { requestEnquiry } from '../utils/enquiry.js'
import { IconArrow } from './Icons.jsx'
import '../styles/contact.css'

export default function PartnerSection() {
  return (
    <section id="partner" className="section partner">
      <div className="partner__bg media">
        <img
          src={images.productPickleJars}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      </div>

      <div className="container partner__inner" data-reveal>
        <p className="eyebrow eyebrow--light">Partner With Us</p>
        <h2>Bring Authentic Indian Flavours to Your Market</h2>
        <p className="partner__copy">
          Are you an importer, distributor, retailer, gourmet food store, Indian
          food specialist or private label partner looking for distinctive
          Indian food products? Rasavaani is building a portfolio of premium
          traditional Indian food products designed for domestic and
          international markets. Let&rsquo;s bring India&rsquo;s traditional
          flavours to more tables.
        </p>
        <div className="btn-group partner__actions">
          <button
            type="button"
            className="btn btn--accent"
            onClick={() => requestEnquiry({ enquiryType: 'Business Partnership' })}
          >
            Become a Partner
            <IconArrow className="btn__icon" />
          </button>
          <a href="#contact" className="btn btn--ghost-light">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

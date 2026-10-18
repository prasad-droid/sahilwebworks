import { images } from '../data/images.js'
import { requestEnquiry } from '../utils/enquiry.js'
import { IconArrow } from './Icons.jsx'
import '../styles/products.css'

const servingSuggestions = [
  'Dal',
  'Rice',
  'Roti',
  'Paratha',
  'Puri',
  'Khichdi',
  'Curd',
  'Snacks',
]

export default function SignatureProduct() {
  return (
    <section
      id="signature"
      className="section section--white signature"
      aria-labelledby="signature-title"
    >
      <div className="container signature__grid">
        <div className="signature__media" data-reveal="left">
          <figure className="signature__figure signature__figure--main media media--zoom">
            <img
              src={images.productAchaar}
              alt="Lal Mirch Bharwa Achaar — whole red chillies stuffed with a traditional spice blend (representative photograph)"
              loading="lazy"
            />
          </figure>
          <figure className="signature__figure signature__figure--badge media media--zoom">
            <img
              src={images.productBottles}
              alt="Jars of traditional Indian achaar (representative photograph)"
              loading="lazy"
            />
          </figure>
          <span className="caption signature__caption">
            Representative imagery · actual product photography coming soon
          </span>
        </div>

        <div className="signature__content" data-reveal="right">
          <p className="eyebrow">Our Signature Product</p>
          <h2 id="signature-title">Lal Mirch Bharwa Achaar</h2>
          <p className="signature__subtitle">
            A whole red chilli. A traditional spice blend. A burst of Indian
            flavour.
          </p>

          <div className="signature__body">
            <p>
              Our Lal Mirch Bharwa Achaar brings together the boldness of red
              chillies with the aromatic character of traditional Indian
              spices.
            </p>
            <p>
              Whole red chillies are carefully prepared and generously stuffed
              with a traditional spice mixture before being preserved to
              develop their distinctive flavour.
            </p>
            <p className="signature__result">
              The result? <em>Spicy. Tangy. Aromatic. Rich. Absolutely Indian.</em>
            </p>
          </div>

          <div className="signature__serve">
            <h3 className="signature__serve-title">Best enjoyed with</h3>
            <ul className="signature__chips">
              {servingSuggestions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="btn-group signature__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() =>
                requestEnquiry({
                  enquiryType: 'Product Enquiry',
                  product: 'Lal Mirch Bharwa Achaar',
                })
              }
            >
              Enquire About This Product
              <IconArrow className="btn__icon" />
            </button>
            <a href="#contact" className="btn btn--outline">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

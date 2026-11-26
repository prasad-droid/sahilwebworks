import { FaArrowRight, FaWhatsapp } from 'react-icons/fa'
import bathImg from '../../assets/images/products/bath-towels.jpg'
import handImg from '../../assets/images/hand-towels.svg'
import faceImg from '../../assets/images/face-towels.svg'
import poolImg from '../../assets/images/products/pool-towels.jpg'
import spaImg from '../../assets/images/products/spa-towels.jpg'
import hotelImg from '../../assets/images/hotel-towels.svg'
import Reveal from '../Reveal'
import './Products.css'

const PEXELS = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=600`

const FEATURES = [
  '100% Cotton',
  'High Absorbency',
  'Premium Softness',
  'Export Quality',
  'Long-lasting Durability',
  'Multiple GSM Options',
  'Custom Branding',
  'Private Label',
  'Custom Sizes',
]

const PRODUCTS = [
  {
    title: 'Bath Towels',
    img: PEXELS(3872899),
    fallback: bathImg,
    alt: 'Premium bath towels for hotels and hospitality',
    desc: 'Thick, plush, high-absorbency bath towels crafted for hotel bathrooms and luxury guest comfort.',
  },
  {
    title: 'Hand Towels',
    img: PEXELS(36531898),
    fallback: handImg,
    alt: 'Premium hand towels for hospitality',
    desc: 'Soft, quick-drying hand towels ideal for washrooms, spas, and hospitality suites.',
  },
  {
    title: 'Face Towels',
    img: PEXELS(17428224),
    fallback: faceImg,
    alt: 'Premium face towels',
    desc: 'Gentle, lightweight face towels with superior softness for daily guest use.',
  },
  {
    title: 'Pool Towels',
    img: PEXELS(19533217),
    fallback: poolImg,
    alt: 'Premium pool towels for resorts and hotels',
    desc: 'Durable, oversized pool towels built for resorts, gyms, and poolside hospitality.',
  },
  {
    title: 'Spa Towels',
    img: PEXELS(3872899),
    fallback: spaImg,
    alt: 'Premium spa towels',
    desc: 'Luxurious spa towels offering comfort, absorbency, and a refined wellness experience.',
  },
  {
    title: 'Hotel Towels',
    img: PEXELS(37658583),
    fallback: hotelImg,
    alt: 'Premium hotel towels in bulk',
    desc: 'Hospitality-grade hotel towels supplied in bulk to chains, importers, and distributors.',
  },
]

const Products = () => (
  <section id="products" className="section products">
    <div className="container">
      <Reveal className="section-head">
        <span className="eyebrow">Our Products</span>
        <h2 className="section-title">
          Premium <span>Terry Towels</span>
        </h2>
        <p className="section-sub">
          Export-quality terry towels for hotels, hospitals, and hospitality businesses worldwide — available in
          multiple GSM options with custom branding and private label support.
        </p>
      </Reveal>

      <Reveal className="products-features" delay={100}>
        <ul className="products-feature-list">
          {FEATURES.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </Reveal>

      <div className="products-grid">
        {PRODUCTS.map((product, i) => (
          <Reveal key={product.title} delay={(i % 3) * 100}>
            <article className="card product-card">
              <div className="product-media">
                <img
                  src={product.img}
                  alt={product.alt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.onerror = null
                    e.currentTarget.src = product.fallback
                  }}
                />
                <span className="product-tag">Export Quality</span>
              </div>
              <div className="product-body">
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <a
                  className="btn btn-outline product-enquire"
                  href={`https://wa.me/919175809636?text=${encodeURIComponent(
                    `Hello TRIVEDA EXPORTS, I would like to enquire about your ${product.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp /> Enquire Now <FaArrowRight />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="products-note">
        <p>
          Looking for a different specification? We also supply hospital linen, bed sheets, and custom textile products.
          Tell us your requirement — <a href="#contact">Request a quote</a>.
        </p>
      </Reveal>
    </div>
  </section>
)

export default Products

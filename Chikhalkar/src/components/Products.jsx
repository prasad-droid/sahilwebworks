import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/assets/images";

const PRODUCTS = [
  {
    img: IMAGES.heroTowel,
    title: "Bath Towels",
    desc: "Luxury towels offering superior softness and absorbency.",
  },
  {
    img: IMAGES.collectionTowels,
    title: "Hand Towels",
    desc: "Premium hand towels suitable for hotels, hospitals, and commercial use.",
  },
  {
    img: IMAGES.productTowel1,
    title: "Face Towels",
    desc: "Gentle and durable towels designed for daily use.",
  },
  {
    img: IMAGES.spa,
    title: "Spa Towels",
    desc: "Comfortable towels designed specifically for wellness and spa environments.",
  },
  {
    img: IMAGES.beachTowel,
    title: "Gym Towels",
    desc: "Lightweight and highly absorbent towels ideal for fitness facilities.",
  },
  {
    img: IMAGES.hotel,
    title: "Hotel Collection Towels",
    desc: "Premium hospitality-grade towels meeting international standards.",
  },
  {
    img: IMAGES.aboutTowels,
    title: "Healthcare Towels",
    desc: "Durable and hygienic towels suitable for hospitals and healthcare institutions.",
  },
];

const Products = () => (
  <section id="products" className="products">
    <div className="container">
      <div className="section-head">
        <span className="section-tag reveal" data-animation="fade-up">Our Products</span>
        <h2 className="reveal" data-animation="fade-up" data-delay="1">
          Premium Terry Towel <span>Collection</span>
        </h2>
        <p className="reveal" data-animation="fade-up" data-delay="2">
          A complete range of Cotton Terry Towels crafted for commercial and institutional buyers across the globe.
        </p>
      </div>

      <div className="products__grid">
        {PRODUCTS.map((product, i) => (
          <article
            className="product-card reveal"
            data-animation="fade-up"
            data-delay={i % 4}
            key={product.title}
          >
            <div className="product-card__thumb">
              <img src={product.img} alt={product.title} loading="lazy" />
            </div>
            <div className="product-card__body">
              <h3>{product.title}</h3>
              <p>{product.desc}</p>
              <a href="#contact" className="product-card__link">
                Request Pricing <ArrowRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Products;

import { FiArrowRight } from "react-icons/fi";
import juteImage from "../../assets/gallery/p4_x10.jpg";
import bagasseImage from "../../assets/gallery/p7_x19.jpg";
import Reveal from "../common/Reveal";
import SectionHead from "../common/SectionHead";
import "./Products.css";

const PRODUCTS = [
  {
    id: "jute",
    name: "Jute Bags",
    icon: "🛍️",
    tag: "The Golden Fibre",
    image: juteImage,
    alt: "Nilipar Enterprises jute bag product catalogue page",
    description:
      'Jute bags are eco-friendly, durable carryalls made from natural, plant-based jute fibers. Known as the "Golden Fiber," jute is 100% biodegradable, highly renewable, and offers excellent tensile strength — a long-lasting alternative to single-use plastics.',
    categories: [
      "Shopping Bags",
      "Grocery Bags",
      "Promotional Bags",
      "Tote Bags",
      "Gift Bags",
      "Wine Bottle Bags",
      "Custom Printed Jute Bags",
      "Corporate Branding Bags",
    ],
    features: ["100% Natural Fiber", "Biodegradable", "Reusable", "Strong & Durable", "Custom Printing", "Export Quality"],
  },
  {
    id: "bagasse",
    name: "Bagasse Products",
    icon: "🍃",
    tag: "Compostable Tableware",
    image: bagasseImage,
    alt: "Nilipar Enterprises bagasse tableware product catalogue page",
    description:
      "Bagasse products are made from the natural fibre left after sugarcane juice extraction. Fully compostable and food-safe, they deliver the convenience of disposables without the environmental cost of plastic.",
    categories: [
      "Plates",
      "Bowls",
      "Food Containers",
      "Meal Trays",
      "Cups",
      "Clamshell Boxes",
      "Disposable Cutlery",
      "Catering Products",
    ],
    features: ["Compostable", "Biodegradable", "Microwave Safe", "Food Grade", "Sustainable", "Plastic-Free"],
  },
];

export default function Products() {
  return (
    <section id="products" className="section section--soft">
      <div className="container">
        <Reveal>
          <SectionHead
            eyebrow="Our Products"
            title="Premium Eco-Friendly Product Range"
            description="Two natural categories engineered for performance, durability, and full biodegradability — built for importers, wholesalers, and brands across the globe."
          />
        </Reveal>

        <div className="products__grid">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.id} direction={index % 2 === 0 ? "up" : "right"} delay={index * 120} className="products__card-wrap">
              <article className="products__card">
                <div className="products__media">
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="products__tag">{product.tag}</span>
                  <span className="products__icon" aria-hidden="true">
                    {product.icon}
                  </span>
                </div>

                <div className="products__body">
                  <h3 className="products__name">{product.name}</h3>
                  <p className="products__desc">{product.description}</p>

                  <h4 className="products__subtitle">Product Categories</h4>
                  <ul className="products__cats">
                    {product.categories.map((cat) => (
                      <li key={cat}>{cat}</li>
                    ))}
                  </ul>

                  <h4 className="products__subtitle">Key Features</h4>
                  <div className="products__features">
                    {product.features.map((f) => (
                      <span key={f} className="chip">
                        ✓ {f}
                      </span>
                    ))}
                  </div>

                  <a href="#contact" className="btn btn--primary products__cta">
                    Enquire About {product.name} <FiArrowRight aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

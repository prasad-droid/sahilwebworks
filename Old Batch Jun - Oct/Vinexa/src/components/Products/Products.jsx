import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { categories } from "../../data/categories";
import { products } from "../../data/products";
import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProductCard from "../ProductCard/ProductCard";

const featured = ["1121-basmati-rice", "tur-dal", "sona-masoori-rice", "red-chilli-powder", "industrial-components", "fasteners"]
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean);

/**
 * Products showcase for the home page — category cards + featured products.
 */
export default function Products() {
  return (
    <section className="section section--tint" aria-labelledby="products-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Product Catalogue"
          title="Global Sourcing, Premium Products"
          sub="Explore our core product categories and connect with our team for detailed specifications and competitive quotations."
        />

        <div className="category-grid">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.id} className="category-card" delay={i * 110}>
              <div className="category-card__media">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <div className="category-card__body">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
                <div className="category-card__actions">
                  <Link to={`/products#${cat.slug}`} className="btn btn--primary btn--sm">
                    View Products <FaArrowRight size={13} aria-hidden="true" />
                  </Link>
                  <Link to="/request-quote" className="btn btn--outline btn--sm">
                    Request Quote
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-3">
          <ScrollReveal className="section-head">
            <h2 className="section-title" style={{ fontSize: "1.5rem" }}>
              Featured Products
            </h2>
            <p className="section-sub">
              A selection from our catalogue — request details for any product.
            </p>
          </ScrollReveal>
          <div className="product-grid">
            {featured.map((product) => (
              <ScrollReveal key={product.id} delay={0}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="text-center mt-3">
          <Link to="/products" className="btn btn--gold btn--lg">
            Browse Full Catalogue <FiArrowRight size={18} aria-hidden="true" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

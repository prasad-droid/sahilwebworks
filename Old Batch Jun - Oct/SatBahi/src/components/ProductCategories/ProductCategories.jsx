import { Link } from "react-router-dom";
import { FiBox, FiLayers, FiFeather, FiPenTool, FiShoppingBag, FiTag } from "react-icons/fi";
import { Reveal } from "../../hooks/useScrollReveal";
import { categories } from "../../data/categories";

const icons = [FiBox, FiLayers, FiFeather, FiPenTool, FiShoppingBag, FiTag];

export default function ProductCategories() {
  return (
    <section className="section section--cream" aria-label="Tote bag categories">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Product Range</span>
          <h2 className="section__title">Tote Bags for Every Requirement</h2>
          <p className="section__subtitle">
            Explore our range of tote bag categories. Each can be customized to match
            your brand, size, color and design requirements.
          </p>
        </Reveal>

        <div className="categories__grid">
          {categories.map((cat, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={cat.id} delay={i % 3}>
                <Link to="/products" className="category-card">
                  <div className="category-card__icon" aria-hidden="true">
                    <Icon />
                  </div>
                  <h3 className="category-card__title">{cat.name}</h3>
                  <p className="category-card__desc">{cat.description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

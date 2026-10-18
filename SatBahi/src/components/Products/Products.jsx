import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiSearch } from "react-icons/fi";
import { products } from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import { Reveal } from "../../hooks/useScrollReveal";
import { productFilters } from "../../data/categories";

const categoryMap = {
  "All Categories": null,
  "Canvas Tote Bags": "canvas",
  "Cotton Tote Bags": "cotton",
  "Jute Tote Bags": "jute",
  "Non-Woven Tote Bags": "non-woven",
  "Custom Tote Bags": "custom",
  "Private Label Tote Bags": "private-label",
};

export default function Products() {
  const [category, setCategory] = useState("All Categories");
  const [material, setMaterial] = useState("All Materials");
  const [application, setApplication] = useState("All Applications");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = !categoryMap[category] || p.categoryId === categoryMap[category];
      const matchMat = material === "All Materials" || p.material === material;
      const matchApp = application === "All Applications" || (p.applications || []).includes(application);
      return matchCat && matchMat && matchApp;
    });
  }, [category, material, application]);

  return (
    <section className="section products" aria-label="Our tote bag collection">
      <div className="container">
        <Reveal className="section__head">
          <span className="section__eyebrow">Our Products</span>
          <h2 className="section__title">Our Tote Bag Collection</h2>
          <p className="section__subtitle">Designed for Businesses. Built for Everyday Use.</p>
        </Reveal>

        <div className="products__toolbar">
          <label className="filter-select">
            <span className="filter-select__label">Category</span>
            <select
              className="form__select"
              aria-label="Filter by category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Object.keys(categoryMap).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-select">
            <span className="filter-select__label">Material</span>
            <select
              className="form__select"
              aria-label="Filter by material"
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
            >
              <option value="All Materials">All Materials</option>
              {productFilters.material.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="filter-select">
            <span className="filter-select__label">Application</span>
            <select
              className="form__select"
              aria-label="Filter by application"
              value={application}
              onChange={(e) => setApplication(e.target.value)}
            >
              <option value="All Applications">All Applications</option>
              {productFilters.application.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </label>

          <div className="products__toolbar-count" aria-live="polite">
            <FiSearch aria-hidden="true" />
            <span>
              {filtered.length} {filtered.length === 1 ? "product" : "products"}
            </span>
          </div>
        </div>

        <div className="products__grid">
          {filtered.map((p) => (
            <Reveal key={p.id} delay={filtered.indexOf(p) % 3}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "var(--muted)", padding: "40px 0" }}>
            No tote bags match the selected filters. Try clearing a filter.
          </p>
        )}

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <Link className="btn btn--outline" to="/products">
            View Full Catalogue <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}

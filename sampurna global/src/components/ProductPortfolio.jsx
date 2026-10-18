import React, { useEffect, useMemo, useState } from "react";
import { products } from "../data/products.js";
import { useReveal, useLockBodyScroll } from "../hooks/useReveal.js";
import { IconArrowRight, IconClose, IconWhatsApp, IconPackage } from "./Icons.jsx";
import "../styles/ProductPortfolio.css";

const SPEC_ROWS = [
  { key: "colors", label: "Available Colors" },
  { key: "fabric", label: "Fabric Details" },
  { key: "sizeRange", label: "Size Range" },
  { key: "style", label: "Style / Fit" },
  { key: "customization", label: "Customization" },
  { key: "moq", label: "Min. Order Qty" },
];

/**
 * Product Portfolio — the centrepiece of the site.
 * Filterable, sortable, image-led gallery driven by the `products` array.
 * Used/unconfirmed attributes render as "Ask for details" rather than
 * inventing any product specifications.
 */
export default function ProductPortfolio({ onEnquire }) {
  const [ref, visible] = useReveal();
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("featured");
  const [selected, setSelected] = useState(null);

  useLockBodyScroll(Boolean(selected));

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const filters = useMemo(() => {
    const cats = [...new Set(products.map((p) => (p.category ? p.category : "Uncategorised")))];
    return ["All", ...cats];
  }, []);

  const visibleProducts = useMemo(() => {
    let list = products.filter(
      (p) => filter === "All" || (p.category ? p.category : "Uncategorised") === filter
    );
    if (sort === "name") {
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "category") {
      list = [...list].sort((a, b) =>
        (a.category || "").localeCompare(b.category || "")
      );
    }
    return list;
  }, [filter, sort]);

  return (
    <section
      id="portfolio"
      className="portfolio section section--surface"
      aria-labelledby="portfolio-heading"
    >
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Product Portfolio</p>
          <h2 id="portfolio-heading">Our Product Portfolio</h2>
          <p>
            Explore our apparel portfolio and share your requirements for T-shirt
            supply, wholesale purchases, or export enquiries.
          </p>
        </div>

        <div className="portfolio__toolbar">
          <div className="portfolio__filters" role="group" aria-label="Filter products by category">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                className={`portfolio__chip ${filter === f ? "is-active" : ""}`}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <label className="portfolio__sort">
            <span className="sr-only">Sort products</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Sort: Featured</option>
              <option value="name">Sort: Name (A–Z)</option>
              <option value="category">Sort: Category</option>
            </select>
          </label>
        </div>

        <div
          ref={ref}
          className={`portfolio__grid ${visible ? "is-visible" : ""}`}
        >
          {visibleProducts.map((product, i) => (
            <article
              key={product.id}
              className={`product-card reveal ${
                visible ? "is-visible" : ""
              } reveal--delay-${(i % 4) + 1}`}
            >
              <div className="product-card__media">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-card__badge badge badge--muted">
                  Sample image
                </span>
                <button
                  type="button"
                  className="product-card__quick"
                  onClick={() => setSelected(product)}
                >
                  Quick View
                </button>
              </div>

              <div className="product-card__body">
                <span className="product-card__cat">{product.category}</span>
                <h3>{product.name}</h3>

                <dl className="product-card__specs">
                  {SPEC_ROWS.slice(0, 3).map((row) => (
                    <div key={row.key} className="product-card__spec">
                      <dt>{row.label}</dt>
                      <dd>{product[row.key] || "Ask for details"}</dd>
                    </div>
                  ))}
                </dl>

                <button
                  type="button"
                  className="btn btn--dark btn--block btn--sm"
                  onClick={() => onEnquire?.(product.name, product.category)}
                >
                  Enquire About This Product
                  <IconArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>

        {!visibleProducts.length && (
          <p className="portfolio__empty">
            No products match this filter yet. Add products in{" "}
            <code>src/data/products.js</code>.
          </p>
        )}
      </div>

      {selected && (
        <div
          className="pmodal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.name} details`}
          onClick={() => setSelected(null)}
        >
          <div className="pmodal__panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="pmodal__close"
              aria-label="Close details"
              onClick={() => setSelected(null)}
            >
              <IconClose />
            </button>
            <div className="pmodal__media">
              <img src={selected.image} alt={selected.name} />
              <span className="badge badge--muted">Sample image — not actual inventory</span>
            </div>
            <div className="pmodal__body">
              <span className="pmodal__cat">{selected.category}</span>
              <h3>{selected.name}</h3>

              <dl className="pmodal__specs">
                {SPEC_ROWS.map((row) => (
                  <div key={row.key}>
                    <dt>{row.label}</dt>
                    <dd>{selected[row.key] || "Ask for details"}</dd>
                  </div>
                ))}
              </dl>

              <p className="pmodal__note">
                <IconPackage />
                Product specifications shown as “Ask for details” will be
                confirmed from the official catalogue. Nothing has been invented.
              </p>

              <div className="pmodal__actions">
                <button
                  type="button"
                  className="btn btn--primary btn--block"
                  onClick={() => {
                    onEnquire?.(selected.name, selected.category);
                    setSelected(null);
                  }}
                >
                  Enquire About This Product
                  <IconArrowRight />
                </button>
                <a
                  className="btn btn--outline btn--block"
                  href="https://wa.me/919272443357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconWhatsApp />
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

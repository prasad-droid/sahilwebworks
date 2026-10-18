import { useMemo, useState } from "react";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { products } from "../data/products";

export default function Products({ onRequestQuote }) {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const catalogue = useMemo(
    () => products.filter((product) => product.available !== false || product.id),
    []
  );

  const categories = useMemo(() => {
    const set = new Set();
    catalogue.forEach((product) => product.category && set.add(product.category));
    return ["All", ...set];
  }, [catalogue]);

  const visible =
    filter === "All" ? catalogue : catalogue.filter((product) => product.category === filter);

  const showFilters = categories.length > 2;

  return (
    <section id="products" className="products section">
      <div className="container">
        <SectionHeading
          label="PRODUCT PORTFOLIO"
          title="OUR PRODUCTS"
          subtitle="Explore Our Product Portfolio"
        />

        {showFilters && (
          <div className="products__filters" role="group" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`filter-chip ${filter === category ? "is-active" : ""}`}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {catalogue.length === 0 ? (
          <div className="products__empty" data-reveal>
            <span className="products__empty-rings" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            <span className="products__empty-icon" aria-hidden="true">
              <Icon name="package" size={30} />
            </span>
            <p className="products__empty-text">
              Our product portfolio is expanding. Contact us to discuss your requirement.
            </p>
            <button
              type="button"
              className="btn btn--accent"
              onClick={() => onRequestQuote({ requirement: "Product Enquiry" })}
            >
              Enquire About Products
              <Icon name="arrowRight" size={16} />
            </button>
          </div>
        ) : (
          <>
            <div className="products__grid">
              {visible.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={() => setSelected(product)}
                  onRequestQuote={() =>
                    onRequestQuote({ requirement: "Product Enquiry", product: product.name })
                  }
                />
              ))}
            </div>
            <p className="products__note">
              Looking for something specific? Send us your requirement and we will respond with
              availability and details.
            </p>
          </>
        )}
      </div>

      {selected && (
        <ProductModal
          product={selected}
          onClose={() => setSelected(null)}
          onRequestQuote={(product) => {
            setSelected(null);
            onRequestQuote({ requirement: "Product Enquiry", product: product.name });
          }}
        />
      )}
    </section>
  );
}

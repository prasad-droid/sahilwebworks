import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { products } from "../../data/products";
import { useReveal } from "../../hooks/useReveal";
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ category, limit }) => {
  const ref = useReveal();
  const list = category
    ? products.filter((p) => p.category === category)
    : products;
  const shown = list.slice(0, limit || list.length);

  return (
    <section className="section section-alt" id="products" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Our Collection</span>
          <h2 className="section-title">Featured Imitation Jewellery</h2>
          <p className="section-subtitle">
            Trendy necklace sets and kundan chokers — crafted for retail
            shelves and boutique displays worldwide. Click any product to view
            its gallery.
          </p>
        </div>
        <div className="products__grid">
          {shown.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        {category && (
          <div className="text-center mt-32 reveal">
            <Link to="/category/imitation-jewellery" className="btn btn-primary">
              View Full Jewellery Catalogue <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;

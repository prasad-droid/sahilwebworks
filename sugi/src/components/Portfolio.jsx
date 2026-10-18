import { useSite } from "../store/SiteContext";
import ProductCard from "./ProductCard";
import "../styles/portfolio.css";

export default function Portfolio() {
  const { content, products } = useSite();
  const head = content?.portfolio || {};

  return (
    <section id="portfolio" className="portfolio section-pad">
      <div className="container">
        <div className="portfolio__head reveal">
          <p className="eyebrow">{head.eyebrow || "Our Portfolio"}</p>
          <h2 className="section-title">{head.title}</h2>
          {head.subtitle && <p className="section-sub">{head.subtitle}</p>}
        </div>

        <div className="portfolio__grid">
          {(products || []).map((product, i) => (
            <div key={product.id} className="reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

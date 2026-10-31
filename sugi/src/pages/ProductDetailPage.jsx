import PageHero from "../components/PageHero";
import ProductGallery from "../components/ProductGallery";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import { Link } from "../router";
import { findProduct, PRODUCTS } from "../data/catalog";
import "../styles/productDetail.css";

// ==========================================================================
// PRODUCT DETAIL — gallery + specifications + related products.
// ==========================================================================

export default function ProductDetailPage({ slug }) {
  useReveal(slug);
  const product = findProduct(slug);

  if (!product) {
    return (
      <>
        <PageHero
          eyebrow="Products"
          title="Product not found"
          intro="The product you are looking for does not exist in our catalogue."
          crumbs={[{ label: "Products", to: "/products" }, { label: "Not found" }]}
        />
        <section className="pdetail-missing section-pad">
          <div className="container">
            <Link to="/products" className="btn btn-primary">
              Back to Products
            </Link>
          </div>
        </section>
      </>
    );
  }

  // Every product in the same category, minus the one being viewed.
  const categoryProducts = PRODUCTS.filter(
    (p) => p.groupId === product.groupId
  );
  const related = categoryProducts.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero
        title={product.name}
        crumbs={[
          { label: "Products", to: "/products" },
          { label: product.groupTitle },
          { label: product.name },
        ]}
      />

      <section className="pdetail section-pad" key={slug}>
        <div className="container pdetail__grid">
          <div className="pdetail__gallery reveal">
            <ProductGallery images={product.images} name={product.name} />
          </div>

          <div className="pdetail__info reveal">
            <h1 className="pdetail__title">{product.name}</h1>
            <p className="pdetail__group">{product.groupTitle}</p>

            <dl className="pdetail__specs">
              <div>
                <dt>Product</dt>
                <dd>{product.name}</dd>
              </div>
              <div>
                <dt>Category</dt>
                <dd>{product.groupTitle}</dd>
              </div>
              <div>
                <dt>Origin</dt>
                <dd>{product.origin}</dd>
              </div>
              <div>
                <dt>Packaging</dt>
                <dd>
                  Carton boxes, PP mesh bags, jute bags, food grade, customized
                  branding and private label.
                </dd>
              </div>
              <div>
                <dt>Quality Assurance</dt>
                <dd>
                  Farm selection, quality inspection, sorting &amp; grading,
                  hygienic packing, cold storage and container loading.
                </dd>
              </div>
              <div>
                <dt>MOQ / Lead Time</dt>
                <dd>Available on request</dd>
              </div>
            </dl>

            <p className="pdetail__note">
              Detailed specifications, grades and pricing for this product are
              shared on request. Tell us your destination market, quantity and
              packing requirement and our team will respond with a quotation.
            </p>

            <div className="pdetail__actions">
              <Link to="/quote" className="btn btn-primary">
                Get a Quote
                <span className="btn-arrow" aria-hidden="true">→</span>
              </Link>
              <Link to="/products" className="btn btn-dark-outline">
                All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pdetail-related section-pad">
          <div className="container">
            <div className="pdetail-related__head reveal">
              <div>
                <p className="eyebrow">Related</p>
                <h2 className="section-title">
                  More in {product.groupTitle}
                </h2>
                <p className="pdetail-related__sub">
                  {related.length} more {related.length === 1 ? "product" : "products"} in this category
                </p>
              </div>
              <Link to="/products" className="btn btn-dark-outline pdetail-related__all">
                View All Products
              </Link>
            </div>

            <ul className="pdetail-related__grid">
              {related.map((p, i) => (
                <li
                  className="pdetail-related__item reveal"
                  key={p.slug}
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <Link to={`/products/${p.slug}`}>
                    {p.images.length ? (
                      <img src={p.images[0]} alt={p.name} loading="lazy" />
                    ) : (
                      <span className="pdetail-related__ph" aria-hidden="true">
                        {p.name.slice(0, 1)}
                      </span>
                    )}
                    <span className="pdetail-related__name">{p.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <QuoteCTA />
    </>
  );
}

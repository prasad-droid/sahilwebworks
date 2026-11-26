import { Link, useParams } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";
import { categories, getCategory } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import { waLink, company } from "../config/site";
import { useSEO } from "../hooks/useSEO";
import { useReveal } from "../hooks/useReveal";
import OrderSection from "../components/OrderSection/OrderSection";
import ProductCard from "../components/ProductCard/ProductCard";

const DynamicCategory = () => {
  const { slug } = useParams();
  const ref = useReveal();
  const category = getCategory(slug);
  const items = getProductsByCategory(slug);

  useSEO({
    title: category
      ? `${category.name} | ${company.name}`
      : "Category Not Found | GHONS Global Impex",
    description: category?.description,
    keywords: category?.keywords,
  });

  if (!category) {
    return (
      <section className="not-found">
        <h1>Category Not Found</h1>
        <p>We could not find that category. Explore our available categories below.</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="btn btn-outline">
              {c.name}
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <nav className="page-hero__crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="crumb-sep">/</span>
            <span>Categories</span>
            <span className="crumb-sep">/</span>
            <span>{category.name}</span>
          </nav>
          <p className="page-hero__eyebrow">{category.tagline}</p>
          <h1 className="page-hero__title">{category.name}</h1>
          <p className="page-hero__desc">{category.description}</p>
        </div>
      </section>

      <section className="section" id="category-products" ref={ref}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Catalogue</span>
            <h2 className="section-title">{category.name} Collection</h2>
            <p className="section-subtitle">
              {items.length} product lines available. Need something specific?
              Ask us — we source flexibly.
            </p>
          </div>
          {items.length > 0 ? (
            <div className="products__grid">
              {items.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center reveal">
              <p className="section-subtitle">
                The catalogue for this category is being updated. Contact us for
                the latest range and pricing.
              </p>
              <div className="mt-32">
                <a
                  href={waLink(
                    `Hello GHONS Global Impex, please share your ${category.name} catalogue and wholesale pricing.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <FaWhatsapp aria-hidden="true" /> Ask for {category.name} Catalogue
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section section-alt" id="category-inquiry" ref={ref}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Enquiry</span>
            <h2 className="section-title">Request {category.name} Pricing</h2>
            <p className="section-subtitle">
              Send us your quantity and destination for a tailored wholesale
              quote.
            </p>
          </div>
          <div className="category-inquiry reveal">
            <div className="category-inquiry__head">
              <h3 style={{ fontFamily: "var(--heading-font)", color: "var(--primary-dark)" }}>
                Quick {category.name} Inquiry
              </h3>
            </div>
            <OrderSection defaultCategory={category.name} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DynamicCategory;

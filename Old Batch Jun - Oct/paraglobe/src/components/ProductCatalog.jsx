import business, { buildWhatsAppLink } from "../data/business.js";
import catalogCategories from "../data/catalog.js";

export default function ProductCatalog() {
  return (
    <>
      <section className="catalog-hero" id="catalog">
        <div className="container catalog-hero__inner">
          <p className="catalog-hero__eyebrow">Paraglobe Exims · Full Range</p>
          <h1 className="catalog-hero__title">
            Our Complete
            <span className="catalog-hero__accent">Product Catalogue</span>
          </h1>
          <p className="catalog-hero__desc">
            A full range of biodegradable plates, bowls, containers, cutlery and
            drinkware — export-ready for restaurants, cafés, cloud kitchens,
            distributors and event businesses worldwide.
          </p>

          <div className="catalog-hero__actions">
            <a href={business.catalogPdf} download className="btn btn-accent">
              Download Catalogue
              <span className="btn-arrow" aria-hidden="true">↓</span>
            </a>
            <a href="#contact" className="btn btn-ghost-light">
              Request a Quote
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a
              href={buildWhatsAppLink(
                "Hello Paraglobe Exims, I would like to know more about your full product catalogue."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost-light"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <main id="catalog-main">
        <div className="container catalog-body">
          <div className="section-head">
            <span className="section-eyebrow">Product Categories</span>
            <h2 className="section-title">Everything You Need, In One Place</h2>
            <p className="section-subtitle">
              Explore each category below. For specific sizes, MOQs, materials
              and export pricing, our team is a message away.
            </p>
          </div>

          <div className="catalog-list">
            {catalogCategories.map((category, i) => (
              <section className="catalog-cat" id={`${category.id}`} key={category.id}>
                <header className="catalog-cat__head">
                  <div className="catalog-cat__num">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="catalog-cat__head-text">
                    <h3 className="catalog-cat__title">{category.title}</h3>
                    <p className="catalog-cat__short">{category.short}</p>
                  </div>
                  <a
                    href={buildWhatsAppLink(
                      `Hello Paraglobe Exims, I am interested in your ${category.title} range.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline catalog-cat__cta"
                  >
                    Enquire
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </a>
                </header>

                <ul className="catalog-items">
                  {category.items.map((item) => (
                    <li className="catalog-item" key={item.name}>
                      <span className="catalog-item__dot" aria-hidden="true" />
                      <div className="catalog-item__text">
                        <h4 className="catalog-item__name">{item.name}</h4>
                        <p className="catalog-item__detail">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <section className="catalog-cta">
          <div className="container catalog-cta__inner">
            <h2 className="catalog-cta__title">
              Ready to Stock Your Business?
            </h2>
            <p className="catalog-cta__desc">
              Tell us your products, sizes and quantities — we will share
              specifications, availability and export pricing.
            </p>
            <div className="catalog-cta__actions">
              <a href={business.catalogPdf} download className="btn btn-accent">
                Download Catalogue (PDF)
                <span className="btn-arrow" aria-hidden="true">↓</span>
              </a>
              <a href="#contact" className="btn btn-light">
                Request a Quote
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
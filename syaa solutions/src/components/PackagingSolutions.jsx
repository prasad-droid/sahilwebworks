import PackagingProducts from './PackagingProducts.jsx';

export default function PackagingSolutions({ onEnquire }) {
  return (
    <section id="packaging" className="section packaging-section" aria-labelledby="packaging-title">
      <div className="container">
        <div className="section-heading section-heading-split" data-reveal>
          <div>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              Packaging Materials · Domestic Supply
            </p>
            <h2 id="packaging-title">Packaging Solutions for Every Business Need.</h2>
          </div>
          <p className="section-lead">
            Explore packaging materials designed for businesses across e-commerce, food, hospitality,
            manufacturing, and other industries.
          </p>
        </div>

        <PackagingProducts onEnquire={onEnquire} />
      </div>
    </section>
  );
}

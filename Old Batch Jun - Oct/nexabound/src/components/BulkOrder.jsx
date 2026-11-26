import '../styles/bulk-order.css';

export default function BulkOrder() {
  const scrollToInquiry = (e) => {
    e.preventDefault();
    document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  const points = [
    'Product Requirement',
    'Quantity',
    'Specifications',
    'Destination',
    'Customization Requirements'
  ];

  return (
    <section className="bulk-order section" id="bulk-order">
      <div className="bulk-order-bg"></div>
      <div className="container">
        <div className="bulk-order-inner">
          <span className="section-label">Bulk Supply</span>
          <h2 className="bulk-order-heading">Looking for Bulk Supply?</h2>
          <p className="bulk-order-text">
            Share your product requirements, specifications, quantity and destination with our team.
          </p>

          <div className="bulk-order-points">
            {points.map(point => (
              <div key={point} className="bulk-order-point">
                <span className="bulk-order-point-icon" aria-hidden="true">✓</span>
                {point}
              </div>
            ))}
          </div>

          <div className="bulk-order-actions">
            <a href="#inquiry" className="btn btn-primary" onClick={scrollToInquiry}>
              Send Bulk Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
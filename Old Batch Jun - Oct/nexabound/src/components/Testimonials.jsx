const testimonials = [];

export default function Testimonials() {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="target-buyers-header">
          <span className="section-label">Testimonials</span>
          <h2 className="section-heading">What Our Buyers Say</h2>
        </div>
        <div className="testimonials-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card" style={{ padding: '32px', background: 'var(--surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text)', marginBottom: '20px' }}>"{testimonial.content}"</p>
              <div style={{ fontWeight: 700, color: 'var(--dark)' }}>{testimonial.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{testimonial.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
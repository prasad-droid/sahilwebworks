import './Testimonials.css'

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Testimonials</span>
          <h2>What Our Clients Say</h2>
          <p className="section-subtitle">
            We let results speak for themselves. As we build our portfolio, we look forward to sharing client feedback here.
          </p>
        </div>
        <div className="testimonials-placeholder">
          <div className="placeholder-card">
            <div className="placeholder-stars">
              {[...Array(5)].map((_, index) => (
                <svg key={index} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 1.5L11.3175 6.195L16.5 6.9525L12.75 10.605L13.635 15.75L9 13.3275L4.365 15.75L5.25 10.605L1.5 6.9525L6.6825 6.195L9 1.5Z" fill="var(--warm-gold)" />
                </svg>
              ))}
            </div>
            <p className="placeholder-quote">
              &ldquo;Ready to showcase your success story. Let&apos;s build your automation solution together.&rdquo;
            </p>
            <div className="placeholder-author">
              <div className="placeholder-avatar">NG</div>
              <div>
                <p className="author-name">Your Business Next</p>
                <p className="author-role">Partner with NextGen Automate</p>
              </div>
            </div>
          </div>
          <div className="testimonials-note">
            <p>
              Client testimonials will be added here as we complete projects. If you&apos;d like to be featured, reach out through the inquiry form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

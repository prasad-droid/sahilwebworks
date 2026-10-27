import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-kicker animate-fade-up">
            <span className="hero-kicker-dot" />
            <span>AI-Powered Business Automation</span>
          </div>
          <h1 className="animate-fade-up delay-1">
            The Future Runs on <span className="hero-highlight">Automation</span>
          </h1>
          <p className="animate-fade-up delay-2">
            NextGen Automate helps businesses replace repetitive, manual work with intelligent AI workflows. Streamline operations, cut costs, and free up your team to focus on growth, strategy, and relationships.
          </p>
          <div className="hero-actions animate-fade-up delay-3">
            <a className="btn btn-primary" href="#inquiry">
              Request a Quote
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#services">
              Explore Services
            </a>
          </div>
          <div className="hero-trust animate-fade-up delay-4">
            <div className="trust-item">
              <span className="trust-value">End-to-End</span>
              <span className="trust-label">Workflow Automation</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-value">Custom AI Agents</span>
              <span className="trust-label">Built for Your Stack</span>
            </div>
            <div className="trust-divider" />
            <div className="trust-item">
              <span className="trust-value">24/7 Scalable</span>
              <span className="trust-label">Systems That Grow With You</span>
            </div>
          </div>
        </div>
        <div className="hero-visual animate-scale-in delay-2">
          <div className="hero-card">
            <div className="hero-card-header">
              <span className="hero-card-pill">Automation Blueprint</span>
              <span className="hero-card-status">Live</span>
            </div>
            <div className="hero-card-grid">
              <div className="hero-card-item">
                <span className="card-label">Process Audit</span>
                <span className="card-value">Identify Bottlenecks</span>
              </div>
              <div className="hero-card-item">
                <span className="card-label">AI Orchestration</span>
                <span className="card-value">n8n + Claude</span>
              </div>
              <div className="hero-card-item">
                <span className="card-label">Deployment</span>
                <span className="card-value">Tested &amp; Supported</span>
              </div>
              <div className="hero-card-item">
                <span className="card-label">Impact</span>
                <span className="card-value">Faster • Accurate • Scalable</span>
              </div>
            </div>
            <div className="hero-card-footer">
              <div>
                <p className="footer-title">Turning Manual Work Into Measurable Efficiency</p>
                <p className="footer-subtitle">From sales and support to operations and marketing</p>
              </div>
              <div className="footer-badge">NextGen Automate</div>
            </div>
          </div>
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
        </div>
      </div>
    </section>
  )
}

export default Hero

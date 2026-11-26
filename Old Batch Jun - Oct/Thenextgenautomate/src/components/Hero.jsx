import './Hero.css'

const buildSheet = [
  { label: 'Trigger', value: 'Ad form, WhatsApp message or missed call.' },
  { label: 'Steps', value: 'Reply → qualify → route → book → remind.' },
  { label: 'Tools', value: 'n8n · Claude · WhatsApp API · Cal.com' },
  { label: 'Guardrails', value: 'Human approval on pricing and refunds.' },
  { label: 'Go-live', value: '6 working days, documented.' },
]

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-kicker">AI automation studio · built with n8n, Claude &amp; ChatGPT</span>
          <h1>
            We wire up the work
            <br />
            you keep <em>doing twice.</em>
          </h1>
          <p className="hero-lede">
            NextGen Automate is a small automation studio in India. We map the messy process, build it into a
            working system, and hand it over with the documentation. Enquiries get a real reply in under 60
            seconds — day or night.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#inquiry">
              Book a free process audit
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#workflows">
              See the runbook library
            </a>
          </div>

          <p className="hero-availability">
            <span className="hero-availability-dot" />
            Taking two builds this month
          </p>

          <dl className="hero-facts">
            <div className="hero-fact">
              <dt>First reply</dt>
              <dd>under 60 seconds</dd>
            </div>
            <div className="hero-fact">
              <dt>Build time</dt>
              <dd>days, not months</dd>
            </div>
            <div className="hero-fact">
              <dt>Entry price</dt>
              <dd>₹5,000 one-time</dd>
            </div>
          </dl>
        </div>

        <div className="hero-visual">
          <div className="build-sheet">
            <div className="build-sheet-head">
              <span>Build sheet / 004</span>
              <span className="build-sheet-status">Lead → booked call</span>
            </div>

            <dl className="build-rows">
              {buildSheet.map((row) => (
                <div className="build-row" key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>

            <div className="build-reply">
              <div className="build-reply-label">
                <span>Sample auto-reply</span>
                <span className="reply-time">sent in 41s</span>
              </div>
              <p>
                “Hi Rahul, thanks for the enquiry. Are you looking at a 2BHK or 3BHK, and when would you like to
                visit?”
              </p>
            </div>

            <span className="build-stamp">build 004 · ready to run</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

import './OurPromise.css'

const promises = [
  {
    tag: 'Speed',
    title: 'Built in days, not months.',
    text: 'Simple workflows go live in 1–2 days. Complex systems ship in 1–2 weeks, with a working demo before the final invoice.',
  },
  {
    tag: 'Payback',
    title: 'Starts at ₹5,000. Pays for itself in weeks.',
    text: 'Entry workflows start at ₹5,000. If we cannot see a clear payback path in the audit, we will tell you before you spend.',
  },
  {
    tag: 'Partnership',
    title: 'We automate the work. You keep the relationships.',
    text: 'Your team stays in control of the conversation. Automation handles the chasing, typing and follow-up.',
  },
]

function OurPromise() {
  return (
    <section id="promise" className="promise">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">08 / The short version</span>
          <h2>Three promises, in writing.</h2>
          <p className="section-subtitle">
            We are early, and we would rather put our commitments on the page than borrow someone else&apos;s
            testimonials.
          </p>
        </div>

        <div className="promise-sheet">
          <div className="promise-sheet-head">
            <span>Our promise</span>
            <span>Rev. 2026.1 · applies to every build</span>
          </div>

          <div className="promise-rows">
            {promises.map((promise) => (
              <div className="promise-row" key={promise.tag}>
                <span className="promise-tag">{promise.tag}</span>
                <div>
                  <h3>{promise.title}</h3>
                  <p>{promise.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="promise-foot">
            <div className="promise-sign">
              — The NextGen Automate team
              <small>written into every statement of work</small>
            </div>
            <span className="promise-stamp">30 days of fixes included</span>
          </div>
        </div>

        <div className="promise-cta">
          <p>
            <strong>Client stories are being written right now.</strong> New case studies go up as projects go
            live. Want yours to be the first?
          </p>
          <a className="btn btn-primary" href="#inquiry">
            Let&apos;s build it
            <svg width="17" height="17" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default OurPromise

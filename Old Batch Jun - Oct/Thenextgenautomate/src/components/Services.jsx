import './Services.css'

const tiers = [
  {
    index: '01',
    name: 'Simple',
    price: '₹5,000 – ₹15,000',
    build: '1–2 day build',
    tagline: 'Fast wins that pay for themselves in weeks.',
    flows: [
      {
        name: 'Form Processing',
        punch: 'Categorised, structured, delivered.',
        detail: 'Auto-sort form responses by type and send a clean Excel or PDF straight to the owner.',
      },
      {
        name: 'WhatsApp Inquiry Lead-In',
        punch: 'Reply before your competitor even sees the message.',
        detail: 'Instant auto-reply with business hours and FAQs, plus a notification to the owner.',
      },
      {
        name: 'Google Review Manager',
        punch: 'Collect the good reviews. Catch the bad ones before they go public.',
        detail: 'Draft thank-you replies automatically and flag negative reviews for manual handling.',
      },
      {
        name: 'Invoice Generation',
        punch: 'Order placed. Invoice sent. Zero typing.',
        detail: 'Order form submitted → professional PDF invoice generated and emailed to the customer.',
      },
      {
        name: 'Event Reminders',
        punch: 'Birthdays remembered. Customers retained.',
        detail: 'Track birthdays and anniversaries, then send personalised coupons on WhatsApp or email.',
      },
      {
        name: 'Social Media Scheduler',
        punch: 'One spreadsheet in. A week of posts out.',
        detail: 'Paste content once; publish to Instagram and Facebook at pre-set optimal hours.',
      },
      {
        name: 'Missed Call Marketing',
        punch: 'Missed call? Not a missed customer.',
        detail: 'Send an SMS with a callback or self-service booking link the moment a call is missed.',
      },
    ],
  },
  {
    index: '02',
    name: 'Medium',
    price: '₹20,000 – ₹50,000',
    build: '3–5 day build',
    tagline: 'The systems that stop revenue leaking.',
    featured: true,
    flows: [
      {
        name: 'Lead Scoring & Routing',
        punch: 'Hot leads to your sales team. Cold leads on autopilot.',
        detail: 'AI reads ad and form responses, scores Hot/Warm/Cold, routes hot leads to sales and nurtures the rest.',
      },
      {
        name: 'Appointment Retention',
        punch: 'Fewer no-shows. Fuller calendars.',
        detail: '24-hour and 2-hour reminders with explicit confirmation; high-risk no-shows flagged to the front desk.',
      },
      {
        name: 'Review Routing Filter',
        punch: 'Happy clients go public. Unhappy ones come straight to you.',
        detail: 'Triggered two hours after service: happy clients to public reviews, unhappy ones to private feedback.',
      },
      {
        name: 'Intelligent Stock Alerts',
        punch: 'Know what to reorder before you run out.',
        detail: 'AI forecasts critical thresholds from your inventory sheet and alerts the owner or emails suppliers.',
      },
      {
        name: 'Omni-Channel Inbox',
        punch: 'WhatsApp, email and Instagram, one inbox, smarter replies.',
        detail: 'A single dashboard with real-time, context-aware AI reply suggestions for support agents.',
      },
    ],
  },
  {
    index: '03',
    name: 'Complex',
    price: '₹75,000 – ₹2L+',
    build: '1–2 week build · retainer ready',
    tagline: 'AI systems that run like an extra team.',
    flows: [
      {
        name: 'AI Sales Qualification Bot',
        punch: 'Your best salesperson never sleeps.',
        detail: 'Engages inbound leads within 60 seconds, checks budget and timeline, books a slot and verifies the lead.',
      },
      {
        name: 'RAG Support Agent',
        punch: 'Answers from your own documents, in seconds.',
        detail: 'Connected to chat or WhatsApp, it resolves questions from your policies and FAQs and escalates when unsure.',
      },
      {
        name: 'Full Lifecycle Automation',
        punch: 'Capture. Nurture. Book. Review. Retain. All automated.',
        detail: 'End-to-end orchestration: lead capture, drip nurture, booking, fulfilment, review extraction and reactivation.',
      },
      {
        name: 'AI Intelligence Pipeline',
        punch: 'Your weekly business report, written for you.',
        detail: 'Aggregates sales, ads and review metrics into a narrative weekly summary emailed to stakeholders.',
      },
      {
        name: 'Voice AI Receptionist',
        punch: 'Every call picked up. Every booking logged.',
        detail: 'Handles inbound calls with Twilio and voice APIs, reads intent, books appointments and transfers to a human when needed.',
      },
      {
        name: 'Document Processing',
        punch: 'Contracts and invoices read in seconds, not hours.',
        detail: 'OCR and AI extract parties, amounts and milestones, map them to accounting tools and flag anomalies.',
      },
    ],
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">03 / Rate card</span>
          <h2>Pick the size of the problem, not the buzzword.</h2>
          <p className="section-subtitle">
            Prices are fixed before we start and the scope is written down. No hourly surprises, no retainer
            you did not ask for.
          </p>
        </div>

        <div className="rate-card">
          {tiers.map((tier) => (
            <article className={`rate-tier ${tier.featured ? 'rate-featured' : ''}`} key={tier.name}>
              <div className="rate-head">
                <div className="rate-head-main">
                  <span className="rate-eyebrow">
                    Tier {tier.index}
                    {tier.featured && <span className="rate-badge">Most booked</span>}
                  </span>
                  <h3>{tier.name}</h3>
                  <p className="rate-tagline">{tier.tagline}</p>
                </div>
                <div className="rate-price">
                  <span className="rate-price-value">{tier.price}</span>
                  <span className="rate-price-meta">{tier.build}</span>
                  <a className="rate-link" href="#inquiry">
                    Start with {tier.name.toLowerCase()} →
                  </a>
                </div>
              </div>

              <ol className="rate-flows">
                {tier.flows.map((flow, index) => (
                  <li className="rate-flow" key={flow.name}>
                    <span className="rate-flow-index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h4>{flow.name}</h4>
                      <p className="rate-punch">{flow.punch}</p>
                      <p className="rate-detail">{flow.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>

        <div className="services-footnote">
          <span className="mono-label">The fine print</span>
          <p>
            Prices are one-time build fees. Tool subscriptions — n8n hosting, WhatsApp API, AI tokens, CRM seats —
            are billed at cost, and we estimate them during the audit. <strong>Built in days, not months.</strong>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services

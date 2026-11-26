import Icon from './Icon'
import './WhyChooseUs.css'

const benefits = [
  {
    icon: 'clock',
    title: 'Answer first, win first',
    description: 'Leads get a reply in under 60 seconds — before your competitor even opens the message.',
  },
  {
    icon: 'calendar',
    title: 'Fewer no-shows',
    description: 'Multi-stage reminders and explicit confirmations keep calendars full and front desks calm.',
  },
  {
    icon: 'star',
    title: 'Reputation on autopilot',
    description: 'Route happy clients to public reviews and unhappy ones into a private feedback loop.',
  },
  {
    icon: 'inbox',
    title: 'One inbox, zero lost threads',
    description: 'WhatsApp, email and Instagram DMs in one place with context-aware AI-suggested replies.',
  },
  {
    icon: 'shield',
    title: 'Human where it matters',
    description: 'Confidence thresholds, approval steps and escalations keep your team in control of sensitive moments.',
  },
  {
    icon: 'key',
    title: 'Yours to keep',
    description: 'Documented workflows, clean handover and no vendor lock-in. Built in days, not months.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">07 / Straight answers</span>
          <h2>What you can hold us to.</h2>
          <p className="section-subtitle">
            No borrowed case studies, no imaginary logos. Here is how we work and what we will not pretend
            about.
          </p>
        </div>

        <div className="why-grid">
          {benefits.map((benefit, index) => (
            <article className="why-item" key={benefit.title}>
              <span className="why-number">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>
                  <Icon name={benefit.icon} size={17} className="why-icon" />
                  <span>{benefit.title}</span>
                </h3>
                <p>{benefit.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="why-quote">
          <p>“We automate the work. You keep the relationships.”</p>
          <span>The NextGen promise</span>
        </div>
        <p className="why-footnote">
          If a spreadsheet solves it, we will tell you to keep the spreadsheet. Automation should remove work,
          not add a dashboard nobody opens.
        </p>
      </div>
    </section>
  )
}

export default WhyChooseUs

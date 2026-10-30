import Icon from './Icon'
import './Process.css'

const steps = [
  {
    number: '01',
    when: 'Day 0',
    tag: 'Intake',
    icon: 'inbox',
    title: 'Capture',
    description:
      'Ad forms, website chat, WhatsApp and missed calls land in one CRM through a webhook. No lead sits in a silo.',
  },
  {
    number: '02',
    when: 'Day 0–1',
    tag: 'AI',
    icon: 'bot',
    title: 'Qualify',
    description:
      'An AI agent replies within 60 seconds, asks 2–3 qualifying questions and scores the lead Hot, Warm or Cold.',
  },
  {
    number: '03',
    when: 'Day 1–2',
    tag: 'Decision',
    icon: 'branch',
    title: 'Branch',
    description:
      'Hot leads book immediately. Warm leads enter a 5-day nurture sequence. Cold leads wait on a 90-day re-engagement cycle.',
  },
  {
    number: '04',
    when: 'Day 3',
    tag: 'Prep',
    icon: 'calendar',
    title: 'Prepare',
    description:
      '24-hour and 2-hour reminders, digital intake forms and no-show risk flags that create a call task for your staff.',
  },
  {
    number: '05',
    when: 'Day 4',
    tag: 'Retention',
    icon: 'repeat',
    title: 'Retain',
    description:
      'Review requests go out after service, follow-up appointments get booked, and non-rebookers re-enter a long-term nurture flow.',
  },
  {
    number: '06',
    when: 'Week 2',
    tag: 'Reporting',
    icon: 'chart',
    title: 'Report',
    description:
      'A dashboard tracks leads, response time, booking rate, no-shows and revenue — summarised in a weekly written email.',
  },
]

const safeguards = [
  'Human-in-the-loop approvals',
  'Confidence-gated auto-sends',
  'Retry & error handling',
  'Dead-letter queue',
]

function Process() {
  return (
    <section id="process" className="process">
      <div className="container process-layout">
        <aside className="process-aside">
          <div className="section-header process-header">
            <span className="section-kicker">05 / How a build runs</span>
            <h2>Six steps, one working system.</h2>
            <p className="section-subtitle">
              This is the lead-to-booking rail we adapt most often. It is also a fair picture of how we think:
              capture, decide, act, then check.
            </p>
          </div>

          <div className="ops-card">
            <div className="ops-card-head">
              <span>Failure drill</span>
              <span>run weekly</span>
            </div>
            <p>
              We unplug a step on purpose and watch what happens. If a lead can disappear quietly, the build is
              not finished.
            </p>
            <ul className="safeguards-list">
              {safeguards.map((safeguard) => (
                <li key={safeguard}>
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M3 8.5L6.2 11.7L13 4.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {safeguard}
                </li>
              ))}
            </ul>
          </div>

          <p className="process-footnote">
            We run it with your team on real leads for a week before go-live. You get a one-page runbook, not a
            forty-slide deck.
          </p>
        </aside>

        <ol className="process-steps">
          {steps.map((step) => (
            <li className="process-step" key={step.number}>
              <span className="process-step-number">{step.number}</span>
              <div className="process-step-body">
                <div className="process-step-top">
                  <span className="process-step-when">
                    {step.when} · {step.tag}
                  </span>
                  <Icon name={step.icon} size={18} className="process-step-icon" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Process

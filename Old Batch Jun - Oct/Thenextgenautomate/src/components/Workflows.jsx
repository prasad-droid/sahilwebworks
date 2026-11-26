import './Workflows.css'

const workflows = [
  {
    category: 'Real estate',
    title: 'Enquiry-to-Site-Visit Engine',
    description: 'Score every enquiry, answer in 60 seconds and book the site visit before the lead cools.',
  },
  {
    category: 'Growth',
    title: 'Mass Database Reactivation',
    description: 'Wake up 5 lakh+ old records with AI-written outreach and route replies to your team.',
  },
  {
    category: 'Support',
    title: 'Multi-Channel AI Support Desk',
    description: 'WhatsApp, email, website and voicemail in one queue, with AI drafts and human approval.',
  },
  {
    category: 'Finance',
    title: 'Invoice & Accounts Payable',
    description: 'Read invoices, match amounts, flag anomalies and push clean data into accounting.',
  },
  {
    category: 'Hiring',
    title: 'Recruitment Screening & Scheduling',
    description: 'Screen applicants against the brief and schedule interviews without the back-and-forth.',
  },
  {
    category: 'Marketing',
    title: 'AI Content Engine',
    description: 'Research one topic, then generate platform-ready posts, scripts and captions on schedule.',
  },
  {
    category: 'E-commerce',
    title: 'Order, COD Risk & Cart Recovery',
    description: 'Confirm orders, score COD risk, recover carts and process returns automatically.',
  },
  {
    category: 'Sales',
    title: 'Outbound Prospecting Engine',
    description: 'Personalised outreach at scale, with replies classified and routed to the right person.',
  },
  {
    category: 'Productivity',
    title: 'Meeting Intelligence',
    description: 'Turn calls into notes, tasks and follow-ups the moment the meeting ends.',
  },
  {
    category: 'Operations',
    title: 'Client Onboarding, KYC & Contracts',
    description: 'Collect documents, verify details and assemble the contract pack in one flow.',
  },
  {
    category: 'Reputation',
    title: 'Review & Social Listening Monitor',
    description: 'Track reviews and mentions, draft replies and escalate the ones that need you.',
  },
  {
    category: 'Reporting',
    title: 'Executive KPI Reporting',
    description: 'Pull sales, ads and review data into a weekly narrative report for stakeholders.',
  },
  {
    category: 'Education',
    title: 'Admissions, Counselling & Fees',
    description: 'Handle enquiries, counselling follow-ups, applications and fee reminders in one rail.',
  },
  {
    category: 'Internal ops',
    title: 'IT & HR Helpdesk Agent',
    description: 'Answer policy and IT questions from your own documents, with escalation when unsure.',
  },
  {
    category: 'Legal',
    title: 'Contract Review & Obligations',
    description: 'Extract parties, dates and obligations, then track renewals and deadlines.',
  },
]

function Workflows() {
  return (
    <section id="workflows" className="workflows">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">04 / Runbook library</span>
          <h2>Fifteen builds we can start from.</h2>
          <p className="section-subtitle">
            Every playbook below has a trigger, a decision, an AI step and a human fallback. We adapt the
            closest one to your tools instead of starting from a blank page.
          </p>
        </div>

        <figure className="workflow-figure">
          <picture>
            <source media="(max-width: 960px)" srcSet="/images/lead-rail-mobile.svg" width="360" height="700" />
            <img
              src="/images/lead-rail.svg"
              alt="Six-stage lead-to-booking rail: capture, qualify, branch, book, remind and review, with guardrails."
              width="1200"
              height="520"
              loading="lazy"
              decoding="async"
            />
          </picture>
          <figcaption>
            <span>Runbook 004 · lead-to-booking</span>
            <span>Capture → qualify → branch → book → remind → review</span>
          </figcaption>
        </figure>

        <div className="runbook">
          {workflows.map((workflow, index) => (
            <article className="runbook-row" key={workflow.title}>
              <span className="runbook-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="runbook-body">
                <span className="runbook-category">{workflow.category}</span>
                <h3>{workflow.title}</h3>
                <p>{workflow.description}</p>
              </div>
              <span className="runbook-arrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>

        <div className="workflows-cta">
          <div>
            <h3>Don&apos;t see your workflow?</h3>
            <p>Bring the messy version. We will map it on a call, price it, and tell you if it is worth automating.</p>
          </div>
          <a className="btn btn-ghost" href="#inquiry">
            Map my workflow
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

export default Workflows

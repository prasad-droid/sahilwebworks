import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Process Audit',
    description: 'We analyze your current workflows, tools, and pain points to identify high-impact automation opportunities.',
  },
  {
    number: '02',
    title: 'Workflow Design',
    description: 'We map the ideal automated flow, define triggers, logic, and integrations tailored to your stack.',
  },
  {
    number: '03',
    title: 'Automation Build',
    description: 'Using n8n, Claude, and relevant tools, we build custom AI agents and reliable workflows for your use case.',
  },
  {
    number: '04',
    title: 'Testing & Deployment',
    description: 'We rigorously test edge cases, secure connections, and deploy with clear documentation for your team.',
  },
  {
    number: '05',
    title: 'Support & Iteration',
    description: 'Post-deployment support ensures stability and we iterate as your processes evolve.',
  },
]

function Process() {
  return (
    <section id="process" className="process">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">How It Works</span>
          <h2>From Manual Chaos To Automated Clarity</h2>
          <p className="section-subtitle">
            Our proven approach delivers automation that&apos;s practical, measurable, and built to scale with your business.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step, index) => (
            <article key={step.number} className="process-card">
              <div className="process-card-header">
                <span className="process-number">{step.number}</span>
                {index < steps.length - 1 && <span className="process-line" />}
              </div>
              <div className="process-card-body">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process

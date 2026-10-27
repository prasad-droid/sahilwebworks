import './Services.css'

const services = [
  {
    title: 'Workflow Automation',
    description: 'Automate repetitive processes like data entry, follow-ups, scheduling, and reporting with reliable, testable workflows.',
    points: ['n8n workflow orchestration', 'Cross-tool integrations', 'Error handling & logging'],
  },
  {
    title: 'Custom AI Agents',
    description: 'Intelligent agents built with Claude to make decisions, generate content, qualify leads, and route tasks automatically.',
    points: ['Lead qualification & routing', 'AI-powered responses', 'Context-aware decision making'],
  },
  {
    title: 'Process Audit & Strategy',
    description: 'We map your current workflows, identify automation opportunities, and build a practical roadmap focused on ROI.',
    points: ['Bottleneck identification', 'ROI-focused prioritization', 'Scalable implementation plan'],
  },
  {
    title: 'End-to-End Implementation',
    description: 'From design and build to testing, deployment, and support — we handle everything so you can go live with confidence.',
    points: ['Testing & QA', 'Secure deployment', 'Ongoing support & iteration'],
  },
]

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Services</span>
          <h2>Pragmatic Automation Solutions For Growing Businesses</h2>
          <p className="section-subtitle">
            We design and build end-to-end workflow automation solutions for businesses — across sales, support, operations, and marketing. Custom AI agents and pipelines tailored to your existing tools and systems.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <div className="service-card-header">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <ul className="service-list">
                {service.points.map((point) => (
                  <li key={point}>
                    <span className="service-dot" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="service-card-footer">
                <a className="service-link" href="#inquiry">
                  Discuss your use case
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 3.75L14.25 9L9 14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

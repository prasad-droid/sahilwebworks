import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-content">
          <div className="section-header">
            <span className="section-kicker">About Us</span>
            <h2>Intelligent Automation Built For Real Business Outcomes</h2>
            <p className="section-subtitle">
              NextGen Automate helps businesses replace repetitive, manual work with AI-powered automation. We design and build end-to-end workflow solutions tailored to your existing tools, people, and processes.
            </p>
          </div>
          <div className="about-text">
            <p>
              From process audits to deployment and ongoing support, we deliver practical automation that drives efficiency, accuracy, and scalability. Our goal is simple: free your team from routine tasks so they can focus on strategy, creativity, sales, and problem-solving.
            </p>
            <p>
              We work across sales, support, operations, and marketing to build custom AI agents and pipelines using n8n, Claude, and the right integrations for each engagement.
            </p>
          </div>
          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-value">Audit → Build → Deploy</span>
              <span className="stat-label">End-to-End Service</span>
            </div>
            <div className="about-stat">
              <span className="stat-value">Tailored to Your Stack</span>
              <span className="stat-label">Custom Integrations</span>
            </div>
            <div className="about-stat">
              <span className="stat-value">Pragmatic &amp; Reliable</span>
              <span className="stat-label">Built for ROI</span>
            </div>
          </div>
        </div>
        <div className="about-visual">
          <div className="about-card">
            <div className="about-card-inner">
              <span className="about-card-kicker">Our Philosophy</span>
              <h3>Automate to Amplify</h3>
              <p>
                We don&apos;t just automate tasks — we amplify human potential. The right automation removes friction, reduces errors, and gives your business the capacity to scale without proportionally growing headcount.
              </p>
              <ul className="about-list">
                <li>
                  <span className="list-dot" />
                  <span>Efficiency without added complexity</span>
                </li>
                <li>
                  <span className="list-dot" />
                  <span>Accuracy and consistency around the clock</span>
                </li>
                <li>
                  <span className="list-dot" />
                  <span>Speed that helps you convert more opportunities</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="about-frame" />
        </div>
      </div>
    </section>
  )
}

export default About

import './About.css'

const notes = [
  {
    title: 'Map the real process.',
    text: 'Including the workarounds nobody wrote down. The map is usually the most useful thing we hand over.',
  },
  {
    title: 'Build the smallest version.',
    text: 'One workflow that removes the pain beats a twelve-step system nobody trusts.',
  },
  {
    title: 'Test it with your team.',
    text: 'We run it on real leads for a week, watch where it gets stuck, and fix that first.',
  },
  {
    title: 'Hand it over properly.',
    text: 'Documents, logins and a recorded walkthrough. No hostage situations.',
  },
]

const facts = [
  { value: '15', label: 'runbook playbooks' },
  { value: '3', label: 'build tiers' },
  { value: '1–2 wks', label: 'complex build' },
  { value: '30 days', label: 'of fixes included' },
]

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-content">
          <div className="section-header about-header">
            <span className="section-kicker">02 / Who we are</span>
            <h2>We automate the work. You keep the relationships.</h2>
            <p className="section-subtitle">
              NextGen Automate is a build-first studio, not a software reseller. We wire n8n, Claude and ChatGPT
              into the tools you already pay for, then leave you with something your team can actually run.
            </p>
          </div>

          <div className="about-copy">
            <p>
              We are run by people who have spent too long watching good teams copy-paste between tabs. So we
              build the unglamorous layer: routing, reminders, paperwork, handoffs — the follow-up that never
              happens on a busy Friday.
            </p>
            <p>
              We work with clinics, real-estate teams, schools, D2C brands and service businesses across India.
              Most projects start with one messy process, a spreadsheet and a phone that will not stop ringing.
            </p>
            <p>
              Before we write a workflow, we ask what the current process costs you. If the maths does not work,
              we say so. If a ₹500 script solves it, we build that instead of a ₹50,000 system.
            </p>
          </div>

          <div className="about-facts">
            {facts.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <span className="about-fact-value">{fact.value}</span>
                <span className="about-fact-label">{fact.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-note">
          <div className="about-note-head">
            <span>Studio note</span>
            <span>Rev. 01</span>
          </div>
          <h3>How we actually work.</h3>
          <p className="about-note-intro">
            No discovery theatre. Four steps, one working system, and a handover you can point at.
          </p>
          <ol className="about-list">
            {notes.map((note, index) => (
              <li key={note.title}>
                <span className="list-num">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <span className="principle-title">{note.title}</span>
                  <p className="principle-text">{note.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="about-sign">
            <span>— The NextGen Automate team</span>
            <span>usually replies in a few hours</span>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default About

import './WhyChooseUs.css'

const benefits = [
  {
    title: 'Efficiency That Saves Time',
    description: 'Automate repetitive processes so tasks that took hours now take minutes — without adding manual effort.',
  },
  {
    title: 'Cost Reduction',
    description: 'Scale operations without proportionally increasing headcount. Automation grows with your business.',
  },
  {
    title: 'Accuracy & Consistency',
    description: 'Eliminate typos and human error. Your workflows run the same way, every time, around the clock.',
  },
  {
    title: 'Speed & Availability',
    description: 'Respond to leads, tickets, and requests instantly 24/7, even outside business hours.',
  },
  {
    title: 'Scalable by Design',
    description: 'Handle 10x the volume of leads, customers, or transactions without 10x the team.',
  },
  {
    title: 'Human Potential Unlocked',
    description: 'Free your team from routine work so they can focus on strategy, creativity, sales, and problem-solving.',
  },
]

function WhyChooseUs() {
  return (
    <section id="why" className="why">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">Why Choose Us</span>
          <h2>Built To Deliver Measurable Business Value</h2>
          <p className="section-subtitle">
            Every solution we build is focused on outcomes that matter — efficiency, accuracy, speed, scalability, and cost savings.
          </p>
        </div>
        <div className="why-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="why-card">
              <div className="why-card-header">
                <div className="why-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.16667 13.6583L7.14167 11.6333L6.05 12.7167L9.16667 15.8333L16.05 8.95L14.9667 7.86667L9.16667 13.6583Z" fill="currentColor" />
                  </svg>
                </div>
                <h3>{benefit.title}</h3>
              </div>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

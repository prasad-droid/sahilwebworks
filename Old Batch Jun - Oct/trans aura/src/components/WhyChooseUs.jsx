import { BadgeDollarSign, FileCheck2, Handshake, IndianRupee, MessagesSquare, ShieldCheck, Sparkles, Users } from 'lucide-react'
import '../styles/WhyChooseUs.css'

const reasons = [
  {
    icon: IndianRupee,
    title: 'Reliable Sourcing from India',
    text: 'Connect with Indian suppliers to address your product requirements.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Competitive and Transparent Pricing',
    text: 'Receive clear, requirement-based quotations without ambiguity.'
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Focused Supply',
    text: 'Coordinate product requirements and quality expectations with supply sources.'
  },
  {
    icon: Sparkles,
    title: 'Flexible B2B Solutions',
    text: 'Support sourcing requirements based on buyer needs, order size and specifications.'
  },
  {
    icon: FileCheck2,
    title: 'Export Documentation Coordination',
    text: 'Professional coordination of relevant export documentation throughout the process.'
  },
  {
    icon: MessagesSquare,
    title: 'Responsive Communication',
    text: 'Maintain clear communication throughout the enquiry and coordination process.'
  },
  {
    icon: Users,
    title: 'Long-Term Business Relationships',
    text: 'Focus on dependable service and lasting international partnerships.'
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section section--soft why">
      <div className="container">
        <div className="section-head reveal">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="section-title">Why Choose Trans-Aura International?</h2>
          <p className="section-sub">A dependable approach to sourcing products from India.</p>
        </div>

        <div className="why__grid">
          {reasons.map(({ icon: Icon, title, text }, i) => (
            <article className="why__card reveal" style={{ '--reveal-delay': `${(i % 4) * 0.08}s` }} key={title}>
              <span className="why__icon" aria-hidden="true">
                <Icon size={22} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}

          <div className="why__statement reveal" style={{ '--reveal-delay': '0.2s' }}>
            <Handshake size={30} aria-hidden="true" />
            <p>&ldquo;Built on Quality. Driven by Reliability. Connected to Global Opportunity.&rdquo;</p>
          </div>
        </div>
      </div>
    </section>
  )
}
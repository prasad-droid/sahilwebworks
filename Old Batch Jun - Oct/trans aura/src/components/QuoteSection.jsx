import { Mail, MessageCircle, Phone } from 'lucide-react'
import QuoteForm from './QuoteForm'
import { company } from '../data/siteData'
import '../styles/QuoteSection.css'

export default function QuoteSection({ defaultProduct }) {
  return (
    <section id="quote" className="section section--navy quote-sec">
      <div className="quote-sec__glow" aria-hidden="true" />
      <div className="container">
        <div className="quote-sec__grid">
          <div className="quote-sec__intro reveal">
            <p className="eyebrow">Get In Touch</p>
            <h2 className="section-title" style={{ color: '#fff' }}>
              Request a Quote
            </h2>
            <p>
              Looking to source industrial chemicals or other products from India? Share your
              requirements with Trans-Aura International, and our team can review your enquiry and
              discuss the next steps.
            </p>

            <div className="quote-sec__points">
              <p>
                <strong>What happens next?</strong> We review your requirement (typically within one
                business day), coordinate sourcing discussions with suitable Indian supply sources,
                and come back to you with a clear, requirement-based quotation.
              </p>
              <p>
                Prefer to contact us directly? Reach us by email or WhatsApp below.
              </p>
            </div>

            <div className="quote-sec__chips">
              <a className="chip" href={company.emailHref}>
                <Mail size={17} aria-hidden="true" />
                {company.email}
              </a>
              <a className="chip" href={company.whatsappHref} target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" />
                {company.phoneDisplay}
              </a>
              <a className="chip" href={company.phoneHref}>
                <Phone size={17} aria-hidden="true" />
                Call {company.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="quote-sec__form reveal" style={{ '--reveal-delay': '0.15s' }}>
            <QuoteForm defaultProduct={defaultProduct} />
          </div>
        </div>
      </div>
    </section>
  )
}
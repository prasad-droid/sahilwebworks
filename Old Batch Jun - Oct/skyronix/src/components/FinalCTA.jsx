import { img } from '../data/products.js'
import { WhatsApp, ArrowRight } from './Icons.jsx'

export default function FinalCTA() {
  return (
    <section className="section final-cta">
      <div className="final-cta__bg">
        <img
          src={img('1521295121783-8a321d551ad2', 1920, 82)}
          alt="Colourful global shipping containers aligned in a row"
          loading="lazy"
        />
      </div>
      <div className="container">
        <h2 className="final-cta__title">
          Your next shipment starts with <span className="text-gradient">a conversation</span>.
        </h2>
        <p className="final-cta__text">
          Tell us the toy you&apos;re looking for — we&apos;ll take it from there. Samples, pricing,
          compliance, dispatch: one team, end to end.
        </p>
        <div className="btn-group">
          <a
            href="https://wa.me/919309187314?text=Hello%20Skyronix%20Overseas%20Pvt.%20Ltd.%2C%20I%20would%20like%20to%20discuss%20a%20product%20sourcing%2Fexport%20requirement."
            target="_blank"
            rel="noreferrer"
            className="btn btn--whatsapp"
          >
            <WhatsApp size={20} />
            Start on WhatsApp
          </a>
          <a href="#contact" className="btn btn--outline-light">
            Get a Price Quote
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
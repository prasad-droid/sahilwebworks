import "../styles/global-reach.css";
import Reveal from "./Reveal";

export default function GlobalReach({ onRequestQuote }) {
  return (
    <section id="global-reach" className="section global-reach" aria-labelledby="global-title">
      <span className="blob global-reach__blob" />
      <div className="container global-reach__inner">
        <Reveal className="global-reach__content">
          <span className="section-label">Global Reach</span>
          <h2 className="section-title" id="global-title">
            India to Global Markets
          </h2>
          <p className="section-subtitle">
            Building trusted connections between India&rsquo;s agricultural producers
            and international businesses.
          </p>
          <p className="global-reach__text">
            From Indian farms to world markets, Varidian Exim supports buyers across
            the globe with dependable sourcing, preparation, and export coordination.
          </p>
          <div className="global-reach__points">
            <div className="global-reach__point">
              <span className="global-reach__point-dot" aria-hidden="true" />
              <span>Reliable Indian supply base</span>
            </div>
            <div className="global-reach__point">
              <span className="global-reach__point-dot" aria-hidden="true" />
              <span>International-ready export process</span>
            </div>
            <div className="global-reach__point">
              <span className="global-reach__point-dot" aria-hidden="true" />
              <span>Responsive support for buyers worldwide</span>
            </div>
          </div>
          <button type="button" className="btn btn-primary btn-lg" onClick={onRequestQuote}>
            Become a Buyer Partner
          </button>
        </Reveal>

        <Reveal delay="reveal-delay-1" className="global-reach__visual">
          <div className="global-reach__map-wrap">
            <img
              src="/images/global-market.jpg"
              alt="Globe representing Indian agricultural exports reaching global markets"
              className="global-reach__map"
              loading="lazy"
              width="1600"
              height="800"
            />
            <span className="global-reach__chip global-reach__chip--origin">India Source</span>
            <span className="global-reach__chip global-reach__chip--markets">Global Markets</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
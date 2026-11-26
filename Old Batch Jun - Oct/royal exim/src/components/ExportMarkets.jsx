import Reveal from "./Reveal";
import { exportMarkets } from "../data/exportMarkets";
import "../styles/markets.css";

const AUDIENCE = [
  { id: "a1", label: "International Markets" },
  { id: "a2", label: "Global Buyers" },
  { id: "a3", label: "Importers & Trading Partners" },
];

export default function ExportMarkets() {
  return (
    <section className="markets" id="markets">
      <div className="container markets__inner">
        <Reveal className="markets__copy">
          <p className="section-label">Export Markets</p>
          <h2 className="section-title">Connecting India With Global Markets</h2>
          <p className="markets__intro">
            Built around international importers and buyers, connecting them
            with products and suppliers from India.
          </p>

          {exportMarkets.length > 0 ? (
            <ul className="markets__list">
              {exportMarkets.map((market) => (
                <li className="markets__chip" key={market.id}>
                  <span className="markets__chip-dot" aria-hidden="true" />
                  {market.country}
                  {market.region && <em> — {market.region}</em>}
                </li>
              ))}
            </ul>
          ) : (
            <>
              <div className="markets__audience">
                {AUDIENCE.map((item) => (
                  <span className="markets__pill" key={item.id}>
                    {item.label}
                  </span>
                ))}
              </div>
              <p className="markets__note">
                Our global market network is expanding. Contact us to discuss
                your sourcing requirements.
              </p>
            </>
          )}

          <a href="#contact" className="btn btn--primary">
            Discuss Your Market
          </a>
        </Reveal>

        <Reveal className="markets__visual" delay={120}>
          <div className="markets__panel">
            <p className="markets__route">
              <span className="markets__route-india">India</span>
              <span className="markets__route-line" aria-hidden="true" />
              <span className="markets__route-world">Global Markets</span>
            </p>
            <img
              className="markets__map"
              src="/images/markets-1.jpg"
              alt="Cargo containers at an export port shipping Indian goods to global markets"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
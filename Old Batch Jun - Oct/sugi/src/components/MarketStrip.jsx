import { MARKETS } from "../data/markets";
import "../styles/marketStrip.css";

export default function MarketStrip() {
  return (
    <section className="market-strip" aria-label="Global market focus">
      <div className="container">
        <p className="market-strip__label">GLOBAL MARKET FOCUS</p>
        <ul className="market-strip__list">
          {MARKETS.map((m) => (
            <li key={m.code} className="market-strip__item">
              <span className="market-strip__name">{m.name}</span>
              <span className="market-strip__dot" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

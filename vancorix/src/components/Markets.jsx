import { ArrowUpRight } from 'lucide-react';
import { COUNTRIES, quoteMessage, whatsappLink } from '../data/site';

const Markets = () => {
  return (
    <section className="section markets" id="markets">
      <div className="shell">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Global markets</p>
            <h2>19 destinations · 4 continents</h2>
            <p className="section-lead">
              Supplying importers, distributors and trade desks across established and
              emerging markets.
            </p>
          </div>
          <a
            className="text-link text-link-light"
            href={whatsappLink(quoteMessage())}
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <ArrowUpRight size={17} strokeWidth={2} />
          </a>
        </div>

        <ul className="market-grid">
          {COUNTRIES.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Markets;

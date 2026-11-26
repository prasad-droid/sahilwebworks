import { markets } from '../data/markets';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import '../styles/ExportMarkets.css';

export default function ExportMarkets() {
  return (
    <section id="markets" className="markets section--tight section--beige">
      <div className="container">
        <SectionHeading
          eyebrow="International Markets"
          title="Connecting With International Markets"
          description="United Arab Emirates and Iraq are key target markets for our agricultural export operations."
          align="center"
        />

        <div className="markets__grid">
          {markets.map((market, index) => (
            <article
              className={`market-card market-card--${market.accent}`}
              key={market.id}
            >
              <Reveal
                as="div"
                className="market-card__media"
                delay={120 + index * 90}
                y={26}
              >
                <img
                  className="market-card__image"
                  src={market.image}
                  alt={market.imageAlt}
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <span className="market-card__code">{market.code}</span>
                <span className="market-card__shade" aria-hidden="true" />
              </Reveal>

              <div className="market-card__content">
                <p className="market-card__eyebrow">Target market</p>
                <h3 className="market-card__name">{market.name}</h3>
                <p className="market-card__description">{market.description}</p>

                <div
                  className="market-card__focus"
                  aria-label={`Export focus from India to ${market.shortName}`}
                >
                  <span>India</span>
                  <span className="market-card__focus-line" aria-hidden="true" />
                  <span>{market.shortName}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

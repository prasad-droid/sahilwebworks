import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import WorldMap from "./WorldMap";
import { globalMarketLegend } from "../data/site";

export default function GlobalMarkets() {
  return (
    <section id="global-markets" className="global section section--dark">
      <div className="container">
        <SectionHeading
          light
          label="GLOBAL BUSINESS"
          title="From Local Markets to Global Opportunities"
          subtitle="PrajtamEx works on import and export requirements — connecting suppliers, buyers and business opportunities across agriculture, recycling and trade."
        />

        <ul className="global__legend" aria-label="Markets and flows represented on the map">
          {globalMarketLegend.map((item) => (
            <li key={item.id} data-reveal>
              <span aria-hidden="true">
                <Icon name={item.icon} size={17} />
              </span>
              {item.label}
            </li>
          ))}
        </ul>

        <WorldMap />

        <p className="global__note" data-reveal>
          Illustrative representation of worldwide market connectivity and import/export ambition.
          It is not a list of current export destinations.
        </p>
      </div>
    </section>
  );
}

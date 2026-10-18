import { FiBriefcase, FiHome } from "react-icons/fi";
import { industries, countries } from "../../data/data";

const Industries = () => (
  <section id="industries" className="industries section">
    <div className="container">
      <div className="section__head" data-reveal>
        <span className="section__eyebrow">Who We Serve</span>
        <h2 className="section__title">Industries We Serve</h2>
        <p className="section__sub">
          Reliable supply partners for businesses of every size and sector.
        </p>
      </div>

      <div className="industries__chips" data-reveal>
        {industries.map((ind, i) => (
          <span className="industry-chip" key={ind} style={{ transitionDelay: `${(i % 5) * 80}ms` }}>
            {i % 2 === 0 ? <FiBriefcase aria-hidden="true" /> : <FiHome aria-hidden="true" />}
            {ind}
          </span>
        ))}
      </div>

      <div className="industries__markets" data-reveal="scale">
        <div className="industries__markets-head">
          <span className="section__eyebrow">Global Reach</span>
          <h3>Exporting to markets worldwide</h3>
        </div>
        <div className="industries__markets-list">
          <div className="industries__markets-col">
            <h4>Primary Markets</h4>
            <ul>
              {["Australia", "UAE", "Saudi Arabia", "Singapore", "Sri Lanka"].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="industries__markets-col">
            <h4>Additional Markets</h4>
            <ul>
              {countries
                .filter((c) => !["Australia", "UAE", "Saudi Arabia", "Singapore", "Sri Lanka"].includes(c))
                .map((c) => (
                  <li key={c}>{c}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Industries;

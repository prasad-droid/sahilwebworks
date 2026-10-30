import { PHOTOS } from '../data/business.js'

export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <header className="section__header">
          <p className="section__eyebrow">About Us</p>
          <h2 className="section__title">About Dake & Company</h2>
          <p className="section__subtitle">
            Dake and Company is a merchant-export and trading company specializing in kraft paper bags and corrugated packaging solutions for businesses in India as well as international markets.
          </p>
        </header>
        <div className="about__grid">
          <div className="about__content">
            <div className="about__text">
              <p>
                We work with reliable manufacturing partners to source and supply packaging that meets the practical requirements of modern businesses—from retail and e-commerce to fashion, food, lifestyle, distribution and industrial applications.
              </p>
              <p>
                Our approach is simple: understand the buyer's specifications, source the right product, maintain consistency and deliver dependable supply at competitive B2B pricing. Packaging should do more than protect a product—it should represent the quality of the business behind it.
              </p>
              <p>
                <strong>Our Vision:</strong> To build Dake & Company into a trusted global B2B packaging sourcing partner from India, connecting buyers with dependable packaging supply and creating long-term business relationships across markets.
              </p>
              <p>
                <strong>Our Commitment to Responsible Packaging:</strong> Our kraft paper bags are made from paper and are 100% recyclable. We believe responsible packaging should combine recyclability, functionality and durability.
              </p>
            </div>
            <ul className="about__list">
              <li className="about__list-item">
                <span className="about__list-dot" aria-hidden="true" />
                <span>Specification-driven sourcing tailored to your exact requirements</span>
              </li>
              <li className="about__list-item">
                <span className="about__list-dot" aria-hidden="true" />
                <span>Focus on repeat orders and long-term supply relationships</span>
              </li>
              <li className="about__list-item">
                <span className="about__list-dot" aria-hidden="true" />
                <span>Export-oriented approach with attention to documentation and communication</span>
              </li>
            </ul>
          </div>
          <figure className="about__card">
            <img src={PHOTOS[12]} alt="Kraft paper and corrugated packaging supplied by Dake and Company" loading="lazy" />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default About

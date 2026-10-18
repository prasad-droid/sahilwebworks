import {
  FaIndustry,
  FaUtensils,
  FaHotel,
  FaStore,
  FaBuildingShield,
  FaShip,
  FaTruck,
  FaLeaf,
  FaBasketShopping,
} from "react-icons/fa6";
import Reveal from "../Reveal";

const industries = [
  { icon: <FaIndustry />, label: "Food Manufacturers" },
  { icon: <FaUtensils />, label: "Restaurants" },
  { icon: <FaHotel />, label: "Hotels" },
  { icon: <FaStore />, label: "Retail Chains" },
  { icon: <FaBuildingShield />, label: "Shopping Malls" },
  { icon: <FaShip />, label: "Importers" },
  { icon: <FaTruck />, label: "Wholesalers" },
  { icon: <FaLeaf />, label: "Health Food Companies" },
  { icon: <FaBasketShopping />, label: "Ingredient Distributors" },
];

const Industries = () => (
  <section className="section industries">
    <div className="container">
      <Reveal className="section-head">
        <span className="section-label">Industries We Serve</span>
        <h2 className="section-title">
          Trusted by Food Businesses <span className="accent">Worldwide</span>
        </h2>
        <p className="section-subtitle">
          From supermarkets to food manufacturers, we supply quality ingredients across
          every food channel.
        </p>
      </Reveal>

      <div className="industry-grid">
        {industries.map((ind, i) => (
          <Reveal key={ind.label} delay={(i % 3) * 90} className="industry-card hover-lift">
            <span className="industry-icon">{ind.icon}</span>
            <span className="industry-label">{ind.label}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="industry-markets">
        <h3 className="industry-markets-title">Serving Markets Across the Globe</h3>
        <div className="industry-market-list">
          {[
            "USA",
            "Canada",
            "United Kingdom",
            "Germany",
            "France",
            "Italy",
            "Netherlands",
            "Australia",
            "UAE",
            "Saudi Arabia",
            "Singapore",
            "Malaysia",
            "South Africa",
          ].map((m) => (
            <span key={m} className="industry-market">
              {m}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default Industries;

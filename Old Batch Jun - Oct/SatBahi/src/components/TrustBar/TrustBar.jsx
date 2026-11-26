import { FiCheckCircle } from "react-icons/fi";

const items = [
  "Quality-Focused Products",
  "Competitive Pricing",
  "Custom Solutions",
  "Bulk Supply",
  "Reliable Export Service",
  "Long-Term Partnerships",
];

export default function TrustBar() {
  return (
    <section className="trustbar section" aria-label="Buyer assurance points">
      <div className="container">
        <h2 className="trustbar__title">Built for Global Buyers</h2>
        <ul className="trustbar__grid">
          {items.map((item) => (
            <li className="trustbar__item" key={item}>
              <FiCheckCircle aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import Icon from "./Icon";
import { trustStrip } from "../data/site";

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Areas of business focus">
      <ul className="trust-strip__list">
        {trustStrip.map((item) => (
          <li className="trust-strip__item" key={item.id} data-reveal>
            <span className="trust-strip__icon" aria-hidden="true">
              <Icon name={item.icon} size={20} />
            </span>
            <span className="trust-strip__label">{item.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

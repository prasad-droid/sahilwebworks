import { ArrowUpRight, Check, Leaf } from "lucide-react";
import Reveal from "./Reveal";
import shopGoods from "../assets/images/shop-goods.webp";
import exportContainers from "../assets/images/export-containers.webp";

const PILLARS = [
  "Natural products, home décor and fashion accessories",
  "Wholesale, retail and individual customer requirements",
  "A flexible, relationship-first approach to trade",
];

export default function AboutUs() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container about__grid">
        <Reveal className="about__visual">
          <div className="about__image-main">
            <img
              src={shopGoods}
              alt="A considered selection of lifestyle and home goods from the DVK Enterprises portfolio"
              width="1400"
              height="788"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__image-inset">
            <img
              src={exportContainers}
              alt="Shipping containers representing international export trade"
              width="1400"
              height="934"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__statement">
            <Leaf size={18} strokeWidth={1.7} aria-hidden="true" />
            <p>
              Your Products.
              <br />
              Our Commitment.
              <br />
              <em>Shared Growth.</em>
            </p>
          </div>

          <span className="about__visual-ring" aria-hidden="true" />
        </Reveal>

        <Reveal className="about__content" delay={110}>
          <p className="eyebrow">
            <span>About DVK Enterprises</span>
          </p>
          <h2 id="about-title" className="section-title">
            Growing Together Through Global Trade
          </h2>

          <div className="about__copy">
            <p>
              DVK Enterprises is a merchant trading and export business focused
              on bringing together diverse product categories for domestic and
              international markets.
            </p>
            <p>
              Our portfolio includes Moringa Powder, carpets and rugs, hair
              clips, and rubber bands. We aim to connect with wholesalers,
              distributors, retailers, businesses, and individual customers
              through a flexible and customer-focused approach.
            </p>
            <p>
              With the philosophy of <strong>“We Grow Together”</strong>, we
              believe in building meaningful business relationships and
              exploring new opportunities through product diversity, sourcing,
              and international trade.
            </p>
          </div>

          <ul className="about__pillars">
            {PILLARS.map((pillar) => (
              <li key={pillar}>
                <span aria-hidden="true">
                  <Check size={14} strokeWidth={2.4} />
                </span>
                {pillar}
              </li>
            ))}
          </ul>

          <div className="about__bottom">
            <a className="text-link" href="#products">
              Discover our product portfolio
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <p className="about__signature">
              <span>DVK Enterprises</span>
              Merchant Trader &amp; Exporter
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

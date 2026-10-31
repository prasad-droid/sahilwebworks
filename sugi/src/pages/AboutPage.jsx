import PageHero from "../components/PageHero";
import QuoteCTA from "../components/QuoteCTA";
import useReveal from "../components/useReveal";
import operationsImage from "../assets/brand/company-operations.jpg";
import "../styles/aboutPage.css";

// ==========================================================================
// ABOUT PAGE — full text supplied in Site Changes/About.docx
// ==========================================================================

const EXPORT_LIST = [
  "Fresh Bananas (G9-Cavendish)",
  "Pomegranates",
  "Mangoes",
  "Grapes (Thomson, Chrimson, Sharad-Black)",
  "Onions (Red, Pink-Garwa)",
  "Ginger",
  "Green Chillies (G4-Gauri)",
  "Tomatoes",
  "Okra",
  "Sweet Corn",
  "Maize",
  "Semi-Husked Coconuts",
  "Fresh Vegetables",
  "Fresh Fruits",
  "Indian Spices",
  "Customized Agricultural Products",
];

const MISSION = [
  "Delivering premium-quality fresh produce sourced directly from trusted Indian farms.",
  "Maintaining international standards in grading, sorting, packaging, and cold-chain logistics.",
  "Building long-term relationships based on trust, transparency, and dependable service.",
  "Providing customized packaging and export solutions to meet the specific needs of global buyers.",
  "Ensuring timely deliveries through efficient supply chain management and reliable logistics.",
  "Continuously improving our processes through innovation, technology, and customer feedback.",
];

const WHY = [
  "Trusted Indian Exporter & Importer",
  "Premium Farm Fresh Produce",
  "Direct Sourcing from Certified Farms",
  "International Quality Standards",
  "Competitive Pricing",
  "Customized Packaging Solutions",
  "Efficient Global Logistics",
  "Timely Worldwide Deliveries",
  "Experienced Export Documentation Support",
  "Customer-Centric Business Approach",
];

export default function AboutPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Sugi International Pvt. Ltd."
        intro="Our commitment to quality, integrity, and customer satisfaction has made us a preferred partner for buyers seeking reliable agricultural exports from India. We strive to deliver excellence in every shipment and build strong business relationships that grow for years to come."
        crumbs={[{ label: "About" }]}
      />

      {/* ---------- intro ---------- */}
      <section className="about-intro section-pad">
        <div className="container about-intro__grid">
          <div className="about-intro__media reveal">
            <img
              src={operationsImage}
              alt="Sugi International Pvt. Ltd. operations"
              loading="lazy"
            />
          </div>

          <div className="about-intro__body reveal">
            <p className="about-intro__lead">
              Sugi International Pvt. Ltd. is a trusted Indian exporter and
              importer of premium fresh fruits, vegetables, spices, and
              agricultural products, committed to delivering exceptional quality
              to customers across the globe. Based in India, we source our
              products directly from carefully selected farms and certified
              growers, ensuring freshness, superior quality, and compliance with
              international export standards.
            </p>
            <p>
              With extensive knowledge of global agricultural trade, we
              specialize in supplying fresh produce that meets the quality,
              safety, and packaging requirements of international markets. Our
              strong farmer network, advanced post-harvest handling practices,
              and efficient logistics enable us to deliver products that retain
              their freshness from farm to destination.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- export list ---------- */}
      <section className="about-range section-pad">
        <div className="container about-range__inner">
          <h2 className="section-title reveal aboutpage-title">
            We proudly export a wide range of premium Indian agricultural
            products, including:
          </h2>
          <ul className="about-range__list">
            {EXPORT_LIST.map((item, i) => (
              <li
                className="reveal"
                key={item}
                style={{ transitionDelay: `${(i % 8) * 0.04}s` }}
              >
                <span className="about-range__tick" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="about-range__note reveal">
            <p>
              Every shipment undergoes strict quality inspection, grading,
              sorting, hygienic packing, and careful container loading to ensure
              that our customers receive products in excellent condition.
            </p>
            <p>
              Whether you are a wholesaler, supermarket chain, food distributor,
              importer, or retail supplier, Sugi International Pvt. Ltd. is
              dedicated to building long-term partnerships through reliability,
              transparency, competitive pricing, and consistent product quality.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- vision ---------- */}
      <section className="about-vision section-pad">
        <div className="container about-vision__inner reveal">
          <p className="eyebrow">Our Vision</p>
          <h2 className="section-title">Our Vision</h2>
          <p>
            Our vision is to become one of India&apos;s most trusted and
            globally recognized exporters of fresh fruits, vegetables, and
            agricultural products by delivering premium-quality produce,
            embracing sustainable farming practices, and creating lasting value
            for farmers, customers, and international partners.
          </p>
          <p>
            We aim to strengthen India&apos;s position as a leading global
            supplier of fresh agricultural products while continuously expanding
            into new international markets through innovation, quality, and
            customer satisfaction.
          </p>
        </div>
      </section>

      {/* ---------- mission ---------- */}
      <section className="about-mission section-pad">
        <div className="container about-mission__inner">
          <div className="about-mission__head reveal">
            <p className="eyebrow">Our Mission</p>
            <h2 className="section-title">Our Mission</h2>
            <p>
              Our mission is to deliver farm-fresh, safe, and high-quality
              fruits and vegetables to customers worldwide while maintaining the
              highest standards of food safety, quality control, and
              international trade compliance.
            </p>
            <p className="about-mission__commitment">We are committed to:</p>
          </div>

          <ol className="about-mission__list">
            {MISSION.map((item, i) => (
              <li
                className="reveal"
                key={item}
                style={{ transitionDelay: `${(i % 6) * 0.05}s` }}
              >
                <span className="about-mission__num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- why choose ---------- */}
      <section className="about-why section-pad">
        <div className="container">
          <div className="about-why__head reveal">
            <p className="eyebrow">Why Choose Us</p>
            <h2 className="section-title">
              Why Choose Sugi International Pvt. Ltd.?
            </h2>
          </div>

          <ul className="about-why__grid">
            {WHY.map((item, i) => (
              <li
                className="about-why__item reveal"
                key={item}
                style={{ transitionDelay: `${(i % 5) * 0.05}s` }}
              >
                <span className="about-why__tick" aria-hidden="true">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="about-why__closing reveal">
            Our commitment to quality, integrity, and customer satisfaction has
            made us a preferred partner for buyers seeking reliable agricultural
            exports from India. We strive to deliver excellence in every
            shipment and build strong business relationships that grow for years
            to come.
          </p>
        </div>
      </section>

      <QuoteCTA />
    </>
  );
}

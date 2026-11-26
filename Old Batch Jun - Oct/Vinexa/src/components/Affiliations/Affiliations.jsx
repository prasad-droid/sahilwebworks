import { FaAward } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import SectionHeading from "../SectionHeading/SectionHeading";
import msmeImg from "../../assets/images/certificates/msme.jpg";
import iecImg from "../../assets/images/certificates/iec.jpg";
import apedaImg from "../../assets/images/certificates/APEDA.jpg";
import fieoImg from "../../assets/images/certificates/FIEO.jpg";
import fssaiImg from "../../assets/images/certificates/FSSAI_logo.png";
import spiceBoardImg from "../../assets/images/certificates/spice board.png";

const affiliations = [
  {
    id: "msme",
    name: "MSME Registration",
    fullName: "Ministry of Micro, Small & Medium Enterprises",
    description:
      "Registered under the MSME Act, 2006 — recognising Vinexa Global Enterprises as a Micro, Small & Medium Enterprise eligible for government schemes and export incentives.",
    image: msmeImg,
  },
  {
    id: "iec",
    name: "IEC Code",
    fullName: "Importer Exporter Code",
    description:
      "Assigned by the Directorate General of Foreign Trade (DGFT), the IEC is mandatory for any entity engaged in import or export of goods and services from India.",
    image: iecImg,
  },
  {
    id: "apeda",
    name: "APEDA Registration",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    description:
      "Registered with APEDA for the export of scheduled agricultural and processed food products — a statutory body under the Ministry of Commerce & Industry.",
    image: apedaImg,
  },
  {
    id: "fieo",
    name: "FIEO Membership",
    fullName: "Federation of Indian Export Organisations",
    description:
      "Member of FIEO — the apex body of Indian export promotion organisations, supporting exporters with market access, trade intelligence and policy advocacy.",
    image: fieoImg,
  },
  {
    id: "fssai",
    name: "FSSAI Certification",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "Licensed by FSSAI for food processing and export operations, ensuring full compliance with India's food safety and quality regulations.",
    image: fssaiImg,
  },
  {
    id: "spice-board",
    name: "Spice Board Registration",
    fullName: "Spices Board — Ministry of Commerce & Industry",
    description:
      "Registered with the Spices Board of India for the export of spices, ensuring compliance with quality standards and access to board-supported export promotion schemes.",
    image: spiceBoardImg,
  },
];

export default function Affiliations() {
  return (
    <section className="section" aria-labelledby="affiliations-heading">
      <div className="container">
        <SectionHeading
          eyebrow="Our Affiliations"
          title="Certifications & Registrations"
          sub="Recognised by India's leading trade and regulatory bodies, ensuring compliance, quality and credibility in global trade."
        />

        <div className="affiliations__grid">
          {affiliations.map((item, index) => (
            <ScrollReveal key={item.id} className="affiliation-card" delay={index * 80}>
              <div className="affiliation-card__image">
                <img src={item.image} alt={`${item.name} certificate`} loading="lazy" />
              </div>
              <div className="affiliation-card__content">
                <h3 className="affiliation-card__title">{item.name}</h3>
                <p className="affiliation-card__full-name">{item.fullName}</p>
                <p className="affiliation-card__description">{item.description}</p>
              </div>
              <span className="affiliation-card__accent" aria-hidden="true" />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="affiliations__cta" delay={200}>
          <div className="affiliations__note">
            <FaAward size={20} aria-hidden="true" />
            <p>
              All registrations and affiliations are verified and valid. For copies of
              certificates or verification requests, please contact our team.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

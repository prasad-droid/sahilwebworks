import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import useScrollReveal from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/PageHero/PageHero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";
import { Reveal } from "../hooks/useScrollReveal";
import aboutImage from "../assets/images/about.jpg";

const commitments = [
  "Superior quality products",
  "Competitive pricing",
  "Timely delivery",
  "Reliable export services",
];

export default function About() {
  useScrollReveal();

  useEffect(() => {
    document.title = "About Us | SATBHAI EXIM — Premium Tote Bag Exporter from India";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Us"
          title="About SATBHAI EXIM"
          subtitle="An India-based merchant export company specializing in the export of high-quality tote bags."
        />

        <section className="section" aria-label="Company overview">
          <div className="container">
            <div className="about__grid">
              <Reveal className="about__media">
                <img
                  src={aboutImage}
                  alt="SATBHAI EXIM premium tote bag for global export"
                  loading="lazy"
                />
              </Reveal>
              <Reveal className="about__body" delay={1}>
                <h2 className="section__title">A Reliable Export Partner for Tote Bags</h2>
                <p>
                  SATBHAI EXIM is a merchant export company based in India specializing in
                  the export of high-quality tote bags. We supply durable, stylish, and
                  eco-friendly tote bags to wholesalers, importers, retailers,
                  distributors, and private-label brands across international markets.
                </p>
                <p>
                  We offer a variety of tote bags in different materials, sizes, colors,
                  and customized designs to meet the unique requirements of our
                  international customers.
                </p>
                <ul className="about__points">
                  {commitments.map((c) => (
                    <li key={c}>
                      <FiCheck aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
                <p>
                  Our focus is on building long-term business relationships through
                  dependable service, consistent quality, and customer satisfaction.
                </p>
                <Link className="btn btn--primary" to="/products">
                  Explore Our Collection <FiArrowRight />
                </Link>
              </Reveal>
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <ExportProcess />
        <RequestAQuote />
      </main>
    </>
  );
}

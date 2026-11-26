import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/PageHero/PageHero";
import Services from "../components/Services/Services";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Customization from "../components/Customization/Customization";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";

export default function ServicesPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Services | SATBHAI EXIM — Premium Tote Bag Exporter from India";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Services"
          title="Export Services Built for Global Buyers"
          subtitle="From product sourcing and customization to bulk supply and export coordination — we support buyers at every step."
        />
        <Services />
        <Customization />
        <WhyChooseUs />
        <ExportProcess />
        <RequestAQuote />
      </main>
    </>
  );
}

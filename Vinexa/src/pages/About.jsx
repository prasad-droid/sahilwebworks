import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import About from "../components/About/About";
import VisionMissionValues from "../components/VisionMissionValues/VisionMissionValues";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import TrustStrip from "../components/TrustStrip/TrustStrip";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "About Us", url: "https://www.vinexaglobal.com/about" },
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Us | VINEXA GLOBAL ENTERPRISES — Indian Merchant Exporter"
        description="Learn about VINEXA GLOBAL ENTERPRISES, a trusted Indian merchant exporter and global sourcing partner for agricultural products, engineering products and engineering services."
        path="/about"
        keywords="about Vinexa Global, Indian merchant exporter, Nagpur exporter, Maharashtra export company, B2B sourcing partner India"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="About Us"
        title="Your Trusted Sourcing Partner from India"
        description="A merchant export company committed to premium products, reliable sourcing and long-term global relationships."
      />
      <About />
      <VisionMissionValues />
      <TrustStrip />
      <ExportProcess eyebrow="Our Working Approach" />
      <RfqSection />
    </>
  );
}

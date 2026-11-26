import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import EngineeringServices from "../components/EngineeringServices/EngineeringServices";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CatalogueCTA from "../components/CatalogueCTA/CatalogueCTA";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Services", url: "https://www.vinexaglobal.com/services" },
];

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Engineering Services | Product Sourcing & Development — VINEXA GLOBAL ENTERPRISES"
        description="VINEXA GLOBAL ENTERPRISES offers engineering services — product design & development, product sourcing and technical documentation — connecting industrial buyers with experienced Indian manufacturers."
        path="/services"
        keywords="engineering services India, product sourcing, product design India, 3D CAD design, 2D drafting, CAE analysis, technical documentation, industrial manufacturing India"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Engineering Services"
        title="Industrial Support from India"
        description="We connect industrial customers with experienced Indian manufacturers and technical partners for design, sourcing and documentation support."
      />
      <EngineeringServices />
      <ExportProcess eyebrow="Engagement Process" />
      <WhyChooseUs />
      <CatalogueCTA />
      <RfqSection />
    </>
  );
}

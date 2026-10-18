import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TrustStrip from "../components/TrustStrip/TrustStrip";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import CatalogueCTA from "../components/CatalogueCTA/CatalogueCTA";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Why Choose Us", url: "https://www.vinexaglobal.com/why-choose-us" },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <SEO
        title="Why Choose Us | VINEXA GLOBAL ENTERPRISES — Your Reliable Export Partner"
        description="Premium quality, competitive pricing, reliable supply chain, timely delivery, customer-centric approach and complete export support — why global buyers choose VINEXA GLOBAL ENTERPRISES."
        path="/why-choose-us"
        keywords="reliable Indian exporter, quality assured products, competitive pricing export, timely delivery India, B2B export partner, trusted supplier India"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Why Choose Us"
        title="Your Reliable Export Partner"
        description="The reasons international buyers partner with VINEXA GLOBAL ENTERPRISES for their sourcing needs."
      />
      <WhyChooseUs />
      <TrustStrip />
      <ExportProcess eyebrow="How We Deliver" />
      <CatalogueCTA />
      <RfqSection />
    </>
  );
}

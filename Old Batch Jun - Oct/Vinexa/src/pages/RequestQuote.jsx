import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import RfqSection from "../components/RfqSection/RfqSection";
import FAQ from "../components/FAQ/FAQ";
import Contact from "../components/Contact/Contact";
import MapSection from "../components/MapSection/MapSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Request a Quote", url: "https://www.vinexaglobal.com/request-quote" },
];

export default function RequestQuotePage() {
  return (
    <>
      <SEO
        title="Request a Quote | VINEXA GLOBAL ENTERPRISES"
        description="Submit your product requirements to VINEXA GLOBAL ENTERPRISES and receive a competitive quotation tailored to your business needs — agricultural products, engineering products and services."
        path="/request-quote"
        keywords="request quote India, agricultural product price, engineering product quotation, bulk order India, export pricing"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Request a Quote"
        title="Get a Competitive Quotation"
        description="Share your product requirements, specifications, quantity and destination. Our team responds with a tailored quotation."
      />
      <RfqSection />
      <FAQ />
      <Contact />
      <MapSection />
    </>
  );
}

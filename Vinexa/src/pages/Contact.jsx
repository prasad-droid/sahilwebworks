import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import Contact from "../components/Contact/Contact";
import MapSection from "../components/MapSection/MapSection";
import FAQ from "../components/FAQ/FAQ";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Contact", url: "https://www.vinexaglobal.com/contact" },
];

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | VINEXA GLOBAL ENTERPRISES — Indian Merchant Exporter"
        description="Contact VINEXA GLOBAL ENTERPRISES, Nagpur, Maharashtra, India — call, WhatsApp or email for agricultural products, engineering products and engineering services."
        path="/contact"
        keywords="contact Vinexa Global, Nagpur exporter, Maharashtra export company, Indian merchant exporter contact, WhatsApp exporter India"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Let's Build Your Global Supply Chain"
        description="Reach out by phone, WhatsApp or email — or submit your requirement through the quotation form."
      />
      <Contact />
      <MapSection />
      <FAQ />
      <RfqSection />
    </>
  );
}

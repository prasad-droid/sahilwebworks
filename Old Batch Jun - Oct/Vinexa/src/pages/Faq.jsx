import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import FAQ from "../components/FAQ/FAQ";
import RfqSection from "../components/RfqSection/RfqSection";
import Contact from "../components/Contact/Contact";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "FAQ", url: "https://www.vinexaglobal.com/faq" },
];

export default function FaqPage() {
  return (
    <>
      <SEO
        title="FAQ | VINEXA GLOBAL ENTERPRISES"
        description="Frequently asked questions about VINEXA GLOBAL ENTERPRISES' export products, customized sourcing, destination markets and export documentation."
        path="/faq"
        keywords="export FAQ India, agricultural export questions, engineering product sourcing, B2B export process, shipping documentation"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        description="Quick answers for international buyers exploring VINEXA's sourcing and export services."
      />
      <FAQ />
      <Contact />
      <RfqSection />
    </>
  );
}

import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import Affiliations from "../components/Affiliations/Affiliations";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Affiliations", url: "https://www.vinexaglobal.com/affiliations" },
];

export default function AffiliationsPage() {
  return (
    <>
      <SEO
        title="Affiliations & Certifications | VINEXA GLOBAL ENTERPRISES"
        description="View MSME, IEC, APEDA, FIEO, FSSAI and Spice Board certifications and registrations of VINEXA GLOBAL ENTERPRISES — a trusted Indian merchant exporter."
        path="/affiliations"
        keywords="MSME registration, IEC code India, APEDA registration, FIEO membership, FSSAI certification, Spice Board registration, Indian exporter certifications"
        breadcrumbs={breadcrumbs}
      />
      <PageHero
        eyebrow="Affiliations"
        title="Certifications & Registrations"
        description="Recognised by India's leading trade and regulatory bodies — proof of our commitment to quality, compliance and global trade standards."
      />
      <Affiliations />
      <RfqSection />
    </>
  );
}

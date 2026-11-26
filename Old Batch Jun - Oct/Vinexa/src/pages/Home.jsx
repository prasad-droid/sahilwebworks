import SEO from "../components/SEO/SEO";
import Hero from "../components/Hero/Hero";
import TrustBar from "../components/TrustBar/TrustBar";
import About from "../components/About/About";
import VisionMissionValues from "../components/VisionMissionValues/VisionMissionValues";
import TrustStrip from "../components/TrustStrip/TrustStrip";
import Products from "../components/Products/Products";
import EngineeringServices from "../components/EngineeringServices/EngineeringServices";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import ExportProcess from "../components/ExportProcess/ExportProcess";
import CatalogueCTA from "../components/CatalogueCTA/CatalogueCTA";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import RfqSection from "../components/RfqSection/RfqSection";
import Contact from "../components/Contact/Contact";
import MapSection from "../components/MapSection/MapSection";
import { site } from "../data/siteConfig";

export default function Home() {
  return (
    <>
      <SEO
        title="VINEXA GLOBAL ENTERPRISES | Indian Merchant Exporter & Global Sourcing Partner"
        description="VINEXA GLOBAL ENTERPRISES is an Indian merchant exporter and sourcing partner for agricultural products, engineering products and engineering services, serving global B2B buyers."
        keywords="Indian exporter, merchant exporter India, agricultural products exporter, basmati rice export, spices export, engineering products India, B2B sourcing India, global sourcing partner"
        ogImage={`${site.url}og-cover.svg`}
      />
      <Hero />
      <TrustBar />
      <About />
      <VisionMissionValues />
      <TrustStrip />
      <Products />
      <EngineeringServices />
      <WhyChooseUs />
      <ExportProcess />
      <CatalogueCTA />
      <Testimonials />
      <FAQ />
      <RfqSection />
      <Contact />
      <MapSection />
    </>
  );
}

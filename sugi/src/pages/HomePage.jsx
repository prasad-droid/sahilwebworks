import useReveal from "../components/useReveal";
import { Section } from "../store/SiteContext";
import HeroSlider from "../components/HeroSlider";
import HomeIntro from "../components/HomeIntro";
import AboutSection from "../components/AboutSection";
import ProductSection from "../components/ProductSection";
import Gallery from "../components/Gallery";
import WhyChooseUs from "../components/WhyChooseUs";
import ExportProcess from "../components/ExportProcess";
import ExportMap from "../components/ExportMap";
import Commitment from "../components/Commitment";
import Testimonials from "../components/Testimonials";
import Offers from "../components/Offers";
import QuoteCTA from "../components/QuoteCTA";
import BlogSection from "../components/BlogSection";
import CertificationsSlider from "../components/CertificationsSlider";
import { useProductsByGroup } from "../store/useAdminProducts";
import "../styles/home.css";

export default function HomePage() {
  useReveal();
  const { indianGroups, importedGroup } = useProductsByGroup();

  return (
    <>
      <Section id="heroSlider"><HeroSlider /></Section>
      <Section id="homeIntro"><HomeIntro /></Section>
      <Section id="about"><AboutSection /></Section>

      <Section id="productsIndian">
        <ProductSection
          id="products-indian"
          eyebrow="Our Products"
          title="Indian Origin"
          intro="We export a wide variety of premium Indian origin agricultural products."
          groups={indianGroups}
        />
      </Section>

      <Section id="productsImported">
        <ProductSection
          id="products-imported"
          eyebrow="Our Products"
          title="Imported"
          intro="We also import premium dry fruits from worldwide suppliers and process them in our world class processing units and export to the global market."
          groups={[importedGroup]}
        />
      </Section>

      <Section id="gallery"><Gallery /></Section>
      <Section id="whyChooseUs"><WhyChooseUs /></Section>
      <Section id="exportProcess"><ExportProcess /></Section>
      <Section id="exportMap"><ExportMap /></Section>
      <Section id="commitment"><Commitment /></Section>
      <Section id="testimonials"><Testimonials /></Section>
      <Section id="offers"><Offers /></Section>
      <Section id="quoteCta"><QuoteCTA /></Section>
      <Section id="blog"><BlogSection /></Section>
      <Section id="certifications"><CertificationsSlider /></Section>
    </>
  );
}

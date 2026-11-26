import Hero from './home/Hero';
import TrustStrip from './home/TrustStrip';
import AboutPreview from './home/AboutPreview';
import ProductCategories from './home/ProductCategories';
import WhyChooseUs from './home/WhyChooseUs';
import Customization from './home/Customization';
import ProductSpecs from './home/ProductSpecs';
import GlobalExport from './home/GlobalExport';
import TargetIndustries from './home/TargetIndustries';
import CertificationsPreview from './home/CertificationsPreview';
import TestimonialsPreview from './home/TestimonialsPreview';
import GalleryPreview from './home/GalleryPreview';
import RFQPreview from './home/RFQPreview';
import ContactPreview from './home/ContactPreview';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ProductCategories />
      <WhyChooseUs />
      <Customization />
      <ProductSpecs />
      <GlobalExport />
      <TargetIndustries />
      <CertificationsPreview />
      <TestimonialsPreview />
      <GalleryPreview />
      <RFQPreview />
      <ContactPreview />
    </>
  );
}

import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import Products from "../components/Products.jsx";
import ProductInformation from "../components/ProductInformation.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Products />
      <ProductInformation />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;

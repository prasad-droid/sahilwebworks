import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Products from "./components/Products";
import ExportProcess from "./components/ExportProcess";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/whychooseus.css";
import "./styles/services.css";
import "./styles/products.css";
import "./styles/process.css";
import "./styles/testimonials.css";
import "./styles/contact.css";
import "./styles/footer.css";

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Products />
      <ExportProcess />
      <Testimonials />
      <Contact />
    </main>
    <Footer />
  </>
);

export default App;

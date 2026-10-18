import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import BusinessFocus from "./components/BusinessFocus";
import Products from "./components/Products";
import Services from "./components/Services";
import GlobalMarkets from "./components/GlobalMarkets";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyPrajtamEx from "./components/WhyPrajtamEx";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { navLinks } from "./data/site";
import { scrollToSection } from "./lib/scroll";

export default function App() {
  const [active, setActive] = useState("home");
  const [seed, setSeed] = useState(null);

  useEffect(() => {
    const ids = navLinks.map((link) => link.id);
    const onScroll = () => {
      const marker = window.scrollY + 160;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    const seen = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const attach = (el) => {
      if (!el || seen.has(el)) return;
      seen.add(el);
      observer.observe(el);
    };

    const attachTree = (node) => {
      if (!node || node.nodeType !== 1) return;
      if (node.matches?.("[data-reveal]")) attach(node);
      node.querySelectorAll?.("[data-reveal]").forEach(attach);
    };

    document.querySelectorAll("[data-reveal]").forEach(attach);

    // reveal elements added later (filter changes, dynamic states)
    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach(attachTree);
      });
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      mutations.disconnect();
      observer.disconnect();
    };
  }, []);

  const openEnquiry = useCallback((nextSeed = {}) => {
    setSeed({ ...nextSeed, at: Date.now() });
    scrollToSection("contact");
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>

      <Navbar active={active} />

      <main id="main" tabIndex={-1}>
        <Hero />
        <TrustStrip />
        <About />
        <BusinessFocus />
        <Products onRequestQuote={openEnquiry} />
        <Services onRequestQuote={openEnquiry} />
        <GlobalMarkets />
        <Portfolio />
        <Process />
        <WhyPrajtamEx />
        <Testimonials />
        <Gallery />
        <Contact seed={seed} />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

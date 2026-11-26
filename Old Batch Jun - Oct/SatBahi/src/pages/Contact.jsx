import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/PageHero/PageHero";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";
import Contact from "../components/Contact/Contact";

export default function ContactPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Contact | SATBHAI EXIM — Request a Quote";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Let's Discuss Your Requirement"
          subtitle="Tell us about your tote bag requirement and our team will help you find the right solution for your business."
        />
        <RequestAQuote />
        <Contact />
      </main>
    </>
  );
}

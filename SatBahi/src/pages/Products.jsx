import { useEffect } from "react";
import useScrollReveal from "../hooks/useScrollReveal";
import Navbar from "../components/Navbar/Navbar";
import PageHero from "../components/PageHero/PageHero";
import Products from "../components/Products/Products";
import ProductCategories from "../components/ProductCategories/ProductCategories";
import Customization from "../components/Customization/Customization";
import RequestAQuote from "../components/RequestAQuote/RequestAQuote";

export default function ProductsPage() {
  useScrollReveal();

  useEffect(() => {
    document.title = "Our Tote Bags | SATBHAI EXIM — Tote Bag Exporter from India";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our Products"
          title="Our Tote Bag Collection"
          subtitle="Designed for Businesses. Built for Everyday Use. Browse our range and request a quote for bulk or customized orders."
        />
        <Products />
        <ProductCategories />
        <Customization />
        <RequestAQuote />
      </main>
    </>
  );
}

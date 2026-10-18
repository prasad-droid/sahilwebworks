import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO/SEO";
import PageHero from "../components/PageHero/PageHero";
import ProductCategory from "../components/ProductCategory/ProductCategory";
import { categories } from "../data/categories";
import { products } from "../data/products";
import RfqSection from "../components/RfqSection/RfqSection";

const breadcrumbs = [
  { name: "Home", url: "https://www.vinexaglobal.com/" },
  { name: "Products", url: "https://www.vinexaglobal.com/products" },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "VINEXA GLOBAL ENTERPRISES — Product Catalogue",
  description: "Premium agricultural products, cattle feed, spices and engineering products sourced from India.",
  numberOfItems: products.length,
  itemListElement: products.slice(0, 10).map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      image: p.image,
      brand: {
        "@type": "Brand",
        name: "VINEXA GLOBAL ENTERPRISES",
      },
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
        priceCurrency: "USD",
        priceValidUntil: "2026-12-31",
      },
    },
  })),
};

export default function ProductsPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]);

  return (
    <>
      <SEO
        title="Products | Cereals and Pulses, Spices, Cattle Feed & Engineering Products — VINEXA GLOBAL ENTERPRISES"
        description="Explore VINEXA GLOBAL ENTERPRISES' product range: basmati rice, non-basmati rice, pulses and dal, spices, cattle feed and engineering products sourced from trusted Indian suppliers."
        path="/products"
        keywords="basmati rice export, non-basmati rice, Indian spices export, cattle feed pellets, soyabean meal, cottonseed cake, engineering products India, pulses dal export, wheat bran"
        breadcrumbs={breadcrumbs}
        jsonLd={productJsonLd}
      />
      <PageHero
        eyebrow="Product Catalogue"
        title="Premium Products from India"
        description="Explore our full product range. Every enquiry receives a tailored quotation based on your specifications."
      />

      <div className="section">
        <div className="container">
          {categories.map((cat) => (
            <div key={cat.slug} id={cat.slug} style={{ scrollMarginTop: "6rem", marginBottom: "3.5rem" }}>
              <ProductCategory slug={cat.slug} />
            </div>
          ))}
        </div>
      </div>

      <RfqSection />
    </>
  );
}

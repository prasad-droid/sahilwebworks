import { useEffect, useState } from "react";
import { useRoute, useScrollTop, navigate, Link } from "./router";
import useReveal from "./components/useReveal";
import { SiteProvider, useSite } from "./store/SiteContext";
import AdminApp from "./admin/AdminApp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CertificationsPage from "./pages/CertificationsPage";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import ContactPage from "./pages/ContactPage";
import QuotePage from "./pages/QuotePage";
import PrivacyPage from "./pages/PrivacyPage";
import "./styles/notFound.css";

// ==========================================================================
// APP — layout + hash route matching.
// Routes:  #/  #/about  #/products  #/products/:slug
//          #/certifications  #/articles  #/contact  #/quote  #/privacy
// ==========================================================================

function NotFound() {
  return (
    <section className="not-found section-pad">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/products" className="btn btn-dark-outline">
            Browse Products
          </Link>
        </div>
      </div>
    </section>
  );
}

function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
}

function renderRoute(path) {
  if (path === "/") return <HomePage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/products") return <ProductsPage />;
  if (path.startsWith("/products/")) {
    return <ProductDetailPage slug={path.slice("/products/".length)} />;
  }
  if (path === "/certifications") return <CertificationsPage />;
  if (path === "/articles") return <ArticlesPage />;
  if (path.startsWith("/articles/")) {
    return <ArticleDetailPage slug={path.slice("/articles/".length)} />;
  }
  if (path === "/contact") return <ContactPage />;
  if (path === "/quote") return <QuotePage />;
  if (path === "/privacy") return <PrivacyPage />;
  return <NotFound />;
}

function Website() {
  const path = useRoute();
  useScrollTop(path);
  useReveal(path);
  const { settings } = useSite();

  // dynamic SEO from Admin Panel > Website Settings
  useEffect(() => {
    if (settings?.seo?.title) document.title = settings.seo.title;
    if (settings?.seo?.description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.name = "description";
        document.head.appendChild(tag);
      }
      tag.content = settings.seo.description;
    }
  }, [settings?.seo?.title, settings?.seo?.description]);

  // redirect legacy hash anchors such as #contact / #products to the pages
  useEffect(() => {
    const legacy = {
      "#about": "/about",
      "#products": "/products",
      "#contact": "/contact",
      "#why-us": "/about",
      "#quote": "/quote",
    };
    const hash = window.location.hash;
    if (legacy[hash] && legacy[hash] !== path) {
      navigate(legacy[hash]);
    }
  }, [path]);

  return (
    <>
      <ScrollProgress />
      <Header />
      <main id="main">{renderRoute(path)}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  const path = useRoute();

  // Admin Panel — #/admin (password protected)
  if (path.startsWith("/admin")) {
    return (
      <SiteProvider>
        <AdminApp />
      </SiteProvider>
    );
  }

  return (
    <SiteProvider>
      <Website />
    </SiteProvider>
  );
}

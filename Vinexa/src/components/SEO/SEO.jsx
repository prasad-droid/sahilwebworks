import { useEffect } from "react";
import { site } from "../../data/siteConfig";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  if (content) el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  if (href) el.setAttribute("href", href);
}

function removeJsonLd() {
  const scripts = document.head.querySelectorAll('script[data-seo-json="true"]');
  scripts.forEach((s) => s.remove());
}

function injectJsonLd(data) {
  removeJsonLd();
  if (!data) return;
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.dataset.seoJson = "true";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

export default function SEO({
  title,
  description,
  path = "",
  keywords = "",
  ogImage = "",
  robots = "",
  jsonLd = null,
  breadcrumbs = null,
}) {
  useEffect(() => {
    const fullTitle = title || site.description;
    const fullDesc = description || site.description;
    const fullUrl = `${site.url}${path.replace(/^\//, "")}`;
    const fullOgImage = ogImage || `${site.url}og-cover.svg`;

    document.title = fullTitle;
    upsertMeta("name", "description", fullDesc);

    if (robots) {
      upsertMeta("name", "robots", robots);
    } else {
      const el = document.head.querySelector('meta[name="robots"]');
      if (el) el.remove();
    }

    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    // Open Graph
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", site.name);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", fullDesc);
    upsertMeta("property", "og:url", fullUrl);
    upsertMeta("property", "og:image", fullOgImage);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:image:alt", title || site.name);

    // Twitter Card
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", fullDesc);
    upsertMeta("name", "twitter:image", fullOgImage);
    upsertMeta("name", "twitter:image:alt", title || site.name);

    // Canonical
    upsertLink("canonical", fullUrl);

    // Hreflang
    upsertLink("alternate", fullUrl);
    let hreflangEl = document.head.querySelector('link[hreflang="en"]');
    if (!hreflangEl) {
      hreflangEl = document.createElement("link");
      hreflangEl.setAttribute("rel", "alternate");
      hreflangEl.setAttribute("hreflang", "en");
      document.head.appendChild(hreflangEl);
    }
    hreflangEl.setAttribute("href", fullUrl);

    // JSON-LD: Breadcrumbs
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      };
      injectJsonLd(breadcrumbLd);
    }

    // JSON-LD: Custom
    if (jsonLd) {
      injectJsonLd(jsonLd);
    }

    return () => {
      removeJsonLd();
    };
  }, [title, description, path, keywords, ogImage, robots, jsonLd, breadcrumbs]);

  return null;
}

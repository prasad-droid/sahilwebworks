import { useEffect } from 'react';
import { SEO, organisationJsonLd, websiteJsonLd } from '../data/seo.js';
import { BUSINESS_NAME, PHONE_DISPLAY, EMAIL, ADDRESS, whatsappLink } from '../data/business.js';

function upsertMeta(selector, attrs) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Keeps document metadata in sync for a single-page app.
 * index.html already contains the build-time tags; this keeps them accurate as
 * the visitor moves between sections, and (re)injects JSON-LD once per page.
 */
export function useSeo() {
  useEffect(() => {
    document.title = SEO.title;

    upsertMeta('meta[name="description"]', { name: 'description', content: SEO.description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: SEO.keywords.join(', ') });
    upsertMeta('meta[name="author"]', { name: 'author', content: BUSINESS_NAME });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: SEO.themeColor });

    const og = {
      'og:site_name': BUSINESS_NAME,
      'og:type': SEO.ogType,
      'og:locale': SEO.locale,
      'og:title': SEO.title,
      'og:description': SEO.description,
      'og:url': SEO.canonical,
      'og:image': `${SEO.canonical}${SEO.ogImage}`,
      'og:image:alt': SEO.ogImageAlt,
    };
    Object.entries(og).forEach(([property, content]) =>
      upsertMeta(`meta[property="${property}"]`, { property, content })
    );

    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: SEO.twitterCard });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: SEO.title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: SEO.description,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: `${SEO.canonical}${SEO.ogImage}`,
    });

    upsertLink('canonical', SEO.canonical);

    /* ---------------- structured data ---------------- */
    if (!document.getElementById('ld-json')) {
      const graph = {
        '@context': 'https://schema.org',
        '@graph': [organisationJsonLd(), websiteJsonLd()],
      };
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'ld-json';
      script.textContent = JSON.stringify(graph);
      document.head.appendChild(script);
    }
  }, []);
}

/** Builds a contact-point schema fragment for the contact section. */
export const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_NAME,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
    postalCode: ADDRESS.postcode,
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: PHONE_DISPLAY,
    email: EMAIL,
    areaServed: 'Worldwide',
    url: whatsappLink(),
  },
};

export default useSeo;

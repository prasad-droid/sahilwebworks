import {
  BUSINESS_NAME,
  TAGLINE,
  ADDRESS,
  PHONE_DISPLAY,
  EMAIL,
} from './business.js';

/**
 * Central SEO configuration. Consumed by:
 *   - index.html            (static tags, rendered at build time)
 *   - src/hooks/useSeo.js   (document.title + tags at runtime)
 */
export const SEO = {
  title: 'Aarambh Worldtrade | Indian Agricultural & Food Products Exporter',
  titleTemplate: '%s | Aarambh WORLDTRADE',
  description:
    'AARAMBH WORLDTRADE is an Indian merchant exporter supplying agricultural and food products including onion powder, moringa powder, tomato powder, ginger powder, spices, rice and raisins for global B2B buyers.',
  keywords: [
    'indian agricultural products exporter',
    'dehydrated onion powder supplier',
    'moringa powder exporter',
    'tomato powder bulk supplier',
    'ginger powder export',
    'beetroot powder bulk',
    'banana powder supplier',
    'indian spices exporter',
    'basmati rice export',
    'indian raisins supplier',
    'merchant exporter India',
    'bulk spice supplier B2B',
    'food ingredients exporter India',
    'agricultural products wholesale India',
    'spice trader India',
  ],
  locale: 'en_IN',
  lang: 'en',
  themeColor: '#1f4d35',
  ogType: 'website',
  ogImage: '/images/stock/hero-spices.jpg',
  ogImageAlt: 'Indian spices representing the AARAMBH WORLDTRADE product range',
  twitterCard: 'summary_large_image',
  /** Canonical URL. Set this to the live domain before going live. */
  canonical: 'https://www.aarambhworldtrade.com/',
  organisation: {
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    tagline: TAGLINE,
    email: EMAIL,
    phone: PHONE_DISPLAY,
    address: {
      streetAddress: `${ADDRESS.line1}, ${ADDRESS.line2}`,
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: ADDRESS.postcode,
      addressCountry: 'IN',
    },
    areaServed: 'Worldwide',
    knowsAbout: [
      'Dehydrated Onion Powder',
      'Moringa Powder',
      'Tomato Powder',
      'Ginger Powder',
      'Beetroot Powder',
      'Banana Powder',
      'Spices',
      'Rice',
      'Raisins',
    ],
  },
};

/** JSON-LD graph. Only facts taken from the supplied business information. */
export function organisationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SEO.canonical}#organization`,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    slogan: TAGLINE,
    description: SEO.description,
    url: SEO.canonical,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO.canonical}images/business/logo.png`,
      width: 512,
      height: 512,
    },
    image: `${SEO.canonical}${SEO.ogImage}`,
    email: EMAIL,
    telephone: PHONE_DISPLAY,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ADDRESS.line1,
      addressLocality: 'Nashik',
      addressRegion: 'Maharashtra',
      postalCode: ADDRESS.postcode,
      addressCountry: 'IN',
    },
    areaServed: { '@type': 'Place', name: 'Worldwide' },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: PHONE_DISPLAY,
        contactType: 'sales',
        email: EMAIL,
        availableLanguage: ['English'],
        areaServed: 'Worldwide',
      },
    ],
    knowsAbout: SEO.organisation.knowsAbout,
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO.canonical}#website`,
    url: SEO.canonical,
    name: BUSINESS_NAME,
    inLanguage: SEO.locale,
    publisher: { '@id': `${SEO.canonical}#organization` },
  };
}

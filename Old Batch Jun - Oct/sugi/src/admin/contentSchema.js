// ==========================================================================
// WEBSITE CONTENT — ADMIN SCHEMA
// --------------------------------------------------------------------------
// Describes the accordion groups and fields shown in
// Admin Panel > Website Content. Each field maps to a dotted path inside
// the site content object (src/content/defaults.js).
//
// Field types:
//   text | textarea | image | paragraphs (list of paragraphs)
//   strings (list of plain text lines) | list (repeatable object cards)
//   list item fields also accept `lines` (array of single-line strings)
// ==========================================================================

const text = (path, label, extra = {}) => ({ type: "text", path, label, ...extra });
const area = (path, label, rows = 3, extra = {}) => ({
  type: "textarea",
  path,
  label,
  rows,
  ...extra,
});
const image = (path, label, extra = {}) => ({ type: "image", path, label, ...extra });
const paragraphs = (path, label, rows = 5, extra = {}) => ({
  type: "paragraphs",
  path,
  label,
  rows,
  ...extra,
});
const strings = (path, label, extra = {}) => ({ type: "strings", path, label, ...extra });
const list = (path, label, itemFields, extra = {}) => ({
  type: "list",
  path,
  label,
  itemFields,
  ...extra,
});

const SECTION_HEADING = (base, noun = "section") => [
  text(`${base}.eyebrow`, `${noun} eyebrow`),
  text(`${base}.title`, `${noun} heading`),
];

export const CONTENT_GROUPS = [
  // ------------------------------------------------------------------ HOME
  {
    id: "home-intro",
    label: "Home — Intro headline",
    description: "Headline and paragraph directly below the hero slider.",
    fields: [
      text("homeIntro.title", "Main heading"),
      text("homeIntro.titleAccent", "Heading highlight", {
        hint: "Shown in italic after the main heading.",
      }),
      area("homeIntro.text", "Paragraph", 3, { wide: true }),
      text("homeIntro.primaryLabel", "Primary button label"),
      text("homeIntro.secondaryLabel", "Secondary button label"),
    ],
  },
  {
    id: "home-about",
    label: "Home — About Us section",
    description: "The welcome block below the intro.",
    fields: [
      ...SECTION_HEADING("about", "Section"),
      image("about.image", "Image"),
      text("about.badgeTop", "Image badge — top line"),
      text("about.badgeBottom", "Image badge — bottom line"),
      text("about.ctaLabel", "Button label"),
      paragraphs("about.paragraphs", "Paragraphs", 8, {
        wide: true,
        hint: "Separate paragraphs with a blank line. Leave empty to keep the current text.",
      }),
    ],
  },
  {
    id: "home-products-indian",
    label: "Home — Products (Indian Origin)",
    fields: [
      ...SECTION_HEADING("home.productsIndian", "Section"),
      area("home.productsIndian.intro", "Intro text", 2, { wide: true }),
    ],
  },
  {
    id: "home-products-imported",
    label: "Home — Products (Imported)",
    fields: [
      ...SECTION_HEADING("home.productsImported", "Section"),
      area("home.productsImported.intro", "Intro text", 2, { wide: true }),
    ],
  },
  {
    id: "home-services",
    label: "Home — Services",
    fields: [
      ...SECTION_HEADING("home.services", "Section"),
      area("home.services.intro", "Intro text", 2, { wide: true }),
    ],
  },
  {
    id: "home-categories",
    label: "Home — Categories",
    fields: [
      ...SECTION_HEADING("home.categories", "Section"),
      area("home.categories.intro", "Intro text", 2, { wide: true }),
    ],
  },
  {
    id: "home-gallery",
    label: "Home — Gallery",
    fields: [
      ...SECTION_HEADING("home.gallery", "Section"),
      area("home.gallery.intro", "Intro text", 2, { wide: true }),
    ],
  },
  {
    id: "home-why",
    label: "Home — Why Choose Us",
    fields: [
      ...SECTION_HEADING("home.whyChooseUs", "Section"),
      list(
        "home.whyChooseUs.items",
        "Reasons",
        [
          { key: "title", label: "Title", type: "text" },
          { key: "text", label: "Description", type: "textarea", rows: 2 },
        ],
        { itemLabel: "Reason" }
      ),
    ],
  },
  {
    id: "home-process",
    label: "Home — Export Process",
    fields: [
      ...SECTION_HEADING("home.exportProcess", "Section"),
      list(
        "home.exportProcess.steps",
        "Steps",
        [
          { key: "num", label: "Number", type: "text", hint: "Leave blank to number automatically." },
          { key: "title", label: "Title", type: "text" },
          { key: "text", label: "Description", type: "textarea", rows: 2 },
        ],
        { itemLabel: "Step" }
      ),
    ],
  },
  {
    id: "home-map",
    label: "Home — Export Map",
    description: "Heading, copy and the countries plotted on the world map.",
    fields: [
      ...SECTION_HEADING("home.exportMap", "Section"),
      area("home.exportMap.intro", "Intro text", 2, { wide: true }),
      text("home.exportMap.footNote", "Closing note", { wide: true }),
      list(
        "home.exportMap.destinations",
        "Destinations",
        [
          { key: "name", label: "Country", type: "text" },
          { key: "lon", label: "Longitude", type: "text", hint: "e.g. 54.37" },
          { key: "lat", label: "Latitude", type: "text", hint: "e.g. 24.47" },
        ],
        {
          itemLabel: "Country",
          hint: "Coordinates place the marker on the map. New countries need both values.",
        }
      ),
    ],
  },
  {
    id: "home-commitment",
    label: "Home — Our Commitment",
    fields: [
      ...SECTION_HEADING("home.commitment", "Section"),
      area("home.commitment.text", "Text", 3, { wide: true }),
    ],
  },
  {
    id: "home-testimonials",
    label: "Home — Customer Reviews",
    fields: [
      ...SECTION_HEADING("home.testimonials", "Section"),
    ],
  },
  {
    id: "home-offers",
    label: "Home — Offers & Promotions",
    fields: [
      ...SECTION_HEADING("home.offers", "Section"),
    ],
  },
  {
    id: "home-blog",
    label: "Home — Blog & News",
    fields: [
      ...SECTION_HEADING("home.blog", "Section"),
    ],
  },
  {
    id: "home-certifications",
    label: "Home — Certifications strip",
    fields: [
      ...SECTION_HEADING("home.certifications", "Section"),
    ],
  },
  {
    id: "home-quote-cta",
    label: "Home — Get a Quote CTA",
    description: "Full-width call-to-action used on the homepage and inner pages.",
    fields: [
      ...SECTION_HEADING("quoteCta", "Section"),
      area("quoteCta.text", "Text", 2, { wide: true }),
      text("quoteCta.primaryLabel", "Primary button label"),
      text("quoteCta.secondaryLabel", "Secondary button label"),
    ],
  },
  {
    id: "cert-logos",
    label: "Home — Certification logos",
    description:
      "Logos shown in the homepage strip only. The Certifications page has its own document list below.",
    fields: [
      list(
        "certifications.items",
        "Certifications",
        [
          { key: "name", label: "Name", type: "text" },
          { key: "description", label: "Description", type: "textarea", rows: 2 },
          { key: "image", label: "Logo", type: "image" },
        ],
        { itemLabel: "Certification" }
      ),
    ],
  },
  {
    id: "sections",
    label: "Homepage — section switches",
    description: "Turn homepage sections on or off. Hidden sections disappear after saving.",
    kind: "sections",
    fields: [],
  },

  // ----------------------------------------------------------------- PAGES
  {
    id: "about-hero-intro",
    label: "About Page — hero & intro",
    fields: [
      ...SECTION_HEADING("pages.about.hero", "Hero"),
      area("pages.about.hero.intro", "Hero intro", 3, { wide: true }),
      image("pages.about.intro.image", "Intro image"),
      paragraphs("pages.about.intro.paragraphs", "Intro paragraphs", 8, {
        wide: true,
        hint: "Separate paragraphs with a blank line.",
      }),
    ],
  },
  {
    id: "about-range",
    label: "About Page — products we export",
    fields: [
      text("pages.about.range.title", "Heading", { wide: true }),
      strings("pages.about.range.items", "Legacy product list", {
        itemLabel: "Product",
        hint: "Only used when the category groups below are empty.",
      }),
      list(
        "pages.about.range.groups",
        "Product category groups",
        [
          { key: "title", label: "Category title", type: "text" },
          {
            key: "items",
            label: "Category points",
            type: "lines",
            rows: 5,
            hint: "One point per line, shown as a bullet on the About page.",
          },
        ],
        {
          itemLabel: "Group",
          hint: "Example: Indian origin / Imported Products.",
        }
      ),
      paragraphs("pages.about.range.notes", "Closing paragraphs", 5, {
        wide: true,
      }),
    ],
  },
  {
    id: "about-vision",
    label: "About Page — vision",
    fields: [
      ...SECTION_HEADING("pages.about.vision", "Section"),
      paragraphs("pages.about.vision.paragraphs", "Paragraphs", 6, { wide: true }),
    ],
  },
  {
    id: "about-mission",
    label: "About Page — mission",
    fields: [
      ...SECTION_HEADING("pages.about.mission", "Section"),
      paragraphs("pages.about.mission.paragraphs", "Intro paragraphs", 5, {
        wide: true,
      }),
      text("pages.about.mission.commitmentLabel", "Commitment label", { wide: true }),
      strings("pages.about.mission.items", "Commitments", { itemLabel: "Commitment" }),
    ],
  },
  {
    id: "about-why",
    label: "About Page — why choose us",
    fields: [
      ...SECTION_HEADING("pages.about.why", "Section"),
      strings("pages.about.why.items", "Reasons", { itemLabel: "Reason" }),
      area("pages.about.why.closing", "Closing paragraph", 3, { wide: true }),
    ],
  },
  {
    id: "products-page",
    label: "Products Page",
    fields: [
      ...SECTION_HEADING("pages.products.hero", "Hero"),
      area("pages.products.hero.intro", "Hero intro", 3, { wide: true }),
      ...SECTION_HEADING("pages.products.indian", "Indian origin"),
      area("pages.products.indian.intro", "Indian origin intro", 2, { wide: true }),
      ...SECTION_HEADING("pages.products.imported", "Imported"),
      area("pages.products.imported.intro", "Imported intro", 2, { wide: true }),
      ...SECTION_HEADING("pages.products.packaging", "Packaging"),
      area("pages.products.packaging.intro", "Packaging intro", 2, { wide: true }),
      strings("pages.products.packaging.items", "Packaging options", {
        itemLabel: "Option",
      }),
      ...SECTION_HEADING("pages.products.quality", "Quality"),
      area("pages.products.quality.text", "Quality text", 3, { wide: true }),
      strings("pages.products.quality.items", "Quality steps", { itemLabel: "Step" }),
      text("pages.products.quality.ctaLabel", "Catalogue button label"),
    ],
  },
  {
    id: "certifications-page",
    label: "Certifications Page",
    fields: [
      ...SECTION_HEADING("pages.certifications.hero", "Hero"),
      area("pages.certifications.hero.intro", "Hero intro", 3, { wide: true }),
      area("pages.certifications.intro", "Intro paragraph", 4, { wide: true }),
      text("pages.certifications.downloadLabel", "Default download button label"),
      list(
        "pages.certifications.documents",
        "Certificate / licence documents",
        [
          { key: "name", label: "Document heading", type: "text" },
          {
            key: "description",
            label: "Text below heading",
            type: "textarea",
            rows: 2,
          },
          {
            key: "image",
            label: "A4 document image",
            type: "image",
            hint: "Upload a photo or scan of the full A4 certificate / licence / registration.",
          },
          {
            key: "file",
            label: "Download file path",
            type: "text",
            hint: "e.g. certificates/fssai.pdf (relative to /public).",
          },
          { key: "downloadName", label: "Downloaded file name", type: "text" },
          {
            key: "downloadLabel",
            label: "Download button label",
            type: "text",
            hint: "Leave blank to use the default label above.",
          },
        ],
        {
          itemLabel: "Document",
          hint: "These documents are shown only on the Certifications page.",
        }
      ),
      text("pages.certifications.quality.title", "Quality card heading"),
      text("pages.certifications.quality.lead", "Quality card lead line", { wide: true }),
      strings("pages.certifications.quality.items", "Quality checks", {
        itemLabel: "Check",
      }),
      area("pages.certifications.quality.text", "Quality card closing text", 3, {
        wide: true,
      }),
      text("pages.certifications.safety.title", "Food safety card heading"),
      paragraphs("pages.certifications.safety.paragraphs", "Food safety paragraphs", 5, {
        wide: true,
      }),
    ],
  },
  {
    id: "articles-page",
    label: "Articles Page",
    fields: [
      ...SECTION_HEADING("pages.articles.hero", "Hero"),
      area("pages.articles.hero.intro", "Hero intro", 3, { wide: true }),
      text("pages.articles.notice.title", "Notice heading"),
      area("pages.articles.notice.text", "Notice text", 3, { wide: true }),
      text("pages.articles.notice.primaryLabel", "Primary button label"),
      text("pages.articles.notice.primaryHref", "Primary button link", {
        hint: "Use /contact for an internal page or a full URL.",
      }),
      text("pages.articles.notice.secondaryLabel", "Secondary button label"),
      text("pages.articles.notice.secondaryHref", "Secondary button link"),
      text("pages.articles.notice.topicsTitle", "Bundled topics heading"),
      text("pages.articles.notice.latestTitle", "Published posts heading"),
      text("pages.articles.notice.readLabel", "Article card button label"),
      text("pages.articles.detail.backLabel", "Article back link label"),
      text("pages.articles.detail.ctaEyebrow", "Article CTA eyebrow"),
      text("pages.articles.detail.ctaTitle", "Article CTA heading"),
      area("pages.articles.detail.ctaText", "Article CTA text", 2, { wide: true }),
      text("pages.articles.detail.ctaPrimaryLabel", "Article CTA primary button"),
      text("pages.articles.detail.ctaSecondaryLabel", "Article CTA secondary button"),
      text("pages.articles.detail.relatedTitle", "Related articles heading"),
      text("pages.articles.detail.relatedAllLabel", "View-all button label"),
      text("pages.articles.detail.notFoundEyebrow", "Not-found eyebrow"),
      text("pages.articles.detail.notFoundTitle", "Not-found heading"),
      area("pages.articles.detail.notFoundText", "Not-found text", 2, { wide: true }),
      text("pages.articles.detail.notFoundBackLabel", "Not-found button label"),
    ],
  },
  {
    id: "contact-page",
    label: "Contact Page",
    description: "Phone, email, WhatsApp and social links are edited under Contact & Social Media.",
    fields: [
      ...SECTION_HEADING("pages.contact.hero", "Hero"),
      area("pages.contact.hero.intro", "Hero intro", 3, { wide: true }),
      ...SECTION_HEADING("pages.contact.form", "Form"),
      area("pages.contact.form.text", "Form intro", 2, { wide: true }),
      ...SECTION_HEADING("pages.contact.why", "Why contact us"),
      list(
        "pages.contact.why.items",
        "Reasons",
        [
          { key: "title", label: "Title", type: "text" },
          { key: "text", label: "Description", type: "textarea", rows: 2 },
        ],
        { itemLabel: "Reason" }
      ),
      ...SECTION_HEADING("pages.contact.partner", "Partner CTA"),
      area("pages.contact.partner.text", "Partner text", 3, { wide: true }),
      text("pages.contact.partner.primaryLabel", "Primary button label"),
      text("pages.contact.partner.secondaryLabel", "Secondary button label"),
    ],
  },
  {
    id: "quote-page",
    label: "Quote Page",
    fields: [
      ...SECTION_HEADING("pages.quote.hero", "Hero"),
      area("pages.quote.hero.intro", "Hero intro", 3, { wide: true }),
      ...SECTION_HEADING("pages.quote.form", "Form"),
      area("pages.quote.form.text", "Form intro", 2, { wide: true }),
      text("pages.quote.panel.title", "Helpful-to-include heading"),
      strings("pages.quote.panel.items", "Helpful-to-include points", {
        itemLabel: "Point",
      }),
      text("pages.quote.panel.contactTitle", "Contact panel heading"),
    ],
  },
  {
    id: "privacy-page",
    label: "Privacy Page",
    description:
      "Use {company} and {email} in the text to insert the current company name and email.",
    fields: [
      ...SECTION_HEADING("pages.privacy.hero", "Hero"),
      area("pages.privacy.hero.intro", "Hero intro", 3, { wide: true }),
      text("pages.privacy.tocTitle", "Contents heading"),
      list(
        "pages.privacy.sections",
        "Policy sections",
        [
          { key: "title", label: "Section title", type: "text" },
          { key: "paragraphs", label: "Paragraphs", type: "paragraphs", rows: 5 },
        ],
        { itemLabel: "Section" }
      ),
    ],
  },

  // -------------------------------------------------------- HEADER & FOOTER
  {
    id: "header",
    label: "Header & Navigation",
    fields: [
      image("header.logo", "Logo"),
      text("header.ctaLabel", "Header button label"),
      text("header.ctaHref", "Header button link", {
        hint: "Use /quote for the quotation form.",
      }),
      list(
        "header.nav",
        "Menu links",
        [
          { key: "label", label: "Label", type: "text" },
          { key: "to", label: "Link", type: "text", hint: "e.g. /about" },
        ],
        { itemLabel: "Link" }
      ),
    ],
  },
  {
    id: "footer",
    label: "Footer",
    fields: [
      text("footer.brandSub", "Brand sub-line"),
      text("footer.copyright", "Copyright line", {
        hint: "Use {year} and {company} placeholders.",
        wide: true,
      }),
      area("footer.description", "About paragraph", 3, { wide: true }),
      text("footer.navigationHeading", "Navigation heading"),
      text("footer.contactHeading", "Contact heading"),
      text("footer.findUsHeading", "Map heading"),
      text("footer.privacyLabel", "Privacy link label"),
    ],
  },
];

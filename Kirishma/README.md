# Krishima Foods Pvt Ltd — Single-Page Website

A premium, warm, single-page React website for **Krishima Foods Pvt Ltd**, a food
products manufacturing company in Solapur, Maharashtra.

> **Nourished by tradition, homemade for you**

Built with **100% custom CSS** — no Tailwind, Bootstrap, Material UI, Chakra,
Bulma, Foundation, UI kits or template CSS. The only runtime dependencies are
`react` and `react-dom`.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # serve the production build
npm run lint       # eslint
```

---

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx              sticky nav, active section, mobile menu
│   ├── Hero.jsx                hero + value strip
│   ├── ProductHighlights.jsx   quick-glance product category band
│   ├── About.jsx               split-layout about
│   ├── Products.jsx            product portfolio shell
│   ├── ProductCategory.jsx     one product family
│   ├── ProductCard.jsx         reusable product card
│   ├── ProductDetailModal.jsx  accessible product modal
│   ├── MakingProcess.jsx       5-step process timeline
│   ├── TraditionSection.jsx    editorial "everyday life" section
│   ├── Packaging.jsx           pack size visualisation
│   ├── WhyChooseUs.jsx         feature grid
│   ├── AudienceSection.jsx     target audience cards
│   ├── Testimonials.jsx        hidden until real reviews exist
│   ├── Gallery.jsx             grid + lightbox
│   ├── Contact.jsx             details + enquiry form
│   ├── Footer.jsx              footer
│   ├── WhatsAppButton.jsx      floating WhatsApp button
│   ├── SectionHeading.jsx      shared label/heading block
│   ├── FeatureIcon.jsx         inline SVG icons
│   └── SmartImage.jsx          image with on-brand fallback
├── data/
│   ├── products.js     ← START HERE to add / edit products
│   ├── site.js         business details, nav links, WhatsApp helpers
│   ├── content.js      all section copy
│   ├── gallery.js      gallery images
│   └── testimonials.js empty until real testimonials are supplied
├── hooks/
│   ├── useReveal.js          scroll reveal with scroll fallback
│   ├── useScrollSpy.js       active navbar section
│   ├── useLockBodyScroll.js  modal / menu scroll lock
│   └── useMediaQuery.js      responsive behaviour
├── styles/                    12 custom CSS files, one per area
├── App.jsx                    composes the page (no logic bloat)
└── main.jsx
```

---

## Editing the products

**Everything about a product lives in `src/data/products.js`.** No component
hardcodes a product name, pack size or description.

To change something, edit the object:

```js
{
  id: 'kala-masala',
  category: 'Masala',
  categoryId: 'masala',
  name: 'Kala Masala',
  description: 'Fried Kanda Lasun',
  longDescription: 'Optional longer copy for the modal.',
  packaging: ['200 g', '500 g'],
  image: '/images/kala-masala.jpg',
  imageAlt: 'Describe the photo for screen readers and SEO',
  specs: [{ label: 'Category', value: 'Masala' }],
}
```

| Task | Where |
| --- | --- |
| Add a product | Append to `products` in `src/data/products.js` |
| Remove a product | Delete the object |
| Change pack sizes | Edit `packaging` |
| Change a photo | Point `image` at a file in `/public/images` |
| Add a new category | Add to `categories` and set `categoryId` on the products |
| Add specifications | Add entries to `specs` (optional block, hidden when empty) |
| Add testimonials | Fill in `src/data/testimonials.js` — the section appears automatically |
| Change copy | `src/data/content.js` |
| Change contact details | `src/data/site.js` |

The enquiry form's product dropdown, the pack size list and the WhatsApp
product messages are all generated from this data automatically.

---

## Images

All images live in `public/images/` and are referenced by path.

```
public/images/
├── logo.png                  the supplied Krishima Foods logo
├── hero-main.jpg             hero photograph
├── about-main.jpg
├── <product>.jpg             one image per product
└── gallery/                  gallery images
```

**These are stock photographs of traditional Indian food and ingredients, used
as category and visual inspiration only — they are not photographs of actual
Krishima Foods products.** The sections that use them say so on the page. When
real product photography becomes available, replace the files (keep the same
file name) or update `image` in `src/data/products.js`.

If an image is missing, `SmartImage` renders a warm branded tile with the
product label instead of a broken image, so the layout never breaks.

---

## Images supplied but not used as-is

The brief supplied a logo and a product photo via Google Drive links. The logo
in the folder (`logo.png`) is used directly. Drive links cannot be embedded
reliably in a site, so drop the real product photos into
`public/images/` and point the relevant `image` fields at them.

---

## Content accuracy

Only information supplied by Krishima Foods Pvt Ltd is stated as fact. The
site deliberately makes **no** claims about:

- certifications, awards or years of experience
- health, medical or nutritional benefits
- ingredients that were not supplied
- machinery, factory capability or production capacity
- customer reviews, names or testimonials

Missing information is omitted or phrased neutrally ("Details available on
request"). The Testimonials section stays hidden until real testimonials are
added.

---

## Contact form

There is no backend connected. Submitting the form composes the enquiry and
opens WhatsApp with the message pre-filled, then says so plainly — it never
claims to have sent an email. To connect a backend, replace the marked block
in `src/components/Contact.jsx` with a `fetch` to your endpoint.

---

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `article`, `footer`)
- One `h1`, validated `h2`/`h3`/`h4` hierarchy
- Skip-to-content link
- Visible focus states, keyboard-operable menu, modal and lightbox
  (Escape closes, focus is trapped in the modal and restored on close)
- Descriptive `alt` text on every image, labels on every form field
- `prefers-reduced-motion` support in `src/styles/global.css`
- `aria-live` status region on the enquiry form

## Responsive support

Verified with no horizontal scrolling and no touch target under 32px at
320, 375, 414, 768, 1024, 1280, 1440 and 1920 px.

Product grid: 1 column (mobile) → 2 (tablet) → 3 (laptop) → 4 (desktop).

## SEO

Title, meta description, keywords, canonical, Open Graph, Twitter card and
Organization JSON-LD are in `index.html`. Update them alongside
`src/data/site.js` if the business details change.

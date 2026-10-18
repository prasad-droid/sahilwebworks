# GLOBAL ENTERPRISES — Website

**Engineering Excellence, Globally Delivered.**

A premium, responsive, single-page React website for GLOBAL ENTERPRISES, a supplier of
engineering goods and industrial products. Built with React (functional components) and
plain custom CSS — no CSS frameworks.

---

## 1. Getting started

Requirements: **Node.js 18+** and npm.

```bash
# Install dependencies
npm install

# Start the development server (opens http://localhost:5173)
npm run dev

# Create an optimized production build in /dist
npm run build

# Preview the production build locally
npm run preview

# Run ESLint
npm run lint
```

---

## 2. Project structure

```text
global enterprises/
├── index.html                # HTML shell, SEO + Open Graph meta, fonts, structured data
├── package.json
├── vite.config.js
├── .eslintrc.cjs
├── .env.example              # Enquiry form endpoint configuration
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Assembles all sections + back-to-top button
    ├── data/
    │   └── siteData.js       # ⭐ Single source of truth for editable content
    ├── hooks/
    │   └── useReveal.js      # Scroll reveal, scroll-spy, media query hooks
    ├── utils/
    │   └── enquiry.js        # Pub/sub used to pre-fill the enquiry form
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Hero.jsx
    │   ├── AboutUs.jsx
    │   ├── ProductCategories.jsx
    │   ├── FeaturedProducts.jsx
    │   ├── WhyChooseUs.jsx
    │   ├── IndustriesServed.jsx
    │   ├── GlobalReach.jsx
    │   ├── OurValues.jsx
    │   ├── Testimonials.jsx
    │   ├── EnquiryForm.jsx
    │   ├── ContactUs.jsx
    │   ├── Footer.jsx
    │   └── Icons.jsx         # Dependency-free SVG line icon set
    └── styles/
        ├── global.css        # Design system: colors, type, buttons, animations
        ├── Navbar.css
        ├── Hero.css
        ├── AboutUs.css
        ├── ProductCategories.css
        ├── FeaturedProducts.css
        ├── WhyChooseUs.css
        ├── IndustriesServed.css
        ├── GlobalReach.css
        ├── OurValues.css
        ├── Testimonials.css
        ├── EnquiryForm.css
        ├── ContactUs.css
        └── Footer.css
```

---

## 3. Updating content (no redesign needed)

Almost everything editable lives in **`src/data/siteData.js`**. Edit that one file to update:

| What you want to change | Where in `siteData.js` |
| --- | --- |
| Company name, tagline, email, phone, WhatsApp, address | `company` |
| Navigation items | `navLinks` |
| Product categories (name, image, description) | `productCategories` |
| Featured products (name, category, image, description, specs) | `featuredProducts` |
| "Why Choose Us" cards | `whyChooseUs` |
| Industries served | `industriesServed` |
| Company values | `ourValues` |
| Testimonials (or hide the section) | `testimonials` (`enabled: false` hides it) |
| About Us paragraphs, vision, mission | `aboutContent` |

Items flagged with `isPlaceholder: true` are demo content and are visually labelled on the page.
Replace them with the final approved information before going live.

> **Important:** Do not publish invented company history, certifications, client names,
> testimonials, export destinations or product specifications. All such content is currently
> marked as a placeholder.

### Adding real product categories / products

Add entries to the `productCategories` and `featuredProducts` arrays — the grids, cards and
product detail modal update automatically. No component changes are required.

---

## 4. Enquiry form configuration

The enquiry form validates required fields and email format on the client. It only shows a
success message when the submission is **actually accepted** by a configured service.

1. Copy `.env.example` to `.env`.
2. Set `VITE_ENQUIRY_ENDPOINT` to a URL that accepts a JSON `POST` request:

   ```env
   VITE_ENQUIRY_ENDPOINT=https://your-form-service.example/submit
   ```

3. Restart the dev server after changing the value.

If no endpoint is configured, the form clearly tells the visitor that it is not yet connected
and directs them to email, phone or WhatsApp instead of showing a false success message.

---

## 5. Placeholder assets

Two Google Drive assets referenced during the brief were **login-protected and could not be
accessed**, so this build uses high-quality stock photography:

- **Drive asset 1:** `https://drive.google.com/open?id=1jD0qbGdilMW4pAap7pwjQidLyHBEe60M`
- **Drive asset 2:** `https://drive.google.com/open?id=1udMEMqn7ZAZh4miCSb2P28GQK5OQsQYS`

To use the real assets later, place the files in `public/` (e.g. `public/images/`) and update the
image paths in `src/data/siteData.js`, `Hero.jsx`, `AboutUs.jsx` and `IndustriesServed.jsx`. Images
use consistent aspect ratios, so replacements of a similar orientation fit without layout changes.

---

## 6. Accessibility & performance notes

- Semantic HTML landmarks, one `H1`, logical `H2`/`H3` heading order.
- Keyboard-accessible navigation, visible focus states, skip link.
- `prefers-reduced-motion` support disables animations.
- Lazy loading for below-the-fold images; hero image prioritised.
- SEO meta tags, Open Graph/Twitter cards and JSON-LD organization data in `index.html`.

---

## 7. Tech stack

React 18 · Vite 5 · plain custom CSS · zero runtime UI dependencies.

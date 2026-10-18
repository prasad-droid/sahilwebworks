# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Admin Panel

The site ships with a password-protected admin panel that manages every dynamic
module through a JSON-file database (no external services needed).

### Running it

```bash
npm install
npm run dev:server    # API on http://localhost:4000  (terminal 1)
npm run dev           # website on http://localhost:5173 (terminal 2)
```

Open **http://localhost:5173/#/admin** and sign in.

- First-run password: `sugi@2026` — **change it immediately** from
  *Settings > Security* after your first login.
- In production, run `npm run build` once, then `npm start`; the server serves
  both the built website and the API on port 4000.

### Modules

| Admin page | What it manages | Where it appears |
|---|---|---|
| Dashboard | Overview + latest enquiries | — |
| Website Content | Home intro headline, About Us text/image, Quote CTA, per-section show/hide switches | Home page |
| Products | Products (name, group, price, description, packaging, image). Use an existing catalogue **slug** (e.g. `bananas`, `cashew-kernels`) to update that product; a new slug adds a new one | Home + Products pages |
| Categories | Product/service categories | — |
| Services | Services & descriptions | — |
| Images & Gallery | Upload banners (**Homepage banner / slider** group replaces the hero slider) and gallery photos (**Gallery** group shows the Gallery section) | Home page |
| Reviews | Customer reviews & testimonials, customer photos, before/after images. Reviews are **hidden until approved** | Home page (Testimonials) |
| Offers | Promotional banners/offers with optional start/end dates | Home page (Offers) |
| Blog & News | Articles — hidden until **Published** is ticked | Home page (Blog) |
| Enquiries | Every form submission from the Quote form and Contact page, with status tracking (New / Contacted / Converted / Closed) and one-click email/call/WhatsApp reply | — |
| Orders | Order list with statuses — ready for when e-commerce is enabled | — |
| Contact & Social | Phone, WhatsApp, email, address, hours, social links (empty links are hidden) | Header, Footer, WhatsApp button |
| Settings | Site name/tagline, SEO title & description, module toggles, password change | Site-wide |

### How data is stored

- `server/db.json` — the whole database (human-readable, editable, backed up as a file)
- `server/uploads/` — images uploaded from the admin panel, served at `/uploads/…`

If the API server is not running, the website automatically falls back to the
bundled content so the static build still works — only the admin panel and
form submissions require the server.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

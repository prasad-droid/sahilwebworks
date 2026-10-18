import { useState } from "react";
import { useAdmin, useCollection } from "./adminStore";
import { changePassword } from "../api";
import { PageHead, Field, TextInput, TextArea, CheckInput, Empty } from "./ui";
import CollectionManager from "./CollectionManager";
import { INDIAN_GROUPS, IMPORTED_GROUP } from "../data/catalog";

// ==========================================================================
// DASHBOARD
// ==========================================================================

export function Dashboard({ onNavigate }) {
  const { db } = useAdmin();
  if (!db) return <div className="ad-page">Loading…</div>;

  const stats = [
    { key: "enquiries", label: "Enquiries", count: db.enquiries?.length || 0, badge: (db.enquiries || []).filter((e) => e.status === "new").length },
    { key: "products", label: "Products", count: db.products?.length || 0 },
    { key: "reviews", label: "Reviews", count: db.reviews?.length || 0 },
    { key: "media", label: "Images", count: db.media?.length || 0 },
    { key: "offers", label: "Offers", count: db.offers?.length || 0 },
    { key: "blog", label: "Blog Posts", count: db.blog?.length || 0 },
    { key: "services", label: "Services", count: db.services?.length || 0 },
    { key: "orders", label: "Orders", count: db.orders?.length || 0 },
  ];

  const recent = (db.enquiries || []).slice(0, 5);

  return (
    <div className="ad-page">
      <PageHead title="Dashboard" subtitle="Overview of your website content and customer activity" />
      <div className="ad-stats">
        {stats.map((s) => (
          <button key={s.key} className="ad-stat" onClick={() => onNavigate(s.key)}>
            <span className="ad-stat__count">{s.count}</span>
            <span className="ad-stat__label">{s.label}</span>
            {s.badge > 0 && <span className="ad-stat__badge">{s.badge} new</span>}
          </button>
        ))}
      </div>

      <h3 className="ad-section-title">Latest enquiries</h3>
      {recent.length === 0 ? (
        <Empty text="No enquiries yet. They will appear here when visitors submit the website form." />
      ) : (
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr><th>Name</th><th>Email / Phone</th><th>Requirement</th><th>Date</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recent.map((e) => (
                <tr key={e.id}>
                  <td>{e.fullName}</td>
                  <td>{e.email}<br />{e.phone}</td>
                  <td><span className="ad-cell-clamp">{e.commodity || e.message || "—"}</span></td>
                  <td>{new Date(e.date).toLocaleDateString()}</td>
                  <td><span className={`ad-pill ad-pill--${e.status}`}>{e.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

// ==========================================================================
// WEBSITE CONTENT (hero / about / portfolio heading / final CTA / sections)
// ==========================================================================

export function ContentPage() {
  const { db, saveCollection } = useAdmin();
  const [content, setContent] = useState(null);
  const ready = content || db?.content;
  if (!db || !ready) return <div className="ad-page">Loading…</div>;

  const c = content || db.content;
  const setSection = (key, patch) => setContent({ ...c, [key]: { ...c[key], ...patch } });

  const toggleSection = (id) =>
    setContent({
      ...c,
      sections: (c.sections || []).map((s) => (s.id === id ? { ...s, visible: !s.visible } : s)),
    });

  const paragraphs = (c.about?.paragraphs || []).join("\n");

  return (
    <div className="ad-page">
      <PageHead
        title="Website Content"
        subtitle="Edit the text, headings and images shown across the website"
        action={
          <button className="ad-btn ad-btn--primary" onClick={() => saveCollection("content", c)}>
            Save changes
          </button>
        }
      />

      <section className="ad-card">
        <h3 className="ad-section-title">Home Intro (headline below the slider)</h3>
        <div className="ad-form-grid">
          <Field label="Main heading"><TextInput value={c.homeIntro?.title} onChange={(v) => setSection("homeIntro", { title: v })} /></Field>
          <Field label="Heading highlight (italic part)"><TextInput value={c.homeIntro?.titleAccent} onChange={(v) => setSection("homeIntro", { titleAccent: v })} /></Field>
          <Field label="Paragraph" wide><TextArea value={c.homeIntro?.text} onChange={(v) => setSection("homeIntro", { text: v })} rows={3} /></Field>
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">About Us (homepage)</h3>
        <div className="ad-form-grid">
          <Field label="Section eyebrow"><TextInput value={c.about?.eyebrow} onChange={(v) => setSection("about", { eyebrow: v })} /></Field>
          <Field label="Section heading"><TextInput value={c.about?.title} onChange={(v) => setSection("about", { title: v })} /></Field>
          <Field label="About paragraphs" hint="One paragraph per line. Leave empty to keep the default text." wide>
            <TextArea rows={6} value={paragraphs} onChange={(v) => setSection("about", { paragraphs: v.split("\n") })} />
          </Field>
          <Field label="Image" wide>
            <div className="ad-image-input">
              {c.about?.image ? <img className="ad-image-input__preview" src={c.about.image} alt="" /> : <div className="ad-image-input__empty">No image</div>}
              <input className="ad-input ad-image-input__url" value={c.about?.image || ""} onChange={(e) => setSection("about", { image: e.target.value })} placeholder="Image URL" />
            </div>
          </Field>
          <Field label="Badge top text"><TextInput value={c.about?.badgeTop} onChange={(v) => setSection("about", { badgeTop: v })} /></Field>
          <Field label="Badge bottom text"><TextInput value={c.about?.badgeBottom} onChange={(v) => setSection("about", { badgeBottom: v })} /></Field>
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">Get a Quote CTA</h3>
        <div className="ad-form-grid">
          <Field label="Eyebrow"><TextInput value={c.quoteCta?.eyebrow} onChange={(v) => setSection("quoteCta", { eyebrow: v })} /></Field>
          <Field label="Heading" wide><TextInput value={c.quoteCta?.title} onChange={(v) => setSection("quoteCta", { title: v })} /></Field>
          <Field label="Text" wide><TextArea value={c.quoteCta?.text} onChange={(v) => setSection("quoteCta", { text: v })} rows={2} /></Field>
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">Sections on Homepage</h3>
        <p className="ad-hint">Turn sections on or off — hidden sections disappear from the website immediately after saving.</p>
        <div className="ad-sections">
          {(c.sections || []).map((s) => (
            <CheckInput key={s.id} value={s.visible} onChange={() => toggleSection(s.id)} label={s.label} />
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================================================
// CONTACT INFORMATION & SOCIAL MEDIA
// ==========================================================================

export function ContactPage() {
  const { db, saveCollection } = useAdmin();
  const [settings, setSettings] = useState(null);
  if (!db || !(settings || db.settings)) return <div className="ad-page">Loading…</div>;
  const s = settings || db.settings;

  const setContact = (k, v) => setSettings({ ...s, contact: { ...s.contact, [k]: v } });
  const setSocial = (k, v) => setSettings({ ...s, social: { ...s.social, [k]: v } });

  const socialFields = [
    ["facebook", "Facebook URL"], ["instagram", "Instagram URL"], ["linkedin", "LinkedIn URL"],
    ["youtube", "YouTube URL"], ["twitter", "X (Twitter) URL"],
  ];

  return (
    <div className="ad-page">
      <PageHead
        title="Contact & Social Media"
        subtitle="Phone, email, WhatsApp, address and social links shown across the website"
        action={
          <button className="ad-btn ad-btn--primary" onClick={() => saveCollection("settings", s)}>
            Save changes
          </button>
        }
      />
      <section className="ad-card">
        <div className="ad-form-grid">
          <Field label="Phone number"><TextInput value={s.contact?.phone} onChange={(v) => setContact("phone", v)} placeholder="+91 9405000111" /></Field>
          <Field label="WhatsApp number" hint="With country code, digits only, e.g. 919405000111"><TextInput value={s.contact?.whatsapp} onChange={(v) => setContact("whatsapp", v)} /></Field>
          <Field label="Email address"><TextInput value={s.contact?.email} onChange={(v) => setContact("email", v)} /></Field>
          <Field label="Business hours"><TextInput value={s.contact?.hours} onChange={(v) => setContact("hours", v)} /></Field>
          <Field label="Address" wide><TextArea rows={2} value={s.contact?.address} onChange={(v) => setContact("address", v)} placeholder="Street, area, city, state, PIN" /></Field>
          <Field label="City"><TextInput value={s.contact?.city} onChange={(v) => setContact("city", v)} /></Field>
          <Field label="Country"><TextInput value={s.contact?.country} onChange={(v) => setContact("country", v)} /></Field>
          <Field label="WhatsApp greeting message" wide hint="Pre-filled when a visitor taps the WhatsApp button">
            <TextArea rows={2} value={s.whatsappIntro} onChange={(v) => setSettings({ ...s, whatsappIntro: v })} />
          </Field>
        </div>
      </section>
      <section className="ad-card">
        <h3 className="ad-section-title">Social Media Links</h3>
        <p className="ad-hint">Leave a field empty to hide that social icon on the website.</p>
        <div className="ad-form-grid">
          {socialFields.map(([key, label]) => (
            <Field key={key} label={label}>
              <TextInput value={s.social?.[key]} onChange={(v) => setSocial(key, v)} placeholder="https://…" />
            </Field>
          ))}
        </div>
      </section>
    </div>
  );
}

// ==========================================================================
// ENQUIRIES
// ==========================================================================

const ENQUIRY_STATUSES = [
  { value: "new", label: "New" },
  { value: "contacted", label: "Contacted" },
  { value: "converted", label: "Converted" },
  { value: "closed", label: "Closed" },
];

export function EnquiriesPage() {
  const { items, upsert, remove } = useCollection("enquiries");
  const [filter, setFilter] = useState("all");
  const [open, setOpen] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const shown = items.filter((e) => filter === "all" || e.status === filter);

  const mark = async (enquiry, status) => upsert({ ...enquiry, status });

  return (
    <div className="ad-page">
      <PageHead
        title="Enquiries"
        subtitle="Customer enquiries submitted through the website contact form"
        action={
          <select className="ad-input ad-filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All statuses</option>
            {ENQUIRY_STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>
        }
      />
      {shown.length === 0 ? (
        <Empty text="No enquiries to show." />
      ) : (
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr><th>Name</th><th>Contact</th><th>Requirement</th><th>Date</th><th>Status</th><th className="ad-table__actions">Actions</th></tr>
            </thead>
            <tbody>
              {shown.map((e) => (
                <tr key={e.id}>
                  <td>{e.fullName}{e.company && <><br /><small>{e.company}</small></>}</td>
                  <td>{e.email}<br />{e.phone}</td>
                  <td><span className="ad-cell-clamp">{e.commodity || e.message || "—"}</span></td>
                  <td>{new Date(e.date).toLocaleString()}</td>
                  <td>
                    <select className="ad-input ad-input--sm" value={e.status} onChange={(ev) => mark(e, ev.target.value)}>
                      {ENQUIRY_STATUSES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                    </select>
                  </td>
                  <td className="ad-table__actions">
                    <button className="ad-btn ad-btn--sm" onClick={() => setOpen(e)}>View</button>{" "}
                    <button className="ad-btn ad-btn--sm ad-btn--danger" onClick={() => setConfirmDelete(e)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {open && (
        <div className="ad-modal-backdrop" onMouseDown={(ev) => ev.target === ev.currentTarget && setOpen(null)}>
          <div className="ad-modal" role="dialog" aria-modal="true" aria-label="Enquiry details">
            <div className="ad-modal__head">
              <h3>Enquiry from {open.fullName}</h3>
              <button className="ad-modal__close" onClick={() => setOpen(null)}>×</button>
            </div>
            <div className="ad-modal__body">
              <dl className="ad-detail">
                {[
                  ["Company", open.company], ["Email", open.email], ["Phone", open.phone],
                  ["Country", open.country], ["Product / Commodity", open.commodity],
                  ["Quantity", open.quantity], ["Packaging", open.packaging],
                ].filter(([, v]) => v).map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
                {open.message && <div><dt>Message</dt><dd>{open.message}</dd></div>}
                <div><dt>Received</dt><dd>{new Date(open.date).toLocaleString()}</dd></div>
              </dl>
            </div>
            <div className="ad-modal__footer">
              <a className="ad-btn" href={`mailto:${open.email}`}>Reply by email</a>
              <a className="ad-btn" href={`tel:${String(open.phone || "").replace(/\s/g, "")}`}>Call</a>
              {open.phone && (
                <a className="ad-btn ad-btn--primary" target="_blank" rel="noreferrer"
                   href={`https://wa.me/${String(open.phone).replace(/\D/g, "")}`}>WhatsApp</a>
              )}
            </div>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="ad-modal-backdrop" onMouseDown={(ev) => ev.target === ev.currentTarget && setConfirmDelete(null)}>
          <div className="ad-modal" role="dialog" aria-modal="true" aria-label="Confirm delete">
            <div className="ad-modal__head"><h3>Confirm delete</h3><button className="ad-modal__close" onClick={() => setConfirmDelete(null)}>×</button></div>
            <div className="ad-modal__body"><p>Delete the enquiry from <strong>{confirmDelete.fullName}</strong>?</p></div>
            <div className="ad-modal__footer">
              <button className="ad-btn" onClick={() => setConfirmDelete(null)}>Cancel</button>
              <button className="ad-btn ad-btn--danger" onClick={async () => { await remove(confirmDelete.id); setConfirmDelete(null); }}>Delete permanently</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================================================
// WEBSITE SETTINGS (identity, SEO, features, footer)
// ==========================================================================

export function SettingsPage() {
  const { db, saveCollection } = useAdmin();
  const [settings, setSettings] = useState(null);
  const [pwd, setPwd] = useState({ currentPassword: "", newPassword: "", confirm: "" });
  const [pwdMsg, setPwdMsg] = useState(null);
  if (!db || !(settings || db.settings)) return <div className="ad-page">Loading…</div>;
  const s = settings || db.settings;

  const setTop = (k, v) => setSettings({ ...s, [k]: v });
  const setFeature = (k, v) => setSettings({ ...s, features: { ...s.features, [k]: v } });

  const changePwd = async () => {
    try {
      if (pwd.newPassword !== pwd.confirm) return setPwdMsg({ kind: "error", text: "New passwords do not match." });
      await changePassword(pwd.currentPassword, pwd.newPassword);
      setPwd({ currentPassword: "", newPassword: "", confirm: "" });
      setPwdMsg({ kind: "success", text: "Password changed. Other sessions are now logged out." });
    } catch (e) {
      setPwdMsg({ kind: "error", text: e.message });
    }
  };

  const featureLabels = [
    ["enableReviews", "Customer Reviews & Testimonials"],
    ["enableGallery", "Gallery"],
    ["enableOffers", "Offers & Promotions"],
    ["enableBlog", "Blog & News"],
    ["enableOrders", "Orders module (enable once e-commerce is live)"],
  ];

  return (
    <div className="ad-page">
      <PageHead
        title="Website Settings"
        subtitle="Site identity, SEO, footer and feature toggles"
        action={<button className="ad-btn ad-btn--primary" onClick={() => saveCollection("settings", s)}>Save changes</button>}
      />
      <section className="ad-card">
        <h3 className="ad-section-title">Site Identity</h3>
        <div className="ad-form-grid">
          <Field label="Site name"><TextInput value={s.siteName} onChange={(v) => setTop("siteName", v)} /></Field>
          <Field label="Site sub-name"><TextInput value={s.siteSub} onChange={(v) => setTop("siteSub", v)} /></Field>
          <Field label="Footer tagline"><TextInput value={s.tagline} onChange={(v) => setTop("tagline", v)} /></Field>
          <Field label="Footer description" wide><TextArea rows={2} value={s.footerNote} onChange={(v) => setTop("footerNote", v)} /></Field>
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">SEO</h3>
        <div className="ad-form-grid">
          <Field label="Browser tab title" wide><TextInput value={s.seo?.title} onChange={(v) => setTop("seo", { ...s.seo, title: v })} /></Field>
          <Field label="Meta description" wide><TextArea rows={2} value={s.seo?.description} onChange={(v) => setTop("seo", { ...s.seo, description: v })} /></Field>
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">Modules</h3>
        <div className="ad-sections">
          {featureLabels.map(([key, label]) => (
            <CheckInput key={key} value={s.features?.[key]} onChange={(v) => setFeature(key, v)} label={label} />
          ))}
        </div>
      </section>

      <section className="ad-card">
        <h3 className="ad-section-title">Security</h3>
        <div className="ad-form-grid">
          <Field label="Current password"><TextInput type="password" value={pwd.currentPassword} onChange={(v) => setPwd({ ...pwd, currentPassword: v })} /></Field>
          <Field label="New password"><TextInput type="password" value={pwd.newPassword} onChange={(v) => setPwd({ ...pwd, newPassword: v })} /></Field>
          <Field label="Confirm new password"><TextInput type="password" value={pwd.confirm} onChange={(v) => setPwd({ ...pwd, confirm: v })} /></Field>
        </div>
        {pwdMsg && <p className={pwdMsg.kind === "error" ? "ad-error" : "ad-success"}>{pwdMsg.text}</p>}
        <button className="ad-btn ad-btn--primary" onClick={changePwd}>Change password</button>
      </section>
    </div>
  );
}

// ==========================================================================
// MODULE PAGE FACTORY — thin wrappers around CollectionManager
// ==========================================================================

export const PRODUCT_GROUP_OPTIONS = [
  ...INDIAN_GROUPS.map((g) => ({ value: g.id, label: `Indian — ${g.title}` })),
  { value: IMPORTED_GROUP.id, label: `Imported — ${IMPORTED_GROUP.title}` },
];

export const collectionPages = {
  products: {
    title: "Products",
    subtitle:
      "Products shown on the website. Use the same slug as a catalogue product (e.g. bananas, cashew-kernels) to update it; a new slug adds a new product.",
    collection: "products",
    fields: [
      { key: "name", label: "Product name", required: true },
      {
        key: "slug",
        label: "Slug",
        hint: "Catalogue slugs: bananas, pomegranates, mangoes, grapes, onions, cashew-kernels, almonds-kernels, walnuts-kernels, dried-figs, saffron…",
        placeholder: "e.g. bananas",
      },
      {
        key: "categoryTag",
        label: "Product group",
        type: "select",
        options: [{ value: "", label: "— Select a group —" }, ...PRODUCT_GROUP_OPTIONS],
      },
      { key: "description", label: "Description", type: "textarea" },
      { key: "price", label: "Price (optional)", placeholder: "e.g. ₹45,000 / MT — leave blank to hide" },
      { key: "origin", label: "Origin" },
      { key: "packaging", label: "Packaging" },
      { key: "specifications", label: "Specifications", type: "textarea", rows: 3 },
      { key: "image", label: "Product image", type: "image" },
    ],
    columns: [
      { key: "image", label: "Image", type: "image" },
      { key: "name", label: "Name" },
      { key: "categoryTag", label: "Group" },
      { key: "price", label: "Price" },
    ],
  },
  categories: {
    title: "Categories", subtitle: "Product and service categories",
    collection: "categories",
    fields: [
      { key: "name", label: "Category name", required: true },
      { key: "description", label: "Description", type: "textarea", rows: 3 },
    ],
    columns: [{ key: "name", label: "Name" }, { key: "description", label: "Description" }],
  },
  services: {
    title: "Services", subtitle: "Services listed on the website",
    collection: "services",
    fields: [
      { key: "name", label: "Service name", required: true },
      { key: "description", label: "Description", type: "textarea" },
      { key: "image", label: "Service image", type: "image" },
    ],
    columns: [
      { key: "image", label: "Image", type: "image" },
      { key: "name", label: "Name" },
      { key: "description", label: "Description" },
    ],
  },
  reviews: {
    title: "Reviews", subtitle: "Customer reviews & testimonials — approval required before they appear on the site",
    collection: "reviews",
    fields: [
      { key: "name", label: "Customer name", required: true },
      { key: "company", label: "Company / country" },
      { key: "text", label: "Review text", type: "textarea", required: true, rows: 4 },
      { key: "rating", label: "Rating (1–5)", placeholder: "5" },
      { key: "photo", label: "Customer photo", type: "image" },
      { key: "beforeImage", label: "Before image (optional)", type: "image" },
      { key: "afterImage", label: "After image (optional)", type: "image" },
      { key: "approved", label: "Approved", type: "checkbox", checkboxLabel: "Show this review on the website", default: false },
    ],
    columns: [
      { key: "photo", label: "Photo", type: "image" },
      { key: "name", label: "Customer" },
      { key: "text", label: "Review" },
      { key: "approved", label: "Live", type: "bool" },
    ],
  },
  media: {
    title: "Images & Gallery", subtitle: "Banners, sliders, gallery and other site images — upload once, then paste the URL where needed",
    collection: "media",
    fields: [
      { key: "title", label: "Image title", required: true },
      { key: "group", label: "Group", type: "select", options: [
        { value: "banner", label: "Homepage banner / slider" },
        { value: "gallery", label: "Gallery" },
        { value: "product", label: "Product image" },
        { value: "other", label: "Other" },
      ] },
      { key: "image", label: "Image file", type: "image", required: true },
    ],
    columns: [
      { key: "image", label: "Image", type: "image" },
      { key: "title", label: "Title" },
      { key: "group", label: "Group" },
      { key: "image", label: "URL" },
    ],
  },
  offers: {
    title: "Offers", subtitle: "Promotions, special offers and announcements",
    collection: "offers",
    fields: [
      { key: "title", label: "Offer title", required: true },
      { key: "text", label: "Offer text", type: "textarea" },
      { key: "ctaLabel", label: "Button label", placeholder: "Enquire Now" },
      { key: "ctaHref", label: "Button link", placeholder: "#enquiry" },
      { key: "image", label: "Promo banner", type: "image" },
      { key: "startDate", label: "Start date" },
      { key: "endDate", label: "End date" },
      { key: "active", label: "Active", type: "checkbox", checkboxLabel: "Show this offer on the website", default: true },
    ],
    columns: [
      { key: "title", label: "Title" },
      { key: "text", label: "Text" },
      { key: "active", label: "Active", type: "bool" },
    ],
  },
  blog: {
    title: "Blog & News", subtitle: "Articles and company updates",
    collection: "blog",
    fields: [
      { key: "title", label: "Post title", required: true },
      { key: "excerpt", label: "Short summary", type: "textarea", rows: 3 },
      { key: "body", label: "Full content", type: "textarea", rows: 10 },
      { key: "author", label: "Author" },
      { key: "date", label: "Publish date" },
      { key: "image", label: "Cover image", type: "image" },
      { key: "published", label: "Published", type: "checkbox", checkboxLabel: "Publish this post on the website", default: false },
    ],
    columns: [
      { key: "image", label: "Cover", type: "image" },
      { key: "title", label: "Title" },
      { key: "author", label: "Author" },
      { key: "date", label: "Date" },
      { key: "published", label: "Live", type: "bool" },
    ],
  },
  orders: {
    title: "Orders", subtitle: "Customer orders — appears here once e-commerce is enabled",
    collection: "orders",
    fields: [
      { key: "customer", label: "Customer name", required: true },
      { key: "contact", label: "Email / phone" },
      { key: "items", label: "Order items", type: "textarea", rows: 3, placeholder: "e.g. Dry Figs — 200 kg; Basmati Rice — 2 MT" },
      { key: "amount", label: "Order amount" },
      { key: "status", label: "Order status", type: "select", default: "pending", options: [
        { value: "pending", label: "Pending" },
        { value: "confirmed", label: "Confirmed" },
        { value: "shipped", label: "Shipped" },
        { value: "delivered", label: "Delivered" },
        { value: "cancelled", label: "Cancelled" },
      ] },
    ],
    columns: [
      { key: "customer", label: "Customer" },
      { key: "items", label: "Items" },
      { key: "amount", label: "Amount" },
      { key: "status", label: "Status", type: "status" },
    ],
  },
};

export function makeCollectionPage(key) {
  const config = collectionPages[key];
  return function Page() {
    return <CollectionManager {...config} />;
  };
}

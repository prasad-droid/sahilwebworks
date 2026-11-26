import { useEffect, useState } from "react";
import { login, getToken, setToken } from "../api";
import { AdminDataProvider, useAdmin } from "./adminStore";
import { Dashboard, ContentPage, ContactPage, EnquiriesPage, SettingsPage, makeCollectionPage } from "./pages";
import "./admin.css";

// ==========================================================================
// ADMIN PANEL — reached at #/admin
// Password-protected control panel for every website module.
// ==========================================================================

const NAV = [
  { key: "dashboard", label: "Dashboard", icon: "▦" },
  { type: "divider", label: "Content" },
  { key: "content", label: "Website Content", icon: "✎" },
  { key: "products", label: "Products", icon: "◫" },
  { key: "categories", label: "Categories", icon: "☰" },
  { key: "services", label: "Services", icon: "⚑" },
  { key: "media", label: "Images & Gallery", icon: "▣" },
  { key: "reviews", label: "Reviews", icon: "★" },
  { key: "offers", label: "Offers", icon: "%" },
  { key: "blog", label: "Blog & News", icon: "¶" },
  { type: "divider", label: "Customers" },
  { key: "enquiries", label: "Enquiries", icon: "✉" },
  { key: "orders", label: "Orders", icon: "▤" },
  { type: "divider", label: "Setup" },
  { key: "contact", label: "Contact & Social", icon: "☎" },
  { key: "settings", label: "Settings", icon: "⚙" },
];

const PAGES = {
  dashboard: Dashboard,
  content: ContentPage,
  contact: ContactPage,
  enquiries: EnquiriesPage,
  settings: SettingsPage,
  products: makeCollectionPage("products"),
  categories: makeCollectionPage("categories"),
  services: makeCollectionPage("services"),
  reviews: makeCollectionPage("reviews"),
  media: makeCollectionPage("media"),
  offers: makeCollectionPage("offers"),
  blog: makeCollectionPage("blog"),
  orders: makeCollectionPage("orders"),
};

function Login({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const { token } = await login(password);
      setToken(token);
      onSuccess();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="ad-login">
      <form className="ad-login__card" onSubmit={submit}>
        <div className="ad-login__brand">
          <span>SUGI INTERNATIONAL</span>
          <small>ADMIN PANEL</small>
        </div>
        <label className="ad-field">
          <span className="ad-field__label">Admin password</span>
          <input
            className="ad-input"
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </label>
        {error && <p className="ad-error">{error}</p>}
        <button className="ad-btn ad-btn--primary ad-btn--block" disabled={busy}>
          {busy ? "Signing in…" : "Sign In"}
        </button>
        <p className="ad-login__hint">
          Default password on first run is <code>sugi@2026</code> — change it from Settings after signing in.
        </p>
      </form>
    </div>
  );
}

function Shell({ route }) {
  const { db, saving, toast, error } = useAdmin();
  const Page = PAGES[route] || Dashboard;
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.title = "Admin Panel — SUGI INTERNATIONAL";
  }, []);

  const navigate = (key) => {
    window.location.hash = `#/admin/${key}`;
    setMenuOpen(false);
  };

  return (
    <div className={`ad-shell ${menuOpen ? "ad-shell--open" : ""}`}>
      <aside className="ad-sidebar">
        <div className="ad-sidebar__brand" onClick={() => navigate("dashboard")}>
          <span>SUGI ADMIN</span>
        </div>
        <nav className="ad-nav" aria-label="Admin">
          {NAV.map((item, i) =>
            item.type === "divider" ? (
              <p key={`d${i}`} className="ad-nav__divider">{item.label}</p>
            ) : (
              <button
                key={item.key}
                className={`ad-nav__item ${route === item.key ? "is-active" : ""}`}
                onClick={() => navigate(item.key)}
              >
                <span className="ad-nav__icon" aria-hidden="true">{item.icon}</span>
                {item.label}
                {item.key === "enquiries" && db?.enquiries?.filter((e) => e.status === "new").length > 0 && (
                  <span className="ad-nav__badge">{db.enquiries.filter((e) => e.status === "new").length}</span>
                )}
              </button>
            )
          )}
        </nav>
        <div className="ad-sidebar__foot">
          <a className="ad-sidebar__site" href="#/" target="_blank" rel="noreferrer">
            View website ↗
          </a>
          <button
            className="ad-sidebar__logout"
            onClick={() => {
              setToken(null);
              window.location.reload();
            }}
          >
            Log out
          </button>
        </div>
      </aside>

      <div className="ad-main">
        <header className="ad-topbar">
          <button className="ad-topbar__menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            ☰
          </button>
          <span className="ad-topbar__title">{NAV.find((n) => n.key === route)?.label || "Dashboard"}</span>
          {saving && <span className="ad-topbar__saving">Saving…</span>}
        </header>
        <main className="ad-content">
          {error && <p className="ad-error">{error}</p>}
          <Page onNavigate={navigate} />
        </main>
      </div>

      {toast && <div className={`ad-toast ad-toast--${toast.kind}`}>{toast.message}</div>}
    </div>
  );
}

function AdminInner() {
  const [authed, setAuthed] = useState(!!getToken());
  const [route, setRoute] = useState(() => (window.location.hash.split("/")[2] || "dashboard"));

  useEffect(() => {
    if (!authed) return;
    const onHash = () => setRoute(window.location.hash.split("/")[2] || "dashboard");
    const onUnauthorized = () => setAuthed(false);
    window.addEventListener("hashchange", onHash);
    window.addEventListener("sugi:unauthorized", onUnauthorized);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("sugi:unauthorized", onUnauthorized);
    };
  }, [authed]);

  if (!authed) return <Login onSuccess={() => setAuthed(true)} />;
  return <Shell route={route} />;
}

export default function AdminApp() {
  return (
    <AdminDataProvider>
      <AdminInner />
    </AdminDataProvider>
  );
}

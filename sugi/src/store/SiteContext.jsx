import { createContext, useContext, useEffect, useState } from "react";
import { fetchSiteContent } from "../api";
import {
  COMPANY,
  TAGLINE,
  EMAIL,
  PHONE_DISPLAY,
  WHATSAPP_TEL,
  ADDRESS,
  waLink,
} from "../data/site";

// ==========================================================================
// SITE CONTENT STORE
// --------------------------------------------------------------------------
// Loads editable website content from the admin backend (server/db.json).
// If the backend is unavailable the site renders with the bundled defaults,
// so the static build keeps working on its own.
// ==========================================================================

const DEFAULT = {
  settings: {
    siteName: COMPANY,
    siteSub: "",
    tagline: TAGLINE,
    contact: {
      phone: PHONE_DISPLAY,
      whatsapp: WHATSAPP_TEL,
      email: EMAIL,
      address: ADDRESS,
      city: "",
      country: "India",
      hours: "Monday - Saturday · 9:00 AM - 6:00 PM (IST)",
    },
    social: {},
    whatsappIntro: waLink().split("text=")[1]
      ? decodeURIComponent(waLink().split("text=")[1])
      : "",
    features: {
      enableReviews: true,
      enableGallery: true,
      enableOffers: true,
      enableBlog: true,
      enableOrders: false,
    },
  },
  content: {
    homeIntro: {
      title: "Connecting Indian & Globally Sourced Agro Commodities",
      titleAccent: "with Global Markets",
      text: "Delivering farm-fresh fruits, vegetables, spices, dry fruits and other agricultural products from India to customers worldwide. We provide premium quality produce sourced directly from certified farms with international export standards, competitive pricing, and timely global delivery.",
    },
    about: {},
    quoteCta: {},
    sections: [],
  },
  products: [],
  reviews: [],
  media: [],
  offers: [],
  blog: [],
};

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [data, setData] = useState(DEFAULT);
  const [status, setStatus] = useState("loading"); // loading | ready | offline

  useEffect(() => {
    let cancelled = false;
    fetchSiteContent()
      .then((remote) => {
        if (cancelled) return;
        setData({
          ...DEFAULT,
          ...remote,
          settings: {
            ...DEFAULT.settings,
            ...remote.settings,
            contact: { ...DEFAULT.settings.contact, ...(remote.settings?.contact || {}) },
            social: { ...DEFAULT.settings.social, ...(remote.settings?.social || {}) },
            features: { ...DEFAULT.settings.features, ...(remote.settings?.features || {}) },
          },
          content: { ...DEFAULT.content, ...(remote.content || {}) },
        });
        setStatus("ready");
      })
      .catch(() => !cancelled && setStatus("offline"));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <SiteContext.Provider value={{ ...data, status }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext) || { ...DEFAULT, status: "offline" };
}

// Returns true when the homepage section with the given id is enabled in the
// admin panel (Section Manager). Sections default to visible.
export function useSectionVisible(id) {
  const { content } = useSite();
  const list = content?.sections || [];
  const entry = list.find((s) => s.id === id);
  return entry ? entry.visible !== false : true;
}

// Wraps a homepage section so it can be switched on/off from the Admin
// Panel (Website Content > Sections on Homepage).
export function Section({ id, children }) {
  return useSectionVisible(id) ? children : null;
}

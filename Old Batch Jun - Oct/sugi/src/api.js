// ==========================================================================
// API client shared by the website and the admin panel.
// Talks to the JSON-file backend (server/index.js). Every helper degrades
// gracefully: if the backend is not running, the website falls back to the
// default content bundled in src/data/.
// ==========================================================================

const TOKEN_KEY = "sugi_admin_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  if (token) localStorage.setItem(TOKEN_KEY, token);
  else localStorage.removeItem(TOKEN_KEY);
}

async function request(url, { method = "GET", body, auth = false } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (auth) {
    const token = getToken();
    if (token) headers.Authorization = `Bearer ${token}`;
  }
  const res = await fetch(url, {
    method,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  if (res.status === 401 && auth) {
    setToken(null);
    window.dispatchEvent(new CustomEvent("sugi:unauthorized"));
  }
  let data = null;
  try {
    data = await res.json();
  } catch {
    /* non-JSON response */
  }
  if (!res.ok) {
    const error = new Error((data && data.error) || `Request failed (${res.status})`);
    error.status = res.status;
    throw error;
  }
  return data;
}

// --- public -----------------------------------------------------------------

export const fetchSiteContent = () => request("/api/content");
export const submitEnquiry = (values) =>
  request("/api/enquiries", { method: "POST", body: values });

// --- auth -------------------------------------------------------------------

export const login = (password) =>
  request("/api/auth/login", { method: "POST", body: { password } });

export const changePassword = (currentPassword, newPassword) =>
  request("/api/auth/password", {
    method: "POST",
    body: { currentPassword, newPassword },
    auth: true,
  });

// --- admin ------------------------------------------------------------------

export const fetchAdminData = () => request("/api/admin/data", { auth: true });

export const saveCollection = (collection, value) =>
  request(`/api/admin/data/${collection}`, { method: "PUT", body: value, auth: true });

export const uploadImage = (name, dataUrl) =>
  request("/api/admin/upload", { method: "POST", body: { name, dataUrl }, auth: true });

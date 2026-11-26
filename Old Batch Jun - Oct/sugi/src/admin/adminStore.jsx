import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { fetchAdminData, saveCollection as apiSave, getToken } from "../api";

// ==========================================================================
// ADMIN DATA STORE
// --------------------------------------------------------------------------
// Loads the whole JSON database once (authenticated), keeps it in memory and
// mirrors every save to the backend. All admin pages read/write through this.
// ==========================================================================

const AdminDataContext = createContext(null);

export function AdminDataProvider({ children }) {
  const [db, setDb] = useState(null);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const notify = useCallback((message, kind = "success") => {
    setToast({ message, kind, id: Date.now() });
  }, []);

  useEffect(() => {
    if (!getToken()) return;
    fetchAdminData()
      .then(setDb)
      .catch((e) => setError(e.message));
  }, []);

  // auto-hide toasts
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2800);
    return () => clearTimeout(t);
  }, [toast]);

  const saveCollection = useCallback(
    async (collection, value) => {
      setSaving(true);
      try {
        await apiSave(collection, value);
        setDb((prev) => ({ ...prev, [collection]: value }));
        notify("Saved");
        return true;
      } catch (e) {
        notify(e.message, "error");
        return false;
      } finally {
        setSaving(false);
      }
    },
    [notify]
  );

  return (
    <AdminDataContext.Provider value={{ db, setDb, error, saving, saveCollection, notify, toast }}>
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminDataContext);
}

// Helper for collection pages: immutable update + persist.
export function useCollection(name) {
  const { db, saveCollection } = useAdmin();
  const items = (db && db[name]) || [];

  const commit = useCallback(
    (next) => saveCollection(name, next),
    [name, saveCollection]
  );

  const upsert = useCallback(
    (item) => {
      const idx = items.findIndex((i) => i.id === item.id);
      const next = idx >= 0
        ? items.map((i) => (i.id === item.id ? item : i))
        : [item, ...items];
      return commit(next);
    },
    [items, commit]
  );

  const remove = useCallback(
    (id) => commit(items.filter((i) => i.id !== id)),
    [items, commit]
  );

  return { items, upsert, remove, commit };
}

export const newId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;

import { useState } from "react";
import { useCollection, newId } from "./adminStore";
import {
  PageHead, Modal, Field, TextInput, TextArea, SelectInput, CheckInput, ImageInput, Empty,
} from "./ui";

// ==========================================================================
// GENERIC COLLECTION MANAGER
// --------------------------------------------------------------------------
// Drives the Products, Categories, Services, Reviews, Media, Offers, Blog and
// Orders pages from a small schema definition. Each field supports:
//   text | textarea | image | select | checkbox | date | readonly
// ==========================================================================

const uid = () => newId();

function defaultItem(fields) {
  const item = { id: uid() };
  fields.forEach((f) => {
    if (f.type === "checkbox") item[f.key] = f.default ?? false;
    else if (f.type === "select") item[f.key] = f.default ?? f.options?.[0]?.value ?? "";
    else item[f.key] = f.default ?? "";
  });
  return item;
}

export default function CollectionManager({ title, subtitle, collection, fields, columns, createLabel }) {
  const { items, upsert, remove } = useCollection(collection);
  const [draft, setDraft] = useState(null); // item being created/edited
  const [isNew, setIsNew] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const openNew = () => {
    setDraft(defaultItem(fields));
    setIsNew(true);
  };
  const openEdit = (item) => {
    setDraft({ ...defaultItem(fields), ...item });
    setIsNew(false);
  };
  const set = (key, value) => setDraft((d) => ({ ...d, [key]: value }));

  const save = async () => {
    const required = fields.filter((f) => f.required);
    const missing = required.find((f) => !String(draft[f.key] || "").trim());
    if (missing) return alert(`Please fill in: ${missing.label}`);
    await upsert(draft);
    setDraft(null);
  };

  const doDelete = async () => {
    await remove(confirmDelete.id);
    setConfirmDelete(null);
  };

  return (
    <div className="ad-page">
      <PageHead
        title={title}
        subtitle={subtitle}
        action={
          <button className="ad-btn ad-btn--primary" onClick={openNew}>
            {createLabel || `+ Add ${title.replace(/s$/, "")}`}
          </button>
        }
      />

      {items.length === 0 ? (
        <Empty text={`No ${title.toLowerCase()} yet. Click "${createLabel || "Add"}" to create the first one.`} />
      ) : (
        <div className="ad-table-wrap">
          <table className="ad-table">
            <thead>
              <tr>
                {columns.map((c) => (
                  <th key={c.key}>{c.label}</th>
                ))}
                <th className="ad-table__actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  {columns.map((c) => (
                    <td key={c.key}>
                      {c.type === "image" && item[c.key] ? (
                        <img className="ad-thumb" src={item[c.key]} alt="" />
                      ) : c.type === "bool" ? (
                        <span className={`ad-pill ${item[c.key] ? "ad-pill--on" : ""}`}>
                          {item[c.key] ? "Yes" : "No"}
                        </span>
                      ) : c.type === "status" ? (
                        <span className={`ad-pill ad-pill--${String(item[c.key] || "new").toLowerCase()}`}>
                          {item[c.key] || "new"}
                        </span>
                      ) : (
                        <span className="ad-cell-clamp">{String(item[c.key] ?? "—")}</span>
                      )}
                    </td>
                  ))}
                  <td className="ad-table__actions">
                    <button className="ad-btn ad-btn--sm" onClick={() => openEdit(item)}>
                      Edit
                    </button>{" "}
                    <button className="ad-btn ad-btn--sm ad-btn--danger" onClick={() => setConfirmDelete(item)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {draft && (
        <Modal
          title={isNew ? `New ${title.replace(/s$/, "")}` : `Edit ${title.replace(/s$/, "")}`}
          onClose={() => setDraft(null)}
          footer={
            <>
              <button className="ad-btn" onClick={() => setDraft(null)}>
                Cancel
              </button>
              <button className="ad-btn ad-btn--primary" onClick={save}>
                Save
              </button>
            </>
          }
        >
          <div className="ad-form-grid">
            {fields.map((f) => (
              <Field key={f.key} label={f.label} hint={f.hint} wide={f.wide || f.type === "textarea" || f.type === "image"}>
                {f.type === "textarea" ? (
                  <TextArea value={draft[f.key]} onChange={(v) => set(f.key, v)} rows={f.rows || 4} />
                ) : f.type === "image" ? (
                  <ImageInput value={draft[f.key]} onChange={(v) => set(f.key, v)} name={f.key} />
                ) : f.type === "select" ? (
                  <SelectInput value={draft[f.key]} onChange={(v) => set(f.key, v)} options={f.options} />
                ) : f.type === "checkbox" ? (
                  <CheckInput value={draft[f.key]} onChange={(v) => set(f.key, v)} label={f.checkboxLabel || "Enabled"} />
                ) : (
                  <TextInput value={draft[f.key]} onChange={(v) => set(f.key, v)} placeholder={f.placeholder} />
                )}
              </Field>
            ))}
          </div>
        </Modal>
      )}

      {confirmDelete && (
        <Modal
          title="Confirm delete"
          onClose={() => setConfirmDelete(null)}
          footer={
            <>
              <button className="ad-btn" onClick={() => setConfirmDelete(null)}>
                Cancel
              </button>
              <button className="ad-btn ad-btn--danger" onClick={doDelete}>
                Delete permanently
              </button>
            </>
          }
        >
          <p>
            Delete <strong>{confirmDelete.name || confirmDelete.title || confirmDelete.id}</strong>? This cannot be
            undone.
          </p>
        </Modal>
      )}
    </div>
  );
}

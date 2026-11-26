import { useRef, useState } from "react";
import { uploadImage } from "../api";

// ==========================================================================
// ADMIN UI PRIMITIVES
// Shared form fields, image uploader and modal used by every admin page.
// ==========================================================================

export function Field({ label, hint, children, wide }) {
  return (
    <label className={`ad-field ${wide ? "ad-field--wide" : ""}`}>
      <span className="ad-field__label">{label}</span>
      {children}
      {hint && <span className="ad-field__hint">{hint}</span>}
    </label>
  );
}

export function TextInput({ value, onChange, placeholder, type = "text" }) {
  return (
    <input
      className="ad-input"
      type={type}
      value={value || ""}
      placeholder={placeholder || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function TextArea({ value, onChange, rows = 4, placeholder }) {
  return (
    <textarea
      className="ad-input ad-textarea"
      rows={rows}
      value={value || ""}
      placeholder={placeholder || ""}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export function SelectInput({ value, onChange, options }) {
  return (
    <select className="ad-input" value={value || ""} onChange={(e) => onChange(e.target.value)}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

export function CheckInput({ value, onChange, label }) {
  return (
    <label className="ad-check">
      <input type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

// Accepts a local file (converted + uploaded to the backend) or a pasted URL.
export function ImageInput({ value, onChange, name = "image" }) {
  const fileRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    setBusy(true);
    setError("");
    try {
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("Could not read file"));
        reader.readAsDataURL(file);
      });
      const { url } = await uploadImage(name, dataUrl);
      onChange(url);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="ad-image-input">
      {value ? (
        <img className="ad-image-input__preview" src={value} alt="" />
      ) : (
        <div className="ad-image-input__empty">No image</div>
      )}
      <div className="ad-image-input__actions">
        <button
          type="button"
          className="ad-btn ad-btn--sm"
          disabled={busy}
          onClick={() => fileRef.current?.click()}
        >
          {busy ? "Uploading…" : "Upload image"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => {
            handleFile(e.target.files?.[0]);
            e.target.value = "";
          }}
        />
        {value && (
          <button type="button" className="ad-btn ad-btn--sm ad-btn--danger" onClick={() => onChange("")}>
            Remove
          </button>
        )}
      </div>
      <input
        className="ad-input ad-image-input__url"
        type="text"
        placeholder="…or paste an image URL"
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
      />
      {error && <p className="ad-error">{error}</p>}
    </div>
  );
}

export function Modal({ title, onClose, children, footer }) {
  return (
    <div className="ad-modal-backdrop" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="ad-modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="ad-modal__head">
          <h3>{title}</h3>
          <button className="ad-modal__close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="ad-modal__body">{children}</div>
        {footer && <div className="ad-modal__footer">{footer}</div>}
      </div>
    </div>
  );
}

export function PageHead({ title, subtitle, action }) {
  return (
    <div className="ad-page__head">
      <div>
        <h2 className="ad-page__title">{title}</h2>
        {subtitle && <p className="ad-page__subtitle">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Empty({ text }) {
  return <p className="ad-empty">{text}</p>;
}

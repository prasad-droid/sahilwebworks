import { useState } from "react";
import { useAdmin } from "./adminStore";
import { PageHead, Field, TextInput, TextArea, ImageInput, CheckInput } from "./ui";
import { CONTENT_GROUPS } from "./contentSchema";
import { DEFAULT_CONTENT, mergeContent, diffContent } from "../content/defaults";

// ==========================================================================
// WEBSITE CONTENT EDITOR
// --------------------------------------------------------------------------
// Schema-driven editor for every editable piece of website content. Content
// is seeded from the bundled defaults merged with whatever the admin has
// saved, so new fields appear automatically after a deployment.
//
// Blank text fields keep the bundled default text; lists are explicit, so an
// emptied list hides that list on the site.
// ==========================================================================

function getAt(obj, path) {
  return path
    .split(".")
    .reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

function setAt(obj, keys, value) {
  const [head, ...rest] = keys;
  const isArray = Array.isArray(obj);
  const copy = isArray ? obj.slice() : { ...(obj || {}) };
  const index = isArray ? Number(head) : head;

  if (rest.length === 0) {
    copy[index] = value;
    return copy;
  }

  copy[index] = setAt(obj?.[index], rest, value);
  return copy;
}

const joinParagraphs = (list) => (Array.isArray(list) ? list.join("\n\n") : "");
const joinLines = (list) => (Array.isArray(list) ? list.join("\n") : "");

const splitParagraphs = (value) =>
  value
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);

const splitLines = (value) =>
  String(value || "")
    .split("\n")
    .map((part) => part.trim())
    .filter(Boolean);

// --------------------------------------------------------------------------
// Reusable list editors
// --------------------------------------------------------------------------

function MoveButtons({ index, total, onMove }) {
  return (
    <>
      <button
        type="button"
        className="ad-btn ad-btn--sm"
        disabled={index === 0}
        onClick={() => onMove(index, -1)}
        aria-label="Move up"
      >
        ↑
      </button>
      <button
        type="button"
        className="ad-btn ad-btn--sm"
        disabled={index === total - 1}
        onClick={() => onMove(index, 1)}
        aria-label="Move down"
      >
        ↓
      </button>
    </>
  );
}

function ListItemField({ field, value, onChange }) {
  if (field.type === "textarea") {
    return (
      <Field label={field.label} hint={field.hint} wide>
        <TextArea
          rows={field.rows || 2}
          value={value}
          onChange={onChange}
        />
      </Field>
    );
  }

  if (field.type === "lines") {
    return (
      <Field label={field.label} hint={field.hint || "One item per line."} wide>
        <TextArea
          rows={field.rows || 4}
          value={joinLines(value)}
          onChange={(v) => {
            const parts = splitLines(v);
            onChange(parts.length ? parts : []);
          }}
        />
      </Field>
    );
  }

  if (field.type === "paragraphs") {
    return (
      <Field
        label={field.label}
        hint={field.hint || "Separate paragraphs with a blank line."}
        wide
      >
        <TextArea
          rows={field.rows || 4}
          value={joinParagraphs(value)}
          onChange={(v) => {
            const parts = splitParagraphs(v);
            onChange(parts.length ? parts : undefined);
          }}
        />
      </Field>
    );
  }

  if (field.type === "image") {
    return (
      <Field label={field.label} hint={field.hint} wide>
        <ImageInput value={value} onChange={onChange} />
      </Field>
    );
  }

  return (
    <Field label={field.label} hint={field.hint}>
      <TextInput value={value} onChange={onChange} />
    </Field>
  );
}

function ListField({ field, value, onChange }) {
  const items = Array.isArray(value) ? value : [];
  const itemLabel = field.itemLabel || "Item";

  const updateItem = (index, key, next) =>
    onChange(items.map((item, i) => (i === index ? { ...item, [key]: next } : item)));

  const removeItem = (index) => onChange(items.filter((_, i) => i !== index));

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const addItem = () => {
    const item = {};
    (field.itemFields || []).forEach((f) => {
      item[f.key] = f.default ?? (f.type === "lines" ? [] : "");
    });
    onChange([...items, item]);
  };

  return (
    <div className="ad-list">
      {items.length === 0 && (
        <p className="ad-hint ad-list__empty">
          No items. Add one to show this list on the website.
        </p>
      )}

      {items.map((item, index) => (
        <div className="ad-list__item" key={index}>
          <div className="ad-list__head">
            <span className="ad-list__title">
              {itemLabel} {index + 1}
              {item.title ? ` — ${item.title}` : item.name ? ` — ${item.name}` : ""}
            </span>
            <div className="ad-list__actions">
              <MoveButtons index={index} total={items.length} onMove={moveItem} />
              <button
                type="button"
                className="ad-btn ad-btn--sm ad-btn--danger"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>
            </div>
          </div>

          <div className="ad-list__fields">
            {(field.itemFields || []).map((sub) => (
              <ListItemField
                key={sub.key}
                field={sub}
                value={item[sub.key]}
                onChange={(next) => updateItem(index, sub.key, next)}
              />
            ))}
          </div>
        </div>
      ))}

      <button type="button" className="ad-btn ad-btn--sm ad-list__add" onClick={addItem}>
        + Add {itemLabel.toLowerCase()}
      </button>
    </div>
  );
}

function StringsField({ field, value, onChange }) {
  const items = Array.isArray(value) ? value : [];
  const itemLabel = field.itemLabel || "Item";

  const updateItem = (index, next) =>
    onChange(items.map((item, i) => (i === index ? next : item)));

  const removeItem = (index) => onChange(items.filter((_, i) => i !== index));

  const moveItem = (index, direction) => {
    const target = index + direction;
    if (target < 0 || target >= items.length) return;
    const next = items.slice();
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  return (
    <div className="ad-list">
      {items.length === 0 && (
        <p className="ad-hint ad-list__empty">
          No items. Add one to show this list on the website.
        </p>
      )}

      {items.map((item, index) => (
        <div className="ad-list__row" key={index}>
          <TextInput value={item} onChange={(next) => updateItem(index, next)} />
          <MoveButtons index={index} total={items.length} onMove={moveItem} />
          <button
            type="button"
            className="ad-btn ad-btn--sm ad-btn--danger"
            onClick={() => removeItem(index)}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        className="ad-btn ad-btn--sm ad-list__add"
        onClick={() => onChange([...items, ""])}
      >
        + Add {itemLabel.toLowerCase()}
      </button>
    </div>
  );
}

// --------------------------------------------------------------------------
// Group fields
// --------------------------------------------------------------------------

function GroupField({ field, content, setValue }) {
  const value = getAt(content, field.path);

  if (field.type === "list") {
    return (
      <div className="ad-content-wide ad-content-list">
        <h4 className="ad-content-label">{field.label}</h4>
        {field.hint && <p className="ad-hint">{field.hint}</p>}
        <ListField
          field={field}
          value={value}
          onChange={(next) => setValue(field.path, next)}
        />
      </div>
    );
  }

  if (field.type === "strings") {
    return (
      <div className="ad-content-wide ad-content-list">
        <h4 className="ad-content-label">{field.label}</h4>
        {field.hint && <p className="ad-hint">{field.hint}</p>}
        <StringsField
          field={field}
          value={value}
          onChange={(next) => setValue(field.path, next)}
        />
      </div>
    );
  }

  if (field.type === "paragraphs") {
    return (
      <Field
        label={field.label}
        hint={field.hint || "Separate paragraphs with a blank line."}
        wide
      >
        <TextArea
          rows={field.rows || 5}
          value={joinParagraphs(value)}
          onChange={(v) => {
            const parts = splitParagraphs(v);
            setValue(field.path, parts.length ? parts : undefined);
          }}
        />
      </Field>
    );
  }

  if (field.type === "textarea") {
    return (
      <Field label={field.label} hint={field.hint} wide={field.wide}>
        <TextArea
          rows={field.rows || 3}
          value={value}
          onChange={(v) => setValue(field.path, v)}
        />
      </Field>
    );
  }

  if (field.type === "image") {
    return (
      <Field label={field.label} hint={field.hint} wide={field.wide}>
        <ImageInput value={value} onChange={(v) => setValue(field.path, v)} />
      </Field>
    );
  }

  return (
    <Field label={field.label} hint={field.hint} wide={field.wide}>
      <TextInput value={value} onChange={(v) => setValue(field.path, v)} />
    </Field>
  );
}

// --------------------------------------------------------------------------
// Editor
// --------------------------------------------------------------------------

export default function ContentEditor() {
  const { db, saveCollection, saving } = useAdmin();
  const [content, setContent] = useState(null);
  const [open, setOpen] = useState(() => new Set(["home-intro"]));

  if (!db) return <div className="ad-page">Loading…</div>;

  const current = content || mergeContent(DEFAULT_CONTENT, db.content || {});
  const dirty = content !== null;

  const setValue = (path, value) =>
    setContent(setAt(current, path.split("."), value));

  const toggleGroup = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const toggleSection = (id) => {
    const sections = (current.sections || []).map((section) =>
      section.id === id ? { ...section, visible: !section.visible } : section
    );
    setValue("sections", sections);
  };

  const handleSave = async () => {
    const patch = diffContent(DEFAULT_CONTENT, current) || {};
    const ok = await saveCollection("content", patch);
    if (ok) setContent(null);
  };

  return (
    <div className="ad-page">
      <PageHead
        title="Website Content"
        subtitle="Every heading, paragraph, list and image shown on the public website"
        action={
          <button
            className="ad-btn ad-btn--primary"
            onClick={handleSave}
            disabled={saving || !dirty}
          >
            {saving ? "Saving…" : "Save changes"}
          </button>
        }
      />

      <div className="ad-content-note">
        <strong>How this works:</strong> blank text fields keep the current
        website text, so the site is never accidentally blanked. Lists and
        images are explicit — clearing a list or removing an image updates the
        site after saving. Hidden homepage sections are controlled below in
        <em> Homepage — section switches</em>.
      </div>

      <div className="ad-accordions">
        {CONTENT_GROUPS.map((group) => {
          const isOpen = open.has(group.id);
          return (
            <section
              className={`ad-accordion${isOpen ? " is-open" : ""}`}
              key={group.id}
            >
              <button
                type="button"
                className="ad-accordion__head"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isOpen}
              >
                <span className="ad-accordion__text">
                  <span className="ad-accordion__title">{group.label}</span>
                  {group.description && (
                    <span className="ad-accordion__desc">{group.description}</span>
                  )}
                </span>
                <span className="ad-accordion__chevron" aria-hidden="true">
                  ⌄
                </span>
              </button>

              {isOpen && (
                <div className="ad-accordion__body">
                  {group.kind === "sections" ? (
                    <div className="ad-sections">
                      {(current.sections || []).map((section) => (
                        <CheckInput
                          key={section.id}
                          value={section.visible}
                          label={section.label}
                          onChange={() => toggleSection(section.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="ad-content-grid">
                      {group.fields.map((field) => (
                        <GroupField
                          key={field.path}
                          field={field}
                          content={current}
                          setValue={setValue}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}

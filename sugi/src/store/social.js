import { SOCIAL_LINKS } from "../data/site";

// ==========================================================================
// SOCIAL LINKS
// Builds the list of social profiles to show from the admin settings.
// If nothing is configured yet, the bundled placeholder profiles are used.
// An empty field hides that icon in the footer/contact page.
// ==========================================================================

export function socialLinks(settingsSocial) {
  const configured = settingsSocial && Object.values(settingsSocial).some(Boolean);
  if (!configured) return SOCIAL_LINKS.map((s) => ({ ...s }));

  const map = {
    LinkedIn: settingsSocial.linkedin,
    Facebook: settingsSocial.facebook,
    Instagram: settingsSocial.instagram,
    X: settingsSocial.twitter,
  };

  return SOCIAL_LINKS.map((s) =>
    map[s.label] ? { label: s.label, href: map[s.label] } : null
  ).filter(Boolean);
}

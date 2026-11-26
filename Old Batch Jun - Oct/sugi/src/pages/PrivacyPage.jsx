import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { useSite } from "../store/SiteContext";
import { EMAIL, COMPANY } from "../data/site";
import "../styles/privacy.css";

// ==========================================================================
// PRIVACY POLICY — every heading and paragraph is editable in
// Admin Panel > Website Content > Privacy Page.
// {company} and {email} placeholders are replaced with the site's current
// company name and contact email.
// ==========================================================================

export default function PrivacyPage() {
  useReveal();
  const { settings, content } = useSite();
  const page = content?.pages?.privacy || {};
  const hero = page.hero || {};
  const sections = page.sections || [];

  const companyName = settings?.siteName || COMPANY;
  const email = settings?.contact?.email || EMAIL;
  const fill = (text) =>
    String(text || "")
      .replaceAll("{company}", companyName)
      .replaceAll("{email}", email);

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        intro={hero.intro}
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="privacy section-pad">
        <div className="container privacy__inner">
          <nav className="privacy__toc reveal" aria-label="Contents">
            <h2>{page.tocTitle || "On this page"}</h2>
            <ol>
              {sections.map((s, i) => (
                <li key={`${s.title}-${i}`}>
                  <a href={`#privacy-${i + 1}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="privacy__body">
            {sections.map((s, i) => (
              <article className="privacy__section reveal" id={`privacy-${i + 1}`} key={`${s.title}-${i}`}>
                <h2>
                  <span className="privacy__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                {(s.paragraphs || []).map((p, j) => (
                  <p key={j}>{fill(p)}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

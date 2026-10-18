import PageHero from "../components/PageHero";
import useReveal from "../components/useReveal";
import { EMAIL, COMPANY } from "../data/site";
import "../styles/privacy.css";

// ==========================================================================
// PRIVACY POLICY — plain-language policy for this website.
// It only describes what this site actually does. Adjust if analytics,
// advertising cookies or a payment flow are added later.
// ==========================================================================

const SECTIONS = [
  {
    title: "Information we collect",
    body: [
      "When you submit an enquiry or a quotation request through this website, we collect the details you enter, such as your name, company, email address, phone number, country and your product requirement.",
      "We do not collect any sensitive financial information through this website. There is no payment or checkout functionality on this site.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you provide only to respond to your enquiry, prepare a quotation, and coordinate product, packing, shipping and documentation details for your order.",
      "We may also use your contact details to follow up on an existing conversation, or to share an update directly related to your requirement.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "We do not sell or rent your personal information. Details you share are used internally by our team and, where needed to fulfil your order, with our logistics, freight and documentation partners and with the relevant authorities for export compliance.",
    ],
  },
  {
    title: "Third-party services used on this site",
    body: [
      "This website embeds a Google Map to show our location, and links to our social media profiles. Those services operate under their own privacy policies, which we do not control.",
      "No analytics, advertising or tracking cookies are set by this website at this time.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "Enquiry records are kept only for as long as needed to handle your request and for our ordinary business and export record-keeping obligations. You can ask us to delete your details at any time.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You are free to share only the information you are comfortable sharing. If you prefer not to use the online forms, you can reach us directly by email or phone instead.",
      "You may request access to, correction of, or deletion of the personal information we hold about you by contacting us.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable steps to protect the information you send us. As with any online communication, no transmission over the internet can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Children's privacy",
    body: [
      "This website is intended for business use and is not directed at children. We do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. Any changes will be published on this page with an updated date.",
    ],
  },
  {
    title: "Contact us",
    body: [
      `If you have any questions about this privacy policy or about how your information is handled, please contact ${COMPANY} at ${EMAIL}.`,
    ],
  },
];

export default function PrivacyPage() {
  useReveal();

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="How we handle the information you share with us through this website."
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="privacy section-pad">
        <div className="container privacy__inner">
          <nav className="privacy__toc reveal" aria-label="Contents">
            <h2>On this page</h2>
            <ol>
              {SECTIONS.map((s, i) => (
                <li key={s.title}>
                  <a href={`#privacy-${i + 1}`}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="privacy__body">
            {SECTIONS.map((s, i) => (
              <article className="privacy__section reveal" id={`privacy-${i + 1}`} key={s.title}>
                <h2>
                  <span className="privacy__num" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </h2>
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

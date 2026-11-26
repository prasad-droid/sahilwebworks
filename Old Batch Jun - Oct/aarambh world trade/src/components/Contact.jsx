import { SectionHeading } from './SectionHeading.jsx';
import { Reveal } from './Reveal.jsx';
import { Icon } from './Icons.jsx';
import { QuoteForm } from './QuoteForm.jsx';
import {
  BUSINESS_NAME,
  BUSINESS_TYPE,
  TAGLINE,
  PHONE_DISPLAY,
  PHONE_TEL,
  PHONE_2_DISPLAY,
  PHONE_2_TEL,
  EMAIL,
  ADDRESS,
  MAP_URL,
  MAP_EMBED_URL,
  LOGO,
  whatsappLink,
} from '../data/business.js';
import { mailtoLink } from '../utils/format.js';

const CHANNELS = [
  {
    id: 'whatsapp',
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: PHONE_DISPLAY,
    href: whatsappLink(),
    note: 'Fastest reply - send your product and quantity',
    external: true,
    highlight: true,
  },
  {
    id: 'phone',
    icon: 'phone',
    label: 'Telephone',
    value: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    note: 'Call during Indian business hours',
  },
  {
    id: 'phone-2',
    icon: 'phone',
    label: 'Alternate mobile',
    value: PHONE_2_DISPLAY,
    href: `tel:${PHONE_2_TEL}`,
    note: 'Second direct-dial number for enquiries',
  },
  {
    id: 'email',
    icon: 'mail',
    label: 'Email',
    value: EMAIL,
    href: mailtoLink(`Enquiry | ${BUSINESS_NAME}`, 'Hello, I would like to discuss a product requirement.'),
    note: 'Send detailed specifications and requirements',
  },
];

/**
 * Contact and quote request in one section.
 *
 * The enquiry form is the primary action: filling it in hands the details to
 * WhatsApp. Direct channels, the registered address and the location map sit
 * alongside it for buyers who prefer to start a conversation directly.
 */
export function Contact() {
  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="container container--wide">
        <SectionHeading
          eyebrow="Contact and quotations"
          title="Contact AARAMBH WORLDTRADE"
          titleId="contact-heading"
          description="Send the product, quantity and destination and we will quote. The form opens WhatsApp with your enquiry ready to send."
          align="center"
        />

        <div className="contact__grid">
          {/* ---- Quote form ----------------------------------------- */}
          <Reveal className="contact__form-wrap" delay={40}>
            <h3 className="contact__form-title">Request a quotation</h3>
            <p className="contact__form-text">
              Fields marked <span aria-hidden="true">*</span> are required. Everything you type is
              assembled into a single WhatsApp message.
            </p>
            <QuoteForm />
          </Reveal>

          {/* ---- Channels, address and map --------------------------- */}
          <div className="contact__side">
            <Reveal className="contact__channels" delay={80}>
              <h3 className="contact__side-title">Talk to us directly</h3>
              <ul className="contact__list">
                {CHANNELS.map((c) => (
                  <li key={c.id}>
                    <a
                      className={`contact__channel${c.highlight ? ' contact__channel--wa' : ''}`}
                      href={c.href}
                      {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      <span className="contact__channel-icon" aria-hidden="true">
                        <Icon name={c.icon} size={20} />
                      </span>
                      <span className="contact__channel-body">
                        <span className="contact__channel-label">{c.label}</span>
                        <strong>{c.value}</strong>
                        <span className="contact__channel-note">{c.note}</span>
                      </span>
                      <Icon name="arrowUpRight" size={18} className="contact__channel-go" />
                    </a>
                  </li>
                ))}
              </ul>

              <div className="contact__address">
                <p className="eyebrow">Registered location</p>
                <address>
                  <strong>{BUSINESS_NAME}</strong>
                  <span>{BUSINESS_TYPE}</span>
                  <span>{ADDRESS.line1}</span>
                  <span>{ADDRESS.line2}</span>
                  <span>India - {ADDRESS.postcode}</span>
                </address>
                <a
                  className="contact__map-link"
                  href={MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="pin" size={17} />
                  View our location on Google Maps
                </a>
              </div>
            </Reveal>

            <Reveal className="contact__map-wrap" delay={120} variant="right">
              <div className="contact__map">
                <iframe
                  src={MAP_EMBED_URL}
                  title={`Map showing the location of ${BUSINESS_NAME}, ${ADDRESS.singleLine}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="contact__map-card">
                <img
                  className="contact__logo"
                  src={LOGO.src}
                  width={LOGO.width}
                  height={LOGO.height}
                  alt={LOGO.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <strong>{BUSINESS_NAME}</strong>
                  <span>{TAGLINE}</span>
                  <span>{ADDRESS.singleLine}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

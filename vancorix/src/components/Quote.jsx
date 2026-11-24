import { useState } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS, whatsappLink } from '../data/site';

const initialForm = {
  name: '',
  company: '',
  email: '',
  sku: '',
  volume: '',
  destination: '',
  notes: '',
};

const Quote = () => {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = [
      'New quote request — Vancorix International',
      `Name: ${form.name}`,
      `Company: ${form.company || '—'}`,
      `Email: ${form.email}`,
      `SKU: ${form.sku}`,
      `Volume: ${form.volume}`,
      `Destination: ${form.destination}`,
      `Notes: ${form.notes || '—'}`,
    ].join('\n');

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return (
    <section className="section quote" id="quote">
      <div className="shell quote-grid">
        <div className="quote-intro">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-dot" /> Request a quote</p>
          <h2>Tell us the SKU, volume and destination.</h2>
          <p className="section-lead">
            We return specifications, sample terms and lead time within one business day.
          </p>
          <div className="quote-note">
            <CheckCircle2 size={19} strokeWidth={1.8} />
            <span>No obligation — just a clear, written offer.</span>
          </div>
        </div>

        <div className="quote-card">
          {sent ? (
            <div className="quote-success" role="status">
              <CheckCircle2 size={40} strokeWidth={1.5} />
              <h3>Your request is ready</h3>
              <p>
                A WhatsApp chat has opened with your details filled in. Send the message
                there and our team will reply within one business day.
              </p>
              <button className="btn btn-gold" type="button" onClick={() => { setForm(initialForm); setSent(false); }}>
                Send another request <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          ) : (
            <form className="quote-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <label>
                  <span>Your name *</span>
                  <input name="name" type="text" value={form.name} onChange={handleChange} placeholder="Full name" required />
                </label>
                <label>
                  <span>Company</span>
                  <input name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Email *</span>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
                </label>
                <label>
                  <span>Destination *</span>
                  <input name="destination" type="text" value={form.destination} onChange={handleChange} placeholder="Country / port" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  <span>Product *</span>
                  <select name="sku" value={form.sku} onChange={handleChange} required>
                    <option value="" disabled>Select a SKU</option>
                    {PRODUCTS.map((product) => (
                      <option key={product.id} value={product.name}>{product.name}</option>
                    ))}
                    <option value="Open to suggestions">Open to suggestions</option>
                  </select>
                </label>
                <label>
                  <span>Monthly volume *</span>
                  <input name="volume" type="text" value={form.volume} onChange={handleChange} placeholder="e.g. 2 MT" required />
                </label>
              </div>
              <label>
                <span>Anything else?</span>
                <textarea name="notes" rows="3" value={form.notes} onChange={handleChange} placeholder="Packaging, certifications, timeline…" />
              </label>
              <button className="btn btn-gold form-submit" type="submit">
                Send inquiry <ArrowRight size={17} strokeWidth={2} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Quote;

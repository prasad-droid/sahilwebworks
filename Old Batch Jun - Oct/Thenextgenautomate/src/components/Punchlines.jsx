import './Punchlines.css'

const punchlines = [
  { label: 'WhatsApp inquiry', line: 'Reply before your competitor even sees the message.' },
  { label: 'Missed call', line: 'Missed call? Not a missed customer.' },
  { label: 'Google reviews', line: 'Collect the good reviews. Catch the bad ones before they go public.' },
  { label: 'Invoicing', line: 'Order placed. Invoice sent. Zero typing.' },
  { label: 'Event reminders', line: 'Birthdays remembered. Customers retained.' },
  { label: 'Lead routing', line: 'Hot leads to your sales team. Cold leads on autopilot.' },
  { label: 'Appointments', line: 'Fewer no-shows. Fuller calendars.' },
  { label: 'Omni-channel inbox', line: 'WhatsApp, email and Instagram, one inbox, smarter replies.' },
  { label: 'Stock alerts', line: 'Know what to reorder before you run out.' },
  { label: 'AI sales bot', line: 'Your best salesperson never sleeps.' },
  { label: 'RAG support', line: 'Answers from your own documents, in seconds.' },
  { label: 'Voice AI', line: 'Every call picked up. Every booking logged.' },
  { label: 'Documents', line: 'Contracts and invoices read in seconds, not hours.' },
  { label: 'Reporting', line: 'Your weekly business report, written for you.' },
  { label: 'Lifecycle', line: 'Capture. Nurture. Book. Review. Retain. All automated.' },
]

function Punchlines() {
  return (
    <section className="punchlines" aria-label="Small automations we build">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">01 / Field notes</span>
          <h2>The small stuff that eats your week.</h2>
          <p className="section-subtitle">
            Fifteen jobs we have turned into systems. Not slogans — each one is a build with a trigger, a
            decision and a human fallback.
          </p>
        </div>

        <ol className="punch-list">
          {punchlines.map((item, index) => (
            <li className="punch-item" key={item.label}>
              <span className="punch-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="punch-body">
                <span className="punch-label">{item.label}</span>
                <p className="punch-line">{item.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Punchlines

import Icon from './Icon'
import './Stack.css'

const stack = [
  {
    icon: 'workflow',
    group: 'Orchestration',
    tools: ['n8n (self-hosted)', 'Make', 'Zapier', 'Code nodes'],
  },
  {
    icon: 'message',
    group: 'Intake & messaging',
    tools: ['WhatsApp Business API', 'Twilio', 'Gmail / Outlook', 'Postmark', 'OpenAI Whisper'],
  },
  {
    icon: 'bot',
    group: 'AI & retrieval',
    tools: ['Claude', 'ChatGPT', 'Pinecone', 'Chroma'],
  },
  {
    icon: 'database',
    group: 'CRM & operations',
    tools: ['HubSpot', 'Airtable', 'Cal.com', 'Google Calendar', 'Zendesk / Freshdesk', 'Postgres'],
  },
]

function Stack() {
  return (
    <section id="stack" className="stack">
      <div className="container">
        <div className="section-header">
          <span className="section-kicker">06 / The workbench</span>
          <h2>Tools we actually use.</h2>
          <p className="section-subtitle">
            We pick the smallest stack that will survive real volume. Most builds run on n8n; the rest is
            usually whatever you already pay for.
          </p>
        </div>

        <div className="stack-grid">
          {stack.map((group) => (
            <div className="stack-group" key={group.group}>
              <h3>
                <Icon name={group.icon} size={15} />
                <span>{group.group}</span>
              </h3>
              <ul>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="stack-bottom">
          <div className="stack-note">
            <p>
              <strong>A rule is cheaper than a model.</strong> We only use AI where the input is genuinely
              unstructured — a message, a document, a call. Everything else is normal logic that is easier to test
              and cheaper to run.
            </p>
            <p>
              No rip-and-replace. Your CRM, calendar and inbox stay where they are. We connect through native
              integrations, webhooks or HTTP calls, and document every connection.
            </p>
          </div>

          <figure className="stack-figure">
            <picture>
              <source media="(max-width: 900px)" srcSet="/images/rule-ai-human-mobile.svg" width="360" height="700" />
              <img
                src="/images/rule-ai-human.svg"
                alt="Decision map for choosing a rule, AI with guardrails, or a human in the loop."
                width="900"
                height="520"
                loading="lazy"
                decoding="async"
              />
            </picture>
            <figcaption>How we choose the tool before writing the automation.</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Stack

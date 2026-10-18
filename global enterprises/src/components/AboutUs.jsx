import { company, aboutContent } from '../data/siteData'
import Icon from './Icons'
import '../styles/AboutUs.css'

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1100&q=80'

export default function AboutUs() {
  const coreBlocks = aboutContent.blocks.filter((b) => ['bg', 'sourcing', 'quality'].includes(b.id))
  const purposeBlocks = aboutContent.blocks.filter((b) => ['vision', 'mission'].includes(b.id))

  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <figure className="about__media reveal">
            <img
              src={ABOUT_IMAGE}
              alt="Engineering facility with industrial equipment and precision machinery"
              loading="lazy"
              width="1100"
              height="1200"
            />
            <div className="about__media-badge">
              <Icon name="supply" size={24} />
              <div>
                <strong>Engineering Goods</strong>
                <span>Supply &amp; Enquiry Support</span>
              </div>
            </div>
          </figure>

          <div className="about__content">
            <div className="section-head section-head--left reveal">
              <p className="eyebrow">About {company.name}</p>
              <h2 className="section-title" id="about-title">
                Your Partner for Engineering Goods
              </h2>
              <p className="section-subtitle">{aboutContent.intro}</p>
              <span className="placeholder-tag" style={{ marginTop: '14px' }}>
                Placeholder content — awaiting company profile
              </span>
            </div>

            <ul className="about__blocks reveal delay-1">
              {coreBlocks.map((block) => (
                <li key={block.id} className="about__block">
                  <span className="about__block-icon" aria-hidden="true">
                    <Icon name={block.id === 'bg' ? 'clipboard' : block.id === 'sourcing' ? 'truck' : 'quality'} size={20} />
                  </span>
                  <div>
                    <h3 className="about__block-title">{block.title}</h3>
                    <p className="about__block-text">{block.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="about__purpose">
          {purposeBlocks.map((block, index) => (
            <article className={`about__purpose-card reveal delay-${index + 1}`} key={block.id}>
              <span className="about__purpose-icon" aria-hidden="true">
                <Icon name={block.id === 'vision' ? 'eye' : 'target'} size={22} />
              </span>
              <div>
                <h3>{block.title}</h3>
                <p>{block.text}</p>
              </div>
              <span className="placeholder-note">Replace with approved {block.title.toLowerCase()}.</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

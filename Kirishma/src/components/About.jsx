import { aboutContent } from '../data/content.js'
import { categories } from '../data/products.js'
import useReveal from '../hooks/useReveal.js'
import SmartImage from './SmartImage.jsx'
import SectionHeading from './SectionHeading.jsx'
import '../styles/about.css'

export default function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__media reveal is-visible" ref={ref}>
          <figure className={`about__figure ${isVisible ? 'is-visible' : ''}`.trim()}>
            <SmartImage
              className="about__image"
              src={aboutContent.image}
              alt={aboutContent.imageAlt}
              width="1200"
              height="800"
            />
            <figcaption className="about__caption">{aboutContent.imageNote}</figcaption>
          </figure>
          <figure className={`about__figure about__figure--small ${isVisible ? 'is-visible' : ''}`.trim()}>
            <SmartImage
              className="about__image"
              src={aboutContent.secondaryImage}
              alt={aboutContent.secondaryImageAlt}
              label="Lasun"
              width="600"
              height="600"
            />
          </figure>
          <span className="about__badge" aria-hidden="true">
            <span className="about__badge-inner">
              <strong>{categories.length}</strong>
              <span>product families</span>
            </span>
          </span>
        </div>

        <div className={`about__content reveal ${isVisible ? 'is-visible' : ''}`.trim()}>
          <SectionHeading
            label={aboutContent.label}
            heading={aboutContent.heading}
            id="about-heading"
            align="left"
          />

          {aboutContent.paragraphs.map((paragraph) => (
            <p className="about__paragraph" key={paragraph}>
              {paragraph}
            </p>
          ))}

          <ul className="about__points">
            {aboutContent.points.map((point) => (
              <li className="about__point" key={point}>
                <span className="about__point-mark" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

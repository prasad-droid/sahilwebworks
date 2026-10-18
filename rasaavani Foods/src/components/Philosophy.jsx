import { IconChilli, IconRecipe, IconJar, IconCraft } from './Icons.jsx'
import '../styles/philosophy.css'

const pillars = [
  {
    icon: IconChilli,
    title: 'Respect the Ingredient',
    text: 'We believe good food begins with thoughtfully selected ingredients.',
  },
  {
    icon: IconRecipe,
    title: 'Respect the Recipe',
    text: 'Traditional recipes carry generations of knowledge. We aim to preserve their authentic character.',
  },
  {
    icon: IconJar,
    title: 'Respect Traditional Preservation',
    text: 'Indian food traditions have long used techniques such as drying, curing, salting, oil preservation and fermentation to extend shelf life and develop flavour.',
  },
  {
    icon: IconCraft,
    title: 'Respect the Craft',
    text: 'Food made with care tastes different. We value the people, processes and patience behind every product.',
  },
]

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section section--sand section--texture philosophy"
    >
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow eyebrow--center">Our Philosophy</p>
          <h2>
            Tradition Is Our Inspiration. Nature Is Our Guide. Quality Is Our
            Promise.
          </h2>
        </div>

        <div className="philosophy__grid">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <article
                key={pillar.title}
                className="philosophy__card"
                data-reveal
                style={{ '--reveal-delay': `${index * 90}ms` }}
              >
                <span className="philosophy__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="philosophy__icon">
                  <Icon />
                </span>
                <h3 className="philosophy__title">{pillar.title}</h3>
                <p className="philosophy__text">{pillar.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import '../styles/global-vision.css'

const steps = [
  {
    number: '01',
    title: 'Discover',
    text: 'We explore traditional Indian recipes, ingredients and regional food practices.',
  },
  {
    number: '02',
    title: 'Source',
    text: 'We identify quality ingredients and responsible sourcing partners.',
  },
  {
    number: '03',
    title: 'Preserve',
    text: 'We work with traditional preparation and preservation principles.',
  },
  {
    number: '04',
    title: 'Craft',
    text: 'We bring together authenticity, quality and contemporary food standards.',
  },
  {
    number: '05',
    title: 'Share',
    text: 'We bring these flavours to homes in India and aim to share them with tables around the world.',
  },
]

export default function Journey() {
  return (
    <section id="journey" className="section section--cream journey">
      <div className="container">
        <div className="section-head section-head--center" data-reveal>
          <p className="eyebrow eyebrow--center">Our Journey</p>
          <h2>The Rasavaani Journey</h2>
          <p>
            A simple process, repeated with care&mdash;from the first recipe to
            the family table.
          </p>
        </div>

        <ol className="journey__timeline">
          {steps.map((step, index) => (
            <li
              key={step.number}
              className="journey__step"
              data-reveal
              style={{ '--reveal-delay': `${index * 110}ms` }}
            >
              <span className="journey__number">{step.number}</span>
              <span className="journey__marker" aria-hidden="true" />
              <h3 className="journey__title">{step.title}</h3>
              <p className="journey__text">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

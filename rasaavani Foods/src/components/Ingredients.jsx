import { images } from '../data/images.js'
import { IconCheck } from './Icons.jsx'
import '../styles/heritage.css'

const highlights = [
  'Natural ingredients',
  'Traditional preparation',
  'Authentic flavours',
  'Thoughtful processing',
  'Responsible preservation',
]

export default function Ingredients() {
  return (
    <section id="ingredients" className="section section--white ingredients">
      <div className="container ingredients__grid">
        <div className="ingredients__content" data-reveal="left">
          <p className="eyebrow">Nature &amp; Tradition</p>
          <h2>Food Inspired by Nature &amp; Tradition</h2>
          <div className="ingredients__body">
            <p>
              Traditional Indian food practices were often built around making
              the most of seasonal ingredients. Methods such as drying, curing,
              salting, oil preservation and fermentation have historically
              played an important role in Indian food culture.
            </p>
            <p>
              At Rasavaani, we draw inspiration from these traditions while
              developing products suited to contemporary consumers.
            </p>
          </div>

          <ul className="ingredients__list">
            {highlights.map((item) => (
              <li key={item}>
                <span className="ingredients__check" aria-hidden="true">
                  <IconCheck />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="ingredients__note">
            We describe our approach as inspired by traditional preservation
            methods. We do not make unsupported claims about nutrition,
            additives or shelf life.
          </p>
        </div>

        <div className="ingredients__media" data-reveal="right">
          <figure className="ingredients__figure ingredients__figure--tall media media--zoom">
            <img
              src={images.ingredientGaram}
              alt="A bowl of ground garam masala spice blend (representative photograph)"
              loading="lazy"
            />
          </figure>
          <figure className="ingredients__figure ingredients__figure--small media media--zoom">
            <img
              src={images.ingredientMustard}
              alt="Mustard seeds, a traditional pickling ingredient (representative photograph)"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

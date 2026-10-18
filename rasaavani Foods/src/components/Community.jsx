import { images } from '../data/images.js'
import '../styles/global-vision.css'

const people = [
  'Farmers who grow the ingredients.',
  'Women and food makers who carry recipes forward.',
  'Communities that preserve regional food traditions.',
  'Families that keep these flavours alive.',
]

export default function Community() {
  return (
    <section id="community" className="section section--sand community">
      <div className="container community__grid">
        <div className="community__media" data-reveal="left">
          <figure className="community__figure community__figure--tall media media--zoom">
            <img
              src={images.communityFarmers}
              alt="An Indian farmer standing in a field (representative photograph)"
              loading="lazy"
            />
          </figure>
          <figure className="community__figure community__figure--small media media--zoom">
            <img
              src={images.communityHarvest}
              alt="A flooded paddy field in India (representative photograph)"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="community__content" data-reveal="right">
          <p className="eyebrow">Community</p>
          <h2>Preserving More Than Recipes</h2>
          <p className="community__lead">
            Traditional food is about people&mdash;the hands, the knowledge and
            the communities behind every recipe.
          </p>

          <ul className="community__list">
            {people.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="community__statement">
            As Rasavaani grows, we aspire to build meaningful relationships
            across this ecosystem and contribute towards preserving
            India&rsquo;s culinary heritage while creating sustainable
            opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}

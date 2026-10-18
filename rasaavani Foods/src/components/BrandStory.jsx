import { images } from '../data/images.js'
import '../styles/story.css'

export default function BrandStory() {
  return (
    <section id="story" className="section section--cream story">
      <div className="container story__grid">
        <div className="story__media" data-reveal="left">
          <figure className="story__figure story__figure--main media media--zoom">
            <img
              src={images.story}
              alt="A traditional Indian kitchen and earthen cooking stove (representative photograph)"
              loading="lazy"
            />
          </figure>
          <figure className="story__figure story__figure--inset media media--zoom">
            <img
              src={images.storyMarket}
              alt="Indian spices arranged at a market stall (representative photograph)"
              loading="lazy"
            />
          </figure>
          <span className="story__stamp" aria-hidden="true">
            <span>Since</span>
            <strong>Heritage</strong>
          </span>
        </div>

        <div className="story__content" data-reveal="right">
          <p className="eyebrow">Our Story</p>
          <h2>From India&rsquo;s Kitchens to the World</h2>

          <div className="story__body">
            <p>
              India&rsquo;s culinary heritage is more than food. It is a story
              of seasons, soil, spices, generations and traditions.
            </p>
            <p>
              Across Indian homes and communities, traditional recipes evolved
              around locally available ingredients and ingenious methods of
              preservation. Pickling, sun-drying, fermenting and spice
              preservation helped families enjoy seasonal produce beyond its
              natural season.
            </p>
            <p className="story__emphasis">
              Rasavaani was born from our desire to preserve this food
              heritage&mdash;not just as a memory, but as a living tradition.
            </p>
            <p>
              We seek out traditional recipes and bring them into contemporary
              food experiences while respecting their authentic character.
            </p>
            <p className="story__closing">
              Our journey begins with{' '}
              <em>Lal Mirch Bharwa Achaar</em>. But it certainly doesn&rsquo;t
              end there.
            </p>
          </div>

          <a href="#philosophy" className="story__link">
            Discover what guides us
          </a>
        </div>
      </div>
    </section>
  )
}

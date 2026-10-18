import { images } from '../data/images.js'
import '../styles/heritage.css'

const gallery = [
  {
    src: images.heritageSpices,
    alt: 'Indian spices displayed at a market (representative photograph)',
    size: 'large',
  },
  {
    src: images.heritagePickle,
    alt: 'Assorted pickles in bowls (representative photograph)',
    size: 'small',
  },
  {
    src: images.heritageSouthThali,
    alt: 'A South Indian vegetarian thali (representative photograph)',
    size: 'small',
  },
  {
    src: images.heritageDarjeel,
    alt: 'Indian spices, seeds and nuts (representative photograph)',
    size: 'small',
  },
  {
    src: images.storyPreserves,
    alt: 'Jars of preserved produce on shelves (representative photograph)',
    size: 'small',
  },
  {
    src: images.heritageMeal,
    alt: 'A traditional Indian meal spread (representative photograph)',
    size: 'small',
  },
]

export default function FoodHeritage() {
  return (
    <section id="heritage" className="section section--dark heritage">
      <div className="container">
        <div className="section-head" data-reveal>
          <p className="eyebrow eyebrow--light">Food Heritage</p>
          <h2>More Than Just a Pickle Brand</h2>
          <p>
            India has thousands of traditional recipes shaped by regional
            ingredients, climate, culture and generations of culinary wisdom.
          </p>
        </div>

        <div className="heritage__gallery">
          {gallery.map((item, index) => (
            <figure
              key={item.src}
              className={`heritage__tile heritage__tile--${item.size} media media--zoom`}
              data-reveal
              style={{ '--reveal-delay': `${index * 80}ms` }}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>

        <p className="heritage__disclaimer" data-reveal>
          Photographs are representative of India&rsquo;s culinary diversity and
          do not depict current Rasavaani products.
        </p>
      </div>

      <div className="heritage__story" data-reveal>
        <div className="heritage__story-inner container container--narrow">
          <p className="eyebrow eyebrow--light eyebrow--center">
            Food with a Story
          </p>
          <h3>Every Recipe Has a Journey.</h3>
          <p>
            Behind every traditional Indian food lies a story. A
            grandmother&rsquo;s kitchen. A seasonal harvest. A family recipe. A
            regional spice blend. A traditional preservation technique. A
            festival. A memory.
          </p>
          <p>
            At Rasavaani, we want to bring these stories back to the table.
            Because food is not just something we eat. It is something we
            inherit, experience and pass forward.
          </p>
        </div>
      </div>
    </section>
  )
}

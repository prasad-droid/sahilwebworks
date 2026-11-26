import garlicImg from '../images/garlic-powder.jpeg'
import onionImg from '../images/onion-powder.jpeg'
import onionAltImg from '../images/onion-powder-2.jpeg'
import moringaImg from '../images/moringa-powder.jpeg'
import logoImg from '../images/logo.jpeg'

const px = (id, w) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&q=80`

export const images = {
  logo: {
    src: logoImg,
    alt: 'Aviyana Enterprises logo',
  },
  hero: {
    src: px(12955789, 1920),
    alt: 'Fresh garlic bulbs and cloves photographed up close against a dark background',
  },
  aboutMain: {
    src: '/About Image.jpg',
    alt: 'Aviyana Enterprises — premium Indian dehydrated and natural ingredients',
  },
  aboutSub: {
    src: px(35894304, 800),
    alt: 'Indian farmer tending crops in a lush green agricultural field',
  },
  garlic: {
    src: garlicImg,
    alt: 'Dehydrated garlic powder',
  },
  onion: {
    src: onionImg,
    hover: onionAltImg,
    alt: 'Red onion powder',
  },
  moringa: {
    src: moringaImg,
    alt: 'Moringa powder',
  },
  appFood: {
    src: px(36823725, 1000),
    alt: 'Modern industrial food production facility interior with a processing line',
  },
  appSeasonings: {
    src: px(36598383, 1000),
    alt: 'Vibrant assortment of colourful spice powders in wooden boxes',
  },
  appNutraceutical: {
    src: px(37475886, 1000),
    alt: 'Green powder being filled into capsules on a tray',
  },
  appWellness: {
    src: px(6956437, 1000),
    alt: 'Glass jars of dried herbs and spices lit in warm natural light',
  },
  privateLabel: {
    src: 'https://plus.unsplash.com/premium_photo-1681487516403-773ca29231e0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnaW5nfGVufDB8fDB8fHww',
    alt: 'Warehouse packaging background',
  },
  packJars: {
    src: px(11882648, 800),
    alt: 'Clear glass jars filled with spices and dried herbs',
  },
  packPouches: {
    src: px(6152271, 800),
    alt: 'Industrial bag sealer beside stacked boxes in a storehouse',
  },
  packBulk: {
    src: px(32506154, 800),
    alt: 'Harvested kernels packed in burlap sacks in India',
  },
  packCartons: {
    src: px(6170154, 800),
    alt: 'Stacked export carton boxes ready for shipping',
  },
  packSectionBg: {
    src: 'https://plus.unsplash.com/premium_photo-1681487516403-773ca29231e0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFja2FnaW5nfGVufDB8fDB8fHww',
    alt: 'Warehouse packaging background',
  },
  finalCta: {
    src: px(10432440, 1920),
    alt: 'Red onion being chopped close up with a knife',
  },
}
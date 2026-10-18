import logo from '../assets/logo.png';

import textileJuteBags from '../assets/Textile/jute bags.jpeg';
import textileCottonTote from '../assets/Textile/cotton tote bag.jpeg';
import textileCanvaTote from '../assets/Textile/Canva tote bag.jpeg';
import textileDrawstring from '../assets/Textile/cotton drawstring bag.jpeg';
import textileJuteCanvas from '../assets/Textile/jute bag with canvas.jpeg';
import textileJuteWindow from '../assets/Textile/jute bag with window.jpeg';

import dehydBananaPowder from '../assets/DehydratedProducts/banana powder.jpeg';
import dehydCoconuts from '../assets/DehydratedProducts/coconuts.jpeg';
import dehydGreenChilies from '../assets/DehydratedProducts/Green Chilies.jpeg';
import dehydPomegranate from '../assets/DehydratedProducts/pomogranate.jpeg';
import dehydPomegranate2 from '../assets/DehydratedProducts/pomogranate2.jpeg';
import dehydRedChiliPowder from '../assets/DehydratedProducts/red chili powder.jpeg';
import dehydTurmericPowder from '../assets/DehydratedProducts/turmeric powder.jpeg';

const textile = [
  textileJuteBags,
  textileCottonTote,
  textileCanvaTote,
  textileDrawstring,
  textileJuteCanvas,
  textileJuteWindow,
];

const dehydrated = [
  dehydBananaPowder,
  dehydCoconuts,
  dehydGreenChilies,
  dehydPomegranate,
  dehydPomegranate2,
  dehydRedChiliPowder,
  dehydTurmericPowder,
];

const assets = {
  logo,
  textile,
  dehydrated,
  products: [...textile, ...dehydrated],
  all: [...textile, ...dehydrated],
};

export default assets;
import moringa from '../assets/images/moringa.jpg';
import turmeric from '../assets/images/turmeric.jpg';
import amla from '../assets/images/amla.jpg';
import ginger from '../assets/images/ginger.jpg';
import cinnamon from '../assets/images/cinnamon.jpg';
import banana from '../assets/images/banana.jpg';
import spinach from '../assets/images/spinach.jpg';
import greenApple from '../assets/images/green-apple.jpg';

export const WHATSAPP_NUMBER = '919225354180';

export const whatsappLink = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const PRODUCTS = [
  {
    id: '01',
    name: 'Moringa Powder',
    botanical: 'Moringa oleifera',
    mesh: '80–100',
    pack: '25 kg · foil',
    moq: '500 kg',
    image: moringa,
  },
  {
    id: '02',
    name: 'Haldi (Turmeric)',
    botanical: 'Curcuma longa',
    mesh: '100–120',
    pack: '20 kg · PP',
    moq: '1000 kg',
    image: turmeric,
  },
  {
    id: '03',
    name: 'Amla (Gooseberry)',
    botanical: 'Phyllanthus emblica',
    mesh: '80–100',
    pack: '25 kg · foil',
    moq: '500 kg',
    image: amla,
  },
  {
    id: '04',
    name: 'Ginger Powder',
    botanical: 'Zingiber officinale',
    mesh: '100–120',
    pack: '25 kg · foil',
    moq: '500 kg',
    image: ginger,
  },
  {
    id: '05',
    name: 'Cinnamon Powder',
    botanical: 'Cinnamomum verum',
    mesh: '80–100',
    pack: '20 kg · PP',
    moq: '500 kg',
    image: cinnamon,
  },
  {
    id: '06',
    name: 'Banana Powder',
    botanical: 'Musa sapientum',
    mesh: '100–120',
    pack: '25 kg · foil',
    moq: '1000 kg',
    image: banana,
  },
  {
    id: '07',
    name: 'Spinach Powder',
    botanical: 'Spinacia oleracea',
    mesh: '100–120',
    pack: '25 kg · foil',
    moq: '500 kg',
    image: spinach,
  },
  {
    id: '08',
    name: 'Green Apple Powder',
    botanical: 'Malus domestica',
    mesh: '100–120',
    pack: '20 kg · PP',
    moq: '1000 kg',
    image: greenApple,
  },
];

export const QUALITY_POINTS = [
  { value: '100%', label: 'Lab-tested per lot' },
  { value: 'FSSAI', label: '+ APEDA registration' },
  { value: 'Batch', label: 'Full traceability codes' },
  { value: 'Vacuum', label: 'Sealed pouch, shelf-stable' },
];

export const COUNTRIES = [
  'United Arab Emirates', 'Netherlands', 'China', 'United Kingdom', 'Germany',
  'Bangladesh', 'Saudi Arabia', 'Singapore', 'Australia', 'Italy', 'Nepal',
  'France', 'Hong Kong, China', 'South Africa', 'Brazil', 'Spain', 'Belgium',
  'Malaysia', 'Japan',
];

export const PROCESS_STEPS = [
  { id: '01', title: 'Sourcing', description: 'Contract farms, verified origin lots.' },
  { id: '02', title: 'Milling', description: 'Uniform mesh, controlled moisture.' },
  { id: '03', title: 'Testing', description: 'COA, microbial & heavy-metal screen.' },
  { id: '04', title: 'Seal & ship', description: 'Vacuum pouch, FCL/LCL dispatch.' },
];

import { searchFiles, categoryFiles } from './commons-client.mjs';

const SLOTS = [
  { id: 'tomato', q: ['intitle:tomatoes dried', 'Category:Dried tomatoes', 'intitle:"tomato paste"'] },
  { id: 'beetroot', q: ['Category:Beetroot', 'intitle:beetroot'] },
  { id: 'banana', q: ['Category:Banana powder', 'intitle:"banana chips"', 'Category:Banana chips'] },
  { id: 'raisins', q: ['intitle:raisins', 'intitle:sultana', 'Category:Sultana raisins'] },
  { id: 'pulses', q: ['intitle:lentils', 'Category:Lens culinaris', 'Category:Pulses'] },
  { id: 'lab', q: ['Category:Food analysis', 'Category:Laboratory work', 'intitle:"laboratory" food analysis'] },
  { id: 'warehouse', q: ['intitle:warehouse interior', 'Category:Storage warehouses', 'intitle:"grain silo"'] },
  { id: 'ship', q: ['intitle:"container ship"', 'Category:Container ships at sea'] },
  { id: 'chilli', q: ['Category:Dried chili peppers', 'Category:Chili powder'] },
  { id: 'turmeric', q: ['Category:Curcuma longa powder', 'Category:Turmeric powder', 'intitle:"turmeric powder"'] },
  { id: 'seeds', q: ['Category:Mustard seeds', 'Category:Coriander seeds', 'intitle:"mustard seeds"'] },
  { id: 'wheat', q: ['Category:Wheat fields', 'Category:Wheat harvest'] },
  { id: 'cardamom', q: ['Category:Elettaria cardamomum', 'Category:Cardamom'] },
  { id: 'pepper', q: ['Category:Piper nigrum', 'Category:Black pepper'] },
  { id: 'bananaplant', q: ['Category:Banana plantations', 'Category:Musa balbisiana'] },
  { id: 'herbs', q: ['Category:Curry leaves', 'Category:Dried leaves'] },
  { id: 'vegmarket', q: ['Category:Vegetable markets in India', 'Category:Vegetables in India'] },
  { id: 'garlic', q: ['Category:Allium sativum bulbs', 'Category:Garlic'] },
  { id: 'nut', q: ['Category:Cashew nuts', 'Category:Almonds'] },
];

for (const slot of SLOTS) {
  console.log(`\n===== ${slot.id} =====`);
  for (const q of slot.q) {
    const isCat = q.startsWith('Category:');
    const files = isCat
      ? await categoryFiles(q, { limit: 24, thumbWidth: 1600 })
      : await searchFiles(q, { limit: 18, thumbWidth: 1600 });
    console.log(`  [${isCat ? 'cat' : 'q'}] ${q} -> ${files.length}`);
    for (const f of files.slice(0, 9)) {
      console.log(
        `      ${String(f.width).padStart(5)}x${String(f.height).padEnd(5)} ${f.title
          .replace('File:', '')
          .slice(0, 72)}`
      );
      if (f.categories.length)
        console.log(`              [${f.categories.filter((c) => !/Self-published|Uploaded|Flickr|Camera|Taken with|coordinates|license|License|PD |CC-Zero|SDC|Infobox|description/i.test(c)).slice(0, 4).join(' | ')}]`);
    }
    if (files.length >= 6) break;
  }
}

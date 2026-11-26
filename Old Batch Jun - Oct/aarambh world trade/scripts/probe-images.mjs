/**
 * Dry-run probe: prints candidate Commons files (title + size + categories)
 * for each image slot so the picks can be reviewed as text before downloading.
 *
 *   node scripts/probe-images.mjs [slotFilter]
 */
import { searchFiles, categoryFiles } from './commons-client.mjs';

const SLOTS = [
  { id: 'tomato-powder', queries: ['intitle:"tomato powder"', '"tomato powder"'] },
  { id: 'ginger-powder', queries: ['intitle:"ginger powder"', '"ginger powder"'] },
  { id: 'beetroot-powder', queries: ['intitle:"beetroot powder"', 'intitle:"beet powder"'] },
  { id: 'banana-powder', queries: ['intitle:"banana powder"', 'intitle:"banana flour"'] },
  { id: 'spices', cats: ['Category:Spices by colour', 'Category:Indian spices', 'Category:Spice markets'] },
  { id: 'rice', cats: ['Category:Basmati rice'] },
  { id: 'raisins', cats: ['Category:Raisins'] },
  { id: 'other-agro', cats: ['Category:Lentils', 'Category:Dal', 'Category:Pulses'] },
  { id: 'hero-spices', queries: ['spice market India bowls colourful', 'Category:Spice markets'] },
  { id: 'hero-trade', cats: ['Category:Container ships at sea', 'Category:Container terminals'] },
  { id: 'about-agriculture', cats: ['Category:Paddy fields in India', 'Category:Rice cultivation'] },
  { id: 'about-sourcing', cats: ['Category:Spice markets in India', 'Category:Whole spice markets'] },
  { id: 'quality', cats: ['Category:Food safety', 'Category:Laboratory analysis'] },
  { id: 'packaging', cats: ['Category:Food packaging', 'Category:Sacks'] },
  { id: 'warehouse', cats: ['Category:Warehouses', 'Category:Pallets'] },
  { id: 'loading', cats: ['Category:Container terminals', 'Category:Forklift trucks loading'] },
  { id: 'global-shipping', cats: ['Category:Container ships', 'Category:Cargo ships'] },
  { id: 'g-chilli', cats: ['Category:Dried chili peppers'] },
  { id: 'g-turmeric', cats: ['Category:Turmeric powder'] },
  { id: 'g-seeds', cats: ['Category:Mustard seeds', 'Category:Coriander seeds'] },
  { id: 'g-wheat', cats: ['Category:Wheat fields', 'Category:Wheat harvest'] },
  { id: 'g-cardamom', cats: ['Category:Cardamom'] },
  { id: 'g-pepper', cats: ['Category:Black pepper'] },
  { id: 'g-banana', cats: ['Category:Banana plantations'] },
  { id: 'g-herbs', cats: ['Category:Dried herbs', 'Category:Curry leaves'] },
  { id: 'g-veg', cats: ['Category:Vegetable markets in India', 'Category:Vegetable farming in India'] },
  { id: 'g-garlic', cats: ['Category:Garlic'] },
  { id: 'g-rice-sacks', cats: ['Category:Rice bags', 'Category:Rice storage'] },
  { id: 'g-nuts', cats: ['Category:Cashew nuts'] },
];

const filter = process.argv[2];
const slots = filter ? SLOTS.filter((s) => s.id.includes(filter)) : SLOTS;

for (const slot of slots) {
  console.log(`\n===== ${slot.id} =====`);

  if (slot.cats) {
    for (const cat of slot.cats) {
      const files = await categoryFiles(cat, { limit: 30, thumbWidth: 1600 });
      console.log(`  [cat] ${cat} -> ${files.length} file(s)`);
      for (const f of files.slice(0, 14)) {
        console.log(
          `      ${f.width}x${f.height} ${f.title.replace('File:', '').slice(0, 78)}`
        );
        if (f.categories.length) console.log(`          [${f.categories.slice(0, 5).join(' | ')}]`);
      }
      if (files.length) break;
    }
  }

  if (slot.queries) {
    for (const q of slot.queries) {
      const files = await searchFiles(q, { limit: 20, thumbWidth: 1600 });
      console.log(`  [q] "${q}" -> ${files.length} file(s)`);
      for (const f of files.slice(0, 12)) {
        console.log(
          `      ${f.width}x${f.height} ${f.title.replace('File:', '').slice(0, 78)}`
        );
        if (f.categories.length) console.log(`          [${f.categories.slice(0, 5).join(' | ')}]`);
      }
    }
  }
}

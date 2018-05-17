import { Chance } from 'chance';
const chance = new Chance();
const categories = [
  { english: 'Announcement', french: 'Annonce' },
  { english: 'Reading', french: 'Lecture' },
  { english: 'Writing', french: 'Écriture' },
  { english: 'Entertainment', french: 'Divertissement' },
  { english: 'News', french: 'Actualités' },
  { english: 'Society', french: 'Société' },
  { english: 'Computer Science', french: 'Informatique' },
];

export default function cats() {
  const cats = [];

  for (const [i, cat] of categories.entries()) {
    const color = chance.color({ format: 'rgb' });
    cats.push({
      labels: cat,
      color,
    });
  }

  return cats;
}

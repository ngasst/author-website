import { Chance } from 'chance';
import { random, range } from 'lodash';
import categories from './categories';
import subcategories from './subcategories';

const rw = require('random-word');
const randwds = require('random-words');
const Fakerator = require('fakerator');

const chance = new Chance();
const fake = Fakerator();

export default function loadPosts() {
  const posts: any[] = [];
  const categories = [
    'abstract',
    'nightlife',
    'sports',
    'city',
    'business',
    'cats',
    'animals',
    'food',
    'fashion',
    'people',
    'nature',
    'technics',
    'transport',
  ];

  for (const num of range(0, 500)) {
    const word = randwds({ min: 2, max: 3 }).join(',');
    const img = `https://loremflickr.com`;
    const t = randwds({ min: 4, max: 12, join: ' ' });
    const title = t.substring(0, 1).toUpperCase() + t.slice(1);

    posts.push({
      title: title,
      author: null,
      image: {
        thumb: `${img}/800/250/${word}`,
        large: `${img}/1200/500/${word}`,
      },
      summary: chance.paragraph({ sentences: random(4, 7) }),
      location: chance.url(),
      comments: null,
      tags: null,
      category: null,
      subCategories: null,
      views: random(0, 1000000),
      shares: {
        facebook: random(0, 3000000),
        google: random(0, 500),
        twitter: random(0, 2000000),
      },
    });
  }

  return posts;
}

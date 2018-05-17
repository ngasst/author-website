const Chance = require('chance');
const Fakerator = require('fakerator');
const { range, random } = require('lodash');
const categories = require('./categories');
const subcategories = require('./subcategories');
const rw = require('random-word');
const randwds = require('random-words');

const chance = new Chance();
const fake = Fakerator();

module.exports.getPosts = () => {
  const posts = [];
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
    'transport'
  ];

  for (const num of range(0, 500)) {
    const word = randwds({ min: 2, max: 3 }).join(',');
    const img = `https://loremflickr.com`;
    const t = randwds({ min: 4, max: 12, join: ' ' });
    const title = t.substring(0, 1).toUpperCase() + t.slice(1);
    posts.push({
      title: title,
      author: 'Dany G. Zuwen',
      images: {
        desktop: {
          full: `${img}/1200/500/${word}`,
          thumb: `${img}/800/250/${word}`
        },
        tablet: {
          landscape: {
            full: `${img}/800/300/${word}`,
            thumb: `${img}/600/200/${word}`
          }
        },
        phone: {
          landscape: {
            full: `${img}/600/200/${word}`,
            thumb: `${img}/400/150/${word}`
          },
          portrait: {
            full: `${img}/400/150/${word}`,
            thumb: `${img}/300/100/${word}`
          }
        }
      },
      summary: chance.paragraph({ sentences: random(4, 7) }),
      articleUrl: chance.url(),
      comments: null,
      tags: null,
      category: null,
      subcategories: null,
      shares: {
        facebook: random(0, 3000000),
        google: random(0, 500),
        twitter: random(0, 2000000)
      }
    });
  }

  return posts;
};

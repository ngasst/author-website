import { Chance } from 'chance';
const rw = require('random-word');
import { random, range } from 'lodash';
import { IAuthor } from '../../../src/models/interfaces';
const Faker = require('fakerator');

const chance = new Chance();
const fake = Faker();

export default function authors() {
  const authors: any[] = [];

  for (const n of range(50)) {
    authors.push({
      name: {
        last: chance.last(),
        first: chance.first(),
        display: chance.name({ middle_initial: true }),
      },
      social: {
        facebook: `https://www.facebook.com/${chance.name().replace(' ', '.')}`,
        twitter: chance.twitter(),
        website: chance.url(),
      },
      photos: {
        thumb: fake.internet.image(100, 100),
        large: fake.internet.image(500, 800),
      },
    });
  }

  authors.push({
    name: {
      last: 'Zuwen',
      first: 'Dany',
      display: 'Dany G. Zuwen',
    },
    social: {
      website: 'https://www.danyzuwen.com',
      twitter: '@DanyZuwen',
      facebook: 'https://www.facebook.com/danyzuwen',
    },
    photos: {
      thumb: fake.internet.image(100, 100),
      large: fake.internet.image(500, 800),
    },
  });

  return authors;
}

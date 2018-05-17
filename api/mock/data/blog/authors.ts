import { Chance } from 'chance';
const rw = require('random-word');
import { random, range } from 'lodash';
import { IAuthor } from '../../../src/models/interfaces';
const Faker = require('fakerator');

const chance = new Chance();
const fake = Faker();

export default function authors() {
  const authors: IAuthor[] = [];

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
        thumb: fake.internet.image(600, 200),
        large: fake.internet.image(1200, 500),
      },
    });
  }

  return authors;
}

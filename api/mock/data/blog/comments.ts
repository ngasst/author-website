import { random, range } from 'lodash';
import { Chance } from 'chance';
import { IComment } from '../../../src/models/interfaces';

const Faker = require('fakerator');
const fake = Faker();
const chance = new Chance();
const comments: any[] = [];

export default function comms() {
  const origins = ['website', 'twitter', 'facebook'];
  for (const num of range(0, 2000)) {
    comments.push({
      author: random(false) % 2 === 0 ? chance.name : fake.internet.userName(),
      email: chance.email(),
      origin: chance.pickone(origins),
      subject: chance.sentence({ words: random(2, 5) }),
      body: chance.paragraph({ sentences: random(3, 7) }),
      city: chance.city(),
      country: chance.country({ full: true }),
      replies: [],
      moderated: random(false) % 2 === 0,
    });
  }

  return comments;
}

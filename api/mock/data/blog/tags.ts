import { Chance } from 'chance';
const rw = require('random-word');
import { random, range } from 'lodash';

const chance = new Chance();

export default function tags() {
  const tags = [];

  for (const n of range(2000)) {
    tags.push({
      label: rw(),
      usage: random(0, 1000),
    });
  }

  return tags;
}

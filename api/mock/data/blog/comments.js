const { range, random } = require('lodash');
const Chance = require('chance');
const chance = new Chance();
const Faker = require('fakerator');
const fake = Faker();
const comments = [];

module.exports = () => {
  for (const num of range(0, 2000)) {
    comments.push({
      name: random() % 2 === 0 ? chance.name : fake.internet.userName(),
      email: chance.email(),
      isFacebook: false,
      subject: chance.sentence({ words: random(2, 5) }),
      body: chance.paragraph({ sentences: random(3, 7) }),
      city: chance.city(),
      country: chance.country({ full: true }),
      parent: null,
    });
  }

  return comments;
};

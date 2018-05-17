const chalk = require('chalk').default;
const seeders = {
  categories: require('./seed-categories'),
  comments: require('./seed-comments'),
  posts: require('./seed-posts'),
  tags: require('./seed-tags'),
  subcategories: require('./seed-subcategories')
};

Promise.resolve()
  .then(() => seeders.categories())
  .then(() => seeders.subcategories())
  .then(() => seeders.comments())
  .then(() => seeders.tags())
  .then(() => seeders.posts())
  .then(() => {
    const seeded = Object.keys(seeders);
    console.log(
      chalk.green(`Finished seeding ${seeded.length} (${seeded.join(', ')})`)
    );
    process.exit(0);
  })
  .catch(err => {
    console.log(err.stack);
    console.log(chalk.bgRed(err));
    process.exit(-1);
  });

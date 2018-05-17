import { connect } from 'mongoose';
import chalk from 'chalk';
import { deleteAll, seedAll } from './utils';

const DB_NAME = 'dany-zuwen';
const DB_URI =
  process.env.DB_URI ||
  (/linux/.test(process.platform)
    ? `mongodb://mongo/${DB_NAME}`
    : `mongodb://localhost:27017/${DB_NAME}`);

connect(DB_URI)
  .then(async db => {
    console.log(chalk.gray('Emptying database...'));
    await deleteAll(db.connection);
    console.log(chalk.green('Successfully emptied database'));
    return;
  })
  .then(async () => {
    console.log(chalk.gray('Seeding collections...'));
    await seedAll();
    process.exit(0);
  })
  .catch(err => {
    console.log('An error occured during seeding!!!');
    console.log(chalk.red(err));
  });

import { Server } from 'hapi';
import * as hapi from 'hapi';
import chalk from 'chalk';
import routes from './routes';
import * as mongoose from 'mongoose';

// set mongoose promise library
(<any>mongoose.Promise) = global.Promise;

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;
const DB_NAME = 'dany-zuwen';
const DB_URI =
  process.env.DB_URI ||
  (/linux/.test(process.platform)
    ? `mongodb://mongo/${DB_NAME}`
    : `mongodb://localhost:27017/${DB_NAME}`);

let server: Server = new Server({ host, port });
server = routes(server);

server
  .start()
  .then(() => {
    console.log(
      chalk.green(`Server started and listening on ${host} on port ${port}`)
    );
    console.log(chalk.gray(`Attempting connection to db on ${DB_URI}...`));
    mongoose
      .connect(DB_URI)
      .then(d => {
        //
      })
      .catch(err => {
        chalk.red('Could not connect to database!!');
      });
  })
  .catch(err => {
    console.log(err);
  });

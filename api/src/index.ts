import { Server } from 'hapi';
import * as hapi from 'hapi';
import chalk from 'chalk';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const server: Server = new Server({ host, port });

server
  .start()
  .then(() => {
    console.log(
      chalk.green(`Server started and listening on ${host} on port ${port}`)
    );
  })
  .catch(err => {
    console.log(err);
  });

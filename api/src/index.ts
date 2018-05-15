import {Server} from 'hapi';
import * as hapi from 'hapi';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3000;

const server: Server = new Server({host, port});


server.start()
.then((st) => {
    console.log(st);
})
.catch(err => {
    console.log(err);
});
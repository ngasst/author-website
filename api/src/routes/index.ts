import { Server } from 'hapi';
import AuthorsRoutes from './authors.route';
import PostsRoutes from './posts.route';

export default function(server: Server): Server {
  server.route([...AuthorsRoutes, ...PostsRoutes]);
  return server;
}

import { Server } from 'hapi';
import UsersRoutes from './users';
import PostsRoutes from './posts';

export default function(server: Server): Server {
  server.route([UsersRoutes, PostsRoutes]);
  return server;
}

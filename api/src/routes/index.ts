import { Server, RouteExtObject, ServerRoute } from 'hapi';
import AuthorsRoutes from './authors.route';
import PostsRoutes from './posts.route';

const routes: ServerRoute[] = [...AuthorsRoutes, ...PostsRoutes];
export default routes;

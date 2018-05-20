import { ServerRoute } from 'hapi';
import { PostsController } from '../controllers';

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/posts',
    handler: PostsController.index,
  },
  {
    method: 'GET',
    path: '/post/{slug}',
    handler: PostsController.single,
  },
];

export default routes;

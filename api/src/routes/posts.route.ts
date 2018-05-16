import { ServerRoute } from 'hapi';
import { PostsController } from '../controllers';

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/posts',
    handler: PostsController.index,
  },
];

export default routes;

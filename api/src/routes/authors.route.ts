import { ServerRoute } from 'hapi';
import { AuthorsController } from '../controllers';

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/authors',
    handler: AuthorsController.index,
  },
];

export default routes;

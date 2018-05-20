import { ServerRoute } from 'hapi';
import { AuthorsController } from '../controllers';

const routes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/authors',
    handler: AuthorsController.index,
  },
  {
    method: 'GET',
    path: '/authors/bios/dany',
    handler: AuthorsController.dany,
  },
];

export default routes;

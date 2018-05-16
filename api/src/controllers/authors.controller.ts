import { ResponseToolkit, Request } from 'hapi';

export default class AuthorsController {
  public static async index(
    req: Request,
    h: ResponseToolkit
  ): Promise<IAuthor> {}
}

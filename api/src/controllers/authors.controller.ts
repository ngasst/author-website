import { ResponseToolkit, Request } from 'hapi';
import { IAuthor } from '../models/interfaces';

export default class AuthorsController {
  public static async index(
    req: Request,
    h: ResponseToolkit
  ): Promise<IAuthor> {
    return;
  }
}

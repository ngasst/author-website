import { ServerRequestExtType, ResponseToolkit } from 'hapi';
import { IPost } from '../models/interfaces';

export default class PostsController {
  public static async index(
    req: ServerRequestExtType,
    h: ResponseToolkit
  ): Promise<IPost[]> {
    return;
  }
}

import { ResponseToolkit, Request } from 'hapi';
import { IAuthor } from '../models/interfaces';
import { Utils } from '../core';
export default class AuthorsController {
  public static async index(
    req: Request,
    h: ResponseToolkit
  ): Promise<IAuthor> {
    return;
  }

  public static async dany(
    req: Request,
    h: ResponseToolkit
  ): Promise<{ en: string; fr: string }> {
    let en: string;
    let fr: string;

    if (process.env.NODE_ENV !== 'production') {
      en = await Utils.retrievedMarkdownAsHtml(
        './mock/data/author/bio-en.md',
        false
      );
      fr = await Utils.retrievedMarkdownAsHtml(
        './mock/data/author/bio-fr.md',
        false
      );
    } else {
      const urlfr = '';
      const urlen = '';
      en = await Utils.retrievedMarkdownAsHtml(urlen);
      fr = await Utils.retrievedMarkdownAsHtml(urlfr);
    }

    return { fr, en };
  }
}

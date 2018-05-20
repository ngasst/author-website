import Axios from 'axios';
import { readFile } from 'fs-extra';
const remark = require('remark');
const html = require('remark-html');

export default class Utils {
  public static async retrievedMarkdownAsHtml(
    location: string,
    distant: boolean = true
  ): Promise<any> {
    let md: string;

    if (distant) {
      md = await (await Axios.get(location)).data;
    } else {
      md = (await readFile(location)).toString();
    }

    const markup: any = await new Promise((resolve, reject) => {
      remark()
        .use(html)
        .process(md, (err: Error, file: any) => {
          if (err) reject(err);
          resolve(String(file));
        });
    });

    return markup;
  }
}

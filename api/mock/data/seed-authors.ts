import loadAuthors from './blog/authors';
import { AuthorModel } from '../../src/models';
import chalk from 'chalk';
import { IAuthor } from '../../src/models/interfaces';
import { Document } from 'mongoose';

export default async function seed() {
  const authors = loadAuthors();
  const proms: Promise<Document>[] = [];

  for (const au of authors) {
    const doc: IAuthor = {
      name: au.name,
      social: au.social,
      photos: au.photos,
    };
    const author = new AuthorModel(doc);
    proms.push(author.save());
  }

  const docs = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} authors`));
}

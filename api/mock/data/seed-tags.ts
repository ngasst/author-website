import loadTags from './blog/tags';
import { TagModel } from '../../src/models';
import chalk from 'chalk';
import { ITag } from '../../src/models/interfaces';
import { Document } from 'mongoose';

export default async function seed() {
  const cname = TagModel.collection.name;
  console.log(chalk.magenta(`Seeding ${cname}...`));
  const tags = loadTags();
  const proms: Promise<Document>[] = tags.map(t => new TagModel(t).save());

  const docs = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} ${cname}!`));
  return cname;
}

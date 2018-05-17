import loadTags from './blog/tags';
import { TagModel } from '../../src/models';
import chalk from 'chalk';
import { ITag } from '../../src/models/interfaces';
import { Document } from 'mongoose';

export default async function seed() {
  const tags = loadTags();
  const proms: Promise<Document>[] = [];

  for (const t of tags) {
    const doc: ITag = {
      label: t.label,
      usage: t.usage,
    };
    const tag = new TagModel(doc);
    proms.push(tag.save());
  }

  const docs = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} tags`));
}

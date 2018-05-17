import loadComments from './blog/comments';
import chalk from 'chalk';
import { Document } from 'mongoose';
import { CommentModel } from '../../src/models';

export default async function seed() {
  const cname = CommentModel.collection.name;
  console.log(chalk.magenta(`Seeding ${cname}...`));
  const comments = loadComments();
  const proms: Promise<Document>[] = [];

  for (const comm of comments) {
    const comment = new CommentModel(comm);
    proms.push(comment.save());
  }

  const docs: Document[] = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} ${cname}!`));
  return cname;
}

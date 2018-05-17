import loadPosts from './blog/posts';
import { random } from 'lodash';
import chalk from 'chalk';
import { Chance } from 'chance';
import {
  TagModel,
  CategoryModel,
  CommentModel,
  SubCategoryModel,
  PostModel,
  AuthorModel,
} from '../../src/models';
import {
  ITag,
  ICategory,
  IComment,
  ISubCategory,
  IAuthor,
} from '../../src/models/interfaces';
import { Document } from 'mongoose';

const chance = Chance();

async function populate(posts: any): Promise<Document[]> {
  const populated = [];

  for (const [index, p] of posts.entries()) {
    const tags: ITag[] = await TagModel.aggregate([
      { $sample: { size: random(3, 8) } },
    ]);
    const cat: ICategory = await CategoryModel.findOne({});
    const comms: IComment[] = await CommentModel.aggregate([
      { $sample: { size: random(1, 10) } },
    ]);
    const subcats: ISubCategory[] = await SubCategoryModel.find({
      parent: cat.id,
    });
    let author: IAuthor;
    if (index < posts.length / 2) {
      author = await AuthorModel.findOne({ 'name.display': 'Dany G. Zuwen' });
    } else {
      author = await AuthorModel.findOne({});
    }
    populated.push({
      ...p,
      tags: tags.map(t => t.id),
      category: cat.id,
      comments: comms.map(c => c.id),
      author: author.id,
      subCategories: chance.pick(
        subcats.map(s => s.id),
        random(1, subcats.length)
      ),
    });
  }

  return populated;
}

export default async function seed(): Promise<string> {
  const cname = PostModel.collection.name;
  console.log(chalk.magenta(`Seeding ${cname}...`));
  const posts = loadPosts();
  const populated = await populate(posts);
  const proms: Promise<Document>[] = populated.map(p => {
    return new PostModel(p).save();
  });
  const docs: Document[] = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} ${cname}!`));
  return cname;
}

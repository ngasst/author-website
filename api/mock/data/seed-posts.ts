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

    const autid = author.id || author._id;
    const catid = cat.id || cat._id;
    const commids = comms.map(c => c.id || c._id);
    const subids = subcats.map(s => s.id || s._id);
    const tagids = tags.map(t => t.id || t._id);

    populated.push({
      ...p,
      tags: tagids,
      category: catid,
      comments: commids,
      author: autid,
      subCategories: chance.pick(subids, random(1, subcats.length)),
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

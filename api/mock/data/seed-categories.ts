import loadCategories from './blog/categories';
import { Document } from 'mongoose';
import chalk from 'chalk';
import { CategoryModel } from '../../src/models';
import { ICategory } from '../../src/models/interfaces';

export default async function seed() {
  const cname = CategoryModel.collection.name;
  console.log(chalk.magenta(`Seeding ${cname}...`));
  const categories = loadCategories();
  const proms: Promise<Document>[] = [];
  for (const cat of categories) {
    const category = new CategoryModel(cat);
    proms.push(category.save());
  }
  const docs: Document[] = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} ${cname}!`));
  return cname;
}

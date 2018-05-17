import loadSubCategories from './blog/subcategories';
import { CategoryModel, SubCategoryModel } from '../../src/models';
import chalk from 'chalk';
import { ICategory, ISubCategory } from '../../src/models/interfaces';
import { Document } from 'mongoose';

export default async function subcats() {
  const subcategories = loadSubCategories();

  const proms = subcategories.map(async sub => {
    const doc: ICategory = await CategoryModel.findOne({
      'labels.english': sub.parent,
    });
    return {
      ...sub,
      parent: doc.id,
    };
  });

  const final = await Promise.all(proms);
  const fproms: Promise<Document>[] = [];

  for (const sub of final) {
    const subcat = new SubCategoryModel(sub);
    fproms.push(subcat.save());
  }

  const docs = await Promise.all(proms);
  console.log(chalk.blue(`Inserted ${docs.length} subcategories`));
}

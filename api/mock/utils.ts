import chalk from 'chalk';
import * as models from '../src/models';
import * as Seeder from './data';
const DB_NAME = 'dany-zuwen';
const DB_URI =
  process.env.DB_URI ||
  (/linux/.test(process.platform)
    ? `mongodb://mongo/${DB_NAME}`
    : `mongodb://localhost:27017/${DB_NAME}`);

export async function seedAll(): Promise<string[]> {
  const seeded: string[] = [];
  const seeds: any = Seeder;
  for (const key in seeds) {
    const res = await seeds[key]();
    seeded.push(res);
  }
  return seeded;
}

export async function deleteAll(): Promise<void> {
  const mods: any = {
    tags: models.TagModel,
    cats: models.CategoryModel,
    auths: models.AuthorModel,
    subs: models.SubCategoryModel,
    comms: models.CommentModel,
    posts: models.PostModel,
  };
  try {
    for (const key in mods) {
      const model: any = mods[key] as any;
      console.log(chalk.gray(`Dropping ${model.collection.name}...`));
      model.collection.drop();
      console.log(chalk.blue(`Successfully dropped ${model.collection.name}!`));
    }
  } catch (error) {
    console.log(chalk.red('An error occured while emptying database!'));
    console.error(error);
  }
}

import chalk from 'chalk';
import { Connection } from 'mongoose';
import * as models from '../src/models';
import * as Seeder from './data';
const DB_NAME = 'dany-zuwen';
const DB_URI =
  process.env.DB_URI ||
  (/linux/.test(process.platform)
    ? `mongodb://mongo/${DB_NAME}`
    : `mongodb://localhost:27017/${DB_NAME}`);

export async function seedAll(): Promise<void> {
  await Seeder.tags();
  await Seeder.categories();
  await Seeder.authors();
  await Seeder.subcategories();
}

export async function deleteAll(conn: Connection): Promise<void> {
  conn.db
    .listCollections({ name: models.PostModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('posts');
        console.log(chalk.blue('Successfully emptied "posts" collection!'));
      }
    });

  conn.db
    .listCollections({ name: models.CategoryModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('categories');
        console.log(
          chalk.blue('Successfully emptied "categories" collection!')
        );
      }
    });
  conn.db
    .listCollections({ name: models.CommentModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('comments');
        console.log(chalk.blue('Successfully emptied "comments" collection!'));
      }
    });
  conn.db
    .listCollections({ name: models.SubCategoryModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('subcategories');
        console.log(
          chalk.blue('Successfully emptied "subcategories" collection!')
        );
      }
    });
  conn.db
    .listCollections({ name: models.TagModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('tags');
        console.log(chalk.blue('Successfully emptied "tags" collection!'));
      }
    });
  conn.db
    .listCollections({ name: models.AuthorModel.name })
    .next(async (err, info) => {
      if (info) {
        await conn.db.dropCollection('authors');
        console.log(chalk.blue('Successfully emptied "authors" collection!'));
      }
    });
}

import { Request, ResponseToolkit } from 'hapi';
import { IPost } from '../models/interfaces';
import { PostModel } from '../models';
import * as moment from 'moment';
import { Utils } from '../core';

export default class PostsController {
  public static async index(
    req: Request,
    h: ResponseToolkit
  ): Promise<IPost[]> {
    let posts: IPost[];
    try {
      posts = await PostModel.find({
        created: {
          $gte: moment()
            .subtract(2, 'months')
            .toDate(),
        },
      })
        .limit(20)
        .sort({ created: -1 })
        .populate('tags')
        .populate('author')
        .populate('category')
        .populate('subCategories')
        .populate('comments')
        .exec();
    } catch (error) {
      throw error;
    }
    return posts;
  }

  public static async single(req: Request, h: ResponseToolkit): Promise<any> {
    const slug = req.params.slug;
    let post: IPost = await (await PostModel.findOne({
      slug: req.params.slug,
    }).exec()).toObject();

    let content: string;

    if (process.env.NODE_ENV !== 'production') {
      content = await Utils.retrievedMarkdownAsHtml(
        './mock/data/blog/article.md',
        false
      );
    } else {
      content = await Utils.retrievedMarkdownAsHtml(post.location);
    }

    const altered: IPost = {
      ...post,
      content: content,
    };

    return altered;
  }
}

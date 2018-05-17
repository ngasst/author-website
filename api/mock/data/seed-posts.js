const { connect } = require('../../config/mongo');
const { getPosts } = require('./blog/posts');
const Post = require('../../models/post.model');
const Tag = require('../../models/tag.model');
const Subcategory = require('../../models/subcategory.model');
const Category = require('../../models/category.model');
const Comment = require('../../models/comment.model');
const { deleteAll } = require('../utils');
const { random } = require('lodash');
const chalk = require('chalk');
const chance = new require('chance')();

function pupulate(posts) {
  return new Promise((resolve, reject) => {
    const tagged = posts.map(
      p =>
        new Promise((resolve, reject) => {
          const tag = new Tag();
          tag
            .getPage(random(1, 400), random(3, 5))
            .then(tags => {
              resolve({
                ...p,
                tags: tags.map(t => t._id)
              });
            })
            .catch(err => reject(err));
        })
    );
    Promise.all(tagged)
      .then(posts => {
        const categorized = posts.map(
          p =>
            new Promise((resolve, reject) => {
              const category = new Category();
              category
                .all()
                .then(cats =>
                  resolve({
                    ...p,
                    category: chance.pickone(cats)._id
                  })
                )
                .catch(err => reject(err));
            })
        );
        return Promise.all(categorized);
      })
      .then(posts => {
        const commed = posts.map(
          p =>
            new Promise((resolve, reject) => {
              const comment = new Comment();
              comment
                .getPage(random(0, 200), random(1, 10))
                .then(c => resolve({ ...p, comments: c.map(c => c._id) }))
                .catch(err => reject(err));
            })
        );
        return Promise.all(commed);
      })
      .then(posts => {
        const subbed = posts.map(
          p =>
            new Promise((resolve, reject) => {
              const subcategory = new Subcategory();
              subcategory
                .query({ parent: p.category })
                .then(subs =>
                  resolve({
                    ...p,
                    subcategories: subs
                      .map(s => s._id)
                      .filter((el, i) => i < subs.length / 2)
                  })
                )
                .catch(err => reject(err));
            })
        );
        return Promise.all(subbed);
      })
      .then(final => {
        resolve(final);
      })
      .catch(err => reject(err));
  });
}

module.exports = () =>
  new Promise((resolve, reject) => {
    connect()
      .then(() => {
        return deleteAll(Post);
      })
      .then(() => {
        const posts = getPosts();
        return pupulate(posts);
      })
      .then(posts => {
        const pproms = posts.map(p => {
          const post = new Post();
          post.title = p.title;
          post.author = p.author;
          post.articleUrl = p.articleUrl;
          post.category = p.category;
          post.subcategories = p.subcategories;
          post.comments = p.comments;
          post.shares = p.shares;
          post.tags = p.tags;
          post.summary = p.summary;
          post.images = p.images;
          return post.save();
        });
        return Promise.all(pproms);
      })
      .then(res => {
        console.log(chalk.blue(`Inserted ${res.length} posts`));
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

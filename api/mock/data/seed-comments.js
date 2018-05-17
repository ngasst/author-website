const getComments = require('./blog/comments');
const { connect } = require('../../config/mongo');
const Comment = require('../../models/comment.model');
const { deleteAll } = require('../utils');
const chalk = require('chalk');

module.exports = () =>
  new Promise((resolve, reject) => {
    connect()
      .then(() => {
        return deleteAll(Comment);
      })
      .then(() => {
        const comments = getComments();
        const proms = [];
        for (com of comments) {
          const comment = new Comment();
          comment.body = com.body;
          comment.city = com.city;
          comment.subject = com.subject;
          comment.country = com.country;
          comment.email = com.email;
          comment.isFacebook = com.isFacebook;
          comment.name = com.name;
          comment.parent = null;
          proms.push(comment.save());
        }
        return Promise.all(proms);
      })
      .then(res => {
        console.log(chalk.blue(`Inserted ${res.length} comments`));
        resolve();
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });

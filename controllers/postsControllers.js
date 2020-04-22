const Post = require('../models/post');
const { check, validationResult } = require('express-validator');

exports.listPosts = (req, res) => {
  Post.find().exec((err, postList) => {
    if (err) return next(err);
    res.json({ postList });
  });
};

exports.showPost = (req, res) => {
  Post.findById(req.params.postId).exec((err, post) => {
    if (err) return next(err);
    res.json({ post });
  });
};

exports.createPost = [
  // Validate & Sanitize
  check('title').trim(),
  check('published').toBoolean(),
  // Process
  (req, res, next) => {
    // New Post
    const post = new Post({
      title: req.body.title,
      text: req.body.text,
      date: Date.now(),
      published: req.body.published,
      user: req.body.user,
    });
    // Handle Errs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({
        errors,
        post,
      });
    } else {
      post.save((err, savedPost) => {
        if (err) return next(err);
        res.json({
          savedPost,
        });
      });
    }
    // Save / Redirect
  },
];

exports.deletePost = (req, res) => {
  res.send('NOT IMPLEMENTED: deletePost');
};

exports.updatePost = (req, res) => {
  res.send('NOT IMPLEMENTED: updatePost');
};

const Comment = require('../models/comment');
const { check, validationResult } = require('express-validator');

exports.listComments = (req, res, next) => {
  Comment.find().exec((err, comments) => {
    if (err) return next(err);
    res.json({
      comments,
    });
  });
};

exports.getComment = (req, res, next) => {
  Comment.findById(req.params.commentId).exec((err, comment) => {
    if (err) return next(err);
    res.json({
      comment,
    });
  });
};

exports.updateComment = (req, res) => {
  res.send(
    `NOT IMPLEMENTED: updateComment for post ${req.params.postId} with comment ${req.params.commentId}`
  );
};

exports.createComment = [
  // validate & Sanitize
  check('author').isLength({ min: 1 }),
  check('text').isLength({ min: 1 }),
  // process
  (req, res, next) => {
    // Create new comment
    const comment = new Comment({
      author: req.body.author,
      text: req.body.text,
      date: Date.now(),
      post: req.params.postId,
    });
    // handle errs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.json({
        errors,
        comment,
      });
      // TODO Redirect to form
    } else {
      // TODO save comment
      comment.save((err, savedComment) => {
        if (err) return next(err);
        res.json({
          comment: savedComment,
        });
      });
    }
  },
];

exports.deleteComment = (req, res) => {
  res.send(
    `NOT IMPLEMENTED: deleteComment for post ${req.params.postId} with comment ${req.params.commentId}`
  );
};

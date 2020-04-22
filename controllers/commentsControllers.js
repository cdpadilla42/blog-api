const Comment = require('../models/comment');
const { check, validationResult } = require('express-validator');

exports.listComments = (req, res) => {
  res.send('NOT IMPLEMENTED: listComments');
};

exports.getComment = (req, res) => {
  console.log(req.params);
  res.send(
    'NOT IMPLEMENTED: getComment for ' +
      req.params.commentId +
      ' comment of ' +
      req.params.postId
  );
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
      res.json({
        comment,
      });
    }
  },
];

exports.deleteComment = (req, res) => {
  res.send(
    `NOT IMPLEMENTED: deleteComment for post ${req.params.postId} with comment ${req.params.commentId}`
  );
};

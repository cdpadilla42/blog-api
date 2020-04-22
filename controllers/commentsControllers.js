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

exports.createComment = (req, res) => {
  res.send('NOT IMPLEMENTED: createComment');
};

exports.deleteComment = (req, res) => {
  res.send(
    `NOT IMPLEMENTED: deleteComment for post ${req.params.postId} with comment ${req.params.commentId}`
  );
};

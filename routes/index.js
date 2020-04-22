var express = require('express');
var router = express.Router();
const postsRouter = require('./posts');
const usersRouter = require('./users');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/posts', postsRouter);
router.use('/users', usersRouter);

module.exports = router;

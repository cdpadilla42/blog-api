var express = require('express');
var router = express.Router();
const postsRouter = require('./posts');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/posts', postsRouter);

module.exports = router;

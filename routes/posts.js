const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/postsControllers');
const commentsRouter = require('./comments');

router.use('/comments', commentsRouter);

router.get('/', postsControllers.listPosts);

router.post('/', postsControllers.createPost);

router.delete('/:postId', postsControllers.deletePost);

router.put('/:postId', postsControllers.updatePost);

router.get('/:postId', postsControllers.showPost);

module.exports = router;

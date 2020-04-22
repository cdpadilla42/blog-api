const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/postsControllers');

router.get('/', postsControllers.listPosts);

router.get('/:postId', postsControllers.showPost);

router.post('/', postsControllers.createPost);

router.delete('/', postsControllers.deletePost);

router.put('/', postsControllers.updatePost);

module.exports = router;

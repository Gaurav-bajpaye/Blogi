const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { createPost, getPost, updatePost, deletePost, getAllPosts } = require('../controllers/postController');

const router = express.Router();

router.post('/', authMiddleware, createPost);
router.get('/', getAllPosts);
router.get('/:postId', getPost);
router.put('/:postId', authMiddleware, updatePost);
router.delete('/:postId', authMiddleware, deletePost);

module.exports = router;


const Post = require('../models/post');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  const authorId = req.user.id;
  try {
    const post = await Post.createPost(title, content, authorId);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ message: 'Post creation failed' });
  }
};

const getPost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.getPostById(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updatePost = async (req, res) => {
  const { postId } = req.params;
  const { title, content } = req.body;
  try {
    const post = await Post.updatePost(postId, title, content);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deletePost = async (req, res) => {
  const { postId } = req.params;
  try {
    const post = await Post.deletePost(postId);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.getAllPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createPost, getPost, updatePost, deletePost, getAllPosts };
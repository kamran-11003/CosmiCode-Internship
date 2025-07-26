import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret'; // Use env in production

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});
const Post = mongoose.model('Post', postSchema);

function auth(req, res, next) {
  const header = req.headers['authorization'];
  if (!header) return res.status(401).json({ error: 'No token' });
  const token = header.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Create post
router.post('/', auth, async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content, author: req.user.id });
  await post.save();
  res.status(201).json(post);
});
// Read all posts
router.get('/', async (req, res) => {
  const posts = await Post.find().populate('author', 'name email');
  res.json(posts);
});
// Update post
router.put('/:id', auth, async (req, res) => {
  const post = await Post.findOneAndUpdate({ _id: req.params.id, author: req.user.id }, req.body, { new: true });
  if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
  res.json(post);
});
// Delete post
router.delete('/:id', auth, async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
  if (!post) return res.status(404).json({ error: 'Post not found or unauthorized' });
  res.json({ message: 'Post deleted' });
});

export default router; 
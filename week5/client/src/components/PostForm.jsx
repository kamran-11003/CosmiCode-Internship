import React, { useState, useEffect } from 'react';
import { postsAPI } from '../api';

const PostForm = ({ post = null, onSuccess, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        content: post.content || ''
      });
    }
  }, [post]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (post) {
        await postsAPI.update(post._id, formData);
      } else {
        await postsAPI.create(formData);
      }
      onSuccess();
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>{post ? 'Edit Post' : 'Create New Post'}</h2>
      {error && <div className="alert alert-error">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows="6"
          />
        </div>
        
        <div className="post-actions">
          <button type="submit" className="btn" disabled={loading}>
            {loading ? 'Saving...' : (post ? 'Update Post' : 'Create Post')}
          </button>
          {onCancel && (
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PostForm; 
import React, { useState, useEffect } from 'react';
import { postsAPI } from '../api';
import { useAuth } from '../contexts/AuthContext';
import PostForm from './PostForm';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingPost, setEditingPost] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { user } = useAuth();

  const fetchPosts = async () => {
    try {
      const response = await postsAPI.getAll();
      setPosts(response.data);
    } catch (err) {
      setError('Failed to load posts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    if (!window.confirm('Are you sure you want to delete this post?')) {
      return;
    }

    try {
      await postsAPI.delete(postId);
      setPosts(posts.filter(post => post._id !== postId));
    } catch (err) {
      setError('Failed to delete post');
    }
  };

  const handleEdit = (post) => {
    setEditingPost(post);
    setShowCreateForm(false);
  };

  const handleCreateSuccess = () => {
    setShowCreateForm(false);
    fetchPosts();
  };

  const handleEditSuccess = () => {
    setEditingPost(null);
    fetchPosts();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <div className="loading">Loading posts...</div>;
  }

  return (
    <div>
      {error && <div className="alert alert-error">{error}</div>}
      
      {user && (
        <div className="card">
          {!showCreateForm && !editingPost && (
            <button 
              className="btn btn-success" 
              onClick={() => setShowCreateForm(true)}
            >
              Create New Post
            </button>
          )}
          
          {showCreateForm && (
            <PostForm 
              onSuccess={handleCreateSuccess}
              onCancel={() => setShowCreateForm(false)}
            />
          )}
          
          {editingPost && (
            <PostForm 
              post={editingPost}
              onSuccess={handleEditSuccess}
              onCancel={() => setEditingPost(null)}
            />
          )}
        </div>
      )}

      <div className="posts-grid">
        {posts.length === 0 ? (
          <div className="card">
            <p>No posts yet. {user && 'Create the first post!'}</p>
          </div>
        ) : (
          posts.map(post => (
            <div key={post._id} className="card post">
              <h3>{post.title}</h3>
              <div className="post-meta">
                By {post.author?.name || 'Unknown'} • {formatDate(post.createdAt)}
              </div>
              <div className="post-content">{post.content}</div>
              
              {user && post.author?._id === user._id && (
                <div className="post-actions">
                  <button 
                    className="btn btn-small btn-secondary"
                    onClick={() => handleEdit(post)}
                  >
                    Edit
                  </button>
                  <button 
                    className="btn btn-small btn-danger"
                    onClick={() => handleDelete(post._id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostList; 
import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import PostList from './components/PostList';

const AppContent = () => {
  const { user, logout, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('posts');

  if (loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <header className="header">
        <div className="container">
          <h1>Week 5 Blog Platform</h1>
          <nav className="nav">
            <a 
              href="#posts" 
              onClick={(e) => { e.preventDefault(); setActiveTab('posts'); }}
              className={activeTab === 'posts' ? 'active' : ''}
            >
              Posts
            </a>
            {!user ? (
              <>
                <a 
                  href="#login" 
                  onClick={(e) => { e.preventDefault(); setActiveTab('login'); }}
                  className={activeTab === 'login' ? 'active' : ''}
                >
                  Login
                </a>
                <a 
                  href="#signup" 
                  onClick={(e) => { e.preventDefault(); setActiveTab('signup'); }}
                  className={activeTab === 'signup' ? 'active' : ''}
                >
                  Sign Up
                </a>
              </>
            ) : (
              <>
                <span>Welcome, {user.name}!</span>
                <button onClick={logout} className="btn btn-secondary">
                  Logout
                </button>
              </>
            )}
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          {activeTab === 'posts' && <PostList />}
          
          {!user && activeTab === 'login' && (
            <div className="auth-section">
              <LoginForm />
            </div>
          )}
          
          {!user && activeTab === 'signup' && (
            <div className="auth-section">
              <SignupForm />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
};

export default App; 
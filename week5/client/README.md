# Week 5 React Client

A dynamic React frontend that consumes the Week 5 Node.js API for a blogging platform.

## Features

- **User Authentication**: Sign up, login, and logout functionality
- **JWT Token Management**: Automatic token handling and authentication
- **Blog Post Management**: Create, read, update, and delete posts
- **Responsive Design**: Modern UI with mobile-friendly layout
- **Real-time Updates**: Posts update immediately after creation/editing

## Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API calls
- **Context API** - State management for authentication
- **CSS3** - Modern styling with gradients and animations

## Getting Started

### Prerequisites

Make sure the Week 5 backend server is running on port 5000.

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The React app will be available at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

## API Integration

The client uses axios to communicate with the backend API:

- **Authentication**: `/api/users/signup`, `/api/users/login`, `/api/users/me`
- **Posts**: `/api/posts` (GET, POST, PUT, DELETE)

### Key Features

1. **Automatic Token Management**: JWT tokens are automatically included in API requests
2. **Error Handling**: Comprehensive error handling for API failures
3. **Loading States**: Loading indicators during API calls
4. **Form Validation**: Client-side validation for all forms

## Component Structure

```
src/
├── components/
│   ├── LoginForm.jsx      # User login form
│   ├── SignupForm.jsx     # User registration form
│   ├── PostForm.jsx       # Create/edit post form
│   └── PostList.jsx       # Display and manage posts
├── contexts/
│   └── AuthContext.jsx    # Authentication state management
├── api.js                 # API service functions
├── App.jsx               # Main application component
├── main.jsx              # React entry point
└── index.css             # Global styles
```

## Usage

1. **Sign Up**: Create a new account with name, email, and password
2. **Login**: Authenticate with email and password
3. **View Posts**: Browse all published posts
4. **Create Posts**: Add new blog posts (authenticated users only)
5. **Edit Posts**: Modify your own posts
6. **Delete Posts**: Remove your own posts

## Development

The app uses Vite's proxy configuration to forward API requests to the backend server running on port 5000. This eliminates CORS issues during development.

## Styling

The app features a modern, responsive design with:
- Gradient backgrounds
- Card-based layouts
- Hover effects and animations
- Mobile-responsive design
- Consistent color scheme

## Security Features

- JWT token storage in localStorage
- Automatic token refresh on app load
- Protected routes for authenticated users
- Secure API communication with axios interceptors 
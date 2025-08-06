# Week 5: Authentication, Routing & Advanced API (Advanced)

**Objective:** Implement user authentication, middleware, and advanced routes.

## ✅ Completed Tasks

- ✅ **User Authentication**: Implemented user login and signup API with password hashing (using bcrypt).
- ✅ **JWT Authentication**: Set up JWT-based authentication and protect private routes.
- ✅ **Express Router**: Used Express Router for modular route handling.
- ✅ **React Frontend**: Built a dynamic React page to consume data from your Node.js API (using axios).
- ✅ **Blogging Platform**: Created a small blogging platform backend with routes for creating, reading, updating, and deleting posts.


## Project Structure

```
week5/
├── server.js              # Main server file
├── routes/
│   ├── user.js           # User authentication routes
│   └── post.js           # Blog post CRUD routes

├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── contexts/     # Authentication context
│   │   ├── api.js        # API service functions
│   │   └── App.jsx       # Main React app
│   └── README.md         # Client documentation
└── package.json          # Backend dependencies
```

## Getting Started

### Backend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
# or for development
npm run dev
```



### Frontend Setup

1. Navigate to client directory:
```bash
cd client
npm install
```

2. Start the React development server:
```bash
npm run dev
```

The application will be available at:
- **Backend API**: http://localhost:5000
- **React Frontend**: http://localhost:3000

## Features

### Backend API
- User registration and authentication with bcrypt password hashing
- JWT token-based authentication
- Protected routes with middleware
- Complete CRUD operations for blog posts
- MongoDB integration with Mongoose
- Comprehensive error handling

### React Frontend
- Modern, responsive UI design
- User authentication (signup/login/logout)
- Real-time post management (create, read, update, delete)
- Automatic JWT token management
- Form validation and error handling
- Mobile-friendly responsive design

                           
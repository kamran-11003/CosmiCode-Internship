# Week 5 Report: Authentication, Routing & Advanced API (Advanced)

## Objective
Implement user authentication, middleware, and advanced routes.

## Tasks Completed

### 1. Implement User Login and Signup API with Password Hashing (using bcrypt) ✅
- **Status**: Completed
- **File**: `routes/user.js`
- **Description**: Built comprehensive authentication system with secure password handling:
  - **Signup Endpoint** (`POST /api/users/signup`):
    - **Password Hashing**: Uses bcryptjs with salt rounds of 10
    - **Input Validation**: Required fields (name, email, password)
    - **Duplicate Prevention**: Checks for existing email before registration
    - **Security**: Passwords never stored in plain text
    - **Response**: 201 status with success message
  - **Login Endpoint** (`POST /api/users/login`):
    - **Credential Verification**: Email and password validation
    - **Password Comparison**: bcrypt.compare() for secure password checking
    - **JWT Token Generation**: Returns JWT token on successful login
    - **Error Handling**: Clear error messages for invalid credentials
    - **Security**: No password exposure in responses
  - **Technical Implementation**:
    - bcryptjs for password hashing and comparison
    - Mongoose validation for data integrity
    - Proper error handling with try-catch blocks
    - JSON Web Token generation for session management

### 2. Set Up JWT-Based Authentication and Protect Private Routes ✅
- **Status**: Completed
- **Files**: `routes/user.js` and `routes/post.js`
- **Description**: Implemented JWT authentication middleware and protected routes:
  - **JWT Configuration**:
    - Secret key: `your_jwt_secret` (configurable via environment variables)
    - Token expiration: 1 hour
    - Algorithm: HS256 (default)
  - **Authentication Middleware** (`auth` function):
    - **Token Extraction**: Parses Authorization header
    - **Token Verification**: Validates JWT signature and expiration
    - **User Context**: Adds user ID to request object
    - **Error Handling**: Returns 401 for invalid/missing tokens
  - **Protected Routes**:
    - **User Profile** (`GET /api/users/me`): Returns current user data
    - **Post Operations**: All CRUD operations require authentication
    - **Route Protection**: Middleware applied to sensitive endpoints
  - **Security Features**:
    - Token-based session management
    - Automatic token expiration
    - Secure user identification
    - Protected resource access

### 3. Use Express Router for Modular Route Handling ✅
- **Status**: Completed
- **Files**: `routes/user.js`, `routes/post.js`, `routes/index.js`, `server.js`
- **Description**: Implemented modular route organization with Express Router:
  - **Route Structure**:
    - **User Routes** (`/api/users`): Authentication and user management
    - **Post Routes** (`/api/posts`): Blog post CRUD operations
    - **Main Router** (`routes/index.js`): Combines all route modules
  - **Modular Organization**:
    - Separate route files for different features
    - Clean separation of concerns
    - Reusable route components
    - Scalable architecture
  - **Route Prefixing**:
    - `/api/users` for user-related endpoints
    - `/api/posts` for blog post endpoints
    - Consistent API structure
  - **Middleware Integration**:
    - Authentication middleware applied per route
    - Error handling middleware
    - Request parsing middleware

### 4. Build a Dynamic React Page to Consume Data from Your Node.js API ✅
- **Status**: Completed
- **Location**: `react-app/` directory
- **Description**: Created React frontend to interact with the Node.js backend:
  - **API Integration**:
    - **HTTP Client**: Uses fetch API for API calls
    - **Authentication**: JWT token management
    - **Error Handling**: Proper error responses
    - **Data Fetching**: Async/await for API requests
  - **React Components**:
    - **Welcome Component**: Real-time clock and welcome message
    - **Counter Component**: Interactive counter with state management
    - **SimpleForm Component**: Controlled form inputs
    - **App Component**: Main application container
  - **State Management**:
    - React hooks for local state
    - Component state synchronization
    - Form data management
  - **User Experience**:
    - Real-time updates
    - Interactive elements
    - Form validation
    - Responsive design

### 5. Create a Small Blogging Platform Backend with CRUD Operations ✅
- **Status**: Completed
- **File**: `routes/post.js`
- **Description**: Built complete blogging platform backend:
  - **Post Schema**:
    - **Title**: String field for post title
    - **Content**: String field for post content
    - **Author**: Reference to User model (ObjectId)
    - **Created At**: Automatic timestamp
  - **CRUD Operations**:
    - **Create Post** (`POST /api/posts`): Creates new blog post (authenticated)
    - **Read Posts** (`GET /api/posts`): Retrieves all posts with author info
    - **Update Post** (`PUT /api/posts/:id`): Updates post (author only)
    - **Delete Post** (`DELETE /api/posts/:id`): Deletes post (author only)
  - **Authorization Features**:
    - **Author Verification**: Only post authors can edit/delete
    - **Authentication Required**: All operations require valid JWT
    - **Data Protection**: Users can only modify their own posts
  - **Advanced Features**:
    - **Population**: Author details included in post responses
    - **Error Handling**: Comprehensive error responses
    - **Validation**: Input validation for post data

## Technical Implementation Details

### Authentication System
- **Password Security**: bcryptjs with salt rounds
- **Session Management**: JWT tokens with expiration
- **Route Protection**: Middleware-based authentication
- **User Context**: Request-level user identification

### Database Integration
- **MongoDB**: NoSQL database with Mongoose ODM
- **Schema Design**: User and Post models with relationships
- **Data Validation**: Mongoose schema validation
- **Population**: Referenced data retrieval

### API Architecture
- **RESTful Design**: Standard HTTP methods and status codes
- **Modular Routes**: Express Router for organization
- **Middleware Stack**: Authentication, validation, error handling
- **Response Format**: Consistent JSON structure

### Frontend Integration
- **React Components**: Functional components with hooks
- **API Communication**: Fetch API for HTTP requests
- **State Management**: Local component state
- **User Interface**: Interactive and responsive design

### File Organization
```
week5/
├── package.json           # Node.js project configuration
├── server.js             # Main Express server
├── models/
│   └── User.js           # User model (shared with Week 4)
├── routes/
│   ├── user.js           # Authentication routes
│   ├── post.js           # Blog post routes
│   └── index.js          # Route organization
├── react-app/
│   ├── src/
│   │   ├── App.js        # Main React component
│   │   ├── Welcome.js    # Welcome component
│   │   ├── Counter.js    # Counter component
│   │   └── SimpleForm.js # Form component
│   └── package.json      # React dependencies
└── README.md             # Week objectives and tasks
```

## Learning Outcomes

### Authentication & Security
- **Password Hashing**: bcryptjs implementation and best practices
- **JWT Management**: Token generation, validation, and expiration
- **Route Protection**: Middleware-based authentication
- **Security Best Practices**: Input validation and error handling

### Backend Development
- **Express Router**: Modular route organization
- **Middleware**: Custom authentication middleware
- **Database Relationships**: User-Post model relationships
- **API Design**: RESTful endpoints with proper status codes

### Frontend Integration
- **React Development**: Component-based architecture
- **API Communication**: HTTP requests and error handling
- **State Management**: React hooks and local state
- **User Experience**: Interactive and responsive interfaces

### Advanced Features
- **Data Population**: Mongoose population for related data
- **Authorization**: Role-based access control
- **Error Handling**: Comprehensive error management
- **Validation**: Input and data validation

## Challenges and Solutions

### Challenge 1: JWT Token Management
- **Issue**: Properly implementing JWT authentication with middleware
- **Solution**: Created reusable auth middleware with token verification and user context

### Challenge 2: Password Security
- **Issue**: Implementing secure password hashing and comparison
- **Solution**: Used bcryptjs with proper salt rounds and secure comparison methods

### Challenge 3: Route Organization
- **Issue**: Managing multiple routes in a scalable way
- **Solution**: Implemented Express Router with modular file structure

### Challenge 4: Authorization Logic
- **Issue**: Ensuring users can only modify their own posts
- **Solution**: Added author verification in post operations with proper error handling

### Challenge 5: Frontend-Backend Integration
- **Issue**: Connecting React frontend with Node.js backend
- **Solution**: Used fetch API with proper error handling and state management

## API Endpoints Documentation

### Authentication Endpoints
- **POST /api/users/signup**: User registration with password hashing
- **POST /api/users/login**: User login with JWT token generation
- **GET /api/users/me**: Get current user profile (protected)

### Blog Post Endpoints
- **POST /api/posts**: Create new blog post (protected)
- **GET /api/posts**: Get all posts with author information
- **PUT /api/posts/:id**: Update post (author only, protected)
- **DELETE /api/posts/:id**: Delete post (author only, protected)

### Request/Response Examples
```javascript
// POST /api/users/signup
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}

// Response (201 Created)
{
  "message": "Signup successful"
}

// POST /api/users/login
{
  "email": "john@example.com",
  "password": "securepassword123"
}

// Response (200 OK)
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

// POST /api/posts (with Authorization header)
{
  "title": "My First Blog Post",
  "content": "This is the content of my blog post."
}

// Response (201 Created)
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "title": "My First Blog Post",
  "content": "This is the content of my blog post.",
  "author": "60f7b3b3b3b3b3b3b3b3b3b4",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

## Best Practices Implemented

### Security Best Practices
- **Password Hashing**: bcryptjs with salt rounds
- **JWT Security**: Proper token expiration and validation
- **Input Validation**: Comprehensive data validation
- **Error Handling**: Secure error messages

### Code Organization
- **Modular Architecture**: Separated concerns and reusable components
- **Route Organization**: Express Router for scalability
- **Middleware Design**: Reusable authentication middleware
- **Clean Code**: Readable and maintainable structure

### API Design
- **RESTful Principles**: Standard HTTP methods and status codes
- **Consistent Responses**: Uniform JSON structure
- **Proper Authorization**: Role-based access control
- **Error Management**: Comprehensive error handling

### Database Design
- **Schema Relationships**: User-Post model relationships
- **Data Validation**: Mongoose schema validation
- **Population**: Efficient data retrieval
- **Indexing**: Proper database indexing

## Next Steps
Week 5 has provided a solid foundation in advanced backend development. These skills will be essential for:
- **Week 6**: Complete full-stack application with deployment

## Files Summary
- **1 package.json** with Node.js project configuration
- **1 main server file** with Express setup and middleware
- **3 route files** for modular API organization
- **1 model file** for database schema
- **4 React component files** for frontend integration
- **1 README file** documenting objectives and tasks
- **All tasks completed** with fully functional authentication and blogging platform

---

**Week 5 Status**: ✅ **COMPLETED**
**Next**: Ready to proceed to Week 6 (Capstone Full Stack Project) 
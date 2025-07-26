# Week 4 Report: Back-End Development (Intermediate to Advanced)

## Objective
Understand Node.js, Express, and REST APIs.

## Tasks Completed

### 1. Install Node.js and Express. Create a Basic HTTP Server ✅
- **Status**: Completed
- **File**: `package.json`
- **Description**: Set up a complete Node.js project with Express framework:
  - **Package Configuration**:
    - Project name: `week4-backend`
    - Main entry point: `server.js`
    - ES6 modules enabled with `"type": "module"`
    - Development and production scripts configured
  - **Dependencies**:
    - `express`: ^4.18.2 (latest stable version)
    - `mongoose`: ^7.6.1 (MongoDB ODM)
    - `nodemon`: ^3.0.1 (development dependency for auto-restart)
  - **Scripts**:
    - `npm start`: Production server start
    - `npm run dev`: Development server with auto-restart
  - **Server Setup**: Basic Express server with JSON middleware and error handling

### 2. Build RESTful APIs for GET, POST, PUT, DELETE Operations (CRUD) ✅
- **Status**: Completed
- **File**: `server.js`
- **Description**: Implemented complete CRUD operations for user management:
  - **GET /api/users**:
    - Retrieves all users from database
    - Returns JSON array of user objects
    - Proper error handling for database queries
  - **POST /api/users**:
    - Creates new user in database
    - Accepts JSON body with user data
    - Returns 201 status code on successful creation
    - Validates input data before saving
  - **PUT /api/users/:id**:
    - Updates existing user by ID
    - Accepts JSON body with updated data
    - Returns updated user object
    - Handles 404 errors for non-existent users
  - **DELETE /api/users/:id**:
    - Removes user from database by ID
    - Returns success message on deletion
    - Handles 404 errors for non-existent users
  - **Error Handling**: Comprehensive try-catch blocks with proper HTTP status codes

### 3. Connect Your Express App to a MongoDB Database ✅
- **Status**: Completed
- **File**: `server.js`
- **Description**: Established MongoDB connection with Mongoose ODM:
  - **Database Connection**:
    - Connection string: `mongodb://localhost:27017/internship`
    - Database name: `internship`
    - Mongoose configuration with latest options
  - **Schema Definition**:
    - User schema with name, email, and password fields
    - Email field with unique constraint
    - Proper data types and validation
  - **Model Creation**:
    - User model exported for use in routes
    - Mongoose model methods for database operations
  - **Connection Management**:
    - Success callback for connection confirmation
    - Error handling for connection failures
    - Proper connection options for stability

### 4. Create a User Registration API with Data Validation ✅
- **Status**: Completed
- **Files**: `routes/user.js` and `routes/index.js`
- **Description**: Built comprehensive user registration system:
  - **Route Structure**:
    - Modular route organization in separate files
    - Express Router for clean route management
    - Proper route prefixing (`/users`)
  - **Registration Endpoint** (`POST /users/register`):
    - **Input Validation**:
      - Required field checking (name, email, password)
      - Email format validation using regex pattern
      - Password length validation (minimum 6 characters)
    - **Database Operations**:
      - Duplicate email checking
      - User creation with validated data
      - Proper error handling for database constraints
    - **Response Handling**:
      - 201 status for successful registration
      - 400 status for validation errors
      - Clear error messages for debugging
  - **Data Validation Features**:
    - Field presence validation
    - Email format validation with regex
    - Password strength requirements
    - Duplicate user prevention

### 5. Handle Errors and Send JSON Responses with Proper Status Codes ✅
- **Status**: Completed
- **Files**: `server.js` and route files
- **Description**: Implemented comprehensive error handling system:
  - **HTTP Status Codes**:
    - **200**: Successful GET requests
    - **201**: Successful resource creation (POST)
    - **400**: Bad request (validation errors)
    - **404**: Resource not found
    - **500**: Internal server error
  - **Error Response Format**:
    - Consistent JSON error structure
    - Descriptive error messages
    - Proper error object formatting
  - **Error Handling Implementation**:
    - **Try-Catch Blocks**: Wrapped all async operations
    - **Validation Errors**: Custom error messages for invalid data
    - **Database Errors**: Mongoose error handling
    - **Global Error Handler**: Express middleware for unhandled errors
  - **Response Structure**:
    - **Success Responses**: Clean JSON data
    - **Error Responses**: `{ error: "message" }` format
    - **Consistent Headers**: Proper content-type and status codes

## Technical Implementation Details

### Node.js and Express Setup
- **Runtime**: Node.js with ES6 modules
- **Framework**: Express.js 4.18.2
- **Middleware**: JSON parsing, CORS support, error handling
- **Development**: Nodemon for auto-restart during development
- **Production**: Optimized for deployment

### MongoDB Integration
- **ODM**: Mongoose 7.6.1
- **Connection**: Local MongoDB instance
- **Schema Design**: User model with validation
- **Operations**: Full CRUD with proper error handling
- **Configuration**: Latest Mongoose options for stability

### API Architecture
- **RESTful Design**: Standard HTTP methods and status codes
- **Route Organization**: Modular structure with Express Router
- **Middleware**: Request parsing, validation, error handling
- **Response Format**: Consistent JSON structure

### File Organization
```
week4/
├── package.json           # Node.js project configuration
├── server.js             # Main Express server with CRUD APIs
├── routes/
│   ├── user.js           # User registration and validation
│   └── index.js          # Route organization
├── .env.example          # Environment variables template
└── README.md             # Week objectives and tasks
```

## Learning Outcomes

### Backend Development Skills
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **REST APIs**: HTTP methods, status codes, JSON responses
- **Database Integration**: MongoDB with Mongoose ODM
- **Error Handling**: Comprehensive error management

### API Development Skills
- **CRUD Operations**: Create, Read, Update, Delete
- **Route Management**: Express Router and modular organization
- **Data Validation**: Input sanitization and validation
- **Response Handling**: Proper HTTP status codes and JSON format
- **Middleware**: Request processing and error handling

### Database Skills
- **MongoDB**: NoSQL database operations
- **Mongoose**: Schema design and validation
- **Connection Management**: Database connectivity and error handling
- **Data Modeling**: User schema with constraints and validation

### Development Practices
- **Modular Architecture**: Separated concerns and reusable components
- **Error Handling**: Defensive programming and user feedback
- **Code Organization**: Clean structure and maintainable code
- **Environment Configuration**: Flexible deployment options

## Challenges and Solutions

### Challenge 1: MongoDB Connection Setup
- **Issue**: Establishing stable connection with proper error handling
- **Solution**: Used Mongoose with latest connection options and comprehensive error handling

### Challenge 2: Data Validation
- **Issue**: Ensuring data integrity and preventing invalid submissions
- **Solution**: Implemented comprehensive validation with regex patterns and field checking

### Challenge 3: Error Response Consistency
- **Issue**: Maintaining consistent error format across all endpoints
- **Solution**: Standardized error response structure with proper HTTP status codes

### Challenge 4: Route Organization
- **Issue**: Managing multiple routes in a scalable way
- **Solution**: Used Express Router for modular route organization

### Challenge 5: Async/Await Error Handling
- **Issue**: Properly handling asynchronous operations and errors
- **Solution**: Implemented try-catch blocks around all async operations

## API Endpoints Documentation

### User Management Endpoints
- **GET /api/users**: Retrieve all users
- **POST /api/users**: Create new user
- **PUT /api/users/:id**: Update user by ID
- **DELETE /api/users/:id**: Delete user by ID

### User Registration Endpoint
- **POST /api/users/register**: Register new user with validation

### Request/Response Examples
```javascript
// POST /api/users
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

// Response (201 Created)
{
  "_id": "60f7b3b3b3b3b3b3b3b3b3b3",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

## Best Practices Implemented

### Code Organization
- **Separation of Concerns**: Routes, models, and server logic separated
- **Modular Design**: Reusable components and functions
- **Clean Architecture**: Clear file structure and naming conventions

### Error Handling
- **Defensive Programming**: Comprehensive error checking
- **User Feedback**: Clear error messages and status codes
- **Graceful Degradation**: Proper handling of edge cases

### API Design
- **RESTful Principles**: Standard HTTP methods and status codes
- **Consistent Responses**: Uniform JSON structure
- **Input Validation**: Comprehensive data validation

### Security Considerations
- **Input Sanitization**: Validation of all user inputs
- **Error Information**: Limited error details in production
- **Database Security**: Proper connection and query handling

## Next Steps
Week 4 has provided a solid foundation in backend development. These skills will be essential for:
- **Week 5**: Authentication, JWT, and advanced API features
- **Week 6**: Full-stack application with frontend integration

## Files Summary
- **1 package.json** with Node.js project configuration
- **1 main server file** with Express setup and CRUD APIs
- **2 route files** for modular API organization
- **1 environment template** for configuration
- **1 README file** documenting objectives and tasks
- **All tasks completed** with fully functional REST API

---

**Week 4 Status**: ✅ **COMPLETED**
**Next**: Ready to proceed to Week 5 (Authentication, Routing & Advanced API) 
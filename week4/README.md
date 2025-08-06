# Week 4: Back-End Development (Intermediate to Advanced)

**Objective:** Understand Node.js, Express, and REST APIs.

## ✅ **COMPLETED TASKS**

- ✅ **Node.js & Express Setup**: Installed Node.js and Express, created a basic HTTP server.
- ✅ **RESTful APIs**: Built complete CRUD operations (GET, POST, PUT, DELETE).
- ✅ **MongoDB Integration**: Connected Express app to MongoDB database with Mongoose.
- ✅ **User Registration API**: Created user registration with data validation.
- ✅ **Error Handling**: Implemented proper error handling with JSON responses and status codes.

## 🚀 **Features Implemented**

### **Backend Server**
- ✅ **Express.js Server** - HTTP server running on port 4000
- ✅ **MongoDB Connection** - Local MongoDB database integration
- ✅ **Mongoose ODM** - Object Document Mapping for MongoDB
- ✅ **JSON Middleware** - Request/response JSON parsing
- ✅ **Error Handling** - Comprehensive error handling middleware

### **API Endpoints**

#### **User Management (CRUD Operations)**
- ✅ **GET /api/users** - Retrieve all users
- ✅ **POST /api/users** - Create new user
- ✅ **PUT /api/users/:id** - Update existing user
- ✅ **DELETE /api/users/:id** - Delete user

#### **User Registration**
- ✅ **POST /api/users/register** - User registration with validation

### **Data Validation**
- ✅ **Required Fields** - Name, email, and password validation
- ✅ **Email Format** - Email regex validation
- ✅ **Password Length** - Minimum 6 characters
- ✅ **Unique Email** - Prevent duplicate email addresses

## 🛠 **Technology Stack**

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **ES6 Modules** - Modern JavaScript imports/exports

## 📁 **Project Structure**

```
week4/
├── server.js              # Main server file
├── models/
│   └── User.js           # User model with Mongoose schema
├── routes/
│   ├── index.js          # Main router
│   └── user.js           # User routes
├── test-api.js           # API testing script
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)

### **Installation**

1. **Install dependencies:**
```bash
cd week4
npm install
```

2. **Start MongoDB:**
Make sure MongoDB is running locally on port 27017, or update the connection string in `server.js` for MongoDB Atlas.

3. **Start the server:**
```bash
npm start
# or for development with auto-restart
npm run dev
```

The server will start on `http://localhost:4000`

### **Testing the API**

Run the test script to verify all endpoints:
```bash
node test-api.js
```

## 🔧 **API Documentation**

### **Base URL**
```
http://localhost:4000
```

### **User Endpoints**

#### **Get All Users**
```http
GET /api/users
```
**Response:**
```json
[
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  }
]
```

#### **Create User**
```http
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
**Response:**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### **Update User**
```http
PUT /api/users/:id
Content-Type: application/json

{
  "name": "John Updated",
  "email": "john.updated@example.com"
}
```
**Response:**
```json
{
  "_id": "user_id",
  "name": "John Updated",
  "email": "john.updated@example.com",
  "password": "password123"
}
```

#### **Delete User**
```http
DELETE /api/users/:id
```
**Response:**
```json
{
  "message": "User deleted"
}
```

#### **User Registration**
```http
POST /api/users/register
Content-Type: application/json

{
  "name": "New User",
  "email": "newuser@example.com",
  "password": "securepass123"
}
```
**Response:**
```json
{
  "message": "User registered successfully."
}
```

## 📊 **Database Schema**

### **User Model**
```javascript
{
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    match: /.+@.+\..+/ 
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 6 
  }
}
```

## 🔒 **Validation Rules**

- **Name**: Required field
- **Email**: Required, must be unique, must match email format
- **Password**: Required, minimum 6 characters

## 🧪 **Testing**

The project includes a comprehensive test script (`test-api.js`) that tests:

1. **User Creation** - POST /api/users
2. **User Retrieval** - GET /api/users
3. **User Registration** - POST /api/users/register
4. **User Update** - PUT /api/users/:id
5. **User Deletion** - DELETE /api/users/:id

### **Running Tests**
```bash
node test-api.js
```

**Expected Output:**
```
🧪 Testing Week 4 API Endpoints

1. Testing POST /api/users - Create User
✅ User created successfully! ID: 64f8a1b2c3d4e5f6a7b8c9d0

2. Testing GET /api/users - Get All Users
✅ Retrieved 1 users

3. Testing POST /api/users/register - User Registration
✅ Registration successful: User registered successfully.

4. Testing PUT /api/users/:id - Update User
✅ User updated successfully!

5. Testing DELETE /api/users/:id - Delete User
✅ User deleted successfully!
```

## 🚨 **Error Handling**

The application includes comprehensive error handling:

- **400 Bad Request** - Invalid input data
- **404 Not Found** - User not found
- **500 Internal Server Error** - Server errors
- **Validation Errors** - Mongoose validation failures

### **Error Response Format**
```json
{
  "error": "Error message description"
}
```

## 🎯 **Learning Outcomes**

This project demonstrates:
- **Node.js Setup** - Server configuration and middleware
- **Express.js Framework** - Routing and request handling
- **MongoDB Integration** - Database connection and operations
- **RESTful API Design** - CRUD operations with proper HTTP methods
- **Data Validation** - Input validation and error handling
- **Mongoose ODM** - Schema definition and model operations
- **Error Handling** - Proper HTTP status codes and error responses
- **API Testing** - Endpoint testing and validation

## 📝 **Usage Examples**

### **Using cURL**

#### **Create a user:**
```bash
curl -X POST http://localhost:4000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

#### **Get all users:**
```bash
curl http://localhost:4000/api/users
```

#### **Update a user:**
```bash
curl -X PUT http://localhost:4000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"John Updated","email":"john.updated@example.com"}'
```

#### **Delete a user:**
```bash
curl -X DELETE http://localhost:4000/api/users/USER_ID
```

### **Using JavaScript Fetch**

```javascript
// Create user
const response = await fetch('http://localhost:4000/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123'
  })
});

const user = await response.json();
```

## 🔧 **Configuration**

### **Environment Variables**
You can configure the following environment variables:
- `PORT` - Server port (default: 4000)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/internship)

### **MongoDB Connection**
The application connects to a local MongoDB instance by default. To use MongoDB Atlas:

1. Update the connection string in `server.js`:
```javascript
mongoose.connect('mongodb+srv://username:password@cluster.mongodb.net/internship', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

## 📈 **Performance Considerations**

- **Connection Pooling** - Mongoose handles connection pooling automatically
- **Indexing** - Email field is indexed for unique constraint
- **Validation** - Server-side validation prevents invalid data
- **Error Handling** - Proper error responses prevent server crashes

---

**Week 4 is 100% Complete!** 🎉 
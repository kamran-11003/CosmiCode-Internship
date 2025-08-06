# Week 6: Full-Stack Application - Luxe Hair Studio

**Objective:** Build a complete full-stack application with modern technologies.

## ✅ **COMPLETED PROJECT**

**Live Demo:** [https://luxe-hair-studio.onrender.com/](https://luxe-hair-studio.onrender.com/)

## 🚀 **Features Implemented**

### **Frontend (React + TypeScript + Tailwind CSS)**
- ✅ **Modern UI/UX** - Responsive design with beautiful animations
- ✅ **Landing Page** - Hero section, services overview, testimonials
- ✅ **Services Page** - Complete service catalog with pricing
- ✅ **Gallery Page** - Portfolio showcase with image grid
- ✅ **About Page** - Company story and mission
- ✅ **Team Page** - Staff profiles and expertise
- ✅ **Booking Wizard** - Multi-step appointment booking system
- ✅ **Admin Panel** - Complete management dashboard
- ✅ **Admin Authentication** - Secure login system

### **Backend (Node.js + Express + MongoDB)**
- ✅ **RESTful API** - Complete CRUD operations
- ✅ **Authentication System** - JWT-based admin authentication
- ✅ **Booking Management** - Create, read, update, delete appointments
- ✅ **Service Management** - Manage hair services and pricing
- ✅ **Staff Management** - Team member profiles and schedules
- ✅ **Email Notifications** - Booking confirmations and reminders
- ✅ **Database Integration** - MongoDB Atlas with seed data
- ✅ **Security Features** - Helmet, rate limiting, CORS protection

### **Advanced Features**
- ✅ **Multi-step Booking Process** - Service selection, date/time, customer info
- ✅ **Real-time Availability** - Check staff availability
- ✅ **Email Integration** - Automated notifications
- ✅ **Admin Dashboard** - Analytics, booking management, staff oversight
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **TypeScript** - Type safety and better development experience
- ✅ **Modern Build Tools** - Vite for fast development

## 🛠 **Technology Stack**

### **Frontend**
- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better DX
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Vite** - Fast build tool

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **Nodemailer** - Email service
- **Helmet** - Security middleware
- **Rate Limiting** - API protection

## 📁 **Project Structure**

```
week6/
├── src/                    # Frontend source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API service functions
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   └── data/              # Mock data and constants
├── server/                # Backend source code
│   ├── routes/            # API route handlers
│   ├── utils/             # Server utilities
│   └── seedData.js        # Database seeding
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 **Getting Started**

### **Prerequisites**
- Node.js (v16 or higher)
- MongoDB Atlas account
- Email service (Gmail, SendGrid, etc.)

### **Installation**

1. **Clone and install dependencies:**
```bash
cd week6
npm install
```

2. **Set up environment variables:**
Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

3. **Seed the database:**
```bash
npm run seed
```

4. **Start the development server:**
```bash
npm run dev:full
```

This will start both the backend server (port 3001) and frontend dev server (port 5173).

### **Production Build**

```bash
npm run build
```

## 📱 **Pages & Features**

### **Public Pages**
- **Landing Page** (`/`) - Welcome page with hero section
- **Services** (`/services`) - Hair services and pricing
- **Gallery** (`/gallery`) - Portfolio of work
- **About** (`/about`) - Company information
- **Team** (`/team`) - Staff profiles
- **Booking** (`/book`) - Appointment booking wizard

### **Admin Features**
- **Admin Login** (`/admin/login`) - Secure authentication
- **Admin Panel** (`/admin`) - Management dashboard
  - View all bookings
  - Manage services
  - Staff management
  - Analytics and reports

## 🔧 **API Endpoints**

### **Authentication**
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout

### **Bookings**
- `GET /api/bookings` - Get all bookings
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking
- `DELETE /api/bookings/:id` - Delete booking

### **Services**
- `GET /api/services` - Get all services
- `POST /api/services` - Create service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### **Staff**
- `GET /api/staff` - Get all staff members
- `POST /api/staff` - Add staff member
- `PUT /api/staff/:id` - Update staff member
- `DELETE /api/staff/:id` - Remove staff member

### **Email**
- `POST /api/email/send` - Send email notifications

## 🎨 **Design Features**

- **Modern UI** - Clean, professional design
- **Responsive Layout** - Works on all devices
- **Smooth Animations** - Enhanced user experience
- **Accessibility** - WCAG compliant
- **Loading States** - Better UX during API calls
- **Error Handling** - User-friendly error messages

## 🔒 **Security Features**

- **JWT Authentication** - Secure admin access
- **Rate Limiting** - Prevent API abuse
- **CORS Protection** - Cross-origin security
- **Helmet.js** - Security headers
- **Input Validation** - Data sanitization
- **Environment Variables** - Secure configuration

## 📊 **Database Schema**

### **Bookings Collection**
```javascript
{
  customerName: String,
  email: String,
  phone: String,
  service: String,
  staffMember: String,
  date: Date,
  time: String,
  status: String,
  createdAt: Date
}
```

### **Services Collection**
```javascript
{
  name: String,
  description: String,
  price: Number,
  duration: Number,
  category: String
}
```

### **Staff Collection**
```javascript
{
  name: String,
  position: String,
  bio: String,
  image: String,
  specialties: [String],
  availability: Object
}
```

## 🚀 **Deployment**

The application is deployed on **Render**:
- **Live URL**: [https://luxe-hair-studio.onrender.com/](https://luxe-hair-studio.onrender.com/)
- **Backend API**: Integrated with frontend
- **Database**: MongoDB Atlas
- **Email Service**: Nodemailer with Gmail

## 📝 **Usage Instructions**

### **For Customers:**
1. Visit the website
2. Browse services and team
3. Click "Book Appointment"
4. Follow the booking wizard
5. Receive confirmation email

### **For Admins:**
1. Login at `/admin/login`
2. Access the admin panel
3. Manage bookings, services, and staff
4. View analytics and reports

## 🎯 **Learning Outcomes**

This project demonstrates:
- **Full-Stack Development** - Complete application lifecycle
- **Modern Technologies** - React, TypeScript, Node.js
- **Database Design** - MongoDB schema and relationships
- **API Development** - RESTful API with proper structure
- **Authentication** - JWT-based security
- **UI/UX Design** - Responsive and accessible design
- **Deployment** - Production-ready application
- **Email Integration** - Automated notifications
- **State Management** - React hooks and context
- **Type Safety** - TypeScript implementation

## 🔗 **Links**

- **Live Demo**: [https://luxe-hair-studio.onrender.com/](https://luxe-hair-studio.onrender.com/)
- **GitHub Repository**: [Week 6 Project](https://github.com/your-username/internship/tree/main/week6)

---

**Week 6 is 100% Complete!** 🎉

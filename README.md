# 🍔 FOOD-DEL

A full-stack food delivery web application built using the MERN stack. Users can browse food items, manage carts, place orders, make secure online payments, and track their orders. The platform also provides an admin dashboard for managing food listings and customer orders.

The application is designed with security, scalability, and user experience in mind, featuring JWT authentication, secure payment processing, protected API routes, and efficient order management.

---

## 🚀 Features

### User Features
- User Registration & Login
- JWT-based Authentication
- Browse Food Menu
- Search and Filter Food Items
- Add/Remove Items from Cart
- Place Orders
- Online Payments using Stripe
- Order Tracking
- Responsive Design for Mobile & Desktop
- User-Specific Order History

### Admin Features
- Add New Food Items
- Update Food Details
- Delete Food Items
- View and Manage Orders
- Update Order Status
- Manage Food Listings

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- Context API
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js
- Stripe Payment Gateway

### Admin Panel
- React.js
- Vite
- Axios

---

## 🏗️ System Architecture

```text
Frontend (React.js)
        │
        ▼
REST API (Express.js)
        │
        ▼
MongoDB Database
        │
        ▼
Stripe Payment Gateway
```

The application follows a client-server architecture where the React frontend communicates with the Express backend through REST APIs. MongoDB is used for data persistence, while Stripe handles secure payment processing.

---

## 🔒 Security & User Handling

### Authentication & Authorization
- JWT-based User Authentication
- Protected Routes for Authorized Users
- Role-Based Access Control (User/Admin)
- Secure Password Hashing using bcrypt.js
- Token Verification Middleware

### User Management
- User Registration & Login Validation
- Session Persistence using JWT Tokens
- Personalized Cart Management
- User-Specific Order History
- Secure Profile Data Management
- Authentication Checks on Protected Pages

### Data Validation
- Server-Side Input Validation
- Prevention of Invalid Order Requests
- Input Sanitization
- Error Handling for Unauthorized Access

### Payment Security
- Secure Stripe Checkout Integration
- Payment Verification Before Order Confirmation
- No Sensitive Card Information Stored on Servers

### API Security
- Environment Variables for Sensitive Credentials
- Protected Admin APIs
- Centralized Error Handling
- Secure Request Validation

---

## ⚡ Scalability & Performance

- Stateless JWT Authentication for Horizontal Scaling
- Optimized MongoDB Queries with Mongoose
- RESTful API Architecture
- Efficient Cart and Order Management
- Modular Project Structure
- Supports Multiple Concurrent Users
- Easily Deployable on Cloud Platforms

---

## 📂 Project Structure

```text
FOOD-DEL
│
├── frontend/          # Customer Website
│
├── admin/             # Admin Dashboard
│
├── backend/           # REST API Server
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── uploads/
│
└── README.md
```

---

## 💳 Payment Workflow

1. User adds food items to the cart.
2. Order details are sent to the backend.
3. Stripe Checkout Session is created.
4. User completes payment securely through Stripe.
5. Payment is verified.
6. Order status is updated.
7. User can track the order from their dashboard.

---

## 🌐 Deployment

- Frontend: Vercel / Netlify
- Admin Panel: Vercel / Netlify
- Backend: Render / Railway
- Database: MongoDB Atlas
- Payments: Stripe

---
---

⭐ If you like this project, consider giving it a star on GitHub.

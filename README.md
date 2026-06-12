# 🍔 FOOD-DEL

A full-stack food delivery web application built using the MERN stack. Users can browse food items, add items to their cart, place orders, and make online payments. The admin panel allows management of food items and orders.

## 🚀 Features

### User Features
- User Registration & Login
- Browse Food Menu
- Add/Remove Items from Cart
- Place Orders
- Online Payment Integration (Stripe)
- Order Tracking

### Admin Features
- Add New Food Items
- Update Food Details
- Delete Food Items
- View and Manage Orders
- Manage Food Listings

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Stripe Payment Gateway

### Admin Panel
- React.js
- Vite
- Axios

## 📂 Project Structure

```text
FOOD-DEL
│
├── frontend     # Customer Website
├── admin        # Admin Dashboard
├── backend      # REST API Server
└── README.md

## 🔒 Security & User Handling

### Authentication & Authorization
- JWT-based User Authentication
- Protected Routes for Authorized Users Only
- Role-Based Access Control (User/Admin)
- Secure Password Hashing using bcrypt.js
- Token Verification Middleware

### User Handling
- User Registration & Login Validation
- Session Persistence using JWT Tokens
- Personalized Cart Management
- User-Specific Order History
- Secure Profile Data Management
- Automatic Authentication Checks on Protected Pages

### Data Validation
- Server-Side Input Validation
- Prevention of Invalid Order Requests
- Sanitization of User Inputs
- Error Handling for Unauthorized Access

### Payment Security
- Stripe Hosted Checkout for Secure Transactions
- No Sensitive Card Information Stored on Servers
- Payment Verification Before Order Confirmation

### API Security
- Environment Variables for Sensitive Credentials
- Protected Admin APIs
- Centralized Error Handling
- Secure Request Validation

### Scalability & User Load Handling
- Stateless JWT Authentication for Easy Horizontal Scaling
- MongoDB Indexing for Faster Data Retrieval
- Efficient Cart and Order Management System
- RESTful APIs Designed to Handle Concurrent Requests
- Modular Architecture for Future Expansion

### Reliability Features
- Graceful Error Handling
- Order Status Tracking
- Database Consistency During Order Placement
- Secure Payment-to-Order Verification Workflow

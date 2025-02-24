# Habit Tracker

## Overview
Habit Tracker is a simple web application built with Node.js, Express, and MongoDB. It allows users to register, log in, and manage their habits (create, update, delete). The application supports two roles: "user" (can manage only their own habits) and "admin" (can view and manage all habits). The frontend is built with HTML/CSS and Bootstrap, while the backend handles authentication (JWT) and data storage.

### Features
- User registration and login with JWT authentication.
- Habit management (create, read, update, delete).
- Role-based access: "user" sees only their habits, "admin" sees all habits with usernames.
- Responsive UI with Bootstrap.

## How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (local instance or MongoDB Atlas)
- Git (optional, for cloning the repository)

### Installation
1. **Clone the repository** (or download the project files):
   ```bash
   git clone https://github.com/12farit21/web_tech2_final.git
   cd habit-tracker
2. **Create .env**
  MONGO_URI=<your-mongodb-connection-string>
  JWT_SECRET=<your-secret-key>
  PORT=3000
3. **Initialize project**
  npm install
  npm start

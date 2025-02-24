require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const habitRoutes = require('./routes/habitRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

connectDB();

app.use(express.json());

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/habits', habitRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
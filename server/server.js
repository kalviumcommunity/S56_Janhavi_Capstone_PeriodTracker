const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');
const routes = require('./routes');
require('dotenv').config(); 
const app = express();
const cors = require('cors');
app.use(cors())

// MongoDB connection
mongoose.connect(process.env.URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Database connection error:', err)); 

// Middleware
app.use(express.json());

// Routes
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

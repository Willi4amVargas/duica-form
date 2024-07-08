const express = require('express');
const cors = require('cors');
const locationRoutes = require('./routes/locationRoutes');
const authRoutes = require('./routes/authRoutes');
const clientRoutes = require('./routes/clientRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api', locationRoutes);
app.use('/api', authRoutes);
app.use('/api', clientRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;

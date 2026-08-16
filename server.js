const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

// Initialize Database Connection
require('./config/db');

const authRoutes = require('./routes/authRoutes');
const documentRoutes = require('./routes/documentRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const exportRoutes = require('./routes/exportRoutes');
const errorHandler = require('./middleware/errorMiddleware');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/exports', exportRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`ResumeFlow Backend server running on port ${PORT}`);
});
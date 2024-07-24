import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

app.use('/api/task', taskRoutes);
app.use('/api/auth', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

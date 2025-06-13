const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminRoutes = require('./routes/Admin/adminRoutes');
//const studentRoutes = require('./routes/Student/studentRoutes');
//const teacherRoutes = require('./routes/Teacher/teacherRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/admin', adminRoutes);
//app.use('/api/student', studentRoutes);
//app.use('/api/teacher', teacherRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Importações
const express = require('express');
const userRoutes = require('../auth/routes/User/UserRoutes');
const userAuthRoutes = require('../auth/routes/User/UserAuthRoutes');
const userAccountRoutes = require('../auth/routes/User/UserAccountRoutes');
const techRoutes = require('../auth/routes/Technician/TechnicianRoutes');
const techAuthRoutes = require('../auth/routes/Technician/TechnicianAuthRoutes');
const techAccountRoutes = require('../auth/routes/Technician/TechnicianAuthRoutes');
const messageRoutes = require('../chat/routes/MessageRoutes');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Dependências
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// User Routes
app.use('/user/', userRoutes);
app.use('/auth/', userAuthRoutes);
app.use('/account/', userAccountRoutes);

// Technician Routes
app.use('/technician/', techRoutes);
app.use('/technician/auth/', techAuthRoutes);
app.use('/technician/account/', techAccountRoutes);

// Chat Routes
app.use('/chat/', messageRoutes);

module.exports = app;
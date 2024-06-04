// Importações
const express = require('express');
const userRoutes = require('../auth/routes/User/UserRoutes.js');
const userAuthRoutes = require('../auth/routes/User/UserAuthRoutes.js');
const userAccountRoutes = require('../auth/routes/User/UserAccountRoutes.js');
const messageRoutes = require('../chat/routes/MessageRoutes.js');
const postsRoutes = require('../posts/routes/PostsRoutes.js');
const budgetRoutes = require('../budget/routes/budgetRoutes.js');
const { app } = require('../chat/socket/socket.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Dependências
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// User Routes
app.use(userRoutes);
app.use(userAuthRoutes);
app.use(userAccountRoutes);

// Chat Routes
app.use(messageRoutes);

// Posts Routes
app.use(postsRoutes);

// Estimate Routes
app.use(budgetRoutes);

module.exports = app;
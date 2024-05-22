// Importações
const express = require('express');
const userRoutes = require('../auth/routes/User/UserRoutes.js');
const userAuthRoutes = require('../auth/routes/User/UserAuthRoutes.js');
const userAccountRoutes = require('../auth/routes/User/UserAccountRoutes.js');
const messageRoutes = require('../chat/routes/MessageRoutes.js');
const postsRoutes = require('../posts/routes/PostsRoutes.js');
import { app } from '../chat/socket/socket.js';
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

// Chat Routes
app.use('/chat/', messageRoutes);

// Posts Routes
app.use('/posts/', postsRoutes);

module.exports = app;
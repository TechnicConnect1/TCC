// Importações
const express = require('express');
const userRoutes = require('../auth/routes/User/UserRoutes');
const authRoutes = require('../auth/routes/User/UserAuthRoutes');
const accountRoutes = require('../auth/routes/User/UserAccountRoutes');
const app = express();
const cors = require('cors');

// Dependências
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Controllers
app.use(userRoutes);
app.use(authRoutes);
app.use(accountRoutes);

module.exports = app;
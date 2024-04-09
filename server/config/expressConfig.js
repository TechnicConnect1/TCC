// Importações
const express = require('express');
const userRoutes = require('../auth/routes/userRoutes');
const authRoutes = require('../auth/routes/authRoutes');
const accountRoutes = require('../auth/routes/accountRoutes');
const app = express();
const cors = require('cors');
const helmet = require('helmet');

// Dependências
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// Controllers
app.use(userRoutes);
app.use(authRoutes);
app.use(accountRoutes);

module.exports = app;
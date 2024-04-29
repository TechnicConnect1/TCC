// Importações
const express = require('express');
const userRoutes = require('../routes/userRoutes');
const authRoutes = require('../routes/authRoutes');
const accountRoutes = require('../routes/accountRoutes');
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
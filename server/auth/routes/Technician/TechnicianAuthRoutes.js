//Importações
const express = require('express');
const router = express.Router();
const technicianAuth = require('../../controller/TechnicianController/TechAuth');
const OTPController = require('../../controller/TechnicianController/TechOTP');

// Rota de Registro
router.post('/auth/register', technicianAuth.register);

//Rota de Verificação OTP
router.get('/auth/verify/:id', OTPController.emailOTP);

//Rota de Confirmação OTP
router.post('/auth/verify/confirm', OTPController.confirmOTP);

// Rota de Login
router.post('/auth/login', technicianAuth.login);

// Exportação do Router
module.exports = router;
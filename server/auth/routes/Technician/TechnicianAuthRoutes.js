//Importações
const express = require('express');
const router = express.Router();
const upload = require('../../../helpers/upload/uploadImage');
const technicianAuth = require('../../controller/TechnicianController/TechAuth');
const OTPController = require('../../controller/TechnicianController/TechOTP');

// Rota de Registro
router.post('/register/', upload.single('file'),technicianAuth.register);

//Rota de Verificação OTP
router.get('/verify/:id', OTPController.emailOTP);

//Rota de Confirmação OTP
router.post('/verify/confirm', OTPController.confirmOTP);

// Rota de Login
router.post('/login/', technicianAuth.login);

// Exportação do Router
module.exports = router;
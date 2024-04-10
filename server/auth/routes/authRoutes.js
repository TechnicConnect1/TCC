//Importações
const express = require('express');
const router = express.Router();
const upload = require("../../helpers/upload/uploadImage");

const authController = require('../controller/UserController/UserAuthController');
const OTPController = require('../controller/UserController/UserOTP');

// Rota de Registro
router.post('/auth/register', upload.single("file"), authController.register);

//Rota de Verificação OTP
router.get('/auth/verify/:id', OTPController.emailOTP);

//Rota de Confirmação OTP
router.post('/auth/verify/confirm', OTPController.confirmOTP);

// Rota de Login
router.post('/auth/login', authController.login);

// Exportação do Router
module.exports = router;
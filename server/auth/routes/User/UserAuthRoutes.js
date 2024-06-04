//Importações
const express = require('express');
const router = express.Router();
const upload = require('../../../helpers/upload/uploadImage');
const authController = require('../../controller/UserController/UserAuth');
const OTPController = require('../../controller/UserController/UserOTP');

// Rota de Registro
router.post('/register/', upload.single('file'), authController.register);

//Rota de Verificação OTP
router.get('/verify/', OTPController.emailOTP);

//Rota de Confirmação OTP
router.post('/confirm/', OTPController.confirmOTP);

// Rota de Login
router.post('/login/', authController.login);

// Exportação do Router
module.exports = router;
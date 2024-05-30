// Importações
const express = require('express');
const router = express.Router();
const accountController = require('../../controller/UserController/UserAccount');
const ResetPass = require('../../controller/UserController/UserResetPass');
const protectRoute = require('../../../middleware/protectRoute.js');

// Rota de Alteração de Dados
router.patch('/update/:id', protectRoute, accountController.updateData);

// Rota de Exclusão de Usuário
router.delete('/delete/:id', protectRoute, accountController.deleteUser);

// Rota de Verificação para alteração de senha
router.post('/resetPassword/', ResetPass.forgotPassword);

// Rota de Ateração de Senha
router.post('/changePassword/', ResetPass.changePassword);

// Exportação do Router
module.exports = router;
// Importações
const express = require('express');
const router = express.Router();
const accountController = require('../../controller/UserController/UserAccount');
const ResetPass = require('../../controller/UserController/UserResetPass');

// Rota de Alteração de Dados
router.patch('/account/update/:id', accountController.updateData);

// Rota de Exclusão de Usuário
router.delete('/account/delete/:id', accountController.deleteUser);

// Rota de Verificação para alteração de senha
router.post('/account/resetPassword/', ResetPass.forgotPassword);

// Rota de Ateração de Senha
router.post('/account/changePassword/', ResetPass.changePassword);

// Exportação do Router
module.exports = router;
// Importações
const express = require('express');
const router = express.Router();
const technicianAccount = require('../../controller/TechnicianController/TechAccount');
const ResetPass = require('../../controller/TechnicianController/TechResetPass');

// Rota de Alteração de Dados
router.patch('/account/update/:id', technicianAccount.updateData);

// Rota de Exclusão de Usuário
router.delete('/account/delete/:id', technicianAccount.deleteUser);

// Rota de Verificação para alteração de senha
router.post('/account/resetPassword/:id', ResetPass.forgotPassword);

// Rota de Ateração de Senha
router.post('/account/changePassword/:id', ResetPass.changePassword);

// Exportação do Router
module.exports = router;
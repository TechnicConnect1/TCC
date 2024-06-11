// Importações
const express = require('express');
const router = express.Router();
const MessageController = require('../controller/MessageController/MessageController');
const ProtectRoute = require('../../middleware/protectRoute.js');

// Enviar Mensagens No Chat
router.post('/chat/send/:id', ProtectRoute, MessageController.sendMessage);

// Exibir Mensagens No Chat
router.get('/chat/:id', ProtectRoute, MessageController.getMessages);

// Filtrar Usuários 
router.get('/chat/getUsers/', ProtectRoute, MessageController.getUsersFilter);

// Exportação do Router
module.exports = router;
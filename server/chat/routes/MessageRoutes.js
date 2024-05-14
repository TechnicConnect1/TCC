// Importações
const express = require('express');
const router = express.Router();
const MessageController = require('../controller/MessageController/Messa');

// 
router.post('/send/:id', MessageController.sendMessage);

// Exportação do Router
module.exports = router;
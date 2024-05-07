// Importações
const express = require('express');
const router = express.Router();
const TechnicianController = require('../../controller/TechnicianController/TechController');

// Rota Pública
router.get('/', TechnicianController.publicRoute);

// Rota Privada
router.get('/technician/:id', TechnicianController.validPrivateRoute);

// Exportação do Router
module.exports = router;
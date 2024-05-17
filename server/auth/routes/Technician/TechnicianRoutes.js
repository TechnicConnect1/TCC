// Importações
const express = require('express');
const router = express.Router();
const TechnicianController = require('../../controller/TechnicianController/TechController');
const protectTechnician = require('../../../middleware/protectTechnician.js');

// Rota Pública
router.get('/', TechnicianController.publicRoute);

// Rota Privada
router.get('/technician/:id', protectTechnician, TechnicianController.privateRoute);

// Exportação do Router
module.exports = router;
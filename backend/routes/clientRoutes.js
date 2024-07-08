const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.post('/addClient', clientController.addClient);

module.exports = router;

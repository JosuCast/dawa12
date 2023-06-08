//Rutas foto
const express = require('express');
const router = express.Router();
const photoController = require('../controllers/photoController');



router.get('/:id', photoController.verPhoto);
module.exports = router;
//Rutas comida
const express = require('express');
const router = express.Router();
const comidaController = require('../controllers/comidaController')


router.get('/', comidaController.getComidas);   
router.post('/', comidaController.postComidas);
router.put('/:id', comidaController.actualizarComida);
router.get('/:id', comidaController.verComida);
router.delete('/:id', comidaController.eliminarComida);

module.exports = router;
const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/UsuariosController');

router.get('/adm/usuarios', UsuariosController.index);

module.exports = router;
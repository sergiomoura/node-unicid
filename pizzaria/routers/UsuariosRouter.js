const express = require('express');
const router = express.Router();

const UsuariosController = require('../controllers/UsuariosController');
const { Router } = require('express');

router.get('/adm/usuarios', UsuariosController.index);
router.get('/adm/usuarios/create', UsuariosController.create);
router.post('/adm/usuarios', UsuariosController.store);

module.exports = router;
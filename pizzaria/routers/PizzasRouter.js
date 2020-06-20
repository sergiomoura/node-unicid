const express = require('express');
const router = express.Router();

const PizzasController = require("../controllers/PizzasController")

router.get('/', PizzasController.index);

module.exports = router;
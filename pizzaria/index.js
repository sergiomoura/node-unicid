
const pizzas = require("./database/pizzas");

// - - - - - - - - - - - -
const express = require('express');
const app = express();

// Importar roteadores
const PizzasRouter = require("./routers/PizzasRouter");

// Utilizar roteadores
app.use(PizzasRouter);


app.listen(3001);

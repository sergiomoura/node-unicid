
const pizzas = require("./database/pizzas");

// - - - - - - - - - - - -
const path = require('path');
const express = require('express');
const app = express();

// Setup do template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup da pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Importar roteadores
const PizzasRouter = require("./routers/PizzasRouter");

// Utilizar roteadores
app.use(PizzasRouter);


app.listen(3001);

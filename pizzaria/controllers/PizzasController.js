const pizzas = require("../database/pizzas");

const PizzasController = {
    index: (req,res) => {
        res.send(pizzas);
    }
}

module.exports = PizzasController;
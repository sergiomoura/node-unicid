/**
 * Uma função que recebe um objeto Pizza e um percentual
 * de descondo e retorna o objeto alterando o seu valor
 * a partir de um desconto dado
 */

let pizza = {
    nome: "Pepperoni",
    valor: 55.3,
    ingredientes: ["mussarela", "pepperoni", "manjericao"],
    destaque: true
}

const darDescontoEmPizza = (pizza, percentualDesconto) => {

    pizza.valor = pizza.valor - (pizza.valor * percentualDesconto);
    // pizza.valor = pizza.valor * (1 - percentualDesconto);
    return pizza;

}

console.log(pizza);
pizza = darDescontoEmPizza(pizza, 0.10);
console.log(pizza);
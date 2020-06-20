const pizzas = require("../pizzaria/database/pizzas");

// EXEMPLOES DE USO DA array.find();
/**
 * Retornar UM pizza que contenha em seu nome
 * um trecho passado como parâmetro
 */
const buscaPizzaPeloNome = str => pizzas.find(pizza => pizza.nome.includes(str));
// console.log(buscaPizzaPeloNome("e"));
// process.exit();

const buscaPizzaMaisBarataQue = valor => pizzas.find(pizza => pizza.valor < valor);
let p = buscaPizzaMaisBarataQue(30);
// console.log(p);

// EXEMPLO DE USO DA array.filter();
const buscaPizzasMaisBaratasQue = valor => pizzas.filter(pizza => pizza.valor < valor);
let pizzasBaratas = buscaPizzasMaisBaratasQue(45);

/**
 * Escrever uma função buscarPizzasPeloNome(str) que deve
 * retornar um array de pizzas que contenham o no nome o trecho
 * passado como parâmetro
 */
const buscarPizzasPeloNome = (str) => {
    return pizzas.filter(pizza => {
        let nomeMaiusculo = pizza.nome.toUpperCase();
        let trechoMaiusculo = str.toUpperCase();
        return nomeMaiusculo.includes(trechoMaiusculo)
    })
}
//console.log(buscarPizzasPeloNome("q"));

/**
 * Uma função que retorna um array somente com os NOMES das pizzas
 */
const nomesDasPizzas = () => {
    return pizzas.map(pizza => pizza.nome);
}
// console.log(nomesDasPizzas());

console.log(
    pizzas.map(
        (pizza) => {
            pizza.valor = pizza.valor * 1.1;
            return pizza;
        }
    )
)


// Exemplo de uso da reduce (Somando números)
let numeros = [5,10,2,15];
let soma = numeros.reduce(
    (acumulador,atual) => {
        return acumulador + atual;
    }
);
console.log(soma);

// Exemplo de uso da reduce (Juntando strings)
let nomes = ["Alex","Felipe","Leo","Sérgio", "Eloisa", "Jadir"];
let lista = nomes.reduce(
    (acumulador,atual) => {
        return acumulador +", "+ atual;
    }
);
console.log(lista);

// Exemplo de uso da reduce (Somando valores das Pizzas)
let total = pizzas.reduce(
    (acumulador, atual) => {
        return acumulador + atual.valor;
    },0
)
console.log(total);



// Exemplo de uso da forEach
nomes = ["Alex","Felipe","Leo","Sérgio", "Eloisa", "Jadir"];
nomes.forEach(
    (nome) => {
        console.log(`Olá ${nome}`);
    }
)

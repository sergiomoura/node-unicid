const pizzas = require("../pizzaria/database/pizzas");

// EXEMPLOES DE USO DA array.find();
/**
 * Retornar UM pizza que contenha em seu nome
 * um trecho passado como parâmetro
 */
const buscaPizzaPeloNome = (str) =>{
    
    // USANDO FOR
    // for(pizza of pizzas){
    //     if(pizza.nome.includes(str)){
    //         return pizza;
    //     }
    // }

    const acheiPizza = (pizza) => {
        return pizza.nome.includes(str);
    }

    return pizzas.find(acheiPizza);

}

const buscaPizzaMaisBarataQue = valor => pizzas.find(pizza => pizza.valor < valor);
let p = buscaPizzaMaisBarataQue(30);
// console.log(p);

// EXEMPLO DE USO DA array.filter();
const buscaPizzasMaisBaratasQue = valor => pizzas.filter(pizza => pizza.valor < valor);
let pizzasBaratas = buscaPizzasMaisBaratasQue(45);
// console.log(pizzasBaratas);

let x = ["teste1","teste2"].find(s => s == "teste1");
console.log(x);
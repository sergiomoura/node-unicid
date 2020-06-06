const pizzas = [

    {
        nome: "Pepperoni",
        valor: 55.3,
        ingredientes: ["mussarela", "pepperoni", "manjericao"],
        destaque: true
    },
    {
        nome: "Mussarela",
        valor: 25,
        ingredientes: ["mussarela"],
        destaque: false
    },
    {
        nome: "Quatro Queijos",
        valor: 40.3,
        ingredientes: ["mussarela", "gorgonzola", "catupiry", "parmesão"],
        destaque: false
    }

];

// Imprime todas pizzas = = = = = = = = = =
// console.log(pizzas);

// Imprime o nome da segunda pizza
// console.log(pizzas[1].nome);

// Como descobrir os nomes dos atributos de um objeto literal
// console.log(Object.keys(pizzas[0]));

// For: Utilizando o for para imprimir alguns dados de uma pizza
/*
for(let i=0; i<pizzas.length; i++ ){
    console.log(`${i} :  ${pizzas[i].nome}`);
}
*/

// For of:
/*
for (let p of pizzas) {
    console.log(`${p.nome} - ${p.valor}`);
}
*/

// Usando o for-of para exibir somente as pizzas
// que não estão em destaque
/*
for (let p of pizzas) {
    if(!p.destaque){
        console.log(`${p.nome} - ${p.valor}`);
    }
}
*/

// For in:
let fracatu = {
    nome: "Fracatu",
    valor: 33,
    ingredientes: ["mussarela", "frango", "catupiry"],
    destaque: true
}
/*
// console.log(fracatu.valor);
// console.log(fracatu['valor']);
// for (let campo in fracatu) {
//     console.log(`${campo}: ${fracatu[campo]}`);
// }


for (let i in pizzas) {
    console.log(`${i}: ${pizzas[i].nome}`);
}
*/


// SWITCH



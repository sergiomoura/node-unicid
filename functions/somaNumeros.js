/**
 * Função recebe dois números como parâmetro e RETORNA
 * a soma dos dois
 */

/*
// FORMA TRADICIONAL
function somaNumeros(a, b){
    return a + b;
}
*/

// FORMA DE ARROW FUNCTION
const somaNumeros = (a, b) => a + b;

let soma = somaNumeros(98, 2);
console.log(soma);

module.exports = somaNumeros;
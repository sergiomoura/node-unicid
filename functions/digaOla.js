/**
 * Função receba o nome de uma pessoa como parâmetro
 * e imprima na tela uma saudação para essa pessoa.
 */

 /*
// FORMA TRADICIONAL
function digaOla(nomeDaPessoa){
    console.log(`Olá, ${nomeDaPessoa}!`);
}
*/

/*
// FORMA DE ARROW FUNCTION
const digaOla = (nomeDaPessoa) => {
    console.log(`Olá, ${nomeDaPessoa}!`);
}
*/

// FORMA DE ARROW FUNCTION SEM CHAVES "{}"
const digaOla = nomeDaPessoa => console.log(`Olá, ${nomeDaPessoa}!`);

digaOla("Alex");
digaOla("Felipe");
digaOla("Leandro");
digaOla("Sérgio");

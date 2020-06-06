const dobro = x => 2*x;
const quadrado = x => x*x;
const somaUm = x => x + 1;

function opereUmNumero(x, operacao){
    return operacao(x);
}

console.log(opereUmNumero(3,dobro));
console.log(opereUmNumero(3,quadrado));
console.log(opereUmNumero(3,somaUm));
/*
    Um sistema de gestão financeira pessoal é capaz de gerar um
    array com as despesas e receitas de um dado usuário.
    Por exemplo:
*/

const totais = [
    {
        mes: 1,
        receita: 12000,
        despesa: 7500
    },
    {
        mes:2,
        receita: 11000,
        despesa: 8000
    },
    {
        mes: 3,
        receita: 10000,
        despesa: 7700
    },
    {
        mes: 4,
        receita: 13500,
        despesa: 8200
    }
]

/*
a - Escreva uma função totalReceita que receba como parâmetro esse vetor de totais e
    retorne a receita total do período.
    Faça uma versão desta função utilizando um for e outra versão utilizando o array.reduce;
*/

function totalReceita(tot){
    return tot.reduce(
        (acumulado, atual) => {
            return acumulado + atual.receita;
        }
        , 0
    )
}

function totalReceitaFor(tot){
    let soma = 0;
    for (const t of tot) {
        soma = soma + t.receita;
    }
    return soma;
}

console.log("-------------------------");
console.log("TESTE a)");
console.log(totalReceita(totais));
console.log(totalReceitaFor(totais));

/*
b - Escreva uma função maiorReceita que receba como parâmetro esse vetor de totais e retorne
    o valor da maior receita.
    Faça uma versão desta função utilizando um for e outra versão utilizando o array.reduce;
*/

function maiorReceita(tot){
    return tot.reduce(
        (acumulado, atual) => {
            return Math.max(acumulado, atual.receita);
        }
        , 0
    )
}

function maiorReceitaFor(tot){
    let maiorReceitaAteAgora = 0;
    for (const t of tot) {
        maiorReceitaAteAgora = Math.max(maiorReceitaAteAgora, t.receita);
    }
    return maiorReceitaAteAgora;
}

console.log("-------------------------");
console.log("TESTE b)");
console.log(maiorReceita(totais));
console.log(maiorReceitaFor(totais));

/*
c - Escreva uma função receitasMaioresQue(totais, valor) que recebe um array de totais e um valor.
    Essa função deve retornar um outro array contendo somente elementos do primeiro array quue tenham
    receita maior do que o valor passado como parâmetro.
    Faça uma versão desta função utilizando um for e outra versão utilizando o array.filter;
*/

receitasMaioresQue = (tot,valor) => tot.filter(total => total.receita > valor);


function receitasMaioresQueFor(tot, valor){
    resultado = [];
    for(t of tot){
        if(t.receita > valor) {
            resultado.push(t);
        }
    }
    return resultado;
    
}

console.log("-------------------------");
console.log("TESTE c)");
console.log(receitasMaioresQue(totais, 11000));
console.log(receitasMaioresQueFor(totais, 11000));


/*
d - Escreva uma função balancos(totais) que receba um array de totais como parâmetro e retorne
    um outro array com os valores do balanço de cada um dos meses (total.receita - total.despesa).
    Faça uma versão dessa função utilizando um for e outra versão utilizando o array.map
*/

const balancos = tot => tot.map(t => t.receita - t.despesa);

function balancosFor(tot){
    let resultados = [];
    for(t of tot) {
        resultados.push(t.receita - t.despesa);
    }
    return resultados;
}

console.log("-------------------------");
console.log("TESTE d)");
console.log(balancos(totais));
console.log(balancosFor(totais));

/*
e - Escreva uma funcao receitaDoMes(totais, mes) que deve retornar o a receita do mes passado por parâmetro.
    Faça uma versão dessa função que utilize um for e outra versão que utilize o array.find;
*/

const receitaDoMes = (tot, mes) => tot.find(t => t.mes == mes).receita;

function receitaDoMesFor(tot, mes){
    for(t of tot){
        if(t.mes == mes){
            return t.receita;
        }
    }
}

console.log("-------------------------");
console.log("TESTE e)");
console.log(receitaDoMes(totais,3));
console.log(receitaDoMesFor(totais,3));

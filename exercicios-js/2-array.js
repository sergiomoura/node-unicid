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

/*
b - Escreva uma função maiorReceita que receba como parâmetro esse vetor de totais e retorne
    o valor da maior receita.
    Faça uma versão desta função utilizando um for e outra versão utilizando o array.reduce;
*/

/*
c - Escreva uma função receitasMaioresQue(totais, valor) que recebe um array de totais e um valor.
    Essa função deve retornar um outro array contendo somente elementos do primeiro array quue tenham
    receita maior do que o valor passado como parâmetro.
    Faça uma versão desta função utilizando um for e outra versão utilizando o array.filter;
*/

/*
d - Escreva uma função balancos(totais) que receba um array de totais como parâmetro e retorne
    um outro array com os valores do balanço de cada um dos meses (total.receita - total.despesa).
    Faça uma versão dessa função utilizando um for e outra versão utilizando o array.map
*/

/*
e - Escreva uma funcao receitaDoMes(totais, mes) que deve retornar o a receita do mes passado por parâmetro.
    Faça uma versão dessa função que utilize um for e outra versão que utilize o array.find;
*/


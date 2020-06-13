/*
a - Num carro, o sistema de sensores é capaz de dizer quantos litros de combustível
    ele possui no tanque e qual o rendimento que ele está tendo com aquele combustível
    (em quilômetros por litro).
    Escreva uma função autonomia(volumeCombustivel, rendimento) que receba dois parâmtros:
    - O primeiro é o volume de combustível que um carro tem em seu tanque
    - O segundo é o rendimento do carro com o combustível atualmente  no tanque
    A função deve retornar quantos quilômetros o carro ainda pode percorrer com
    o combustível que está no tanque.

    Lembre-se: a autonomia pode ser dada pela multiplicação entre a o volume do combustível
    versus o rendimento (ou seja, volume x rendimento).
*/

function autonomia(volumeCombustivel, rendimento){

    // ...
    // seu código vem aqui
    // ...

}

/*
b - Agora, escreva uma função disparaAlertaAutonomia. Essa função recebe dois parâmetros:
    - O primeiro  é o volume de combustível que um carro tem em seu tanque
    - O segundo é o rendimento do carro com o combustível atualmente  no tanque
    Essa função não retorna nada, mas, quando a autonomia for menor do que 50km
    ele dispara um alera informando a atual autonomia do carro.
    Essa função utilizará da função autonomia implementada no item anterior.
*/

const autonomiaMinima = 50; // em quilômetros

function alertarAutonomia(autonomia){
    console.log(`Atenção! Você tem somente ${autonomia} km de autonomia`);
}

function disparaAlertaAutonomia(volumeCombustivel, rendimento){
    
    // ...
    // seu código vem aqui!
    // ...

}


/*
c - Um programador constatou que o seu carro tem um rendimento de 16km por
    litro de gasolina, enquanto que, com alcool, o rendimento cai para 12km
    por litro de alcool. Ele deseja criar um aplicativo que diga qual com
    qual combustível mais vantajoso para ele com base nessas informações,
    no valor do litro de alcool e no valor do litro da gasolina.

    Escreva uma função alcolOuGasolina(precoDoAlcool, precoDaGasolina) que receba
    como parâmetro o preço do alcool e o preco da gasolina e retorna a string
    "Gasolina" caso este combustível seja mais vantajoso. Caso contrário,
    retorne "Álcool"
*/

const rendimentoGasolina = 16; // em quilômetros por litro
const rendimentoAlcool = 12; // em quilômetros por litro

function alcoolOuGasolina(precoDoAlcool, precoDaGasolina){
    
    // ...
    // seu código vem aqui!
    // ...

}


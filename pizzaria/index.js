const cpf = require("@fnando/cpf/commonjs");

let testeCpf = cpf.isValid("202.339.940-84");
console.log(testeCpf);

let novoCPF = cpf.generate();
console.log(novoCPF);

const pizzas = require("./database/pizzas");

// - - - - - - - - - - - -
const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send(pizzas);
})
app.listen(3000);

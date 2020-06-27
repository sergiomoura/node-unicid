const usuarios = require('../database/usuarios.json');
const fs = require('fs');

module.exports = {
    index:(req, res) => {
        res.render('usuarios/index', {usuarios})
    },
    create: (req, res) => {
        res.render('usuarios/create');
    },
    store: (req, res) => {

        // // Usando declaração normal extensiva:
        // let nome = req.body.nome;
        // let email = req.body.email;
        // let senha = req.body.senha;
        // let confirmacao = req.body.confirmacao;

        // Usando desestruturação;
        let { nome, email, senha, confirmacao } = req.body;

        // Criar um objeto literal com as info do usuário
        let usuario = {
            id: usuarios[usuarios.length - 1].id + 1,
            nome,
            email,
            senha
        }

        // Adicionar o usuário criado ao meu array de usuarios
        usuarios.push(usuario);

        // Salvar o array no arquivo usuarios.json
        fs.writeFileSync(__dirname + '/../database/usuarios.json', JSON.stringify(usuarios));

        // Redirecionar o visitante para a lista de usuários
        res.redirect('/adm/usuarios');

    }
}
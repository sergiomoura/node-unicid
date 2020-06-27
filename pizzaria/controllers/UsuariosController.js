const usuarios = require('../database/usuarios.json');

module.exports = {
    index:(req, res) => {
        res.render('usuarios/index', {usuarios})
    }
}
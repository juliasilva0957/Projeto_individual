let express = require("express");
let router = express.Router();

let usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar",function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/login", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.put("/atualizar/:idUsuario", function (req, res) {
    usuarioController.atualizar(req, res);
});

module.exports = router;
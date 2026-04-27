var express = require("express");
var router = express.Router();

var diarioController = require("../controllers/diarioController");

router.get("/listar/:idUsuario", function (req, res) {
    diarioController.pegarNome(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("entrei")
    diarioController.publicar(req, res);
});


module.exports = router;
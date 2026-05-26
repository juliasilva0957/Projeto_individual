let express = require("express");
let router = express.Router();

let diarioController = require("../controllers/diarioController");

router.get("/listar/:idUsuario", function (req, res) {
    diarioController.pegarNome(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    console.log("entrei")
    diarioController.publicar(req, res);
});


module.exports = router;
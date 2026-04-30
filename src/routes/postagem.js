var express = require("express");
var router = express.Router();

var postagemController = require("../controllers/postagemController");

router.get("/:idPost", function (req, res) {
    postagemController.buscarPostagem(req, res);
});

router.get("/:idPost/comentarios", function (req, res) {
    postagemController.buscarComentarios(req, res);
});

module.exports = router;
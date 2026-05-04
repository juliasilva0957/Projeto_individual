var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/kpis/:idUsuario", function (req, res) {
    dashboardController.buscarKpis(req, res);
});

router.get("/atividade/:idUsuario", function (req, res) {
    dashboardController.buscarAtividade(req, res);
});

router.get("/raca/:idUsuario", function (req, res) {
    dashboardController.buscarRaca(req, res);
});

router.get("/emocoes/:idUsuario", function (req, res) {
    dashboardController.buscarEmocoes(req, res);
});

module.exports = router;
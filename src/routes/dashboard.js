let express = require("express");
let router = express.Router();

let dashboardController = require("../controllers/dashboardController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.get("/kpis/:idUsuario", function (req, res) {
    dashboardController.buscarKpi(req, res);
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

router.post("/filtrar/:idUsuario", function(req,res){
    dashboardController.filtrarDashboard(req,res);
});

module.exports = router;
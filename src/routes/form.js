var express = require("express");
var router = express.Router();

var formController = require("../controllers/formController");

router.post("/cadastrar", function (req, res) {
    formController.cadastrarInformacoes(req, res);
});

module.exports = router;
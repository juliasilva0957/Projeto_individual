let express = require("express");
let router = express.Router();

let formController = require("../controllers/formController");

router.post("/cadastrar", function (req, res) {
    formController.cadastrarInformacoes(req, res);
});

module.exports = router;